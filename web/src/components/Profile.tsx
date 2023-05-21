import { getUser } from '@/app/lib/auth'
import Image from 'next/image'

const Profile = () => {
  const { name, avatarUrl } = getUser()
  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt={`Perfil do usuário ${name}`}
        className="h-10 w-10 rounded-full"
      />

      <p className="max-w-[140px] text-sm leading-snug">
        Olá, <span className="font-bold">{name}</span>!
        <a href="" className="block text-red-400 hover:text-red-300">
          Me tire daqui!
        </a>
      </p>
    </div>
  )
}

export default Profile
