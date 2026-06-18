import { useState } from 'react';
import mystyle from './NewPass.module.css';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';


const NewPass = () => {

    const location = useLocation();

    const username = location.state.username;
    const useremail = location.state.useremail;

    const navigate = useNavigate();
    const [uname, setUname] = useState(username);
    const [email, setEmail] = useState(useremail);
    const [pass, setPass] = useState("")


    console.log(uname)
    console.log(email)

    const [succ, setSucc] = useState(false)
    const [vpassword, setVpassword] = useState(false);

    const getUname = (event) => {
        setUname(event.target.value)
    }

    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getPass = (event) => {
        setPass(event.target.value)
    }

    const getData = () => {

        const vpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@%#]).{8,}$/;

        if (!vpass.test(pass)) {
            setVpassword(true)
        } else {
            console.log(uname)
            console.log(email)
            console.log(pass)
            console.log("data found")


            axios.put("http://localhost:5000/passcheng", { uname: uname, uemail: email, upass: pass }).then((success) => {
                console.log(success)
            }).catch((error) => {
                console.log(error)
            })

            setSucc(true)



        }

    }

    const close = () => {
        setVpassword(false)
    }

    const Close = () => {
        setSucc(false)
        navigate("/userdash")
    }

    return (
        <div className={mystyle.main}>
            {
                vpassword && <div className={mystyle.mt}><p>Password must contain 8+ characters, uppercase, lowercase, number and special character.</p><button className={mystyle.btn2} onClick={close}>Ok</button></div>
            }

            {
                succ && <div className={mystyle.suc}><p>Password update successfully...!</p><button className={mystyle.btn2} onClick={Close}>ok</button></div>
            }
            <div className={mystyle.sub}>
                <h3>Create new password</h3>
                <div className={mystyle.sub1}>
                    <input type="text" placeholder='Enter your Username' value={username} onChange={getUname} disabled />
                    <input type="email" placeholder='Enter your email' value={useremail} onChange={getEmail} disabled />
                    <input type="password" placeholder='create new password' onChange={getPass} />
                    <button className={mystyle.btn1} onClick={getData}>submit</button>
                </div>
            </div>

        </div>
    )
}

export default NewPass;