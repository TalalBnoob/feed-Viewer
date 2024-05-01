import ActionBtn from './ui/ActionBtn'

function Header() {
  return (
    <header className="container mx-auto mt-5 flex">
      <h1 className="text-4xl">Feeder</h1>
      <div className="mr-auto"></div>
      <ActionBtn text="Create" />
    </header>
  )
}

export default Header
