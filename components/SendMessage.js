import { useState } from 'react'
import { useMoralis } from 'react-moralis'

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis()
  const [message, setMessage] = useState('')

  const sendMessage = (e) => {
    e.preventDefault()

    if (!message) return

    const Messages = Moralis.Object.extend('Messages')
    const messages = new Messages()

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get('ethAddress'),
      })
      .then(
        (message) => {
          //   sucses
        },
        (err) => {
          console.log('eror')
        }
      )
    endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' })

    setMessage('')
  }

  return (
    <form className="fixed bottom-10 z-50 flex w-11/12 max-w-2xl rounded-full border-4 border-gray-300 bg-[#001219] px-6 py-4 opacity-80 shadow-xl">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-grow bg-transparent pr-5 text-white placeholder-gray-500 outline-none"
        type="text"
        placeholder={`Enter a Message ${user.getUsername()}...`}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-semibold text-gray-50"
      >
        Send
      </button>
    </form>
  )
}

export default SendMessage
