import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  if (request.nextUrl.pathname == '/') {
    // No redirect; let Next.js serve the root page
  }
  return response
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
}

export { default } from 'next-auth/middleware'
