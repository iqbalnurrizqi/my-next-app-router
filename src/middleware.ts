import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import withAuth from './middleware/withAuth'
 
// This function can be marked `async` if using `await` inside
export function mainMiddleware(request: NextRequest) {
  const res = NextResponse.next()
  return res
}
 
// See "Matching Paths" below to learn more
export default withAuth(mainMiddleware, ['/dasboard', '/profile', '/login', '/register'])

