import { React, useEffect, useState } from 'react'
import "./listdocs.css"
import { Link } from "react-router-dom";


function CheckCredentials({ account, contract }) {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [arr, setArr] = useState([]);
    const [check, setCheck] = useState(false);

    const getInstitute = async () => {
        try {
            const data = await contract.displayCollege();
            setArr(data);
            console.log(data);

            // Loop over the data array to check if the current account exists
            for (let i = 0; i < data.length; ++i) {
                if (data[i].user === account) {
                    setCheck(true);
                    return; // Exit the loop early if the account is found
                }
            }
        } catch (e) {
            console.log("error:", e);
        }
    };

    useEffect(() => {
        getInstitute();
    }, [check]);

    return (
        <div>
            {check ? <Link to='/collegePage'></Link> : <Link to='/userSide'></Link>}
        </div>
    );
}


export default CheckCredentials
