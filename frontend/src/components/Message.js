import React, {useState} from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ timeout, variant, children}) => {
    const [show, setShow] = useState(true)
    if(timeout) {
        setTimeout(() => {
          setShow(false)
        }, timeout)
    }
    return (
      <>
       {show ? <Alert variant={variant}>{children}</Alert> : null}
      </>
    )
}

Message.defaultProps = {
    variant: 'info'
}

export default Message
