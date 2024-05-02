import { Timestamp } from 'firebase/firestore'
import { getDurationFromNow } from '../util/postsDate'

interface PostTypes {
  username: string
  body: string
  date: Timestamp
}

function Post({ username, body, date }: PostTypes) {
  return (
    <div className="my-3 bg-neutral-800 px-4 py-2">
      <div className="mb-1 flex items-center">
        <h1 className="text-lg">{username}</h1>
        <h5 className="ml-2 text-base text-slate-500">
          {getDurationFromNow(date.toDate())}
        </h5>
      </div>
      <p className="text-lg">{body}</p>
    </div>
  )
}

export default Post
