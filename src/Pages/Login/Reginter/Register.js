import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
  const [error,setError] = useState('')
  const {createUser,updateUserProfile, verifyEmail} = useContext(AuthContext)
  const [accepted , setAccepted] = useState(false)
  
  const hanleSubmit = (event) => {
    event.preventDefault()
    const form = event.target;

    const name = form.name.value;
    const photoUrl = form.photoUrl.value
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name,photoUrl,email,password);
    createUser(email,password)
    .then(result => {
      const user = result.user;
      form.reset()
      setError('')
      handleUpdateUserProfile(name,photoUrl)
      handleEmailVerification()
      toast.success('Please verify your email address before login')
      console.log(user);
    })
    .catch(error => {
      setError(error.message)
      console.log(error);
    })
  }
  const handleAccepted = event => {
    setAccepted(event.target.checked)
  }

  const handleUpdateUserProfile = (name,photoUrl) => {
    const profile = {
      displayName : name ,
      photoURL : photoUrl
    }
    updateUserProfile(profile)
    .then(() => {
      setError('')
    })
    .catch(error => {
      setError(error.message)
    })
  }
  const handleEmailVerification = () => {
    verifyEmail()
    .then(() => {
      setError('')
    })
    .catch(error => {
      setError(error.message)
    })
  }
  
  return (
    <Form onSubmit={ hanleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Your Name</Form.Label>
      <Form.Control type="text" name='name' placeholder="Enter Name" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Photo Url</Form.Label>
      <Form.Control name='photoUrl' type="text" placeholder="Photo Url" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control name='email' type="email" placeholder="Enter email" required />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control name='password' type="password" placeholder="Password" required />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        onClick={handleAccepted}
        type="checkbox" 
        label={<>Accept <Link to='/terms'>Terms and Condition</Link></>} />
      </Form.Group>
   
    <Button variant="primary" type="submit" disabled={!accepted}>
        Register
    </Button>
    <Form.Text className="text-danger">
      {error}
    </Form.Text>
  </Form>
  );
};

export default Register;