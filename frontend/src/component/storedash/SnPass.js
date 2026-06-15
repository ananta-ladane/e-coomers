import { useState } from 'react';
import mystyle from './Snpass.module.css';


const   SnPass = () => {

    const [uname, setUname] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("")

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
        }

    }

    const close = () => {
        setVpassword(false)
    }

    return (
        <div className={mystyle.main}>
            {
                vpassword && <div className={mystyle.mt}><p>Password must contain 8+ characters, uppercase, lowercase, number and special character.</p><button className={mystyle.btn2} onClick={close}>Ok</button></div>
            }
            <div className={mystyle.sub}>
                <h3>Create new password</h3>
                <div className={mystyle.sub1}>
                    <input type="text" placeholder='Enter your Username' onChange={getUname} disabled />
                    <input type="email" placeholder='Enter your email' onChange={getEmail} disabled />
                    <input type="password" placeholder='create new password' onChange={getPass} />
                    <button className={mystyle.btn1} onClick={getData}>submit</button>
                </div>
            </div>

        </div>
    )
}

export default SnPass;