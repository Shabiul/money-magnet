import React from 'react'
import { Link } from 'react-router-dom';

const HighRisk = ({savings}) => {
  let highSavingAmt = localStorage.getItem("savings");
  if(isNaN(savings)){
    
    highSavingAmt = parseInt(savings);
  }

  return (
    <div>
      <div className="container px-5 pt-24 mx-auto">
        <div className="flex flex-col text- w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          <center >High Risk Investment Plan </center>

          </h1>
          <p className="lg:w-/3 mx-auto text-left leading-relaxed text-base">
          High-risk investments, such as cryptocurrencies like Bitcoin, have the potential to deliver substantial returns, often exceeding 18% or more in a relatively short period. While these investments can be highly rewarding, it's important to be prepared for significant volatility and market fluctuations when venturing into this high-risk territory.
          <br />
          Invest  <span className="title-font font-medium sm:text-xl text-xl text-gray-900 bg-violet-200 px-2 rounded">
              Rs: {parseInt((highSavingAmt-highSavingAmt*0.1)*0.33)}
            </span> in the following
          </p>
        </div>
       
            
            {/* render re-start server link https://api.render.com/deploy/srv-ckonecnkc2qc73ejr2g0?key=35cLm6fz1Wc */}
          
      </div>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 pt-4 pb-12 mx-auto" bis_skin_checked="1">
    <div className="-my-8 divide-y-2 divide-gray-100" bis_skin_checked="1">
      
      <div className="py-4 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
       
        <div className="md:flex-grow" bis_skin_checked="1">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Stocks</h2>
          <p className="leading-relaxed">Stocks represent ownership shares in publicly traded companies and can offer the potential for substantial returns, but they are subject to market volatility.
          <br />
            Here are some Handpicked stocks :

          </p>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2" bis_skin_checked="1">
        
       
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Reliance Industries Ltd</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Tata Consultancy Services Ltd</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">HDFC Bank Ltd</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">ICICI Bank Ltd</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Hindustan Unilever Ltd </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Infosys Ltd </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">ITC Ltd </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Bharti Airtel Ltd </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Housing Development Finance CorporationLtd </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full" bis_skin_checked="1">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center" bis_skin_checked="1">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">State Bank of India </span>
          </div>
        </div>
       </div>
       </div>
      </div>
      

      <div className="pt-8 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
       
        
      </div>
     
     
      
    </div>
  </div>
  
</section>
<section>
    <div className="container px-5 pt-24 mx-auto">
        <div className="flex flex-col w-full mb-20">
            <h5 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
                How to Invest in Stocks
            </h5>
            <div>
      <h1 className='text-2xl py-2'>Guide to Investing in Stocks in India</h1>
      <ol className='pl-6 md:pl-8'>
        <li>    Open a Demat and trading account.</li>
        <li>    Fund your account.</li>
        <li>    Choose stocks to invest in.</li>
        <li>    Place a trade.</li>
        <li>    Monitor your investments.</li>
      </ol>
      <h1 className='text-xl pt-2'>Here are some additional tips for investing in stocks in India:</h1>
      <ul className='pl-6 md:pl-8'>
        <li>    Choose a stockbroker registered with SEBI.</li>
        <li>    Understand the risks involved.</li>
        <li>    Start small and invest for the long term.</li>
        <li>    Diversify your portfolio.</li>
        <li>    Reinvest your dividends.</li>
      </ul>
      <h1  className='text-xl pt-2'>Keep in mind the following when investing in stocks in India:</h1>
      <ul className='pl-6 md:pl-8'>
        <li>            You need a PAN card and an Aadhaar card.</li>
        <li>    Your bank account should be linked to your Demat and trading account.</li>
        <li>    There are different stock exchanges in India, like BSE and NSE.</li>
        <li>    There are different types of stock brokers, such as full-service and discount brokers.</li>
      </ul>
      <p>If you are a beginner, it's a good idea to do some research and learn about the stock market before you start investing.</p>
    </div>
        </div>
    </div>
</section>
<section>
<div className="container px-5 pt-24 mx-auto">
        <div className="flex flex-col w-full mb-20">
            <h5 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                SmallCase
            </h5>
            <div>
              <p className='py-2'>
            Smallcases are a type of investment product that allows investors to build a low-cost, long-term, and diversified portfolio easily. Each smallcase is a professionally managed basket of stocks or ETFs that reflects a specific idea, objective, theme, or strategy.
            </p>
Some examples of smallcases include:
<ul className='pl-6 md:pl-8 py-3 list-disc'>
  <li>
  Sector-specific smallcases: These smallcases allow investors to invest in a specific sector of the economy, such as healthcare, technology, or consumer staples.
  </li>
  <li>
    Theme-based smallcases: These smallcases allow investors to invest in a specific theme, such as the future of work, electric vehicles, or sustainable investing.
  </li>
  <li>
    Strategy-based smallcases: These smallcases allow investors to invest in a specific investment strategy, such as value investing, growth investing, or dividend investing.
  </li>
</ul>

 
 

Smallcases offer a number of advantages over traditional investment products, such as mutual funds and stocks.
<ul className='py-2 '>
  <li>First, smallcases are typically much lower cost than mutual funds. </li>
  <li> Second, smallcases are more flexible than stocks, as you can easily buy and sell smallcases without having to go through a broker</li>
  <li>Third, smallcases are more transparent than mutual funds, as you can see exactly what stocks and ETFs are included in each smallcase.</li>
  </ul>

To invest in a smallcase, you simply need to open a smallcase account with a broker that offers smallcases. Once you have opened an account, you can browse the available smallcases and choose the ones that you want to invest in. You can then invest in smallcases with a lump sum or through regular investments. <br />

Smallcases can be a good option for investors of all experience levels. They are a relatively low-cost and easy way to build a diversified portfolio. Smallcases are also a good option for investors who want to invest in specific themes or strategies. <br />

<h1 className='text-xl pt-2'>Here are some of the key benefits of investing in smallcases:</h1>
<ul className='pl-6 md:pl-8 list-disc'>
  <li>
Low cost: Smallcases are typically much lower cost than mutual funds. This is because smallcase providers do not have the same overhead costs as mutual fund houses.</li>
<li>Flexibility: Smallcases are more flexible than stocks. You can easily buy and sell smallcases without having to go through a broker. This makes it easy to rebalance your portfolio or take profits on your investments.</li>
<li>Transparency: Smallcases are more transparent than mutual funds. You can see exactly what stocks and ETFs are included in each smallcase. This makes it easier to understand what you are investing in and to track your performance.</li>
<li>Expertise: Smallcases are created by investment experts. This means that you can be confident that the smallcases you invest in are well-researched and have a good chance of success.</li>
</ul>




If you are looking for a low-cost, flexible, and transparent way to invest, smallcases may be a good option for you.
           </div>
    </div>
    </div>
</section>
<div className='flex justify-center gap-5'>
    <Link to="/mid">
    <span className='text-white text-center bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
        Prev
      </span></Link>
    <Link to="/advice">
    <span className='text-white text-center bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
        Next
      </span></Link>
      </div>
    </div>
  )
}

export default HighRisk