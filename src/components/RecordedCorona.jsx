import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL,API_TOKEN } from "../consts"
import CoronavirusIcon from '@mui/icons-material/Coronavirus';


const RecordedCorona = ()=>{
    const [loading, setLoading]=useState(false)
    const [data,setData] = useState(null)

   
    const fetchData =async () =>{
        setLoading(true)   
        const response = await axios.get(`${API_URL}/totalData`,{headers:{
            authorization:API_TOKEN,
        }})
        setData(response.data.result)
        setLoading(false)
    }


    useEffect(()=>{
        fetchData()
    },[])


    return(
        <div className="flex flex-col items-center justify-start ">
                {loading ? ( <div className="flex justify-center flex-col items-center  mt-10">
                            <p className="text-rose-500 font-bold spinner"><CoronavirusIcon style={{fontSize:"5rem"}}/></p>
                            <p className="text-rose-500 text-center ml-2">Loading...</p>
                        </div>) :<>
                 <h1 className="text-6xl text-gray-900 mb-4"><span className="font-bold">Total case: </span> {data?.totalCases}</h1>

                 <h1 className="text-6xl text-gray-800 mb-4"><span className="font-bold">Total Deaths: </span> {data?.totalDeaths}</h1>

                 <h1 className="text-6xl text-gray-700 mb-4"><span className="font-bold">Total Recovered: </span> {data?.totalRecovered}</h1>
              
                </>}
        </div>
    )
}

export default RecordedCorona