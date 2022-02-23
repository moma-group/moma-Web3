import Image from 'next/image'
import Link from 'next/link'
import { useMoralis } from 'react-moralis'

function Login() {
  const { authenticate } = useMoralis()

  return (
    <div className="relative bg-black text-white">
      <div className="absolute z-50 flex h-4/6 w-full flex-col items-center justify-center space-y-7">
        <Image
          className="rounded-2xl object-cover"
          src="https://i.postimg.cc/QC0qJc8j/MOMA-1.gif"
          height={200}
          width={200}
        />
        <button
          onClick={authenticate}
          className="animate-pulse bg-purple-100 px-4 font-semibold text-black"
        >
          Login
        </button>
      </div>
      <div className="h-screen w-full">
        <Image
          src="https://i.postimg.cc/GmzqP8K7/duotone-2.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute right-7">
        <p className="text-black">
          make sure | <Link href="https://metamask.io/">MetaMask.</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
