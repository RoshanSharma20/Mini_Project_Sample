import { React, useEffect, useState } from "react";
import "./listdocs.css";
import { Link } from "react-router-dom";

function UniversityPage({ account, contract }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [arr, setArr] = useState([]);

  //function to add institute details in the smart contract
  const addInstitute = async (event) => {
    event.preventDefault();
    try {
      await contract.addInstitute(address, name);
      console.log("College added");
    } catch (e) {
      console.log(e);
    }
  };

  const getInstitute = async () => {
    try {
      const data = await contract.displayCollege();
      setArr(data);
      console.log(data);
    } catch (e) {
      console.log("error");
    }
  };
  useEffect(() => {
    getInstitute();
  }, []);
  
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
            <h2>One Stop Student Verification</h2>
          </span>
          <button class="btn btn-success" type="button">
            Account : {account ? account : "not connected"}
          </button>
        </div>
      </nav>

      <div className="rit">
        <img src={require("./vtu.jpeg")} alt="" />
        <h1>Visvesvaraya Technical University</h1>
      </div>
      <div id="osh">
        Visvesvaraya Technological University, is a collegiate public state
        university in Belagavi, Karnataka established by the Government of
        Karnataka. It is one of the largest Technological Universities in India
        with 26 years of Tradition of excellence in Engineering & Technical
        Education, Research and Innovations.
      </div>
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">College Registeration</h5>
              <form>
                <div class="mb-4">
                  <label for="college name" class="form-label">
                    College Name
                  </label>
                  <input
                    type="text"
                    placeholder="MSRIT"
                    className="form-control"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-4">
                  <label for="uaddr" class="form-label">
                    Unique adderess
                  </label>
                  <input
                    type="text"
                    placeholder="enter college address"
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
                  onClick={addInstitute}
                >
                  Add College
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
            <div className="container">
              <div className="card mb-3 shadow" key={item.user}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="card-title">Address</h5>
                      <p className="card-text">{item.user}</p>
                    </div>
                    <div className="col-md-6">
                      <h5 className="card-title">Name</h5>
                      <p className="card-text">{item.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default UniversityPage;
