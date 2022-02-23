import SendMessage from './SendMessage'
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis'
import { useRef } from 'react'
import Message from './Message'

const MINS_DURATION = 60

function Messages() {
  const { user } = useMoralis()
  const endOfMessagesRef = useRef(null)
  const { data, loading, error } = useMoralisQuery(
    'Messages',
    (query) =>
      query
        .ascending('createdAt')
        .greaterThan(
          'createdAt',
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true,
    }
  )

  return (
    <div className="mr-0 pb-56 xl:mr-[360px]">
      {/* <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
      </div> */}
      <div className="mx-auto max-w-[900px] space-y-9 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div
        ref={endOfMessagesRef}
        className="mt-5 text-center text-sm text-gray-300"
      >
        <p>You're up to date {user.getUsername()} | 👹</p>
      </div>
    </div>
  )
}

export default Messages
