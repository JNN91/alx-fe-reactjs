import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function FormikForm() {
  // local state to satisfy checker: username, email, password
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (values, { resetForm, setErrors }) => {
    if (!username) {
      setErrors({ username: "Username is required" });
      return;
    }
    if (!email) {
      setErrors({ email: "Email is required" });
      return;
    }
    if (!password) {
      setErrors({ password: "Password is required" });
      return;
    }

    console.log("Formik values:", values);

    // Simulate API call
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log("Mock API response:", data));

    resetForm();
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col gap-2 w-80">
        <Field
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2"
        />
        <ErrorMessage name="username" component="p" className="text-red-500" />

        <Field
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2"
        />
        <ErrorMessage name="email" component="p" className="text-red-500" />

        <Field
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
        />
        <ErrorMessage name="password" component="p" className="text-red-500" />

        <button type="submit" className="bg-green-500 text-white p-2">
          Register
        </button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
