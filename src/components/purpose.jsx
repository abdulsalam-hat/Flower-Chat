import hero from '../assets/hero.avif';
import hero1 from '../assets/hero-1.avif';
import hero2 from '../assets/hero-2.avif';


function Purpose() {
    return(
        <div className='flex flex-col md:flex-row mx-auto overflow-x-hidden  text-black justify-between items-center md:gap-10 pt-10  '>
           <div className='text-xl'>
              <div className='pb-5'>
                <p className='font-bold'>For Growers & Farmers</p>
                <p>Expert cultivation guidiance,pest control,and yield optimization</p>
              </div>
           <img className='w-250 h-auto rounded-4xl' src={hero} alt="hero" />
           </div>
            <div>
                <div className='text-xl'>                
                <p className='font-bold '>For Florists & Designers</p>
                <p className='pb-5'>Trend and insights,arrangement techniques,and product knowledge</p></div>
                <img className='w-250 h-auto rounded-4xl' src={hero2} alt="hero" />
            </div>

            <div>
                <div className='text-xl'>
                <p className='font-bold'>For Buyers & Retailers</p>
                <p className='pb-5'>Reliable sourcing,market insights,and supply chain optimization</p></div>
                <img className='w-250 h-auto rounded-4xl' src={hero1} alt="hero" />
            </div>
        </div>
    )
}

export default Purpose
