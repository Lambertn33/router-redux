import React, {useState} from "react";
import Card from "../../components/Card";
import MainLayout from "../../components/MainLayout";
import { MDBInput, MDBBtn, MDBCol } from "mdb-react-ui-kit";
import { Form, useSearchParams, Link } from "react-router-dom";

import styles from "./AuthPage.module.css";

export default function AuthPage() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';

  return (
    <MainLayout>
      <MDBCol md="4" center className={styles.card}>
        <Card>
          <h4>{ isLogin ? 'Login' : 'Register' }</h4>
          <Form>
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
              <MDBBtn type="submit">{ isLogin ? 'Login' : 'Create new account' }</MDBBtn>
              <Link to={`?mode=${!isLogin ? 'login' : 'register'}`} className="text-primary">{
                isLogin ? 'No account yet?' : 'already have an account?'
              }</Link>
            </div>
          </Form>
        </Card>
      </MDBCol>
    </MainLayout>
  );
}

