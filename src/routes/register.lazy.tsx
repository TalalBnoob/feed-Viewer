import { createLazyFileRoute } from '@tanstack/react-router'
import RegisterPage from '../pages/RegisterPage.tsx'

export const Route = createLazyFileRoute('/register')({
  component: () => <RegisterPage />,
})
