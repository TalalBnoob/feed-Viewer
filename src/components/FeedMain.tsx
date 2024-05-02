import post from '../types/posts'
import { getPosts, db } from '../util/firebase'
import Post from './Post'
import { useQuery } from '@tanstack/react-query'

function FeedMain() {
  const { data } = useQuery<post[]>({
    queryKey: ['posts', db],
    queryFn: getPosts,
  })

  return (
    <main className="mt-10 w-full">
      {data?.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          body={post.body}
          date={post.date}
        />
      ))}
    </main>
  )
}

export default FeedMain
