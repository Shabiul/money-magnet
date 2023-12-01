import React from 'react'
import { Link } from 'react-router-dom'
import Advice1 from "../assets/advice1.webp"
const Advice = ({savings}) => {
  // Magic text 
  let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3))
}
  return (
    <div>
    
  <section className="text-gray-600 body-font overflow-hidden">
    
  <div className="container px-5 pt-24 pb-12 mx-auto" bis_skin_checked="1">
    <div className="-my-8 divide-y-2 divide-gray-100" bis_skin_checked="1">
    
      <div className="py-8 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
       
        <div className="md:flex-grow" bis_skin_checked="1">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Avoid Impulse Purchases: </h2>
          <p className="leading-relaxed">Resist the urge to buy things on a whim. Before making a purchase, take some time to consider whether it's a necessity or a discretionary expense. Implement a "cooling-off" period to evaluate if the item is truly worth the cost, helping you make more informed spending decisions.</p>
          
        </div>
      </div>
      <div className="py-4 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
       
        <div className="md:flex-grow" bis_skin_checked="1">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Maintain Financial Distance:</h2>
          <p className="leading-relaxed"> Keep a clear distinction between your short-term and long-term finances. Create separate accounts or sub-accounts for different financial goals, such as an emergency fund, retirement savings, and discretionary spending. This separation can help you allocate money purposefully and avoid dipping into funds meant for your future.</p>
        
        </div>
      </div>
      <div className="py-4 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
     
        <div className="md:flex-grow" bis_skin_checked="1">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Use Credit Cards Wisely:</h2>
          <p className="leading-relaxed"> While credit cards offer convenience and rewards, use them judiciously. Don't rely on credit for everyday expenses if you can't pay off the balance in full each month. Accumulating credit card debt can lead to high-interest charges, impacting your overall financial health.</p>
          
        {/* <a className="text-indigo-600 inline-flex items-center mt-4">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a> */}
        </div>
      </div>
    
      <div className="py-4 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
       
        <div className="md:flex-grow" bis_skin_checked="1">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Monitor Your Credit Score (CIBIL Score):</h2>
          <p className="leading-relaxed"> Regularly check and maintain your credit score, such as the CIBIL score in India. A good credit score is essential for accessing favorable loan terms and financial opportunities. Ensure that you pay bills on time, manage your debts responsibly, and review your credit report for any errors or discrepancies</p>
          
        </div>
      </div>
      <div className="py-4 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
     
        <div className="md:flex-grow" bis_skin_checked="1">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Explore Tax-Saving Instruments: </h2>
          <p className="leading-relaxed">Investigate tax-saving opportunities like donation slips and other legitimate deductions. Charitable contributions can not only make a positive impact but also provide tax benefits. Consult a tax professional or use reputable financial software to ensure you are optimizing your tax-saving strategies.</p>
          
        
        </div>
      </div>
      
      <div className="py-4 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
     
        <div className="md:flex-grow" bis_skin_checked="1">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Choose Old vs New Tax Regime Wisely: </h2>
          <p className="leading-relaxed">When deciding between the new and old tax regimes, carefully evaluate your specific financial situation and goals, as the choice can significantly impact your tax liabilities and savings..</p>
          
        
        </div>
      </div>
      <img className="lg:h-96 w-full object-contain object-center" src={Advice1} alt="blog" />
    {/* Lets Go */}
      <div className='mtcbody'>
      <div className='mtc'>
  You Are Going to be the Next{" "}
  <span className="magic">
    <span className="magic-star">
      <svg viewBox="0 0 512 512">
      <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
      </svg>
    </span>
    <span className="magic-star">
      <svg viewBox="0 0 512 512">
      <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
      </svg>
    </span>
    <span className="magic-star">
      <svg viewBox="0 0 512 512">
      <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
      </svg>
    </span>
    <span className="magic-text">Millionaire!</span>
  </span>
  
</div>
      </div>
    </div>
  </div>
</section>
<div className="flex justify-center gap-5 pt-3">
        <Link to="/ef">
          <span className="text-white text-center bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover-bg-indigo-600 rounded text-lg">
            Prev
          </span>
        </Link>
        </div>
  </div>
  )
}

export default Advice