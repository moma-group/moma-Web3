import { useMoralis } from 'react-moralis'
import TimeAgo from 'timeago-react'
import Avatar from './Avatar'

function Message({ message }) {
  const { user } = useMoralis()

  const isUserMessage = message.get('ethAddress') === user.get('ethAddress')

  return (
    <div
      className={`relative flex items-end space-x-2 ${
        isUserMessage && 'justify-end'
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserMessage && 'order-last ml-2'}`}>
        <Avatar username={message.get('username')} />
      </div>
      <div
        className={`flex space-x-4 rounded-lg p-3 ${
          isUserMessage
            ? 'rounded-br-none bg-[#74b3ce]'
            : 'rounded-bl-none bg-[#508991]'
        }`}
      >
        <h1>{message.get('message')}</h1>
      </div>
      <TimeAgo
        className={`text-[10px] italic text-gray-100 ${
          isUserMessage && 'order-first pr-1'
        }`}
        datetime={message.createdAt}
      />
      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? 'text-slate-300' : 'text-slate-400'
        }`}
      >
        {message.get('username')}
      </p>
    </div>
  )
}

export default Message
