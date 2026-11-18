import group from "../assets/group.svg";
import image10 from '../assets/image 10.svg';
function Description(){
    return(
        <div className="items-center justify-center text-center pt-10 pr-20">
            <div className="flex flex-row justify-center items-center pl-30 ">
                <div className="items-center justify-center text-center">
            <p className="text-lg  text-green-800"> FlowerChat is the</p>
            <p className='text-green-800'> Intelligent assistant for global flower industry</p>
                </div>
                <img  src={group} alt="group" />
            </div>
            
            <div className="items-center text-gray-700 pt-2 justify-center flex flex-row ">
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