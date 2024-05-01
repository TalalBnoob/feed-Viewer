type ActionBtnProps = {
  text: string
}

function ActionBtn({ text }: ActionBtnProps) {
  return (
    <button className="rounded bg-green-700 p-2 px-3 font-medium hover:cursor-pointer active:bg-green-900">
      {text}
    </button>
  )
}

export default ActionBtn
