import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
import firebaseConfig from './firebase.config';
const Login = () => {

    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
    const [, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const handleGoogle = () => {

       const googleProvider  = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(googleProvider)
        .then((result) => {
        
            const {displayName, email} = result.user;
            const signInUser = {
                user : displayName,
                email : email
            }
            setLoggedInUser(signInUser);
            history.replace(from)
        })
        .catch((error) => {
        
            
            const errorMessage = error.message;
            console.log(errorMessage);
            
        });

    }
    
    return (
        <div className="login">
            <Row>
            <Col>
                <Card className = 'login-card' >
                    <Card.Body>
                        <Button onClick = {handleGoogle} className = 'checkout-btn ' type = 'button' >Continue With Google</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </div>
    );
};

export default Login;