import { PropTypes } from "prop-types"


const countryImage = "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1790000/koronavirus-getty-1791827.jpg"

const Card = ({country, totalCase,totalDeath,totalRecovered})=>{
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 group">
            <img src={countryImage} className="w-full brightness-50 group-hover:brightness-100" alt="Country" />
            <div className="px-6 py-5">
                <h1 className="text-2xl font-bold mb-2.5 text-rose-500">{country}</h1>

                <p className="text-base  text-gray-400"> 
                    <span className="font-semibold">Total Case:</span> {totalCase}
                </p>


                <p className="text-base  text-gray-400"> 
                    <span className="font-semibold">Total Death:</span> {totalDeath}
                </p>
            </div>
            <div className="px-6 pt-4 pb-3">
                <span className="inline-block bg-rose-100 rounded-full px-3 py-1 text-sm text-rose-700 font-semibolds">
                    {`#${totalRecovered}`}
                </span>
            </div>
        </div>
    )
}



Card.proTypes={
    country:PropTypes.string,
    totalCase:PropTypes.string,
    totalDeath:PropTypes.string,
    totalRecovered:PropTypes.string,
    
    }
    
    Card.defaultProps={
        country:"Value Not Found",
        totalCase:"Value Not Found",
        totalDeath:"Value Not Found",
        totalRecovered:"Value Not Found"
    }


export default Card