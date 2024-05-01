import { initializeApp } from 'firebase/app'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import posts from '../types/posts'

const firebaseConfig = {
  apiKey: 'AIzaSyAJ8hGRPPiylftlztVhCYvJZ0x9wbYHJqs',
  authDomain: 'feed-app-4d68a.firebaseapp.com',
  projectId: 'feed-app-4d68a',
  storageBucket: 'feed-app-4d68a.appspot.com',
  messagingSenderId: '937627292286',
  appId: '1:937627292286:web:022109205c845092e87e2f',
}

const firebase_app = initializeApp(firebaseConfig)
export const db = getFirestore(firebase_app)

export async function getPosts({ queryKey }): Promise<posts[]> {
  const postsCol = collection(db, 'posts')
  const postSnapshot = await getDocs(postsCol)
  const postList = postSnapshot.docs.map((doc) => {
    const data = doc.data()
    data['id'] = doc.id
    return data
  })
  return postList
}
