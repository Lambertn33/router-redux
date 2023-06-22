import React from "react";
import Card from "../../components/Card";
import MainLayout from "../../components/MainLayout";
import { MDBInput, MDBBtn, MDBCol } from "mdb-react-ui-kit";
import { Form, useSearchParams, useActionData, Link, json, redirect } from "react-router-dom";

import styles from "./AuthPage.module.css";
import handlerAuthenticate from "../../services/auth/auth.services";

export default function AuthPage() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const errorData = useActionData();

  return (
    <MainLayout>
      <MDBCol md="4" center className={styles.card}>
        <Card>
          <h4>{isLogin ? "Login" : "Register"}</h4>
          { errorData && errorData.message && (<span>{ errorData.message }</span>) }
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
    </MainLayout>
  );
}

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";
  if (mode !== "login" && mode !== "register") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    username: data.get("username"),
    password: data.get("password"),
  };

  const response = await handlerAuthenticate(authData, mode);
  if (response.status === 400 || response.status === 404) {
    console.log(response.status);
    return response;
  }

  const resData = response.data;
  const token = resData.token;
  localStorage.setItem("token", token);
  return;
};
