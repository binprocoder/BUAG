import React, { useState } from 'react'
import Button from '././features/components/Button'
import Chat from '././features/components/Chat'

const App = () => {
  const [show, setShow] = useState(false)

  const showBtn = () => {
    setShow(!show)
  }

  return (
    <>
      <Button show={show} showBtn={showBtn} />
      {show && <Chat />}
    </>
  )
}

export default App
