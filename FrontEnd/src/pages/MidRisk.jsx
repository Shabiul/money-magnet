import React from 'react'
import { Link } from 'react-router-dom'
import Mid1 from "../assets/mid1.webp"
import Mid2 from "../assets/mid2.png"
const MidRisk = ({savings}) => {

  let MidSavingAmt  = localStorage.getItem("savings");;
 

  if(isNaN(MidSavingAmt)){
    MidSavingAmt = savings;
  }
  return (<>
    <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 pt-24 pb-6 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  <center >Mid Risk Investment Plan </center>
                  </h2>
                  <p className="leading-relaxed">
                  The medium-risk investment category offers users the opportunity to strike a balance between safety and potential returns.
                  <br /> Invest amount
                    <span className="title-font font-medium sm:text-xl text-xl text-gray-900 bg-violet-200 px-1 rounded">
                      
                      ₹: {parseInt((MidSavingAmt-MidSavingAmt*0.1)*0.33)}
                    </span>
                    in the following ways:
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </section>
    <div>
      

      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 pt-24 pb-12 mx-auto" bis_skin_checked="1">
    <div className="-my-8 divide-y-2 divide-gray-100" bis_skin_checked="1">
      
      <div className="py-4 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
       
        <div className="md:flex-grow" bis_skin_checked="1">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Term Life Insurance</h2>
          <p className="leading-relaxed">Never buy endowment policies such as middlemen 6-10%. So, always have a high life cover of upto an amount which when kept in Low-Risk Investment Intrument can generate an amount close to ypur salary<br />
          <div className='pt-8'> Have a Term Life Insurance of cover 2 crore for which you have to pay an annual premium of </div>
         </p>
        
        </div>
      </div>
      <img className=" md:h-96 w-full object-contain object-center" src={Mid1} alt="blog" />
      <div className="pt-8 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
       
        <div className="md:flex-grow" bis_skin_checked="1">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Health Insurance</h2>
          <p className="leading-relaxed">Must have a health insurance which gives cover for whole family minimum cover should be of 20 Lakh per person</p>
        
        </div>
      </div>
      <img className="lg:h-96  w-full object-contain object-center" src={Mid2} alt="blog" />
      <div className="pt-8 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2" bis_skin_checked="1">
       
       
       <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
         <p>Here are Some options</p>
       </div>
       <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
         <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
           <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
             <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
             <path d="M22 4L12 14.01l-3-3"></path>
           </svg>
           <span className="title-font font-medium"><a href="https://www.policybazaar.com/health-insurance/health-insurance-india/">PB</a></span>
         </div>
       </div>
       <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
         <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
           <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
             <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
             <path d="M22 4L12 14.01l-3-3"></path>
           </svg>
           <span className="title-font font-medium"><a href="https://www.tataaig.com/health-insurance">TATA</a></span>
         </div>
       </div>
     </div>
        <div className="md:flex-grow" bis_skin_checked="1">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">SIP or Govt Related Schemes</h2>
          <p className="leading-relaxed">Goverment schemes such as K.V.P. or N.S.C. which could give high interest as high as 8% to 12%. 
          <br />Regular Investment for long term are advisable starting a S.I.P. or CHIT Funds would not be a bad option either.<br/>
          Trusted Sources are Mandatory
          </p>
          <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
         <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
           <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
             <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
             <path d="M22 4L12 14.01l-3-3"></path>
           </svg>
           <span className="title-font font-medium"><a href="https://www.india.gov.in/my-government/schemes">National portal of India</a></span>
         </div>
       </div>
       <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
         <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
           <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
             <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
             <path d="M22 4L12 14.01l-3-3"></path>
           </svg>
           <span className="title-font font-medium"><a href="https://financialservices.gov.in/">Ministry of Financial Services</a></span>
         </div>
       </div>
        </div>
      </div>
      
    </div>
  </div>
  
</section>
      <div className='flex justify-center gap-5'>
    <Link to="/low">
    <span className='text-white text-center bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
        Prev
      </span></Link>
    <Link to="/high">
    <span className='text-white text-center bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
        Next
      </span></Link>
      </div>
    </div>
    </>
    
  )
}

export default MidRisk