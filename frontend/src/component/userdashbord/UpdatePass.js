import { useState } from 'react';
import mystyle from './UpdatePass.module.css'
import { useNavigate } from 'react-router';


const UpdatePass = () => {

    const navigate = useNavigate();

    const [uname, setUname] = useState("");
    const [email, setEmail] = useState("");


    const getUname = (event) => {
        setUname(event.target.value)
    }

    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getData = () => {
        console.log(uname)
        console.log(email)
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