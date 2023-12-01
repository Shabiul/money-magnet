import React, { useState } from "react";
import { Link } from "react-router-dom";

const Input = ({ savings, updateSavings }) => {
  const [Tax, setTax] = useState(0);
  const [NewSavings, setNewSavings] = useState((localStorage.getItem("savings")||0));
  const [BaseSal, setBaseSal] = useState((localStorage.getItem("basesal")||0));
  const [Wants, setWants] = useState((localStorage.getItem("wants")||0));
  const [Needs, setNeeds] = useState((localStorage.getItem("needs")||0));
  const [showModal, setshowModal] = useState(false)

  function calculateTaxesAndSavings() {
    const totalIncome = parseInt(BaseSal);

    
    const tax = calculateIncomeTax(totalIncome);
    const needsAndWants = parseInt(Needs) + parseInt(Wants);
    
    const calculatedSavings = totalIncome - tax - needsAndWants;


    setNewSavings(calculatedSavings);
    setTax(tax);

    if(calculatedSavings<=0){
      alert("Savings Cannot be in Negative please Re-enter")
      setBaseSal(0);
      setWants(0);
      handleUpdateMessage(0,0,0,0)
      
    }
    else{
    
    setTimeout(() => {
      handleUpdateMessage(BaseSal,calculatedSavings,Needs,Wants);
      document.getElementById("Nextbtn").classList.remove("hidden")
    }, 1500);
  }
    
  }

  function calculate(amount, percent) {
    return (amount * percent) / 100;
  }

  function calculateIncomeTax(totalIncome) {
    if (totalIncome <= 250000) {
      return 0;
    } else if (totalIncome >= 251000 && totalIncome <= 500000) {
      return calculate(totalIncome - 250000, 5);
    } else if (totalIncome >= 500001 && totalIncome <= 750000) {
      return calculate(totalIncome - 500000, 10) + 12500;
    } else if (totalIncome >= 750001 && totalIncome <= 1000000) {
      return calculate(totalIncome - 750000, 15) + 37500;
    } else if (totalIncome >= 1000001 && totalIncome <= 1250000) {
      return calculate(totalIncome - 1000000, 20) + 75000;
    } else if (totalIncome >= 1250001 && totalIncome <= 1500000) {
      return calculate(totalIncome - 1250000, 25) + 125000;
    } else {
      return calculate(totalIncome - 1500000, 30) + 187500;
    }
  }

  const handleUpdateMessage = (baseSalary,newSaving,needs,wants) => {
    updateSavings(newSaving);

    localStorage.setItem("basesal",baseSalary);
    localStorage.savings= newSaving;
    console.log("Updating savings by ",newSaving)
    // localStorage.setItem("savings",newSaving);
    localStorage.setItem("needs",needs);
    localStorage.setItem("wants",wants);
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Enter your yearly salary to know your portfolio
            </h1>
            <p className="leading-relaxed mt-4">
              Your Savings is calculated by separating your yearly Needs and
              Wants from your Base Salary.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
               Enter your yearly salary
              </label>
              <input
                type="number"
                id="BaseSalary"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            
                onChange={(e) => setBaseSal(e.target.value)}
                placeholder={BaseSal}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Enter your yearly Needs
              </label>
              <input
                type="number"
                id="email"
                name="Needs"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                
                onChange={(e) => setNeeds(e.target.value)}
                placeholder={Needs}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Enter Your Wants
              </label>
              <input
                type="number"
                id="email"
                name="Wants"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                
                onChange={(e) => setWants(e.target.value)}
                placeholder={Wants}
              />
            </div>
          </div>
          <div className="relative mb- flex-col flex  items-center justify-center w-full ">
            <div className="leading-7 text-sm text-gray-600">
              
              Calculate Taxes and Savings
            </div>
            <button
                className="text-white bg-indigo-600 border-0 py-2 px-12 focus:outline-none hover:bg-indigo-700 rounded text-lg"
                onClick={
                  () =>{ 
                    if(BaseSal>0){setshowModal(true)
                    calculateTaxesAndSavings();}
                  }
                }
              >
                Calculate
              </button>
           
          </div>
        </div>
        {showModal ? (
        <div>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                   Taxes and Savings
                  </h3>
                  
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                  <div id="showTaxes" className="text-center">
          Taxes to be paid: {Tax} <br />
          Savings: {NewSavings}
        </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  
                  <button
                    className="bg-indigo-600 text-white active:bg-indigo-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setshowModal(false)}
                  >
                    Close and Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}

       


        <div id="Nextbtn" className="flex justify-center pt-6 hidden">
          <Link to="/ef">
            <span className="text-white text-center bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Next
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Input;
