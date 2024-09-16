import UseFetch from "./UseFetch"
import './FetchData.css'

const FetchYogaData = () => {
    const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152')
    return (
        <>
            <ul className="list_data_main">
                {data && data.map((yoga) => (
                    <li className="list_data">
                        <h3>{yoga.name}</h3>
                        <p><strong>Benefits: </strong>{yoga.benefits}</p>
                        <p><strong>Time Duration: </strong>{yoga.time_duration}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default FetchYogaData