import { cookies } from 'next/headers'

import Copyright from '@/components/Copyright'
import Hero from '@/components/Hero'
import NoMemories from '@/components/NoMemories'
import SingIn from '@/components/SingIn'
import Profile from '@/components/Profile'

export default function Home() {
  const isAuth = cookies().has('token')

  return (
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
      <div className="flex flex-col p-16">
        <NoMemories />
      </div>
    </main>
  )
}
