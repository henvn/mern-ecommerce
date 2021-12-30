import React, { useState } from "react"
import { Alert } from "react-bootstrap"


const Message = ({ variant, children }, getState) => {
  const [show, setShow] = useState(true)

  return (
    <>
      {show && (variant==='danger' ? <Alert variant={variant} onClose={() => setShow(false)} dismissible>{children}</Alert> : <Alert variant={variant}>{children}</Alert>)}
    </>
  )
  
}

Message.defaultProps = {
  variant: "info",
}

export default Message
