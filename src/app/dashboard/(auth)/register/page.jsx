"use client";
import React, {useState} from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation"; // next/router was previous version


const Register = () => {

  const [err, setErr] = useState(false)

  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault();

    // event.target -> form element
    // event.target[0] -> the first input element
    // event.target[0].value -> the value of the first input element
    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;

    // send to endpoint
    try {
      const res = await fetch('/api/auth/register', {
        method:'POST',
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          name, email, password
        })
      })
      
      res.status === 201 && router.push('/dashboard/login?success=true')
    } catch (error) {
      setErr(true)
    }

  } 

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          className={styles.input}
          required
        />
        <input
          type="email"
          placeholder="email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required
        />
        <button className={styles.button}>Register</button>
        {err && "Something went wrong !!!!"}
      </form>
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
};

export default Register;
