import { React, useEffect, useState } from 'react'
import "./listdocs.css"
import { Link } from "react-router-dom";
import ListDocs from "./ListDocs"
import UserSide from "./UserSide";


function CheckCredentials({ account, contract , setUserAccount}) {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [arr, setArr] = useState([]);
    const [check, setCheck] = useState(false);
    const [currCollege,setCurrCollege] = useState(null);

    const getInstitute = async () => {
        try {
            const data = await contract.displayCollege() ;
            setArr(data);
            console.log(data);

            // Loop over the data array to check if the current account exists
            for (let i = 0; i < data?.length; ++i) {
                if (data[i].user === account) {
                    setCheck(true);
                    setCurrCollege(data[i].name)
                    console.log(data[i].name)
                    return; // Exit the loop early if the account is found
                }
            }
        } catch (e) {
            console.log("error:", e);
        }
    };

    useEffect(() => {
        getInstitute();
    }, [account,contract]);

    return (
        <div>
            {check ? <ListDocs account={account} contract={contract} setUserAccount={setUserAccount} currCollege={currCollege}/> : <UserSide contract={contract} account={account} />}
        </div>
    );
}


export default CheckCredentials
