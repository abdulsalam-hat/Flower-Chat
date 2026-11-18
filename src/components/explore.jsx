import group from "../assets/group1.png"
import rose from "../assets/rose.png"
import watercan from "../assets/watercan.png";
import littleflower from "../assets/littleflower.png"
import vase from "../assets/Flowervase.png"

function Explore(){
    return(
        <section className="pt-12 pb-5  bg-gray-100 ">
            <div className="flex  items-center justify-center  " >
                <img className=""  src={group} alt="group" />
            </div>
            <p className="text-black items-center flex justify-center font-bold text-5xl">Explore Key topics</p>


            <div className="max-w-7xl px-2 py-5 mx-auto overflow-x-hidden grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8 md:grid-cols-4">
                <div>
                    <div>
                        <img className="w-full object-cover rounded-2xl " src={rose} alt="rose" />
                    <div>
                    <h2 className="text-lg text-gray-900  mt-4 font-bold ">Post-Harvest Care and Handling</h2>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">Best practices for processing,hydration,cold chain management, a..</p>
                    </div>
                    </div>
                </div>
                
                     <div>
                    <img className='w-full object-cover' src={watercan} alt="watercan" />
                    <div>
                    <p className="text-xl font-bold text-gray-900 mt-4 ">Seasonal Growing Guides</p>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">Tailored checklists for planting,maintainance,and harvesting specific..</p>
                    </div>
                    </div>


                    <div>
                     <div >
                    <img className="w-full object-cover rounded-2xl" src={vase} alt="vase" />
                    <div>
                    <p className="text-xl mt-4 font-bold text-gray-900 ">Pest and Diseases Encyclopidia </p>
                    <div>
                        <p className="mt-2 text-sm text-gray-500 leading-relaxed">Diagnose issues quickly and find both organic and conventional solutions to.. </p>
                     
                    </div>
                    </div>
                    </div>
                    </div>

                     <div>
                     <img className="w-full object-cover rounded-2xl" src={littleflower} alt="littleflower" />
                    <div>
                    <p className="text-xl mt-4 font-bold text-gray-900">Flower quality & Sourcing </p>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">Quality grading standard,how to vet suppliers,and what questions to ask..</p>
                    </div>
                    </div>  
            </div>

            <div className="flex justify-center mt-3">
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 border-2 text-sm rounded-full px-6 py-2.5">view all topics  → </button>
            </div>
        </section>
    )
}

export default Explore 