import React from "react";
import { Link } from "react-router-dom";

const LowRisk = ({ savings }) => {
  // Ensure newSavings is treated as a number
  let lowsavingAmt = parseInt(localStorage.getItem("savings"));

  // Check if lowsavingAmt is a valid number, if not, set it to 0
  if (isNaN(lowsavingAmt)) {
    lowsavingAmt = savings;
  }

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 pt-24 pb-12 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    <center >Low Risk Investment Plan </center>
                  </h2>
                  <p className="leading-relaxed">
                  In the realm of low-risk investments, These investments are focused on capital preservation and stability. Consider placing your money in:
                    <span className="title-font font-medium sm:text-xl text-xl text-gray-900 bg-violet-200 px-1 rounded">
                      
                      ₹: {parseInt((lowsavingAmt -lowsavingAmt*0.1) * 0.33)}
                    </span>
                    <br /> Invest this amount in the following ways
                  </p>
                </div>
              </div>
              <div className="md:flex-grow text-center">
              <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2" bis_skin_checked="1">
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Fixed Deposits (FDs) for guaranteed returns.</span>
          </div>
        </div>
       
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Public Provident Fund (PPF)
.</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Digital Gold .</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">PSU Bonds</span>
          </div>
        </div>
      </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:flex-grow">
                  
                  <p className="leading-relaxed">
                  These Investments pay upto 6-8% ROI (return of Investment) annualy.They are preety safe and we would advice to have F.D. in AAA rated banks which would offer higher Interest rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    
      

      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 pt-24 pb-12 mx-auto" bis_skin_checked="1">
    <div className="-my-8 divide-y-2 divide-gray-100" bis_skin_checked="1">
      
      <div className="py-4 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
       
        <div className="md:flex-grow" bis_skin_checked="1">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">How can we do this investment</h2>
          <p className="leading-relaxed">Low-risk investments, such as Fixed Deposits and Public Provident Fund, are characterized by their safety and stability, making them ideal choices for risk-averse investors. These options offer guaranteed returns and are often associated with AAA-rated banks, ensuring higher interest rates, thus providing a secure avenue for preserving and growing your wealth.</p>
        
        </div>
      </div>
     
    </div>
  </div>
</section>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2" bis_skin_checked="1">
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Physically you can go to a Bank</span>
          </div>
        </div>
       
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Online Via an Account</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Zerodha</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Groww</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Upstox</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">FundsIndia</span>
          </div>
        </div>
        
      </div>

      <div className="flex justify-center gap-5 pt-3">
        <Link to="/ef">
          <span className="text-white text-center bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover-bg-indigo-600 rounded text-lg">
            Prev
          </span>
        </Link>
        <Link to="/mid">
          <span className="text-white text-center bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover-bg-indigo-600 rounded text-lg">
            Next
          </span>
        </Link>
      </div>
    </div>
  );
};

export default LowRisk;
