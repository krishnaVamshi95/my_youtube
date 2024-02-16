import ButtonList from "./ButtonList";
import VideoCardsContainer from "./VideoCardsContainer";

const MainContent = ()=>{
    return(
        <div >
            <div className="my-3">
                <ButtonList/>
            </div>
            <VideoCardsContainer/>
        </div>
    )
}
export default MainContent;