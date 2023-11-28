import styles from "../styles/loginPage.module.css";
import React from "react";
import { Input, Checkbox, Button } from "antd";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.title}>
        <h1>Livin</h1>
        </div>
        <div className={styles.formContainer}>
          <label>Email</label>
          <Input size="large" placeholder="Enter your Email" />
          <label>Password</label>
          <Input.Password  size="large" className={styles.inputPassword} placeholder="Enter your Password"/>
          <Checkbox>Remember me</Checkbox>
          <Button className={styles.SignBtn}>Sign In</Button>
        </div>
      </div>
      <div className={styles.imgContainer}></div>
    </div>
  );
}