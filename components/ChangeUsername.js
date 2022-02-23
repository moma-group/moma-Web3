import { useMoralis } from 'react-moralis'

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user, logout } = useMoralis()

  const setUsername = () => {
    const username = prompt(`Masukkan Nama Baru`)

    if (!username) return

    setUserData({
      username,
    })
  }

  return (
    <div className="relative -top-5 text-right text-sm xl:absolute xl:top-[90vh] xl:right-5">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="hover:text-gray-400"
      >
        ChangeUsername
      </button>
      <br className="hidden xl:inline-block" />
      <button className="ml-2 hover:text-gray-400" onClick={() => logout()}>
        Logout
      </button>
    </div>
  )
}

export default ChangeUsername
