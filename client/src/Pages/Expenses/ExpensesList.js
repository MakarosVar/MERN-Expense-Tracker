import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllExpensesAction } from "../../Redux/slices/expenses/expenses.action";
import ContentDetails from "../../Components/ContentDetails";
import AppPagination from "../../Components/AppPagination";
import LoadingComponent from "../../Components/Loading";
import ErrorDisplayMessage from "../../Components/ErrorDisplayMessage";

const ExpensesList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getAllExpensesAction(+page));
  }, [dispatch, page, setPage]);

  const allExpenses = useSelector((state) => state?.expenses);
  const { expensesList, loading, expAppError, expServerError } = allExpenses;
  console.log(expensesList, loading, expAppError, expServerError);
  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : expAppError || expServerError ? (
        <ErrorDisplayMessage>
          {expAppError || expServerError}
        </ErrorDisplayMessage>
      ) : (
        <section className="py-6">
          <div className="container-fluid">
            <div className="position-relative border rounded-2">
              <a
                className="position-absolute top-0 end-0 mt-4 me-4"
                href="#"
              ></a>
              <div className="pt-8 px-8 mb-8">
                <h6 className="mb-0 fs-3">Recent Expense transactions</h6>
                <p className="mb-0">
                  Below is the history of your expense transactions records
                </p>
                <Link
                  to="/add-expense"
                  className="btn  btn-outline-danger me-2 m-2"
                >
                  New Expense
                </Link>
              </div>
              <table className="table">
                <thead>
                  <tr className="table-active">
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Withdrawed By</small>
                      </button>
                    </th>
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Title</small>
                      </button>
                    </th>
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Description</small>
                      </button>
                    </th>
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Amount</small>
                      </button>
                    </th>
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Date</small>
                      </button>
                    </th>
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Action</small>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <h1>Loading</h1>
                  ) : expAppError || expServerError ? (
                    <div>Err</div>
                  ) : expensesList?.docs.length <= 0 ? (
                    <h1>No Expense Found</h1>
                  ) : (
                    expensesList?.docs.map((expense) => (
                      <ContentDetails item={expense} key={expense?._id} />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <AppPagination
              setPage={setPage}
              page={expensesList?.page}
              items={expensesList?.totalPages}
              getAll={getAllExpensesAction}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default ExpensesList;
