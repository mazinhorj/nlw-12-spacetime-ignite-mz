import { NextRequest, NextResponse } from 'next/server' //

const singInUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value

  if (!token) {
    // console.log('Taporra')
    return NextResponse.redirect(singInUrl, {
      headers: {
        'Set-Cookie': `redirectTo=${req.url}; Path=/; HttpOnly; max-age=30`,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/memories/:path*',
}
