import { React, useEffect, useState } from 'react'
import "./listdocs.css"
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
        }
        catch (e) {
            console.log(e);
        }
    }

    const getInstitute = async () => {
        try {
            const data = await contract.displayCollege();
            setArr(data);
            console.log(data);
        }
        catch (e) {
            console.log("error");
        }
    }
    useEffect(() => {
        getInstitute();
    }, [])
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
                <h1>Visvesvaraya Technical University</h1>
            </div>
            <div id="osh">Visvesvaraya Technological University, is a collegiate public state university in Belagavi, Karnataka established by the Government of Karnataka. It is one of the largest Technological Universities in India with 26 years of Tradition of excellence in Engineering & Technical Education, Research and Innovations.</div>
            <div >
                <center><h3>College Registeration</h3></center>
                <form action="" className="fdata">
                    <input type="text" placeholder='enter college name' className='name' required value={name} onChange={(e) => { setName(e.target.value) }} />
                    <input type="text" placeholder='enter college address' className='address' required value={address} onChange={(e) => { setAddress(e.target.value) }} />
                    <button className='center button' onClick={addInstitute}>Add College</button>
                </form>
            </div>
            {arr.length > 0 && arr.map((item) => {
                console.log('----------------');
                console.log(item);
                console.log(item.user);
                console.log(typeof (item));
                return (<div className="renderbox" key={item.user}>
                    <div className="renderleftbox">
                        <span className='renderedspan'><h4>Address : </h4><h5>{item.user}</h5></span>
                        <span className='renderedspan'><h4>Name : </h4><h5>{item.name}</h5></span>
                        {/* <span className='renderedspan'><h4>Age : </h4><h5>{item[2]}</h5></span> */}
                    </div>
                    {/* <div className="renderrightbox"><Link className='center-button' to='/addCertificate'><button onClick={() => {
                        localStorage.setItem("user_acc", item.user);
                    }}>Add Certificate</button></Link></div> */}
                </div>)
            })}
        </div>
    )
}

export default UniversityPage
