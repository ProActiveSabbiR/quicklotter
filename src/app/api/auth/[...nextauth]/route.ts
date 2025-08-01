// import NextAuth from 'next-auth'
// import { options } from './options'

// const handler = NextAuth(options)

// export { handler as GET, handler as POST }

// export const runtime = 'edge'

// Temporary placeholder to bypass NextAuth Edge Runtime issues
export async function GET() {
  return new Response('Auth API - Temporarily disabled for Edge Runtime compatibility', { status: 200 })
}

export async function POST() {
  return new Response('Auth API - Temporarily disabled for Edge Runtime compatibility', { status: 200 })
}

export const runtime = 'edge'
