import group from "../assets/group.svg";
import image10 from '../assets/image 10.svg';
function Description(){
    return(
        <div className="items-center justify-center text-center pt-4 ">
            <div className="flex flex-row justify-center items-center  ">
                <div className="items-center justify-center text-center">
            <p className="text-lg flex flex-wrap pl-5 text-green-800"> FlowerChat is the Intelligent assistant for global flower industry</p>
            
                </div>
                <img  src={group} alt="group" />
            </div>
            
            <div className="items-center text-gray-700 pt-2 justify-center flex flex-row pr-9 ">
             <div>
                 <img className="w-20" src={image10} alt="image10" />
              </div>
                <div>
                 <p>it's an AI powered platform designed to be the</p>
                <p>single source of truth for flower farmers,florists</p>
                <p>floral designers,and buyers</p>
                </div>

            </div>
            
        </div>
    )
}

export default Description;