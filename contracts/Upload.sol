// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/access/Ownable.sol";

// import console;

contract Upload is Ownable {
    //structure of institute
    struct institute {
        address user;
        string name;
    }
    //structure of student
    struct student {
        address user;
        string name;
        uint256 age;
    }
    //declaring a string of address that will be appended everytime when a new institute will be added
    institute[] public institutelist;
    //declaring a string of address that will be appended everytime when a new student will be added
    student[] public studentlist;

    //mapping of student to institute list
    mapping(address => string) public studentToInstitute;

    //maintianing count of all the registered students
    uint256 public totalcount = 0;

    //maintaining count of all the registered institutes
    uint256 public totalInstitute = 0;

    //creating a access structure defining the user and their access rights
    struct Access {
        address user;
        bool access; //true or false
    }

    //mapping to store each addresses ipfs url(can be multiple urls therefore string)
    mapping(address => string[]) ipfsurl;

    //mapping to store access list granted by each address to other addresses
    mapping(address => Access[]) accessList;

    //function to add institutes can be done only by the admin
    function addInstitute(address user, string memory name) external onlyOwner {
        institute memory inst = institute(user, name);
        institutelist.push(inst);
        totalInstitute++;
    }

    //function to add students can be done only by the admin
    function addStudent(
        address user,
        string memory name,
        uint256 age,
        string memory inst
    ) external onlyOwner {
        // require(msg.sender == owner, "you are not allowed");
        // console.log("error message");
        student memory std = student(user, name, age);
        studentToInstitute[user] = inst;
        studentlist.push(std);
        totalcount++;
    }

    function display() external view returns (student[] memory) {
        return studentlist;
    }

    //function to return the list of colleges
    function displayCollege() external view returns (institute[] memory) {
        return institutelist;
    }

    function addDetails(address useraddr, string memory url)
        external
        onlyOwner
    {
        ipfsurl[useraddr].push(url);
    }

    function getAddressUrl(address useraddr)
        external
        view
        returns (string[] memory)
    {
        return ipfsurl[useraddr];
    }

    function getUserDetails(address useraddr)
        external
        view
        returns (student memory)
    {
        student memory s = student(address(0), "unknown", 0);
        for (uint256 i = 0; i < studentlist.length; ++i) {
            if (studentlist[i].user == useraddr) {
                s = studentlist[i];
                return s;
            }
        }
        return s;
    }

    function getCount() external view returns (uint256) {
        return totalcount;
    }

    function getUser(uint256 index) external view returns (student memory) {
        return studentlist[index];
    }
}
