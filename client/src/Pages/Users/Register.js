import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch,useSelector } from "react-redux";
import { RegisterUserAction } from "../../Redux/slices/users/user.action";
import React, { useEffect } from "react";
import DisabledButton from "../../Components/DisabledButton";


  //Yup validation
  const formSchema = Yup.object({
    firstName: Yup.string()
      .required("First Name is required")
      .max(15, "First Name must be less than 15 characters"),
    lastName: Yup.string()
      .required("Last Name is required")
      .max(15, "Last Name must be less than 15 characters"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be 8 characters"),
  });    

const Register = () => {
  //Redirect
  const navigate = useNavigate();

  //dispatch
  const dispatch = useDispatch();
    //get user from store
    const users = useSelector((state) => state?.users);
    const { userAuth, userLoading, AppError, ServerError } = users;
  //formik form
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
     dispatch(RegisterUserAction(values));
    },
    validationSchema: formSchema,
  });
   //Redirect
   useEffect(() => {
    if (userAuth) return navigate("/login");
  }, [userAuth, navigate]);

  return (
    <section className="position-relative py-5 overflow-hidden vh-100 bg-warning">
      <div className="d-none d-md-block position-absolute top-0 start-0 bg-dark w-75 h-100"></div>
      <div className="d-md-none position-absolute top-0 start-0 bg-primary w-100 h-100"></div>
      <div className="container position-relative mx-auto">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 mb-5">
            <div>
              <h2 className="display-5 fw-bold mb-4 text-white">
                Keep Track of your income and expenses flow
              </h2>
              <hr className="text-warning w-100" />
            </div>
          </div>
          <div className="col-12 col-lg-5 ms-auto">
            <div className="p-5 bg-light rounded text-center">
           {AppError || ServerError ? (
                <div className="alert-danger alert" role="alert">
                  {AppError || ServerError}
                </div>
              ) : null}
              <form onSubmit={formik.handleSubmit}>
                <span className="text-muted">New User</span>
                <h3 className="fw-bold mb-5">Register</h3>
                <input
                  value={formik.values.firstName}
                  onChange={formik.handleChange("firstName")}
                  onBlur={formik.handleBlur("firstName")}
                  className="form-control mb-2"
                  type="text"
                  placeholder="First Name"
                />
                <div className="text-danger mb-2">
                  {formik.touched.firstName && formik.errors.firstName}
                </div>
                <input
                  value={formik.values.lastName}
                  onChange={formik.handleChange("lastName")}
                  onBlur={formik.handleBlur("lastName")}
                  className="form-control mb-2"
                  type="TEXT"
                  placeholder="Last Name"
                />
                <div className="text-danger mb-2">
                  {formik.touched.lastName && formik.errors.lastName}
                </div>
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  className="form-control mb-2"
                  type="email"
                  placeholder="Email"
                />
                <div className="text-danger mb-2">
                  {formik.touched.email && formik.errors.email}
                </div>
                <input
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}                
                  className="form-control mb-2"
                  type="password"
                  placeholder="Password"
                />
                <div className="text-danger mb-2">
                  {formik.touched.password && formik.errors.password}
                </div>
                {userLoading ? (
                    <DisabledButton />
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-primary py-2 w-100 mb-4"
                    >
                      Register
                    </button>
                  )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
