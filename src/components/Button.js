import { useState } from "react"

const Button = ({name}) => {
    const [isActive,setIsActive] = useState('All')
    const handleActive = (name)=>{
        setIsActive(name)
    }
  return (
    <button className={ ` ${isActive !==name ? 'bg-slate-200 text-black': 'bg-black text-white'}  mx-2  px-5 py-1 rounded-lg`} onClick={()=>handleActive(name)}>{name}</button>
  )
}

export default Button