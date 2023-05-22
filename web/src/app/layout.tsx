// importação de fontes do google fonts diretamente no next
import {
  Bai_Jamjuree as BaiJamJu,
  Roboto_Flex as RobotoF,
} from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

import { cookies } from 'next/headers'

// import de components
import { Copyright } from '@/components/Copyright'
import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SingIn } from '@/components/SingIn'

// configurando as variáveis de fontes do projeto
const roboto = RobotoF({ subsets: ['latin'], variable: '--font-roboto' })
const baiJam = BaiJamJu({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-baijam',
})

// metadados SEO
export const metadata = {
  title: 'Spacetime',
  description:
    'Cápsula do tempo de suas recordações com Ract, Next.js, TailwindCss e TypeScript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuth = cookies().has('token')

  return (
    // alterei a lingua padrão da aplicação web
    <html lang="pt-br">
      {/* tailwind configurado, segue o baile... */}
      <body
        className={`font-sans ${roboto.variable} ${baiJam.variable} bg-gray-900 bg-[url(../assets/bg-stars.svg)] bg-cover text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2">
          {/* left */}
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16">
            {/* blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-slate-600 opacity-50 blur-full" />

            {/* stripes "régua" */}
            <div className="absolute bottom-0 right-1 top-0 w-2  bg-stripes" />

            {isAuth ? <Profile /> : <SingIn />}

            <Hero />

            <Copyright />
          </div>

          {/* right */}
          <div className="flex flex-col p-16">{children}</div>
        </main>
      </body>
    </html>
  )
}
