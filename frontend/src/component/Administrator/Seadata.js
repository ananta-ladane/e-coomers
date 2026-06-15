import { useSelector } from "react-redux";




const Seadata = () => {

    const data = useSelector((state) => { return state.allsearch })

    return (
        <div>

            {
                data.usdata((d) => {
                    return (
                        <div><p></p></div>
                    )
                })
            }
        </div>
    )
}

export default Seadata;