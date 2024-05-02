import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../util/firebase'

function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function register() {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      console.log(user.user.displayName)
    } catch (err) {
      console.log(err.massage)
    }
  }

  return (
    <section className=" flex h-fit flex-col items-center justify-center bg-neutral-800 text-center">
      <h3 className="mt-8 text-4xl">Register</h3>
      <div className="flex flex-col justify-center p-10">
        <label
          htmlFor="email"
          className="mb-10 flex w-full flex-col items-start text-lg"
        >
          Email
          <input
            className="mt-1 h-10 w-[20rem] rounded bg-neutral-600 p-2 focus:outline-none"
            type="email"
            name="email"
            placeholder="email..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password" className="flex flex-col items-start text-lg">
          password
          <input
            className="mt-1 h-10 w-[20rem] rounded bg-neutral-600 p-2 focus:outline-none"
            type="password"
            name="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <div className="mt-5">
          <button
            onClick={register}
            className="rounded bg-green-700 p-2 px-3 font-medium hover:cursor-pointer active:bg-green-900"
          >
            Register
          </button>
        </div>
      </div>
    </section>
  )
}

export default RegisterPage
