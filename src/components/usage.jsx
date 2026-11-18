import group from "../assets/group.png"
import chatbot from "../assets/chatbot.svg"
import chart from "../assets/chart.png"
import image from "../assets/image11.png"
function Usage(){
    return (

        <div className="pt-15 pb-8" ><section className="bg-gray-200 w-full overflow-x-hidden py-8 md:py-12 px-4 md:px-6">

  <div className="flex flex-col items-center max-w-6xl w-full mx-auto">
    <img src={group} alt="group" />
    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center">
      How Flowerbot Helps Your Business Grow
    </h2>
  </div>

  <div className="flex flex-col max-w-6xl w-full mx-auto mt-8 md:mt-10 gap-8 md:gap-10">


    <div className="flex flex-col bg-gray-50 rounded-4xl md:flex-row justify-between items-start md:items-center gap-6 md:gap-10">

      <div className="flex flex-col p-3  w-full md:w-[40%]">
        <h3 className="text-lg md:text-xl font-bold text-gray-900">
          AI Plant Doctor
        </h3>
        <p className="text-sm md:text-base text-gray-600 leading-6 mt-2 ">
          Upload photos for instant diagnosis and treatment plans
        </p>
      </div>


      <div className="flex flex-col w-full md:w-[55%]">
        <img src={chatbot} alt="chatbot" className="w-full rounded-2xl object-cover" />
      </div>

    </div>

    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10">

      <div className="flex flex-col p-3 bg-gray-50 rounded-3xl w-full md:w-[48%]">
        <h3 className="text-lg md:text-xl font-bold text-gray-900">
          Market Intelligence
        </h3>
        <p className="text-sm md:text-base text-gray-600 leading-6 mt-2 ">
          Real-time pricing data and consumer trend analysis
        </p>
        <img src={chart} alt="chart" className="w-full h-48 md:h-56 object-cover rounded-2xl mt-4" />
      </div>

      <div className="flex flex-col p-3 bg-gray-50 rounded-3xl w-full md:w-[48%]">
        <h3 className="text-lg md:text-xl font-bold text-gray-900">
          Knowledge Library
        </h3>
        <p className="text-sm md:text-base text-gray-600 leading-6 mt-2">
          Comprehensive guides for every floral professional
        </p>
        <img src={image} alt="image" className="w-full h-48 md:h-56 object-cover rounded-2xl mt-4" />
      </div>

    </div>

  </div>
</section>
</div>
    )
}

export default Usage