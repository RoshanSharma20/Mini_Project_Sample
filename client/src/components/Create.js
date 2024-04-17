import React from "react";
import { useState } from "react";
import { ethers } from "ethers";
import { Row, Form, Button } from "react-bootstrap";
// import { create as ipfsHttpClient } from 'ipfs-http-client'
import { Buffer } from "buffer";
import { Link } from "react-router-dom";

//for ipfs defining the client
const ipfsClient = require("ipfs-http-client");

const projectId = "2P6v1uSdahzD7hDNadhRXt5lk73";
const projectSecret = "be3c4880a70e84f8b150d7f7b9c535e5";
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

const client = ipfsClient.create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  apiPath: "/api/v0",
  headers: {
    authorization: auth,
  },
});

function Create({ contract, account }) {
  const useracc = localStorage.getItem("user_acc");
  console.log("account", useracc);

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  //upload to ipfs
  const uploadToIPFS = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (typeof file !== "undefined") {
      try {
        const result = await client.add(file);
        console.log(result);
        setImage(`https://tftm.infura-ipfs.io/ipfs/${result.path}`);
      } catch (error) {
        console.log("ipfs image upload error: ", error);
      }
    }
  };

  const createCertificate = async () => {
    if (!image || !name || !description) return;
    try {
      const result = await client.add(
        JSON.stringify({ image, name, description })
      );
      mintCertificate(result);
    } catch (error) {
      console.log("ipfs uri upload error:", error);
    }
  };

  const mintCertificate = async (result) => {
    const uri = `https://tftm.infura-ipfs.io/ipfs/${result.path}`;
    await contract.addDetails(useracc, uri).wait();
    console.log("Documents have been added").wait();
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
            <h2>Add Certificate</h2>
          </span>
          <button class="btn btn-success" type="button">
            Account : {account ? account : "not connected"}
          </button>
        </div>
      </nav>
      <div className="my-5"></div>
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card">
            <div className="card-body">
              <main
                role="main"
                className="col-lg-12 mx-auto"
                style={{ maxWidth: "1000px" }}
              >
                <div className="content mx-auto">
                  <Row className="g-4">
                    <div className="mb-4">
                      <Form.Control
                        type="file"
                        required
                        name="file"
                        onChange={uploadToIPFS}
                      />
                    </div>
                    <div className="mb-4">
                      <Form.Control
                        onChange={(e) => setName(e.target.value)}
                        size="lg"
                        required
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-4">
                      <Form.Control
                        onChange={(e) => setDescription(e.target.value)}
                        size="lg"
                        required
                        as="textarea"
                        placeholder="Description"
                      />
                    </div>

                    {/* <Form.Control onChange={(e) => setPrice(e.target.value)} size="lg" required type="number" placeholder="Price in ETH" /> */}
                    <button
                      type="button"
                      class="btn btn-outline-success d-block mx-auto"
                      onClick={createCertificate}
                    >
                      Create Certificate
                    </button>
                  </Row>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
