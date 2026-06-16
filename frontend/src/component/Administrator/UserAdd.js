import { useState } from 'react';
import mystyle from './UserAdd.module.css'
import axios from 'axios';




const UserAdd = () => {


    const [succ, setSucc] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [pass, setPass] = useState("");

    const getName = (event) => {
        setName(event.target.value)
    }

    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getAddress = (event) => {
        setAddress(event.target.value)
    }

    const getPass = (event) => {
        setPass(event.target.value)
    }


    const getData = () => {


        axios.post("http://localhost:5000/usersignup", { uname: name, upass: pass, uemail: email, uaddress: address }).then((success) => {
            console.log(success)
        }).catch((error) => {
            console.log(error)
        })
        console.log("data add successfully")

        setSucc(true)
    }


    const close = () => {
        setSucc(false)
    }

    return (
        <div className={mystyle.main}>
            {
                succ && <div className={mystyle.suc}><p>Data add successfully...!</p><button className={mystyle.btn2} onClick={close}>ok</button></div>
            }
            <div className={mystyle.sub}>
                <h3>Add User</h3>
                <div className={mystyle.sub1}>
                    <input type="text" placeholder="Enter your name" onChange={getName} />
                    <input type="email" placeholder="Enter your email" onChange={getEmail} />
                    <input type="text" placeholder="Enter your address" onChange={getAddress} />
                    <input type="password" placeholder="Create password" onChange={getPass} />
                    <button className={mystyle.btn1} onClick={getData}>Add Data</button>
                </div>

            </div>
        </div>
    )
}


export default UserAdd;