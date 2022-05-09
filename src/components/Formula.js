import React from 'react'
import {Form,Button} from 'react-bootstrap';
import "./formula.css"



function Formula() {
  return (
   <div className="container">
  <Form className="fom">
    <h1>Formulaire</h1>
    <Form.Label className="labeel">Name</Form.Label>
      <Form.Control className="lbb" type="text" placeholder="Enter your name" />
      <Form.Label className="labeel">Email</Form.Label>
      <Form.Control className="lbb" type="email" placeholder="Enter email" />
      <Form.Label className="labeel">Password</Form.Label>
      <Form.Control className="lbb" type="password" placeholder="Password" />
    <Form.Label className="labeel">Address</Form.Label>
    <Form.Control className="lbb" placeholder=" ......." />

      <Form.Label className="Gen">Gender</Form.Label>
      <Form.Select className="sel">
        <option>Female</option>
        <option>Male</option>
      </Form.Select>
      <button type="button" className="btn btn-outline-primary">Submit</button>
     <button type="button" className="btn btn-outline-danger">Annuler</button>
</Form>
</div>
  )
}

export default Formula