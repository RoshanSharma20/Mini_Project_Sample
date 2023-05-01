import React from 'react'

function AddStudent({ contract }) {
    const adduser = async () => {
        const name = document.querySelector(".name").value;
        console.log(name, ",");
        const age = document.querySelector(".age").value;
        console.log(age, ",");
        const address = document.querySelector(".address").value;
        console.log(address, ",");

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
            <input type="text" placeholder='enter name' className='name' required />
            <input type="Number" placeholder='enter age' className='age' required />
            <input type="text" placeholder='enter address' className='address' required />
            <button className='center button' onClick={adduser}>Add Student</button>
        </div>
    )
}

export default AddStudent
