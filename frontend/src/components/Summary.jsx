import React from "react";

function Summary({ summary }) {
  return (
    <div className="bg-white shadow p-4 rounded-lg  mb-6">
      <h2 className="text-xl font-semibold mb-4">Portfolio Summary</h2>
      <div className=" gap-4 flex flex-wrap justify-between text-center">
        <div>
          <p className="text-gray-500">Total Investment</p>
          <p className="text-2xl font-bold">${summary.totalInvestment}</p>
        </div>
        <div>
          <p className="text-gray-500">Current Value</p>
          <p className="text-2xl font-bold">${summary.currentValue}</p>
        </div>
        <div>
          <p className="text-gray-500">Total Gain/Loss</p>
          <p
            className={`text-2xl font-bold ${
              summary.totalGainLoss >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            ${summary.totalGainLoss}
          </p>
        </div>
        <div>
          <p className="text-gray-500">Return %</p>
          <p
            className={`text-2xl font-bold ${
              summary.returnPercent >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {summary.returnPercent}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
