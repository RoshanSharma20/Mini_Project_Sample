import React, { useState } from 'react'

function NewGetStudents({ contract, inst }) {
    const [students, setStudents] = useState({});
    const fetchingdata = async () => {
        //the function to get the list of all students belonging to an instituion is getInstituteStudents() in the smart contract
        // where the parameter being passed is the address of the institute
        let studentsData = await contract.getInstituteStudents(inst);
        setStudents(studentsData);
        // setLoading(true);
        // console.log(studentData);
        // console.log(studentData.age);
    }
    fetchingdata();
    //rest of the code to display the students based on the achieved results
}

export default NewGetStudents