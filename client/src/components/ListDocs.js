import { React, useEffect, useState } from "react";
import "./listdocs.css";
import { Link } from "react-router-dom";

function ListDocs({ account, contract, currCollege }) {
  // var arr = [{ address: "a", name: "b", age: 3 }, { address: "d", name: "e", age: 5 }, { address: "h", name: "k", age: 6 }];
  // const navigate=useNavigate();
  //navigate("/path")
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [arr, setArr] = useState([]);

  //function to add student details in the smart contract
  const adduser = async (event) => {
    event.preventDefault();
    try {
      await contract.addStudent(address, name, age, "rit");
      console.log("Student added");
    } catch (e) {
      console.log("error");
    }
  };

  const getStudents = async () => {
    try {
      const data = await contract.display();
      setArr(data);
      console.log(data);
    } catch (e) {
      console.log("error");
    }
  };
  useEffect(() => {
    getStudents();
  }, []);

  const getStudentInstitute = async () => {
    const data = await contract.studentToInstitute();
  };

  return (
    <div>
      <nav class="navbar sticky-top navbar-expand-lg navbar navbar-dark bg-primary shadow">
        <div class="container-fluid">
          <img
            src={require("./market.png")}
            alt=""
            width="40"
            height="30"
            class="d-inline-block align-text-top"
          />
          <span class="navbar-text">
            <h2>Welcome, {currCollege}</h2>
          </span>
          <button class="btn btn-success" type="button">
            Account : {account ? account : "not connected"}
          </button>
        </div>
      </nav>

      <div className="rit"></div>

      <div className="row justify-content-center">
        <div className="col-md-7">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Add a New Student to Institute</h5>
              <form>
                <div class="mb-4">
                  <label for="sname" class="form-label">
                    Student Name
                  </label>
                  <input
                    type="text"
                    placeholder="Keshav Jadav"
                    className="form-control"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-4">
                  <label for="age" class="form-label">
                    Student Age
                  </label>
                  <input
                    type="text"
                    placeholder="21"
                    className="form-control"
                    required
                    value={age}
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-4">
                  <label for="uaddr" class="form-label">
                    Unique adderess
                  </label>
                  <input
                    type="text"
                    placeholder="sdkb5dl5ssjbd54jcndc5E"
                    className="form-control"
                    required
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-outline-success d-block mx-auto"
                  onClick={adduser}
                >
                  Add Student
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5"></div>
      {arr.length > 0 &&
        arr.map((item) => {
          return (
            
            <div className="card mb-3 renderbox shadow" key={item.user}>
            <div className="card-body d-flex justify-content-between">
              <div className="renderleftbox">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-subtitle">{item.user}</p>
                {/* <p className="card-text">College Name: {item.college}</p> */}
              </div>
              <div className="renderrightbox align-self-center">
                <Link to="/addCertificate">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      localStorage.setItem("user_acc", item.user);
                    }}
                  >
                    Add Certificate
                  </button>
                </Link>
              </div>
            </div>
          </div>
          
          );
        })}
    </div>
  );
}

export default ListDocs;
