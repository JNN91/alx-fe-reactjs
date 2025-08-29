import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 h-screen">
      <div>
        <h2 className="text-xl font-bold mb-2">Controlled Form</h2>
        <RegistrationForm />
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Formik Form</h2>
        <FormikForm />
      </div>
    </div>
  );
}

export default App;
