import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import * as Yup from "yup";
import moneySVG from "../../img/money.svg";
import { updateExpenseAction } from "../../Redux/slices/expenses/expenses.action";
import { useDispatch, useSelector } from "react-redux";
import DisabledButton from "../../Components/DisabledButton";

//Form validation
const formSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  amount: Yup.number().required("Amount is required"),
});
const EditExpense = () => {
  const location = useLocation();
  const { item } = location.state;
  //dispatch action
  //history

  const dispatch = useDispatch();
  const expenses = useSelector((state) => state?.expenses);
  const { expensesList, loading, expAppError, expServerError } = expenses;
  //income  //initialize form
  const formik = useFormik({
    initialValues: {
      title: item?.title,
      description: item?.description,
      amount: item?.amount,
    },
    onSubmit: (values) => {
      const data = { ...values, id: item?._id };
      dispatch(updateExpenseAction(data));
    },
    validationSchema: formSchema,
  });

  return (
    <section className="py-5 bg-secondary vh-100">
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
              <form onSubmit={formik.handleSubmit}>
                <span className="text-muted">Expense</span>
                <div className="mb-3 input-group">
                  <input
                    value={formik.values.title}
                    onBlur={formik.handleBlur("title")}
                    onChange={formik.handleChange("title")}
                    className="form-control"
                    type="text"
                    placeholder="Enter Title"
                  />
                </div>
                {/* Err */}
                <div className="text-danger mb-2">
                  {formik.touched.title && formik.errors.title}
                </div>
                <div className="mb-3 input-group">
                  <input
                    value={formik.values.description}
                    onBlur={formik.handleBlur("description")}
                    onChange={formik.handleChange("description")}
                    className="form-control"
                    type="text"
                    placeholder="Enter Description"
                  />
                </div>
                {/* Err */}
                <div className="text-danger mb-2">
                  {formik.touched.description && formik.errors.description}
                </div>
                <div className="mb-3 input-group">
                  <input
                    value={formik.values.amount}
                    onBlur={formik.handleBlur("amount")}
                    onChange={formik.handleChange("amount")}
                    className="form-control"
                    type="number"
                    placeholder="Enter Amount"
                  />
                </div>
                {/* Err */}
                <div className="text-danger mb-2">
                  {formik.touched.amount && formik.errors.amount}
                </div>
                {
                    loading ? <DisabledButton/> : 
                    <button type="submit" className="btn btn-primary mb-4 w-100">
                  Update
                </button>

                }
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditExpense;
