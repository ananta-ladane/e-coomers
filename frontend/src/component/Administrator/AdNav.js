import { useState } from 'react';
import mystyle from './AdNav.module.css';
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/store';


const AdNav = () => {

    // const adata = useSelector((state) => { return state.alldata });

    const dispacher = useDispatch();

    const [alert, setAlert] = useState(false)

    const [add, setAdd] = useState(false);

    const [role, setRole] = useState("")
    const [data, setData] = useState("")

    // const [vuser, setVuser] = useState([]);
    // const [vadmin, setVadmin] = useState([]);
    // const [vstore, setVstore] = useState([]);




    const getOpt = () => {
        setAdd(true)
    }

    const close = () => {
        setAdd(false)
    }

    const getData = (event) => {
        getData(event.target.value)
    }

    const getRole = (event) => {
        getRole(event.target.value)
    }

    const getSearch = () => {

        // if (role === "user") {
        //     setVuser(adata.udata.find((u) => { return u.uname === data || u.uemail === data || u.upass === data }));

        // } else if (role === "admin") {
        //     setVadmin(adata.addata.find((a) => { return a.Name === data || a.Email === data || a.Password === data }))
        // } else {
        //     setVstore(adata.sdata.find((s) => { return s.sname === data || s.semail === data || s.spass === data }))
        // }

        setAlert(true)



    }


    const Close = () => {
        setAlert(false)
    }

    return (
        <div className={mystyle.main}>
            {
                add && <div className={mystyle.addnew}><p ><Link className={mystyle.lin} to="storeadd">Store</Link ></p> <p><Link className={mystyle.lin} to="useradd">User</Link></p> <p><Link className={mystyle.lin} to="adminadd">admin users</Link></p> <button className={mystyle.btn2} onClick={close}>close</button> </div>
            }

            {
                alert && <div><div></div> <button onClick={Close}>close</button></div>
            }

            {

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
                            <button className={mystyle.btn1}>search</button>
                        </form>
                    </div>
                    <p onClick={getOpt}><i class="bi bi-plus-lg"></i> Add</p>
                </div>
            </div>
        </div>
    )
}

export default AdNav;