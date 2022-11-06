// React
import { useRef, useState } from "react";
// RRV6
import { Link, useLocation, useNavigate } from "react-router-dom";
// Firebase
import { getSignInError, login } from "../services/firebase";
// Context
import { useDispatchContext } from "../context/StateContext";
// Component
import { Form, FormInput } from "../components/Form";
import { Button } from "../components";

export default function SignIn() {
  // STATE CONTEXT
  const { dispatchUser } = useDispatchContext();

  // REACT ROUTER 6
  const navigate = useNavigate();
  const location: any = useLocation();
  const from = location.state?.from?.pathname || "/";

  // INPUTS FORMS REF
  const emailRef: any = useRef();
  const passwordRef: any = useRef();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await login(
      emailRef.current.value,
      passwordRef.current.value,
      (userCredential: { user: any }) => {
        const user = userCredential.user;

        dispatchUser({
          type: "SIGN_IN",
          payload: {
            id: user.uid,
            message: "You have successfully logged in!",
          },
        });
        navigate(from);
      },
      (error: { code: any }) => {
        const errorCode = error.code;
        const errorMessage = getSignInError(errorCode);

        dispatchUser({
          type: "SIGN_IN_ERROR",
          payload: { message: errorMessage },
        });
      }
    );
  }

  return (
    <Form title="Login" onSubmit={handleSubmit}>
      <>
        <FormInput
          htmlFor="email"
          formRef={emailRef}
          label="Email address"
          placeholder="Email address"
          type="email"
          name="email"
          id="email"
          required={true}
        />
        <FormInput
          htmlFor="password"
          formRef={passwordRef}
          label="Password"
          placeholder="Password"
          type="password"
          name="password"
          id="password"
          required={true}
        />
        <Button type="submit" variant="filled">
          <span>Log in to your account</span>
        </Button>
        <Button type="button" variant="outlined">
          <span>
            Don’t have an account? <Link to="/register">Sign Up</Link>
          </span>
        </Button>
      </>
    </Form>
  );
}
