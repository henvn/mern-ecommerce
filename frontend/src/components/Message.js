import React, { useState } from "react"
import { Alert } from "react-bootstrap"


const Message = ({ variant, children, status }, getState) => {
  const [show, setShow] = useState(true)

  return (
    <>
      {show && ((variant==='danger') && (status==='false') ? <Alert variant={variant} onClose={() => setShow(false)} dismissible>{children}</Alert> :<Alert variant={variant}>{children}</Alert>) }
    </>
  )
  
}

Message.defaultProps = {
  variant: "info",
  status: true
}

export default Message
