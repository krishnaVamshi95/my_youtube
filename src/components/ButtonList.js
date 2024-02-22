import Button from "./Button";

const ButtonList = ()=>{
    const buttons = ['All','Sports','Music','Live','Mixes','Jukebox','JavaScript','Java',"Gaming",'Recently Uploaded']
    return<div className="ml-2 flex overflow-x-scroll">
        {
            buttons.map((text,i)=><Button key={i} name={text}/>)
        }
    </div>
}

export default ButtonList;