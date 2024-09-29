// import React from "react";

// const AddEmployees = ({
//   formData,

//   handleSubmit,
//   handleChange,
//   errors,
// }) => {
//   console.log("formData", formData);
//   return (
//     <div p-3>
//       <h1 className="text-primary my-5">AddEmployee :</h1>
//       <form className="px-5 mb-5" onSubmit={(e) => handleSubmit(e)}>
//         <div className="mb-3">
//           <label htmlFor="one" className="form-label">
//             Firstname
//           </label>
//           <input
//             type="text"
//             name="firstname"
//             className="form-control"
//             id="one"
//             value={formData.firstname}
//             onChange={handleChange}
//             required
//             aria-describedby="emailHelp"
//           />
//           {errors.firstname && (
//             <div className="text-danger">{errors.firstname}</div>
//           )}
//         </div>
//         <div className="mb-3">
//           <label htmlFor="lastname" className="form-label">
//             lastname
//           </label>
//           <input
//             type="text"
//             name="lastname"
//             className="form-control"
//             id="lastname"
//             value={formData.lastname}
//             onChange={handleChange}
//             required
//             aria-describedby="emailHelp"
//           />
//           {errors.lastname && (
//             <div className="text-danger">{errors.lastname}</div>
//           )}
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             name="email"
//             required
//             className="form-control"
//             id="exampleInputEmail1"
//             value={formData.email}
//             onChange={handleChange}
//             aria-describedby="emailHelp"
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//           {errors.email && <div className="text-danger">{errors.email}</div>}
//         </div>
//         <div className="mb-3">
//           <label htmlFor="mobile" className="form-label">
//             MobileNumber
//           </label>
//           <input
//             type="text"
//             name="mobile"
//             required
//             value={formData.mobile}
//             onChange={handleChange}
//             className="form-control"
//             id="mobile"
//             aria-describedby="emailHelp"
//           />
//           {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
//         </div>
//         <div className="mb-3">
//           <label htmlFor="designation" className="form-label">
//             Designation
//           </label>
//           <input
//             type="text"
//             name="designation"
//             required
//             value={formData.designation}
//             onChange={handleChange}
//             className="form-control"
//             id="designation"
//           />
//           {errors.designation && (
//             <div className="text-danger">{errors.designation}</div>
//           )}
//         </div>

//         <div className="mb-3">
//           <label htmlFor="Joining Date" className="form-label">
//             Joining Date
//           </label>
//           <input
//             type="text"
//             name="joiningdata"
//             value={formData.joiningDate}
//             onChange={handleChange}
//             className="form-control"
//             id="Joining Date"
//           />
//           {errors.joiningDate && (
//             <div className="text-danger">{errors.joiningDate}</div>
//           )}
//         </div>
//         <div className="mb-3">
//           <label htmlFor="Address" className="form-label">
//             Address
//           </label>
//           <input
//             type="text"
//             name="addresss"
//             value={formData.address}
//             onChange={handleChange}
//             className="form-control"
//             id="Address"
//           />
//           {errors.address && (
//             <div className="text-danger">{errors.address}</div>
//           )}
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddEmployees;

import React from "react";

const AddEmployees = ({ formData, handleSubmit, handleChange, errors }) => {
  console.log("formData", formData);

  return (
    <div className="p-3">
      <h1 className="text-center text-primary my-5">Add Employee :</h1>
      <form className="px-5 mb-5" onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">
            Firstname
          </label>
          <input
            type="text"
            name="firstname"
            className="form-control"
            id="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          {errors.firstname && (
            <div className="text-danger">{errors.firstname}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            Lastname
          </label>
          <input
            type="text"
            name="lastname"
            className="form-control"
            id="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
          {errors.lastname && (
            <div className="text-danger">{errors.lastname}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile Number
          </label>
          <input
            type="text"
            name="mobile"
            className="form-control"
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="designation" className="form-label">
            Designation
          </label>
          <input
            type="text"
            name="designation"
            className="form-control"
            id="designation"
            value={formData.designation}
            onChange={handleChange}
            required
          />
          {errors.designation && (
            <div className="text-danger">{errors.designation}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="joiningdata" className="form-label">
            Joining Date
          </label>
          <input
            type="date"
            name="joiningdata"
            className="form-control"
            id="joiningdata"
            value={formData.joiningdata}
            onChange={handleChange}
            required
          />
          {errors.joiningdata && (
            <div className="text-danger">{errors.joiningdata}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            name="addresss" // Keep this typo consistent with the state, or fix it in the state to "address"
            className="form-control"
            id="address"
            value={formData.addresss}
            onChange={handleChange}
            required
          />
          {errors.addresss && (
            <div className="text-danger">{errors.addresss}</div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEmployees;
