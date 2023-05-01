import React, { useState } from 'react'

function GetStudent({ contract, account }) {
    // let studentData;
    // const [loading, setLoading] = useState(false);
    const [student, setStudent] = useState({});
    // let acc = account;
    // let cont = contract;
    const fetchingdata = async () => {
        let studentData = await contract.getUserDetails(account);
        setStudent(studentData);
        // setLoading(true);
        // console.log(studentData);
        // console.log(studentData.age);
    }
    fetchingdata();
    // getStudentData();
    return (
        <>
            {(
                <center>
                    <div>
                        <h3>user Details</h3>
                        <h3>Account:{account}</h3>
                    </div>

                    <div>
                        <p>name:{student.name}</p>
                        <p>account:{student.user} </p>
                    </div>
                </center>
            )}
        </>
    )
}

export default GetStudent
