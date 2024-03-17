import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Use conditional statements instead of matcher property
// https://github.com/vercel/next.js/issues/53988#issuecomment-1727350657
export function middleware(request: NextRequest) {
  // Check if the request URL starts with /api
  if (request.nextUrl.pathname.startsWith("/api")) {
    return NextResponse.rewrite(
      new URL(
        request.nextUrl.pathname.replace("/api", "") + request.nextUrl.search,
        process.env.API_URL,
      ),
    );
  }

  return NextResponse.next();
}
