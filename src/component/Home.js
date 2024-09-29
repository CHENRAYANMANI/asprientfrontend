import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ employee, setEditId }) => {
  const navigate = useNavigate();

  return (
    <div>
      {employee.length === 0 ? (
        <div className="emptyemployee">
          <h1>Employees Details are Empty</h1>
          <button
            className="btn btn-success"
            onClick={() => {
              navigate("/addemployee");
            }}
          >
            AddEmployees
          </button>
        </div>
      ) : (
        <>
          <h1 className="text-center text-primary my-5">AllEmployees</h1>
          <div className="table-responsive">
            <table className="table  table-hover px-3">
              <thead>
                <tr>
                  <th scope="col">Firstname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Email</th>
                  <th scope="col">Designation</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Addresss</th>
                  <th scope="col">JoiningDate</th>
                </tr>
              </thead>
              <tbody>
                {employee.map((item) => (
                  <tr
                    className="pointer"
                    onClick={() => {
                      setEditId(`${item._id}`);
                      navigate(`editemployee`);
                    }}
                    key={item._id}
                  >
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.email}</td>
                    <td>{item.designation}</td>
                    <td>{item.mobile}</td>
                    <td>{item.addresss}</td>
                    <td>{item.joiningdata}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
