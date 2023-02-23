import axios from "axios";
import { useEffect, useState } from "react";
import {API_TOKEN, API_URL} from "../consts" 
import Card from "./Card";
import CoronavirusIcon from '@mui/icons-material/Coronavirus';


const CoronaForCountry = ()=>{
    const [data,setData] = useState([])
    const [queryText,setQueryText] = useState("")
    const [loading, setLoading]= useState(false)

    const fetchDate =async () =>{
        setLoading(true)   
        const response = await axios.get(`${API_URL}/countriesData?country=${queryText}`,{headers:{
            authorization:API_TOKEN,
        }})
        setData(response.data.result)
        setLoading(false)
    }

    useEffect(()=>{
        fetchDate()
    },[queryText])

    return(
        <>
            <div className="mb-4">
                <input type="text" value={queryText} onChange={(e)=>{setQueryText(e.target.value)}} 
                className="shadow-md rounded px-3 py-4 text-gray-700 w-full outline-none font-semibold" placeholder="Bir ülke arayın..."/>
            </div>

            {loading && (
                        <div className="flex justify-center flex-col items-center  mt-10">
                            <p className="text-rose-500 font-bold spinner"><CoronavirusIcon style={{fontSize:"5rem"}}/></p>
                            <p className="text-rose-500 text-center ml-2">Loading...</p>
                        </div>
                    )}

            <div className="grid grid-cols-3 gap-10 mt-16 ">
                   

                    {
                        data.map((item)=>{
                            return(
                                <Card key={item.country} country={item.country} totalCase={item.totalCases}  totalDeath={item.totalDeaths} totalRecovered={item.totalRecovered}/>
                            )
                        })
                    }
            </div>
        </>
    )
}

export default CoronaForCountry;