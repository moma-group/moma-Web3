import Image from 'next/image'
import Link from 'next/link'
import { useMoralis } from 'react-moralis'

function Avatar({ username, logoutOnPress }) {
  const { user, logout } = useMoralis()

  return (
    <Link
      href={`https://avatars.dicebear.com/api/croodles-neutral/${
        username || user.get('username')
      }.svg`}
    >
      <Image
        className="cursor-pointer rounded-xl bg-white hover:opacity-75"
        src={`https://avatars.dicebear.com/api/croodles-neutral/${
          username || user.get('username')
        }.svg`}
        layout="fill"
      />
    </Link>
  )
}

export default Avatar
