import elana from "../assets/elana.svg"


function Review(){
    return(
        <section className="bg-white w-full overflow-x-hidden py-10 px-6">
  <div className="flex flex-col items-center max-w-6xl w-full mx-auto">
    <h2 className="text-2xl md:text-5xl font-semibold text-gray-900 text-center">
      Trusted by Floral Professionals Worldwide
    </h2>
  </div>

  <div className="flex flex-row items-center gap-3 max-w-6xl w-full mx-auto mt-8">

    <button className=" w-10 h-10 rounded-full bg-[#eef6f1] flex items-center justify-center text-gray-700 text-lg">
      ←
    </button>

    <div className="flex flex-row flex-wrap justify-between gap-4 w-full">

      <div className="flex flex-col justify-between bg-[#eef6f1] rounded-2xl p-6 w-full md:w-[31%] ">
        <p className="text-sm  text-gray-700">
          FlowerChat's AI Plant Doctor saved my entire lavender crop from a fungal infection I couldn't identify. I uploaded a photo, and within minutes, I had a diagnosis and a step-by-step organic treatment plan. It's like having a master gardener in my pocket 24/7. This platform has already paid for itself ten times over.
        </p>

        <div className="flex flex-row items-center gap-3 mt-8">
          <img src={elana} alt="elana" className="w-12 h-12 rounded-full object-cover" />
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-900">Elena Vargas</p>
            <p className="text-xs text-gray-600">Owner of 'Sunshine Meadow Farm', Zone 7b</p>
            <p>⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between bg-[#eef6f1] rounded-2xl p-6 w-full md:w-[31%] ">
        <p className="text-sm  text-gray-700">
          FlowerChat's AI Plant Doctor saved my entire lavender crop from a fungal infection I couldn't identify. I uploaded a photo, and within minutes, I had a diagnosis and a step-by-step organic treatment plan. It's like having a master gardener in my pocket 24/7. This platform has already paid for itself ten times over.
        </p>
        <div className="flex flex-row items-center gap-3 mt-8">
          <img src={elana} alt="elana" className="w-12 h-12 rounded-full object-cover" />
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-900">Elena Vargas</p>
            <p className="text-xs text-gray-600">Owner of 'Sunshine Meadow Farm', Zone 7b</p>
            <p>⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between bg-[#eef6f1] rounded-2xl p-6 w-full md:w-[31%] ">
        <p className="text-sm  text-gray-700">
          FlowerChat's AI Plant Doctor saved my entire lavender crop from a fungal infection I couldn't identify. I uploaded a photo, and within minutes, I had a diagnosis and a step-by-step organic treatment plan. It's like having a master gardener in my pocket 24/7. This platform has already paid for itself ten times over.
        </p>
        <div className="flex flex-row items-center gap-3 mt-8">
          <img src={elana} alt="Elana" className="w-12 h-12 rounded-full object-cover" />
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-900">Elena Vargas</p>
            <p className="text-xs text-gray-600">Owner of 'Sunshine Meadow Farm', Zone 7b</p>
            <p>⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </div>

    </div>
    <button className=" w-10 h-10 rounded-full bg-[#1a8a3a] flex items-center justify-center text-white text-lg">
      →
    </button>

  </div>
</section>
    )
}

export default Review