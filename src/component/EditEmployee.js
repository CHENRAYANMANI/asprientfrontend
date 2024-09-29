import React, { useEffect } from "react";

const EditEmployee = ({
  findEmployee, // The employee to edit
  editHandleSubmit, // Function to handle form submission
  handleChange, // Function to handle form data changes
  formData, // Current form data
  errors, // Validation errors
  setFormData,
  handleDelete,
}) => {
  // Populate formData with the found employee's data on load
  useEffect(() => {
    if (findEmployee) {
      setFormData(findEmployee);
    }
  }, [findEmployee, setFormData]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Edit Employee</h2>
      <form onSubmit={editHandleSubmit}>
        <div className="row">
          {/* First Name */}
          <div className="col-md-6 mb-3">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className={`form-control ${errors.firstname ? "is-invalid" : ""}`}
              id="firstname"
              name="firstname"
              value={formData.firstname || ""}
              onChange={handleChange}
            />
          </div>

          {/* Last Name */}
          <div className="col-md-6 mb-3">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className={`form-control ${errors.lastname ? "is-invalid" : ""}`}
              id="lastname"
              name="lastname"
              value={formData.lastname || ""}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
            />
          </div>

          {/* Designation */}
          <div className="col-md-6 mb-3">
            <label htmlFor="designation" className="form-label">
              Designation
            </label>
            <input
              type="text"
              className={`form-control ${
                errors.designation ? "is-invalid" : ""
              }`}
              id="designation"
              name="designation"
              value={formData.designation || ""}
              onChange={handleChange}
            />
          </div>

          {/* Mobile */}
          <div className="col-md-6 mb-3">
            <label htmlFor="mobile" className="form-label">
              Mobile
            </label>
            <input
              type="text"
              className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
              id="mobile"
              name="mobile"
              value={formData.mobile || ""}
              onChange={handleChange}
            />
          </div>

          {/* Joining Date */}
          <div className="col-md-6 mb-3">
            <label htmlFor="joiningdata" className="form-label">
              Joining Date
            </label>
            <input
              type="date"
              className={`form-control ${
                errors.joiningdata ? "is-invalid" : ""
              }`}
              id="joiningdata"
              name="joiningdata"
              value={formData.joiningdata || ""}
              onChange={handleChange}
            />
          </div>

          {/* Address */}
          <div className="col-md-12 mb-3">
            <label htmlFor="addresss" className="form-label">
              Address
            </label>
            <input
              type="text"
              className={`form-control ${errors.addresss ? "is-invalid" : ""}`}
              id="addresss"
              name="addresss"
              value={formData.addresss || ""}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <div className="col-md-6">
            <button type="submit" className="btn btn-primary w-100">
              Update Employee
            </button>
          </div>

          {/* Delete Button */}
          <div className="col-md-6">
            <button
              type="button"
              className="btn btn-danger w-100"
              onClick={() => handleDelete(formData._id)}
            >
              Delete Employee
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
