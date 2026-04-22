import type { Context } from "@netlify/edge-functions";

export default async function handler(request: Request, context: Context) {
  const accept = request.headers.get("accept") || "";

  if (!accept.includes("text/markdown")) {
    const response = await context.next();
    response.headers.set("Vary", "Accept");
    return response;
  }

  const url = new URL("/content.md", request.url);
  const mdResponse = await fetch(url.toString());

  if (!mdResponse.ok) {
    return context.next();
  }

  const markdown = await mdResponse.text();
  const tokenEstimate = Math.ceil(markdown.split(/\s+/).length * 1.3);

  return new Response(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Vary": "Accept",
      "x-markdown-tokens": String(tokenEstimate),
    },
  });
}

export const config = {
  path: "/",
};
