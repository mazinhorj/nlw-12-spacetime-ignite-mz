import { cookies } from 'next/headers'
import Link from 'next/link'

const NoMemories = () => {
  const isAuth = cookies().has('token')
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="w-[340px] text-center leading-relaxed">
        Você ainda não lembranças registradas. Comece a{' '}
        {isAuth ? (
          <Link href="/memories/new" className="underline hover:text-gray-50">
            criar agora
          </Link>
        ) : (
          <a href="/memories/new" className="underline hover:text-gray-50">
            criar agora
          </a>
        )}
        !
      </p>
    </div>
  )
}

export default NoMemories
