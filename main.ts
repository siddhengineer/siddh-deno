import { serve } from "https://deno.land/std@0.74.0/http/server.ts";

const server = serve({ port: 8000 });
console.log("Server is running at http://localhost:8000/");

for await (const req of server) {
req.respond({ body: "Hello, Deno!" });
}