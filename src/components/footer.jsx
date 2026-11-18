import logo from "/src/assets/flowerchat.svg";

function Footer(){
    return( 
    
     <section className="bg-emerald-100 w-full overflow-x-hidden py-10 px-6">

    <div className="flex flex-col items-center max-w-6xl w-full mx-auto">
    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center">
      Start Your Flowerbot Journey Today
    </h2>
    <button className="mt-6 bg-[#1a8a3a] text-white text-sm font-medium px-6 py-2.5 rounded-full">
      Get Started for free
    </button>
  </div>

    <div className="flex flex-row flex-wrap justify-between items-start gap-8 max-w-6xl w-full mx-auto mt-16">

    <div className="flex flex-row items-center gap-2 w-full md:w-[25%]">
      <img src={logo} className="text-lg font-bold text-gray-900"/>
    </div>

    <div className="flex flex-row flex-wrap justify-between gap-8 w-full md:w-[70%]">

        <div className="flex flex-col text-sm text-gray-600 gap-3">
        <p className=" font-bold text-gray-900">Product</p>
        <p>Features</p>
        <p>Pricing</p>
        <p>Updates</p>
      </div>

        <div className="flex flex-col text-sm text-gray-600 gap-3">
        <p className="text-sm font-bold text-gray-900">Resources</p>
        <p>Knowledge Base</p>
        <p>Blog</p>
        <p>Webinars</p>
      </div>

        <div className="flex flex-col text-sm text-gray-600 gap-3">
        <p className=" font-bold text-gray-900">Company</p>
        <p>About</p>
        <p>Contact</p>
        <p>Careers</p>
      </div>

        <div className="flex flex-col text-sm text-gray-600 gap-3">
        <p className=" font-bold text-gray-900">Legal</p>
        <p>Privacy</p>
        <p>Terms Us</p>
        <p>Cookies</p>
      </div>

    </div>
  </div>

  <div className="max-w-6xl w-full mx-auto mt-10">
    <p className="text-xs text-gray-600">©2025 FlowerChat. All rights reserved</p>
  </div>

</section>
    )
}
export default Footer