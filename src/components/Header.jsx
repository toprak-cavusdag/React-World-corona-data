import { useState } from "react"
import { PropTypes } from "prop-types"
import Logo from "./Logo"
import MenuItem from "./Menu-item"
import FlagIcon from '@mui/icons-material/Flag';
import ArticleIcon from '@mui/icons-material/Article';
import PublicIcon from '@mui/icons-material/Public';

const Header = ({activeTitle,onMenuChange})=>{

    const [MenuValue] =useState([
        {
            title:"Ülkelere Göre Virüs Değerleri",
            value:1,
            icon: <FlagIcon/>
        },

        {
            title:"Kayda Geçmiş Tüm Virüs Değerleri",
            value:2,
            icon: <ArticleIcon/>
        },

        {
            title:"Kıtalara Göre Virüs Değerleri",
            value:3,
            icon: <PublicIcon/>
        }
    ])
    const [_activeTitle, setActiveTitle]= useState(activeTitle)

    return(
        <nav className="bg-white shadow-md py-3 text-rose-500 flex items-center">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <Logo/>
                <div className="w-auto">
                    <ul className="flex-row flex mt-4 font-medium space-x-8">

                            {MenuValue.map((item)=>{
                                return (
                                    <MenuItem key={item.title} active={item.title === _activeTitle} onClick={(title) => {
                                        setActiveTitle(title)
                                        onMenuChange(item.value)
                                    }} title={item.title}/>
                                )
                            })}
                    </ul>
                    
                </div>
            </div>
        </nav>
    )

}


Header.proTypes={
    activeTitle:PropTypes.string,
    onMenuChange:PropTypes.func ,
    }
    
    Header.defaultProps={
        activeTitle:"Ülkelere Göre Corone Değerleri",
        onMenuChange:()=>null
    }

export default Header