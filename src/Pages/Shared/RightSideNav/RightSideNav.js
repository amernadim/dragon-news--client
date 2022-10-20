import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaWhatsapp,FaTwitch } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarosel from "../BrandCarosel/BrandCarosel";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const RightSideNav = () => {
  const {googleSingIn} = useContext(AuthContext)
  const handleGoogleSingIn = () => {
    googleSingIn()
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
      console.log(error);
    })
  }
  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSingIn} className="mb-2" variant="outline-primary">
          <FaGoogle /> Login With Google
        </Button>{" "}
        <Button variant="outline-secondary">
          <FaGithub /> Login With Github
        </Button>{" "}
      </ButtonGroup>

      <div className="mt-3">
        <h5 className="my-2">Find Us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-3"><FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item className="mb-3"><FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item className="mb-3"><FaWhatsapp/> WhatsApp</ListGroup.Item>
          <ListGroup.Item className="mb-3"><FaTwitch/> Twitch</ListGroup.Item>
          <ListGroup.Item className="mb-3">Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarosel/>
      </div>
    </div>
  );
};

export default RightSideNav;
