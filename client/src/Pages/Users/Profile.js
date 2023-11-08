import React from "react";
import { useNavigate} from "react-router-dom";
const Profile = () => {

  const navigate = useNavigate();
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="position-relative p-8 border rounded-2">
            <div className="d-flex mb-6 align-items-center">
              <img
                className="img-fluid me-4 rounded-2"
                //   style="width: 64px; height: 64px;"
                src="https://images.unsplash.com/photo-1593789382576-54f489574d26?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=128&amp;w=128"
                alt=""
              />
              <div className="d-flex align-items-center justify-content-center">
                <button
                 onClick={() => navigate("/add-expense")}
                  className="btn me-4 w-100 btn-danger d-flex align-items-center justify-content-center"
                >
                  <span>View Expenses History</span>
                </button>
                <button
                 onClick={() => navigate("/add-income")}
                  className="btn w-100 btn-outline-success d-flex align-items-center justify-content-center"
                >
                  <span>View Income History</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
