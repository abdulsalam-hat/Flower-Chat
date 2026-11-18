import checkmark from "../assets/checkmark.svg"

function Amount(){
    return(
        <section className=" overflow-x-hidden  py-10 px-6 mt-9 ">
            <div className="flex  items-center justify-center max-w-6xl w-full mx-auto ">
                <h2 className="text-4xl font-semibold ">Pricing</h2>
            </div>

            <div className="mt-5 max-w-6xl w-full mx-auto flex flex-row items-center justify-between ">
                <p className="font-medium text-2xl">Upgrade your plan</p>

                <div className="bg-gray-500 flex flex-row rounded-full ">
                    <span className="px-4 py-1.5 text-xs rounded-full  text-medium "> Annual-20%</span>
                    <span className="px-4 py-1.5 bg-white rounded-full text-xs  font-medium"> Monthly</span>
                </div>
            </div>


            <div className="flex flex-row flex-wrap gap-4 max-w-6xl w-full mx-auto mt-8">

                <div className="flex flex-col bg-white rounded-3xl w- sm:w-[30%]  pt-8 lg:w-[21%]">
                    <p className="text-center text-lg font-semibold text-gray-700">Free</p>
                    <p className="text-center text-4xl font font-medium text-gray-900">$0 <span className="font-normal text-lg text-gray-400">/month</span></p>
                    <p className="text-center text-gray-900 font-medium  mt-2">Intelligence for everyday tasks</p>
                    <button className="mt-4 bg-green-600 text-white  font-medium  px-3 py-2 rounded-full mx-auto cursor-pointer w-50 ">Get started</button>
                    <div className="flex flex-col gap-3 mt-6 text-xs text-gray-600">
                            <p className="flex flex-row whitespace-wordwrap wrap-break-word "><img className="w-5 m-3" src={checkmark} alt="checkmark" /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className="flex flex-row "><img className="w-5 m-3" src={checkmark} alt="checkmark" />plus coaching at 3.00$ Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                    </div>
                </div>

                <div className="flex flex-col bg-white rounded-3xl w- sm:w-[30%]  pt-8 lg:w-[24%]">
                    <p className="text-center text-lg font-semibold text-gray-700">Pro</p>
                    <p className="text-center text-4xl font font-medium text-gray-900">$50 <span className="font-normal text-lg text-gray-400">/month</span></p>
                    <p className="text-center text-gray-900 font-medium  mt-2">Intelligence for everyday tasks</p>
                    <button className="mt-4 bg-green-600 text-white  font-medium  px-3 py-2 rounded-full mx-auto cursor-pointer w-50 ">Get started</button>
                    <div className="flex flex-col gap-3 mt-6 text-xs text-gray-600">
                        <p className="p-1.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore error aperiam minima rerum </p>
                            <p className="flex flex-row whitespace-wordwrap wrap-break-word "><img className="w-5 m-3" src={checkmark} alt="checkmark" /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className="flex flex-row "><img className="w-5 m-3" src={checkmark} alt="checkmark" />plus coaching at 3.00$ Lorem ipsum dolor sit amet consectetur </p>
                            <p className="flex flex-row "><img className="w-5 m-3" src={checkmark} alt="checkmark" />plus coaching at 3.00$ Lorem ipsum dolor sit amet consectetur </p>
                    </div>
                </div>

                <div className="flex flex-col bg-white rounded-3xl w- sm:w-[30%]  pt-8 lg:w-[25%]">
                    <p className="text-center text-lg font-semibold text-gray-700">Plus</p>
                    <p className="text-center text-4xl font font-medium text-gray-900">$500 <span className="font-normal text-lg text-gray-400">/month</span></p>
                    <p className="text-center text-gray-900 font-medium  mt-2">Intelligence for everyday tasks</p>
                    <button className="mt-4 bg-green-600 cursor-pointer text-white  font-medium  px-3 py-2 rounded-full mx-auto w-50 ">Get started</button>
                    <div className="flex flex-col gap-3 mt-6 text-xs text-gray-600">
                        <p className="p-1.5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae obcaecati fuga ipsum perspicia</p>
                            <p className="flex flex-row whitespace-wordwrap wrap-break-word pb-10 "><img className="w-5 m-3" src={checkmark} alt="checkmark" /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className="flex flex-row pb-8 "><img className="w-5 m-3" src={checkmark} alt="checkmark" />plus coaching at 3.00$ Lorem ipsum dolor sit amet consectetur, adipisicing elit.  </p>
                    </div>
                </div>

                <div className="flex flex-col bg-white rounded-3xl w- sm:w-[30%]  pt-8 lg:w-[24%]">
                    <p className="text-center text-lg font-semibold text-gray-700">Organisation</p>
                    <p className="text-center text-4xl font font-medium text-gray-900">$5000 <span className="font-normal text-lg text-gray-400">/month</span></p>
                    <p className="text-center text-gray-900 font-medium  mt-2">Intelligence for everyday tasks</p>
                    <button className="mt-4 bg-green-600 text-white  font-medium  px-3 py-2 rounded-full mx-auto cursor-pointer w-50 ">Get started</button>
                    <div className="flex flex-col gap-3 mt-6 text-xs text-gray-600">
                            <p className="flex flex-row "><img className="w-5 m-3" src={checkmark} alt="checkmark" />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit corrupti explicabo est ipsum earum, minus ratione mollitia. Quas accusantium fugiat  </p>
                    </div>
                </div>

                
                
            </div>
            
          
        </section>
    )
}

export default Amount