import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername'

function Header() {
  const { user } = useMoralis()

  return (
    <div className="fixed z-50 h-20 w-full border-b-2 border-gray-100 bg-[#172a3a] p-5 text-white shadow-sm xl:absolute xl:right-0 xl:inline-block xl:h-full xl:w-[300px] xl:overflow-hidden xl:border-b-0 xl:border-l-2">
      {/* <h1 className="text-3xl">Welcome To Metaverse</h1> */}
      <div className="">
        {/* <div className="relative mx-auto hidden h-24 w-24 lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            className=""
            src="https://i.postimg.cc/d36yfGTf/pic3.jpg"
          />
        </div> */}

        <div className="flex xl:absolute xl:right-10 xl:top-14 xl:mx-auto xl:inline-block">
          <div className="absolute h-20 w-20 rounded-xl lg:mx-auto xl:relative xl:h-48 xl:w-48">
            <Avatar logoutOnPress />
          </div>
          <div className="text-center">
            <h2 className="truncate pl-[100px] pt-5 text-xl font-semibold xl:pl-0 xl:pb-2 xl:pt-5 xl:text-5xl">
              {user.getUsername()}
            </h2>
          </div>
        </div>
      </div>
      <ChangeUsername />
    </div>
  )
}

export default Header
