import React, { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import FormContainer from "../components/FormContainer"
import { saveShippingAddress } from "../actions/cartActions"

const ShippingScreen = () => {
  const cart = useSelector(state => state.cart)
  const {shippingAddress} = cart

  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("submitted")
    dispatch(saveShippingAddress({address,city,postalCode,country}))
    navigate("/payment")
  }

  return (
    <FormContainer>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label className="mt-2">City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="postalCode">
          <Form.Label className="mt-2">Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter postal code"
            required
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label className="mt-2">Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>

          <Button className="mt-3" type="submit" variant="primary">
            Continue
          </Button>
        </Form.Group>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
