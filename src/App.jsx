import { useState } from "react";

const App = () => {
  const [amount, setAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");

  const handleClick = () => {
    if (isNaN(amount) || isNaN(discount) || amount <= 0 || discount < 0) {
      setError("Please enter valid numbers for amount and discount.");
      return;
    }

    let discPrice = (discount / 100) * amount;
    const finalAmnt = (amount - discPrice).toFixed(2);
    setResult(finalAmnt);
    setAmount("");
    setDiscount("");
    setError("");
  };

  const handleReset = () => {
    setAmount("");
    setDiscount("");
    setResult(null);
    setError("");
  };

  return (
    <div className="container min-h-screen bg-blue-950 p-5">
      <section className="pt-3">
        <div className="flex flex-col my-3 h-auto justify-center w-full max-w-md bg-white m-auto rounded-lg shadow-lg p-5">
          <h1 className="text-2xl font-bold text-center mb-3">Discount Calculator</h1>
      
       
            <div className="mt-3 text-center p-3 bg-slate-300 rounded-md">
              <h1 className="text-3xl font-bold my-3">Final Amount: {result}</h1>
            </div>
         
          <div className="mt-3 text-center">
            <label className="block mb-2 text-lg font-semibold">Amount</label>
            <input
              type="number"
              placeholder="Enter Your Price"
              className="px-3 py-3 text-lg font-bold rounded-lg border focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#aaaaaa] border-[#cccccc] w-full"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="mt-3 text-center">
            <label className="block mb-2 text-lg font-semibold">Discount %</label>
            <input
              type="number"
              placeholder="Enter Your Discount %"
              className="px-3 py-3 text-lg font-bold rounded-lg border focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#aaaaaa] border-[#cccccc] w-full"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 mt-3 text-center">{error}</p>}

          <div className="mt-3 text-center">
            <button
              className="font-bold rounded-lg text-lg w-40 h-16 bg-[#374151] text-[#ffffff] justify-center"
              onClick={handleClick}
            >
              Calculate
            </button>
            <button
              className="font-bold rounded-lg text-lg w-40 h-16 bg-red-500 text-[#ffffff] justify-center ml-3"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default App;
