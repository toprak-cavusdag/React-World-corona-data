import { PropTypes } from "prop-types"

const MenuItem = ({title,active,onClick})=>{
    return(
    <li> 
        <a onClick={()=>{
            onClick(title)
        }} className={`block cursor-pointer border-none py-2 pr-4 pl-3 ${active? "text-rose-500": "text-gray-400"}  hover:text-rose-500 text-sm`}>{title}</a>            
    </li>)
}
 
MenuItem.proTypes={
    title:PropTypes.string,
    active:PropTypes.bool,
    onClick:PropTypes.func
    }
    
    MenuItem.defaultProps={
        title:"Corona App",
        active:false, 
        onClick:()=>null
    }
export default MenuItem