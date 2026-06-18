import { useEffect, useState } from 'react';
import mystyle from './Ubody.module.css'
import axios from 'axios';
import { useSelector } from 'react-redux';



const Ubody = () => {

    const uid = useSelector((state) => { return state.user[0] });
    console.log(uid)

    const [sdata, setSdata] = useState([]);

    const [ratings, setRatings] = useState({});

    console.log(ratings)

    useEffect(() => {

        axios.get("http://localhost:5000/storlogin").then((success) => {
            console.log(success);
            setSdata(success.data)
        }).catch((error) => {
            console.log(error)
        })

    }, [])


    const updateRating = (sid, uid, star) => {
        setRatings(prev => ({
            ...prev,
            [`${sid}-${uid}`]:
                prev[`${sid}-${uid}`] === star ? 0 : star
        }))

        axios.post("http://localhost:5000/rating", {
            Uid: uid,
            Sid: sid,
            rating: star
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });
    };

    return (
        <div className={mystyle.main}>

            <h3>Stores list</h3>
            <div className={mystyle.sub}>
                {
                    sdata.map((s, index) => {

                        return (
                            <div key={index} className={mystyle.sub1}>
                                <p>{s.Sid}</p>
                                <p>{s.sname}</p>
                                <p>{s.semail}</p>
                                <p>{s.saddress}</p>
                                <div className={mystyle.starContainer}>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={mystyle.star}
                                            onClick={() => updateRating(s.Sid, uid, star)}
                                        >
                                            {star <= (ratings[`${s.Sid}-${uid}`] || 0)
                                                ? "⭐"
                                                : "☆"}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Ubody;