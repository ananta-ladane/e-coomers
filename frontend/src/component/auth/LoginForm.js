
import { useEffect, useState } from 'react';
import mystyle from './Login.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router';




const LoginForm = () => {


    
    const navigate = useNavigate();

    const [empty, setEmpty] = useState(false);

    
    //user data
    const [udata, setUdata] = useState([])
    // console.log(udata)

    //admindata
    const [addata, SetAddata] = useState([]);
    console.log(addata)

    //storedata
    const [sdata, setSdata] = useState([]);
    // console.log(sdata)


    const [nvdata, setNvdata] = useState(false);

    const [uname, setUname] = useState("");
    const [uemail, setUemail] = useState("");
    const [upass, setUpass] = useState("");
    const [role, setRole] = useState("");

    const [vuser, setVuser] = useState([]);
    const [vadmin, setVadmin] = useState([]);
    const [vstore, setVstore] = useState([]);



    useEffect(() => {

        axios.get("http://localhost:5000/userlogin").then((success) => {
            console.log(success)
            setUdata(success.data);
            
        }).catch((error) => {
            console.log(error)
        })


        axios.get("http://localhost:5000/storlogin").then((success) => {
            console.log(success)
            setSdata(success.data)

          
        }).catch((error) => {
            console.log(error)
        })

        axios.get("http://localhost:5000/adminlogin").then((success) => {
            console.log(success)
            SetAddata(success.data)

           
        }).catch((error) => {
            console.log(error)
        })

        

    }, [])


    const getName = (event) => {
        setUname(event.target.value)
    }

    const getEmail = (event) => {
        setUemail(event.target.value)
    }

    const getPass = (event) => {
        setUpass(event.target.value)
    }

    const getRole = (event) => {
        setRole(event.target.value)
    }

    const getData = () => {

        if (!role) {

            console.log("plz select role")
        } else {
            if (role === "user") {
                setVuser(udata.find((u) => { return u.uname === uname && u.uemail === uemail && u.upass === upass }));

                if (!uname || !uemail || !upass) {
                    console.log("plz fill the ditiles")
                    setEmpty(true)
                } else if (!vuser) {
                    setNvdata(true)
                } else {
                    console.log("user login succefull")
                    console.log("data submit successfully...")
                    navigate("/userdash")
                }

            } else if (role === "store") {

                setVstore(sdata.find((s) => { return s.sname === uname && s.semail === uemail && s.spass === upass }))

                if (!uname || !uemail || !upass) {
                    console.log("plz fill the ditiles")
                    setEmpty(true)
                } else if (!vstore) {
                    setNvdata(true)
                } else {
                    console.log("store login succefull")
                    navigate("/stordash")
                }
            } else {
                setVadmin(addata.find((a) => { return a.Name === uname && a.Email === uemail && a.Password === upass }))

                if (!uname || !uemail || !upass) {
                    console.log("plz fill the ditiles")
                    setEmpty(true)
                } else if (!vadmin) {
                    setNvdata(true)
                } else {
                    console.log("admin login succefull")
                    console.log("data submit successfully...")
                    navigate("/admainpage")
                }
            }
        }


    }

    const close = () => {
        setEmpty(false)
        setNvdata(false)
    }

    return (
        <div className={mystyle.main}>


            {
                nvdata && <div className={mystyle.mt}><p>Plz enter the valid data</p><button className={mystyle.btn2} onClick={close}>ok</button></div>
            }
            {
                empty && <div className={mystyle.mt}><p>Plz fill the all detiles</p><button className={mystyle.btn2} onClick={close}>Ok</button></div>
            }
            <div className={mystyle.sub}>
                <h3>Login</h3>
                <div className={mystyle.sub1}>
                    <form>
                        <input type="text" placeholder="Enter your username" onChange={getName} />
                        <input type="email" placeholder="Enter your email" onChange={getEmail} />
                        <input type="password" placeholder="Enter  password" onChange={getPass} />
                        <select onChange={getRole}>
                            <option value="">Select Role</option>
                            <option value="user">User</option>
                            <option value="store"> Store</option>
                            <option value="admin">Admin</option>
                        </select>
                        <button type='button' className={mystyle.btn1} onClick={getData}>Login</button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default LoginForm;