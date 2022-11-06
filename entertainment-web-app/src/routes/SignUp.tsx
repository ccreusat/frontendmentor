// REACT
import { useRef } from "react";
// RRV6
import { Link, useLocation, useNavigate } from "react-router-dom";
// COMPONENTS
import { Form, FormInput } from "../components/Form";
// Firebase
import { getSignUpError, register } from "../services/firebase";
// Context
import { useDispatchContext } from "../context/StateContext";
import { Button } from "../components";

export default function SignUp() {
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

    await register(
      emailRef.current.value,
      passwordRef.current.value,
      (userCredential: { user: any }) => {
        const user = userCredential.user;
        dispatchUser({
          type: "SIGN_UP",
          payload: {
            id: user.uid,
            message: "You have successfully registered!",
          },
        });
        navigate(from, { replace: true });
      },
      (error: { code: any }) => {
        const errorCode = error.code;
        const errorMessage = getSignUpError(errorCode);
        dispatchUser({
          type: "SIGN_UP_ERROR",
          payload: { message: errorMessage },
        });
      }
    );
  }

  return (
    <Form title="Sign Up" onSubmit={handleSubmit}>
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
          <span>Sign up</span>
        </Button>
        <Button type="button" variant="outlined">
          <span>
            Already have an account? <Link to="/login">Sign In</Link>
          </span>
        </Button>
      </>
    </Form>
  );
}
