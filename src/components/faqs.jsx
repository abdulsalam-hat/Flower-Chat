import minus from "../assets/minus.svg"
import plus from "../assets/plus.svg"


function Faqs(){
    return(
        <section className="bg-white w-full overflow-x-hidden py-8 md:py-10 px-4 md:px-6">

   <div className="flex flex-col items-center max-w-3xl w-full mx-auto">
    <h2 className="text-2xl md:text-4xl font-bold text-gray-900">FAQs</h2>
  </div>


  <div className="flex flex-col max-w-3xl w-full mx-auto mt-6 md:mt-8">
    <div className="flex flex-col py-5 md:py-6  border-gray-200">
      <div className="flex flex-row justify-between items-start gap-4">
        <p className="text-base md:text-lg font-medium text-gray-900 ">
          What is FlowerChat?
        </p>
        <button className=" w-6 h-6 pb-1 rounded-full border-2 text-green-700 flex font-bold place-items-center justify-center  text-2xl">
      -
    </button>
      </div>
      <p className="text-sm md:text-base text-gray-600  mt-3 ">
        FlowerChat is an AI-powered platform designed for the flower industry. It provides deep knowledge and data-driven insights to help flower farmers, growers, florists, and buyers make smarter decisions, from cultivation and pest control to market trends and floral design.
      </p>
    </div>
       <hr className="text-gray-300" />

    
    <div className="flex flex-col py-5 md:py-6 ">
      <div className="flex flex-row justify-between items-center gap-4">
        <p className="text-base md:text-lg font-medium text-gray-900 ">
          Who is Flowerbot for?
        </p>
       <button className=" w-6 h-6 pb-1 rounded-full border-2 text-green-700 flex font-bold place-items-center justify-center  text-2xl">
      +
    </button>
      </div>
    </div>
       <hr className="text-gray-300" />

    <div className="flex flex-col py-5 md:py-6">
      <div className="flex flex-row justify-between items-center gap-4">
        <p className="text-base md:text-lg font-medium text-gray-900 ">
          How accurate is the AI's information?
        </p>
       <button className=" w-6 h-6 pb-1 rounded-full border-2 text-green-700 flex font-bold place-items-center justify-center  text-2xl">
      +
    </button>
      </div>
    </div>
       <hr className="text-gray-300" />

    <div className="flex flex-col py-5 md:py-6 border-b border-gray-200">
      <div className="flex flex-row justify-between items-center gap-4">
        <p className="text-base md:text-lg font-medium text-gray-900 ">
          How does the AI Plant Doctor work?
        </p>
       <button className=" w-6 h-6 pb-1 rounded-full border-2 text-green-700 flex font-bold place-items-center justify-center  text-2xl">
      +
    </button>
      </div>
    </div>
       <hr className="text-gray-300" />

    <div className="flex flex-col py-5 md:py-6 border-b border-gray-200">
      <div className="flex flex-row justify-between items-center gap-4">
        <p className="text-base md:text-lg font-medium text-gray-900 ">
          What kind of questions can I ask Flowerbot?
        </p>
           <button className=" w-6 h-6 pb-1 rounded-full border-2 text-green-700 flex font-bold place-items-center justify-center  text-2xl">
      +
    </button>
      </div>
    </div>
       <hr className="text-gray-300" />

  </div>
</section>
    )
}

export default Faqs