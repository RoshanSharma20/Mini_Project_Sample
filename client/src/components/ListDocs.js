import React from 'react'
import "./listdocs.css"
import { Link } from "react-router-dom";

function ListDocs() {
    var arr = [{ address: "a", name: "b", age: 3 }, { address: "d", name: "e", age: 5 }, { address: "h", name: "k", age: 6 }];
    // const navigate=useNavigate();
    //navigate("/path")

    return (
        <div>
            <div className="topbarcont">
                <div className="topbar">
                    <img src={require("./market.png")} alt="" />
                    <h1>One Stop Student Verification</h1>
                    <h1>Account: Put-value-Here</h1>
                </div>
            </div>
            <div className="rit">
                <img src={require("./market.png")} alt="" />
                <h1>Ramaiah Institute Of Technology</h1>
            </div>
            <div id="osh">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quisquam neque. Delectus porro dicta perferendis cumque eius. Officia dolor, ut voluptates impedit odio cumque incidunt iusto odit ea velit voluptate.</div>
            <div >
                <form action="" className="fdata">
                    <input type="text" placeholder='enter name' className='name' required />
                    <input type="Number" placeholder='enter age' className='age' required />
                    <input type="text" placeholder='enter address' className='address' required />
                    <button className='center button' >Add Student</button>
                </form>
            </div>
            {/* {arr.map((item, index) => {
                return (<div className="renderbox" id={index}>
                    <div className="renderleftbox">
                        <span className='renderedspan'><h4>Address : </h4><h5>{item.address}</h5></span>
                        <span className='renderedspan'><h4>Name : </h4><h5>{item.name}</h5></span>
                        <span className='renderedspan'><h4>Age : </h4><h5>{item.age}</h5></span>
                    </div>
                    <div className="renderrightbox"><button className='center-button' >Add Student</button></div>
                </div>)
            })}
            <div className="renderbox">
                <div className="renderleftbox">
                    <h3>Address</h3>
                    <h3>Name</h3>
                </div>
                <div className="renderrightbox"><Link className='center-button' >Add Student</Link></div>
            </div> */}

        </div>
    )
}

export default ListDocs
