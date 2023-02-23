import { PropTypes } from "prop-types"

const Logo = ({logo,title})=>{
    return(
        <div className="flex items-center">
            <img src={logo} alt="Website logo" className="mr-3 h-20" />
            <span className="self-center text-md font-semibold whitespace-nowrap text-gray-300">
                {title}
            </span>
        </div>
    )
}

Logo.proTypes={
title:PropTypes.string,
logo:PropTypes.string
}

Logo.defaultProps={
    title:"Corona App",
    logo:"https://media.istockphoto.com/id/1238141855/tr/vekt%C3%B6r/coronavirus-metin-corona-vir%C3%BCs-logosu-enfeksiyon-sembol%C3%BC-covid-19-2019-ncov-stok-i%C3%A7in.jpg?s=170667a&w=0&k=20&c=SlO9wyBC7f7OhcbyLKVWBPZT5eYA5iUG6tj188H76mE="
}

export default Logo