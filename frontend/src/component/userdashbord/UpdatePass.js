import { useState } from 'react';
import mystyle from './UpdatePass.module.css'
import { useNavigate } from 'react-router';
import axios from 'axios';


const UpdatePass = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [alert, setAlert] = useState(false);

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

        }).then((success) => {
            console.log(success)
            const username = success.data.result[0].uname;
            const useremail = success.data.result[0].uemail;

            console.log(username)
            console.log(useremail)
            navigate("userdash/unpass", { state: { username, useremail } });

        }).catch((error) => {
            console.log(error)
        })
        console.log("data found")
        navigate("unpass")
    }

    const close = () => {
        setAlert(false)
    }

    return (
        <div className={mystyle.main}>

            {
                alert && <div className={mystyle.mt}><p>plz Enter the valid detiles</p><button className={mystyle.btn2} onClick={close}>Ok</button></div>
            }

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