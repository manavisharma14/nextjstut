import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const themeCookie = request.cookies.get("theme");

  if (!themeCookie) {
    response.cookies.set("theme", "dark");
    console.log("Theme cookie set to dark");
  }

  response.headers.set("custom-header", "This is a custom header");

  return response;
}

export const config = {
  matcher: ["/profile"],
};
