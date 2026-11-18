import logo from "/src/assets/flowerchat.svg";
function Header() {
  return (
    
    <header className="  md:flex md:flex-row flex-col flex justify-between items-center pt-4  ">
        <img src={logo} alt="Logo" className="w-65   pl-10" />
      <div className="flex flex-row gap-5">
        <a className="text-black cursor-pointer" href="/knowledge">Knowledge base</a>
        <a className="text-black cursor-pointer" href="/plant-doctor">plant Doctor</a>
        <a className="text-black cursor-pointer" href="/market-insight">market insights</a>
        <a className="text-black cursor-pointer">pricing</a>
      </div>
      <div className=" md:flex md:gap-3 flex flex-wrap ">
        <button
          style={{ border: "solid" }}
          className="bg-white-500 text-black  px-3 py-1.5  rounded-full ">
          login
        </button>
        <button className="bg-green-500 text-white px-1.04 mr-2 rounded-full px-3 py-1 ">
          signUp
        </button>
      </div>
    </header>
    // </div>
  );
}

export default Header;
