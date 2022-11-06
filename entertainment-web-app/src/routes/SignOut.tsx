// RRV6
import { useNavigate } from "react-router-dom";
// FIREBASE
import { signout } from "../services/firebase";
// CONTEXT
import { useDispatchContext } from "../context/StateContext";
// COMPONENTS
import { Form } from "../components/Form";
import { Button } from "../components";

export default function SignOut() {
  // STATE CONTEXT
  const { dispatchUser } = useDispatchContext();

  // RRV6
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await signout();
    dispatchUser({
      type: "SIGN_OUT",
      payload: { message: "You have logged out" },
    });
    navigate("/");
  }

  return (
    <main className="auth-wrapper">
      <Form title="Good bye?" onSubmit={handleSubmit}>
        <>
          <Button type="submit" variant="filled">
            <span>Log out</span>
          </Button>
        </>
      </Form>
    </main>
  );
}
