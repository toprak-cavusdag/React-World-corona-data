import axios from "axios"
import { useState, useEffect } from "react"
import  {API_TOKEN,API_URL} from "../consts"
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import { tab } from "@testing-library/user-event/dist/tab";

const CoronaForCountinent = ()=>{
    const   [headers] = useState([
       {
        title:"Continent",
        value:"continent"
       },

       {
        title:"Active Cases",
        value:"activeCases"
       },

       {
        title:"New Cases",
        value:"newCases"
       },

       {
        title:"Total Cases",
        value:"totalCases"
       },

       {
        title:"Total Deaths",
        value:"totalDeaths"
       },

       {
        title:"new Deaths",
        value:"newDeaths"
       },

       {
        title:"Total Recovered",
        value:"totalRecovered"
       },
    ])
    const [loading,setLoading] =useState(false)
    const [data, setData] = useState([])

    const fetchData = async ()=>{
        setLoading(true);

        const response = await axios.get(`${API_URL}/continentData`,{headers:{
            authorization:API_TOKEN
        }})
        setLoading(false)
        setData(response.data.result)

    }

    useEffect(()=>{
        fetchData()
    },[])


    return(
        <div className="flex flex-col">
            <div className="inline-block min-w-full">
                <h1 className="text-2xl mb-4 font-bold text-gray-900">Corona Table</h1>
                <div className="overflow-hidden ">
                    {loading ? ( <div className="flex justify-center flex-col items-center  mt-10">
                            <p className="text-rose-500 font-bold spinner"><CoronavirusIcon style={{fontSize:"5rem"}}/></p>
                            <p className="text-rose-500 text-center ml-2">Loading...</p>

                        </div>)
                        : <table className="min-w-full">
                                <thead className="bg-rose-400">
                                    <tr>
                                        {headers.map((item,index)=>{
                                            return(
                                                <th key={item.value} className="py-3 px-6 text-xs font-medium text-white text-left">
                                                    {item.title}
                                                </th>
                                            )
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item)=>{
                                        return(
                                            <tr key={item.continent} className="bg-rose-200 border-b">
                                                {headers.map((subItem)=>{
                                                    return(
                                                        <td key={subItem.value} className="py-4 px-6 text-sm font-medium text-rose-700">
                                                            {item[subItem.value]}
                                                        </td>
                                                    )
                                                })}
                                            </tr>
                                        )
                                    })}
                                </tbody>
                        </table>
                            
                            
                            }
                </div>
            </div>
        </div>  
    )
}

export default CoronaForCountinent