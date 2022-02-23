import Head from 'next/head'
import Login from '../components/Login'
import Header from '../components/Header'
import Messages from '../components/Messages'
import { useMoralis } from 'react-moralis'

export default function Home() {
  const { isAuthenticated, logout } = useMoralis()

  if (!isAuthenticated) {
    return (
      <div className="h-screen bg-gradient-to-r from-[#030003] to-[#030003ec] ">
        <Head>
          <title>Login</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Login />
        </body>
      </div>
    )
  }

  return (
    <div className="h-screen overflow-hidden overflow-y-scroll bg-gradient-to-t from-[#004346] to-[#508991]">
      <Head>
        <title>Moma Grup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto max-w-screen-2xl flex-grow">
        <Header />
        <Messages />
      </div>
    </div>
  )
}
