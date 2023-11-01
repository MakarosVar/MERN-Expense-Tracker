import React from "react";

const Login = () => {
  return (
    <section
      style={{ height: "100vh" }}
      className="position-relative py-5 overflow-hidden bg-warning"
    >
      <div className="d-none d-md-block position-absolute top-0 start-0 bg-dark w-75 h-100"></div>
      <div className="d-md-none position-absolute top-0 start-0 bg-primary w-100 h-100"></div>
      <div className="container position-relative mx-auto">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 mb-5">
            <div>
              <h2 className="display-5 fw-bold mb-4 text-white">
                Keep Track of what you are spending
              </h2>
              <hr className="text-warning w-100" />
            </div>
          </div>
          <div className="col-12 col-lg-5 ms-auto">
            <div className="p-5 bg-light rounded text-center">
              <span className="text-muted">Sign In</span>
              <h3 className="fw-bold mb-5">Login to your account</h3>
              <form>
                <input
                  className="form-control mb-2"
                  type="email"
                  placeholder="Email-address"
                />
                <input
                  className="form-control mb-2"
                  type="password"
                  placeholder="Password"
                />
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary py-2 w-100 mb-4">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
