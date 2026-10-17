import { Readable } from "stream";

async function streamToBuffer(stream) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  return Buffer.concat(chunks);
}

export default async (req, res) => {
  try {
    const host = req.headers.host || "localhost";
    const url = new URL(req.url, `https://${host}`);

    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers || {})) {
      if (v == null) continue;
      if (Array.isArray(v)) headers.set(k, v.join(","));
      else headers.set(k, String(v));
    }

    const method = req.method || "GET";
    let body = undefined;
    if (method !== "GET" && method !== "HEAD") {
      body = await streamToBuffer(req);
    }

    const request = new globalThis.Request(url.toString(), {
      method,
      headers,
      body: body && body.length ? body : undefined,
    });

    // Dynamically import the built ESM server module
    const serverModule = await import("../dist/server/server.js");
    const server = serverModule && (serverModule.default ?? serverModule);

    if (!server || typeof server.fetch !== "function") {
      throw new Error("Built server does not export a fetch handler");
    }

    const response = await server.fetch(request, {}, {});

    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));

    const ab = await response.arrayBuffer();
    const buffer = Buffer.from(ab);
    res.end(buffer);
  } catch (err) {
    console.error("API wrapper error:", err);
    res.statusCode = 500;
    res.end("Server error: " + err.message);
  }
};
