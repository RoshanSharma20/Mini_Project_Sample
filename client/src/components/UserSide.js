import React, { useState, useEffect } from "react";

export default function UserSide({ contract, account }) {
  const [student, setStudent] = useState({});
  const [listedItems, setListedItems] = useState([]);

  useEffect(() => {
    const fetchingdata = async () => {
      let studentData = await contract.getUserDetails(account);
      setStudent(studentData);
    };

    const loadListedCertificates = async () => {
      let listedItems = [];
      const certificates = await contract.getAddressUrl(account);
      for (let i = 0; i < certificates.length; ++i) {
        const uri = certificates[i];
        const new_uri = uri.replace(
          "https://ipfs.infura.io/ipfs/",
          "https://tftm.infura-ipfs.io/ipfs/"
        );
        const response = await fetch(new_uri);
        const metadata = await response.json();
        let item = {
          image: metadata.image,
          name: metadata.name,
          description: metadata.description,
        };
        listedItems.push(item);
      }
      setListedItems(listedItems);
    };

    fetchingdata();
    loadListedCertificates();
  }, [contract, account]);

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
            <h2>Welcome back, {student.name}</h2>
          </span>
          <button class="btn btn-success" type="button">
            Account : {account ? account : "not connected"}
          </button>
        </div>
      </nav>
      <div className="gradient-custom-2" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-xl-7">
              <div className="card mb-4">
                <div
                  className="card-header"
                  style={{ backgroundColor: "#000", color: "#fff" }}
                >
                  <div className="d-flex align-items-center">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-512/free-profile-1439375-1214445.png?f=avif&w=256"
                      alt="Profile"
                      className="mt-4 mb-2 img-thumbnail"
                      style={{ width: "150px" }}
                    />
                    <div className="ms-3">
                      <h5 className="mb-0">{student.name}</h5>
                      <p className="mb-0">{account}</p>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="mb-4">
                    <h5 className="card-title">About</h5>
                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                      <p className="font-italic mb-1">Contact: 8765980925</p>
                      <p className="font-italic mb-1">Blood Group: O+ve</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="card-title">Certificates</h5>
                  </div>
                  <div className="row">
                    {listedItems.length > 0 ? (
                      listedItems.map((item, index) => (
                        <div className="col">
                          <div class="card mb-3" key={index}>
                            <img
                              src={item.image}
                              alt={item.name}
                              class="card-img-top"
                              style={{ maxWidth: "400px", maxHeight: "100px" }}
                            />
                            <div class="card-body">
                              <h5 class="card-title">{item.name}</h5>
                              <p class="card-text">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No certificates found</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
