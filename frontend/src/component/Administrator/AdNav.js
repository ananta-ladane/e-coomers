import { useEffect, useState } from 'react';
import mystyle from './AdNav.module.css';
import { Link, useNavigate } from 'react-router';
import axios from 'axios';



const AdNav = () => {

    // const adata = useSelector((state) => { return state.alldata });

    const navigate = useNavigate();

    const [alert, setAlert] = useState(false);
    const [salert, setSalert] = useState(false);
    const [aalert, setAalert] = useState(false);

    const [add, setAdd] = useState(false);

    const [role, setRole] = useState("")
    const [data, setData] = useState("")

    //user data
    const [udata, setUdata] = useState([])
    // console.log(udata)

    //admindata
    const [addata, SetAddata] = useState([]);
    console.log(addata)

    //storedata
    const [sdata, setSdata] = useState([]);
    // console.log(sdata)

    const [vuser, setVuser] = useState({});
    const [vadmin, setVadmin] = useState({});
    const [vstore, setVstore] = useState({});


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

        // dispatcher(actions.addldata(all))

    }, [])


    const getOpt = () => {
        setAdd(true)
    }

    const close = () => {
        setAdd(false)
    }

    const getData = (event) => {
        setData(event.target.value)
    }

    const getRole = (event) => {
        setRole(event.target.value)
    }

    const getSearch = () => {

        if (role === "user") {
            setVuser(udata.find((u) => { return u.uname === data || u.uemail === data || u.uaddress === data }));
            console.log("get user page")



            setAlert(true)

        } else if (role === "store") {
            console.log("get store page")
            setVstore(sdata.find((s) => { return s.sname === data || s.semail === data || s.saddress === data }))
            setSalert(true)

        } else {
            console.log("get admin page")
            setVadmin(addata.find((a) => { return a.Name === data || a.Email === data || a.Address === data }))
            setAalert(true)
        }


    }


    const CloseData = () => {
        setAlert(false)
        setSalert(false)
        setAalert(false)
    }

    return (
        <div className={mystyle.main}>
            {
                add && <div className={mystyle.addnew}><p ><Link className={mystyle.lin} to="storeadd">Store</Link ></p> <p><Link className={mystyle.lin} to="useradd">User</Link></p> <p><Link className={mystyle.lin} to="adminadd">admin users</Link></p> <button className={mystyle.btn2} onClick={close}>close</button> </div>
            }

            {
                alert && (
                    <div className={mystyle.userd}>

                        <div className={mystyle.userd1}>
                            <p>{vuser.uname}</p>
                            <p>{vuser.uemail}</p>
                            <p>{vuser.uaddress}</p>
                        </div>

                        <button onClick={CloseData} className={mystyle.btn2}>Close</button>
                    </div>
                )
            }

            {
                salert && (
                    <div className={mystyle.userd}>

                        <div className={mystyle.userd1}>
                            <p>{vstore.sname}</p>
                            <p>{vstore.semail}</p>
                            <p>{vstore.saddress}</p>
                        </div>

                        <button onClick={CloseData} className={mystyle.btn2}>Close</button>
                    </div>
                )
            }


            {
                aalert && (
                    <div className={mystyle.userd}>

                        <div className={mystyle.userd1}>
                            <p>{vadmin.Name}</p>
                            <p>{vadmin.Email}</p>
                            <p>{vadmin.Address}</p>
                        </div>

                        <button onClick={CloseData} className={mystyle.btn2}>Close</button>
                    </div>
                )
            }

            <div className={mystyle.sub}>
                <div className={mystyle.nav}>
                    <p> E-commers </p>
                    <div className={mystyle.nav1}>
                        <form>
                            <input type='text' placeholder='search here...' onChange={getData} />
                            <select onChange={getRole}>
                                <option value="">select Role</option>
                                <option value="user">User</option>
                                <option value="store">Store</option>
                                <option value="admin">Admin</option>

                            </select>
                            <button type="button" className={mystyle.btn1} onClick={getSearch}>search</button>
                        </form>
                    </div>
                    <p onClick={getOpt}><i class="bi bi-plus-lg"></i> Add</p>
                </div>
            </div>
        </div>
    )
}

export default AdNav;