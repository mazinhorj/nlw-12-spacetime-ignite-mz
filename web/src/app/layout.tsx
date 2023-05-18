// importação de fontes do google fonts diretamente no next
import {
  Bai_Jamjuree as BaiJamJu,
  Roboto_Flex as RobotoF,
} from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

// configurando as variáveis de fontes do projeto
const robotoF = RobotoF({ subsets: ['latin'], variable: '--font-robotof' })
const baiJamJu = BaiJamJu({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-baijamju',
})

// metadados SEO
export const metadata = {
  title: 'Spacetime',
  description:
    'Cápsula do tempo de suas recordações com Ract, Next.js, TailwindCss e TypeScript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // alterei a lingua padrão da aplicação web
    <html lang="pt-br">
      {/* tailwind configurado, segue o baile... */}
      <body
        className={`font-sans ${robotoF.variable} ${baiJamJu.variable} bg-gray-900 bg-[url(../assets/bg-stars.svg)] bg-cover text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
