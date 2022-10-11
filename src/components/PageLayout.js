import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */

function handleLogin(instance) {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();
    const { instance } = useMsal();
    isAuthenticated ? console.log('Signed in'): handleLogin(instance)
    return (
        <>

            {/* {isAuthenticated ? console.log('Signed in') : <SignInButton />} */}
            {/* <h5><center>Welcome to the Microsoft Authentication Library For React Tutorial</center></h5> */}
            {props.children}
        </>
    );
};