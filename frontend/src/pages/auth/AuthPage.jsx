import React from "react";
import Card from "../../components/Card";
import MainWrapper from "../../components/MainWrapper";
import { MDBInput, MDBBtn, MDBCol } from "mdb-react-ui-kit";
import {
  Form,
  useSearchParams,
  useActionData,
  Link,
  json,
} from "react-router-dom";

import styles from "./AuthPage.module.css";
import handlerAuthenticate from "../../services/auth/auth.services";

export default function AuthPage() {
  const [searchParams] = useSearchParams();
  const isLogin =
    searchParams.get("mode") && searchParams.get("mode") === "login";
  const errorData = useActionData();

  return (
    <MainWrapper>
      <MDBCol md="4" center className={styles.card}>
        <Card>
          <h3>Welcome to users app</h3>
          <h5>{isLogin ? "Login" : "Register"}</h5>
          {errorData && (
            <span className={`text-danger ${styles.error}`}>{errorData}</span>
          )}
          <Form method="post">
            <MDBInput
              className="mb-4"
              name="username"
              label="username"
              type="text"
              placeholder="enter a username"
            />
            <MDBInput
              className="mb-4"
              name="password"
              label="password"
              type="password"
              placeholder="enter a password"
            />
            <div className={styles.actions}>
              <MDBBtn type="submit">
                {isLogin ? "Login" : "Create new account"}
              </MDBBtn>
              <Link
                to={`?mode=${!isLogin ? "login" : "register"}`}
                className="text-primary"
              >
                {isLogin ? "No account yet?" : "already have an account?"}
              </Link>
            </div>
          </Form>
        </Card>
      </MDBCol>
    </MainWrapper>
  );
}

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "register";
  if (mode !== "login" && mode !== "register") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    username: data.get("username"),
    password: data.get("password"),
  };

  try {
    const response = await handlerAuthenticate(authData, mode);
    const resData = response.data;
    const token = resData.token;
    localStorage.setItem("token", token);
    window.location.href = "/users";
  } catch (error) {
    return error.response.data.message;
  }
};
