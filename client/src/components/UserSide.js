import React, { useState, useEffect } from 'react'

// function UserSide({ contract, account }) {
//     const [student, setStudent] = useState({});
//     const fetchingdata = async () => {
//         let studentData = await contract.getUserDetails(account);
//         setStudent(studentData);
//     }

//     fetchingdata();
//     const [listedItems, setListedItems] = useState({});
//     const loadListedCertificates = async () => {
//         let listedItems = [];
//         const certificates = await contract.getAddressUrl(account);
//         for (let i = 0; i < certificates.length; ++i) {
//             const uri = certificates[i];
//             const new_uri = uri.replace("https://ipfs.infura.io/ipfs/", "https://tftm.infura-ipfs.io/ipfs/");
//             const response = await fetch(new_uri);
//             const metadata = await response.json();
//             let item = {
//                 image: metadata.image,
//                 name: metadata.name,
//                 description: metadata.description
//             }
//             listedItems.push(item);
//             console.log(item);
//         }
//         setListedItems(listedItems);
//     }
//     useEffect(() => {
//         loadListedCertificates()
//     }, []);
//     return (
//         <>
//             {(
//                 <center>
//                     <div>
//                         <h3>user Details</h3>
//                         <h3>Account:{account}</h3>
//                     </div>

//                     <div>
//                         <p>name:{student.name}</p>
//                         <p>account:{student.user} </p>
//                     </div>
//                 </center>
//             )}

// {listedItems.length > 0 && listedItems.map((item) => {
//     return (
//         <>
//             <img src={item.image} alt="" />
//             <h1>{item.name}</h1>
//             <h1>{item.description}</h1>
//         </>
//     )
// })}
//         </>

//     )
// }

// export default UserSide




// --------------------------------------------------------------------------------------

// import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';

export default function EditButton({ contract, account }) {
    const [student, setStudent] = useState({});
    const fetchingdata = async () => {
        let studentData = await contract.getUserDetails(account);
        setStudent(studentData);
    }

    const [listedItems, setListedItems] = useState({});
    const loadListedCertificates = async () => {
        let listedItems = [];
        const certificates = await contract.getAddressUrl(account);
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

    loadListedCertificates();
    fetchingdata();
    return (
        <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="9" xl="7">
                        <MDBCard>
                            <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                        alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                                    <MDBBtn outline color="dark" style={{ height: '36px', overflow: 'visible' }}>
                                        Edit profile
                                    </MDBBtn>
                                </div>
                                <div className="ms-3" style={{ marginTop: '130px' }}>
                                    <MDBTypography tag="h5">{student.name}</MDBTypography>
                                    <MDBCardText>{account}</MDBCardText>
                                </div>
                            </div>
                            <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                                <div className="d-flex justify-content-end text-center py-1">
                                    <div>
                                        <MDBCardText className="mb-1 h5">253</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">Photos</MDBCardText>
                                    </div>
                                    <div className="px-3">
                                        <MDBCardText className="mb-1 h5">1026</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                                    </div>
                                    <div>
                                        <MDBCardText className="mb-1 h5">478</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                                    </div>
                                </div>
                            </div>
                            <MDBCardBody className="text-black p-4">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1">About</p>
                                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                        <MDBCardText className="font-italic mb-1">Web Developer</MDBCardText>
                                        <MDBCardText className="font-italic mb-1">Lives in New York</MDBCardText>
                                        <MDBCardText className="font-italic mb-0">Photographer</MDBCardText>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <MDBCardText className="lead fw-normal mb-0">Certificates</MDBCardText>
                                    {/* <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText> */}
                                </div>
                                {/* <MDBRow>
                                    <MDBCol className="mb-2">
                                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                                            alt="image 1" className="w-100 rounded-3" />
                                    </MDBCol>
                                    <MDBCol className="mb-2">
                                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                            alt="image 1" className="w-100 rounded-3" />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className="g-2">
                                    <MDBCol className="mb-2">
                                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                                            alt="image 1" className="w-100 rounded-3" />
                                    </MDBCol>
                                    <MDBCol className="mb-2">
                                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                                            alt="image 1" className="w-100 rounded-3" />
                                    </MDBCol>
                                </MDBRow> */}
                                <MDBRow>
                                    <MDBCol className="mb-2">
                                        {listedItems.length > 0 && listedItems.map((item) => {
                                            return (
                                                <>
                                                    <img src={item.image} alt="" />
                                                    <h1>{item.name}</h1>
                                                    <h1>{item.description}</h1>
                                                </>
                                            )
                                        })}
                                        <h3>No More Certificates found</h3>
                                    </MDBCol>
                                </MDBRow>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}