import type { Timestamp } from 'firebase/firestore'

export default interface post {
  id: string
  username: string
  body: string
  date: Timestamp
}
