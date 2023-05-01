import { React, useState } from 'react'
import "./listdocs.css"
import { Link } from "react-router-dom";


function ListDocs({ account, contract }) {
    var arr = [{ address: "a", name: "b", age: 3 }, { address: "d", name: "e", age: 5 }, { address: "h", name: "k", age: 6 }];
    // const navigate=useNavigate();
    //navigate("/path")
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");


    //function to add student details in the smart contract 
    const adduser = async (event) => {
        event.preventDefault();
        try {
            await contract.addStudent(address, name, age);
            console.log("Student added");
        }
        catch (e) {
            console.log("error");
        }

    }

    return (
        <div>
            <div className="topbarcont">
                <div className="topbar">
                    <img src={require("./market.png")} alt="" />
                    <h1>One Stop Student Verification</h1>
                    <h1>Account:{account ? account : "not connected"}</h1>
                </div>
            </div>
            <div className="rit">
                <img src={require("./market.png")} alt="" />
                <h1>Ramaiah Institute Of Technology</h1>
            </div>
            <div id="osh">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quisquam neque. Delectus porro dicta perferendis cumque eius. Officia dolor, ut voluptates impedit odio cumque incidunt iusto odit ea velit voluptate.</div>
            <div >
                <form action="" className="fdata">
                    <input type="text" placeholder='enter name' className='name' required value={name} onChange={(e) => { setName(e.target.value) }} />
                    <input type="Number" placeholder='enter age' className='age' required value={age} onChange={(e) => { setAge(e.target.value) }} />
                    <input type="text" placeholder='enter address' className='address' required value={address} onChange={(e) => { setAddress(e.target.value) }} />
                    <button className='center button' onClick={adduser}>Add Student</button>
                </form>
            </div>
            {arr.map((item) => {
                return (<div className="renderbox" >
                    <div className="renderleftbox">
                        <span className='renderedspan'><h4>Address : </h4><h5>{item.address}</h5></span>
                        <span className='renderedspan'><h4>Name : </h4><h5>{item.name}</h5></span>
                        <span className='renderedspan'><h4>Age : </h4><h5>{item.age}</h5></span>
                    </div>
                    <div className="renderrightbox"><Link className='center-button' to="/addCertificate">Add Certificate</Link></div>
                </div>)
            })}

        </div>
    )
}

export default ListDocs
