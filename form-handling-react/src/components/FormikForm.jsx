import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function FormikForm() {
  const handleSubmit = (values, { resetForm }) => {
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
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col gap-2 w-80">
        <Field name="username" placeholder="Username" className="border p-2" />
        <ErrorMessage name="username" component="p" className="text-red-500" />

        <Field name="email" placeholder="Email" className="border p-2" />
        <ErrorMessage name="email" component="p" className="text-red-500" />

        <Field
          type="password"
          name="password"
          placeholder="Password"
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
