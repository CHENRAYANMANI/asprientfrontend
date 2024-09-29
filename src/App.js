import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./App.css";
import api from "./api/api";
import About from "./component/About";
import AddEmployees from "./component/AddEmployees";
import EditEmployee from "./component/EditEmployee";
import Home from "./component/Home";
import Missing from "./component/Missing";
import Nav from "./nav/Nav";

function App() {
  const [employees, setEmployees] = useState([]);

  const [editId, setEditId] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    designation: "",
    mobile: "",
    joiningdata: "", // Matches the input name in the form
    addresss: "", // Matches the input name in the form
    editId: editId,
  });

  const [errors, setErrors] = useState({}); // Initialize as an empty object
  const [editEmployee, setEditEmployee] = useState({}); // Initialize as an empty object
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

  // Get data from Database using axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("employee");

        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filterResults = employees.filter(
      (post) =>
        post.firstname.toLowerCase().includes(search.toLowerCase()) ||
        post.lastname.toLowerCase().includes(search.toLowerCase()) ||
        post.email.toLowerCase().includes(search.toLowerCase()) ||
        post.designation.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filterResults.reverse());
  }, [employees, search]);
  // Delete Employee
  const handleDelete = async (id) => {
    try {
      await api.delete("/empdelete", { data: { id } }); // API call to delete employee from backend
      // setEmployees(employees.filter((employee) => employee._id !== id)); // Update state to remove employee locally
      alert("delete finish");
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  // Post Employee details using axios

  const validationSchema = Yup.object({
    firstname: Yup.string().required("Firstname is required"),
    lastname: Yup.string().required("Lastname is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    designation: Yup.string().required("designation is required"),
    mobile: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Mobile number must be 10 digits")
      .required("Mobile is required"),
    joiningdata: Yup.date().required("Joining date is required"),
    addresss: Yup.string().required("address is required"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setErrors({});

    try {
      // Validate form data with Yup schema
      const validate = await validationSchema.validate(formData, {
        abortEarly: false,
      });
      if (validate) {
        // POST request to backend after validation
        const response = await api.post("/employee", formData); // Replace with your endpoint
        console.log("Data successfully sent to backend:", response.data);

        // Clear the form or do something else after successful submission
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          designation: "",
          mobile: "",
          joiningdata: "",
          addresss: "",
        });
        navigate("/");
        window.location.reload();
      } else {
        alert("fill the details");
      }
    } catch (error) {
      if (error.name === "ValidationError") {
        // Handle validation errors
        const newError = {};
        error.inner.forEach((err) => {
          newError[err.path] = err.message;
          setErrors(newError);
        });
      } else {
        // Handle any other errors (e.g., network, server errors)
        console.error("Error sending data to backend:", error);
      }
    }
  };

  //Edit employee

  useEffect(() => {
    if (editId) {
      const foundEmployee = employees.find((item) => item._id == editId);
      setEditEmployee(foundEmployee);
    }
  }, [editId, employees]);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const editHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send updated employee data to the server
      const response = await api.put(`/empedit`, formData); // PUT request to update employee by ID

      // Reset form and navigate back to home
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        designation: "",
        mobile: "",
        joiningdata: "",
        addresss: "",
      });
      alert("update finish!!!!");
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <div>
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route
          path="/"
          element={<Home employee={searchResult} setEditId={setEditId} />}
        />

        <Route
          path="/addemployee"
          element={
            <AddEmployees
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              handleChange={handleEditChange}
              errors={errors}
            />
          }
        />
        <Route
          path="/editemployee"
          element={
            <EditEmployee
              findEmployee={editEmployee}
              editHandleSubmit={editHandleSubmit}
              handleChange={handleChange}
              formData={formData}
              handleDelete={handleDelete}
              setFormData={setFormData}
              errors={errors}
            />
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
