


import { useEffect, useState } from 'react';
import mystyle from './Supass.module.css'
import { useNavigate } from 'react-router';
import axios from 'axios';


const Supass = () => {

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

        axios.post("http://localhost:5000/storepass", { sname: name, semail: email }).then((success) => {
            console.log(success)
            if (success.data.result.length > 0) {
                const username = success.data.result[0].sname;
                const useremail = success.data.result[0].semail;
                navigate("/stordash/snpass", { state: { username, useremail } })
            } else {
                console.log("plz fill the valid data")
                setAlert(true)
            }
        }).catch((error) => {
            console.log(error)
        })



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

export default Supass;