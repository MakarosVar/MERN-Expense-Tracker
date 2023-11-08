import React from "react";
import moneySVG from "../../img/money.svg";


const AddIncome = () => {
  return (
    <>
      <section className="py-5 bg-success vh-100">
        <div className="container text-center">
          <a className="d-inline-block mb-5">
            <img
              className="img-fluid"
              src={moneySVG}
              alt="SVGeXPENSES"
              width="200"
            />
          </a>
          <div className="row mb-4">
            <div className="col-12 col-md-8 col-lg-5 mx-auto">
              <div className="p-4 shadow-sm rounded bg-white">
                <form>
                  <span className="text-muted">Income</span>
                  <h2 className="mb-4 fw-light">Record New Income</h2>

                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Description" 
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Enter Amount"
                    />
                  </div>

                  <button type="submit" className="btn btn-success mb-4 w-100">
                    Record Income
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddIncome;
