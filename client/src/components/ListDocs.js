import { React, useEffect, useState } from 'react'
import "./listdocs.css"
import { Link } from "react-router-dom";


function ListDocs({ account, contract }) {
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
            await contract.addStudent(address, name, age);
            console.log("Student added");
        }
        catch (e) {
            console.log("error");
        }
    }

    const getStudents = async () => {
        try {
            const data = await contract.display();
            setArr(data);
            console.log(data);
        }
        catch (e) {
            console.log("error");
        }
    }
    useEffect(() => {
        getStudents();
    }, [])


    // const collectStudents = async () => {
    //     const totalStudents = await contract.getCount();
    //     let listedStudents = [];
    //     for (let i = 0; i < totalStudents; ++i) {
    //         const student = await contract.getUser(i);
    //         listedStudents.push(student);
    //     }
    //     setArr(listedStudents);
    // }

    // useEffect(() => {
    //     collectStudents();
    // })
    // collectStudents();
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
                    <div className="renderrightbox"><Link className='center-button' to={'/addCertificate' + item.user}>Add Certificate</Link></div>
                </div>)
            })}

        </div>
    )
}

export default ListDocs
