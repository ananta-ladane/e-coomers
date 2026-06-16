import { useState } from 'react';
import mystyle from './UpdatePass.module.css'
import { useNavigate } from 'react-router';
import axios from 'axios';


const UpdatePass = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    const getUname = (event) => {
        setName(event.target.value)
    }

    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getData = () => {
        console.log(name)
        console.log(email)

        axios.post("http://localhost:5000/verifyuser", {
            uname: name, uemail: email

        })
            .then((success) => {
                console.log(success)
                if (success) {
                    console.log(success)

                    navigate("userdash/unpass", {
                        // state: { uname, uemail }
                    });
                }
            }).catch((error) => {
                console.log(error)
            })
        console.log("data found")
        navigate("unpass")
    }

    return (
        <div className={mystyle.main}>

            <div className={mystyle.sub}>
                <h3>Update Password</h3>

                <div className={mystyle.sub1}>
                    <input type="text" placeholder='Enter your Username' onChange={getUname} />
                    <input type="email" placeholder='Enter your email' onChange={getEmail} />
                    <button className={mystyle.btn1} onClick={getData}>submit</button>
                </div>
            </div>
        </div>
    )
}

export default UpdatePass;