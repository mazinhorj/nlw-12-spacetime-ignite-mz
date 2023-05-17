// importação de fontes do google fonts diretamente no next
import { Bai_Jamjuree as BaiJam, Roboto_Flex as Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

// configurando as variáveis de fontes do projeto
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJam = BaiJam({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-baijam',
})

// metadados SEO
export const metadata = {
  title: 'Spacetime',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // alterei a lingua padrão da aplicação web
    <html lang="pt-br">
      {/* tailwind configurado, segue o baile... */}
      <body className={`font-sans ${roboto.variable} ${baiJam.variable}`}>
        {children}
      </body>
    </html>
  )
}
