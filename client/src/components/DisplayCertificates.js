import React from 'react'
import { useState, useEffect } from 'react'
import { ethers } from "ethers"


function DisplayCertificates({ contract, account }) {
    const [listedItems, setListedItems] = useState({});
    const loadListedCertificates = async () => {
        let listedItems = [];
        const certificates = await getAddressUrl(account);
        for (let i = 0; i < certificates.length; ++i) {
            const uri = certificates[i];
            const new_uri = uri.replace("https://ipfs.infura.io/ipfs/", "https://tftm.infura-ipfs.io/ipfs/");
            const response = await fetch(new_uri);
            const metadata = await response.json();
            let item = {
                image: metadata.image,
                name: metadata.name,
                description: metadata.description
            }
            listedItems.push(item);
            console.log(item);
        }
        setListedItems(listedItems);
    }

    useEffect(() => {
        loadListedCertificates()
    }, [])
    return (
        <div>
            <h3>Displaying the url of certificates</h3>

        </div>
    )
}

export default DisplayCertificates
