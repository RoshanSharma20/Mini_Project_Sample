import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import GetStudent from "./components/GetStudent";
// import AddStudent from "./components/AddStudent";
// import Create from "./components/Create";
import ListDocs from "./components/ListDocs";
import Create from "./components/Create";
import UserSide from "./components/UserSide";
import UniversityPage from "./components/UniversityPage";
import CheckCredentials from "./components/CheckCredentials";

function App() {
  //for awaiting metamask connection
  // const [loading, setLoading] = useState(true)
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);


  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on('chainChanged', (chainId) => {
          window.location.reload();
        })

        window.ethereum.on("accountsChanged", async () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        //console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();

  }, []);

  const [userAccount, setUserAccount] = useState(null);
  const setAccountUser = () => {

  }

  return (
    <>
      {/* <div className='d-flex flex-row justify-content-evenly'>
        <h3>One-Stop-Student-Verification</h3>
        <h3>Account:{account ? account : "not connected"}</h3>
      </div>
      <br />
      <br />
      <AddStudent contract={contract} />
      <br />
      <br />
      <br />
      <GetStudent account={account} contract={contract} />
      <br />
      <br />
      <br />
      <Create account={account} contract={contract} /> */}
      {/* <ListDocs account={account} contract={contract} /> */}
      {account == "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" ?
        (<BrowserRouter>
          <Routes>
            <Route path="/" exact element={<UniversityPage account={account} contract={contract} setUserAccount={setUserAccount} />} />
            <Route path="/collegePage" exact element={<ListDocs account={account} contract={contract} setUserAccount={setUserAccount} />} />
            <Route path="/addCertificate" exact element={<Create contract={contract} account={account} />} />
            <Route path="/userSide" exact element={<UserSide contract={contract} account={account} />} />
          </Routes>
        </BrowserRouter>) : (<CheckCredentials account={account} contract={contract} setUserAccount={setUserAccount} />)
        // check credentials page should be there here but will check later how to correct it.
      }
    </>
  );
}

export default App;
