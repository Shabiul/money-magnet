import React, { useEffect, useState } from "react";
import inflation from "../assets/inflation.png";
import { Link } from "react-router-dom";

export const Emergency = () => {
  const [userNeeds, setUserNeeds] = useState(localStorage.getItem("needs") || 0);
  const [userSavings, setUserSavings] = useState(localStorage.getItem("savings")||0);

  useEffect(() => {
    const needs = parseInt(localStorage.getItem("needs") || 0);
    const savings = parseInt(localStorage.getItem("savings"));
    setUserNeeds(needs);
    setUserSavings(savings);
  }, []);

  const emergencyFund = Math.floor(userNeeds * 0.5);
  const savingsForEmergency = Math.floor( userSavings * 0.1);

  return (
    <>
      <div>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 pt-24 pb-12 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    Emergency Corpus Funds and Inflation
                  </h2>
                  <p className="leading-relaxed">
                    Have six months of needs such that you can lead your life
                    even after losing your job or survive in the market during a
                    pandemic.
                    <span className="title-font font-medium sm:text-xl text-xl text-gray-900 bg-violet-200 px-1 rounded">
                      
                      ₹: {emergencyFund}
                    </span>
                    <br /> Invest this amount in a bank account or an F.D.at a 6
                    % interest rate for a small term, usually 3 to 6 months.
                  </p>
                </div>
              </div>
              <div className="md:flex-grow text-center">
                <p className="leading-relaxed">
                  As of now, invest 10 % of your savings to accomplish the
                  emergency fund, i.e., invest
                  <span className="title-font font-medium sm:text-xl text-xl text-gray-900 bg-violet-200 px-1 rounded">
                    
                    ₹: {savingsForEmergency}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-14 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                  
                  Inflation and How it Defines our Savings
                </h1>
                <p className="leading-relaxed mb-4">
                  Inflation is a rise in prices, which can be translated as the
                  decline of purchasing power over time.The rate at which
                  purchasing power drops can be reflected in the average price
                  increase of a basket of selected goods and services over some
                  period of time.The rise in prices, which is often expressed as
                  a percentage, means that a unit of currency effectively buys
                  less than it did in prior periods.
                </p>
                <p className="leading-relaxed mb-4">
                  Inflation is the general increase of prices over time.It
                  reduces the value of your savings because your money can buy
                  less in the future than it can now.To protect your savings
                  from inflation, you need to invest them in a way that earns
                  interest higher than the inflation rate.
                </p>
                <div className="py-4 flex flex-wrap md:flex-nowrap">
                  <div className="md:flex-grow">
                    <p className="leading-relaxed">
                      The Current Inflation rate of India is {" "}
                      <span className="title-font font-medium sm:text-xl text-xl text-gray-900 bg-violet-200 px-1 rounded">
                        6.70 %
                      </span>{" "}
                      with an Annual change of rate 3.06 % .
                    </p>
                  </div>
                </div>
              </div>
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={inflation}
              />
            </div>
          </div>
          <div className="flex justify-center gap-5 mt-4">
            <Link to="/">
              <button className="text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Prev
              </button>
            </Link>
            <Link to="/low">
              <button className="text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Next
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
