
import mystyle from './Sbody.module.css';


const Sbody = () => {
    return (
        <div className={mystyle.main}>
            <div className={mystyle.sub}>
                <div className={mystyle.subdi1}>
                    <p>Reating summited users</p>
                </div>
                <div className={mystyle.subdi2}>
                    <p>Averge Reating</p>
                    <h3>4.1</h3>
                </div>
            </div>
        </div>
    )
}

export default Sbody;