import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import styles from '../styles/signup.module.css';
const SignUp = () => {
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    // role: "",
  });

  const inputHandler = (e) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/users/register_user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setUser({
          name: "",
          email: "",
          password: "",
        });
        navigate("/logIn");

        storeTokenInLS(data.token);
      } else if (data.errors) {
        alert(data.errors[0].msg);
      } else {
        alert(data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.container}>

      
      <form id={styles.form}
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <h1>Register </h1>
        <label htmlFor="username">Username</label>
        <br />
        <input
          name="name"
          type="text"
          placeholder="username"
          onChange={inputHandler}
        />
        <br />
        <label htmlFor="email">Email address</label>
        <br />
        <input
          name="email"
          type="email"
          placeholder="name@example.com"
          onChange={inputHandler}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={inputHandler}
        />
        {/* <br />
        <label htmlFor="role">Your Role</label>
        <br />
        <input
          type="radio"
          name="role"
          value="Student"
          onChange={inputHandler}
        />{" "}
        Student
        <br />
        <input
          type="radio"
          name="role"
          value="Teacher"
          onChange={inputHandler}
        />{" "}
        Teacher
        <br />
        <input
          type="radio"
          name="role"
          value="Both"
          onChange={inputHandler}
        />{" "}
        Both of them
        <br /> */}
        <p>
          Already signed up,<Link to={"/logIn"}>LogIn</Link>
        </p>
        <button className={styles.btnSubmit}type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
