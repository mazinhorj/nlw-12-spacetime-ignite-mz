import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const code = searchParams.get('code')

  const redirectTo = req.cookies.get('redirectTo')?.value

  const registerResponse = await api.post('/register', {
    code,
  })

  const { token } = registerResponse.data

  const redirectURL = redirectTo ?? new URL('/memories/new', req.url)
  const maxExpirationCookie = 60 * 60 * 24 * 30
  console.log(`Enfia esse token no cu: ${token} ${Date.now()}`)
  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${maxExpirationCookie}`,
    },
  })
}
