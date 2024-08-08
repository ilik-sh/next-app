import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { url, cookies } = request;
}

export const config = {
  matcher: ["/equipment/:path", "/auth/:path"],
};
