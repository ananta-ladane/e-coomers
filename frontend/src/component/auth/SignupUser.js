
import { useState } from 'react';
import mystyle from './Signup.module.css';
import { useNavigate } from 'react-router';
import axios from 'axios';




const SignupUser = () => {



    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [pass, setPass] = useState("");
    const [role, setRole] = useState("");

    const [empty, setEmpty] = useState(false);
    const [vname, SetVname] = useState(false);
    const [vaddre, setVaddre] = useState(false);
    const [vpassword, setVpassword] = useState(false);

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

    const getRole = (event) => {
        setRole(event.target.value)
    }


    const getData = () => {


        const vpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@%#]).{8,}$/;


        if (!role) {
            console.log("plz select the role")
        } else {

            if (role === "user") {
                if (!name || !email || !address || !pass) {
                    console.log("plz fill the ditiles")
                    setEmpty(true)
                } else if (name.length < 12) {
                    console.log("name is min 20 charater")
                    SetVname(true)
                } else if (address.length < 5) {
                    console.log("ok")
                    setAddress(true)
                } else if (!vpass.test(pass)) {
                    console.log("plz enter the strong pass word")
                    setVpassword(true)
                } else {

                    console.log("data submit successfully...")

                    console.log("user signup successfully")


                    axios.post("http://localhost:5000/usersignup", { uname: name, upass: pass, uemail: email, uaddress: address }).then((success) => {
                        console.log(success)
                    }).catch((error) => {
                        console.log(error)
                    })

                    navigate("/login")

                }

            }
        }
    }

    const close = () => {
        setEmpty(false);
        SetVname(false);
        setVaddre(false);
        setVpassword(false);
    }

    return (

        <div className={mystyle.main}>
            {
                empty && <div className={mystyle.mt}><p>Plz fill the all detiles</p><button className={mystyle.btn2} onClick={close}>Ok</button></div>
            }

            {
                vname && <div className={mystyle.mt}><p>plz enter the min 12 characters name</p><button className={mystyle.btn2} onClick={close}>Ok</button></div>
            }

            {
                vaddre && <div className={mystyle.mt}><p> plz entr the min 5 charaters</p><button className={mystyle.btn2} onClick={close}>Ok</button></div>
            }

            {
                vpassword && <div className={mystyle.mt}><p>Password must contain 8+ characters, uppercase, lowercase, number and special character.</p><button className={mystyle.btn2} onClick={close}>Ok</button></div>
            }
            <div className={mystyle.sub}>
                <h3>User Signup</h3>
                <div className={mystyle.sub1}>
                    <form>

                        <input type="text" placeholder="Enter your name" onChange={getName} />
                        <input type="email" placeholder="Enter your email" onChange={getEmail} />
                        <input type="text" placeholder="Enter your address" onChange={getAddress} />
                        <input type="password" placeholder="Create password" onChange={getPass} />
                        <select onClick={getRole}>
                            <option value="">Select Role</option>
                            <option value="user">User</option>

                        </select>
                        <button type='button' className={mystyle.btn1} onClick={getData}>SignUp</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupUser;