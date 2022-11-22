import { useNavigate } from "react-router-dom";
import { selectLoginPageVM } from "../../redux/features/vms";
import { useAppSelector } from "../../redux/hooks";

import { Formik, useFormik } from "formik";
import Input from "../../components/Input";
import {Link} from "react-router-dom"
import { ROUTES } from "../../../constants/constants";

function Form({label} : {label : string}) {
  const navigate = useNavigate();
  const loginPageVM = useAppSelector(selectLoginPageVM)

  
    const formik = useFormik({
        initialValues: loginPageVM.initialValues,
        validationSchema: loginPageVM.userSchema,
        onSubmit: async (values) => {
          const {email,password} =values
          await loginPageVM.login({email , password})
          // formik.setSubmitting(false)
        //   setTimeout(() => {
        //     navigate(routes.home);
        // }, 300);

        },
      });
   
      return (
        <form onSubmit={formik.handleSubmit}>
            <Input label="Email" name="email" formik={formik} />
            <Input label="Password" name="password" type="password" formik={formik} />

            <div className="text-right">
                <Link className="forgot-link" to={ROUTES.forgetPassword}>Forgot Password ?</Link>
            </div>
            <button 
                disabled={formik.isSubmitting}
                className="btn btn-primary btn-block btn-lg login-btn" type="submit">
                {label}
            </button>
                 
        </form>
      )  
}

function LoginPage() {
    const label = "login"
    const loginPageVM = useAppSelector(selectLoginPageVM)

    return (
      <div>
        <Form label={"Connexion"} />
      </div>
    )
}

export default LoginPage