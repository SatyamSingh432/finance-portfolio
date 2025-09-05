import React from "react";

function HoldingsTable({ holdings }) {
  return (
    <div className="bg-white   mt-6 p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Holdings</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200 text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider">
              <th className="px-5 py-3 border-b text-left">Symbol</th>
              <th className="px-5 py-3 border-b text-left">Company</th>
              <th className="px-5 py-3 border-b text-left">Sector</th>
              <th className="px-5 py-3 border-b text-right">Quantity</th>
              <th className="px-5 py-3 border-b text-right">Purchase Price</th>
              <th className="px-5 py-3 border-b text-right">Current Price</th>
              <th className="px-5 py-3 border-b text-right">P/E Ratio</th>
              <th className="px-5 py-3 border-b text-right">EPS</th>
              <th className="px-5 py-3 border-b text-right">Investment</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((stock, index) => {
              const presentValue = stock.currentPrice * stock.quantity;
              const isGain = presentValue > stock.investment;

              return (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition`}
                >
                  <td className="px-5 py-3 border-b font-semibold text-gray-800">
                    {stock.symbol}
                  </td>
                  <td className="px-5 py-3 border-b text-gray-700">
                    {stock.company}
                  </td>
                  <td className="px-5 py-3 border-b text-gray-700">
                    {stock.sector}
                  </td>
                  <td className="px-5 py-3 border-b text-right">
                    {stock.quantity}
                  </td>
                  <td className="px-5 py-3 border-b text-right">
                    ${stock.purchasePrice.toFixed(2)}
                  </td>
                  <td
                    className={`px-5 py-3 border-b text-right font-medium ${
                      isGain ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    ${stock.currentPrice.toFixed(2)}
                  </td>
                  <td className="px-5 py-3 border-b text-right">
                    {stock.peRatio}
                  </td>
                  <td className="px-5 py-3 border-b text-right">{stock.eps}</td>
                  <td className="px-5 py-3 border-b text-right font-semibold">
                    ${stock.investment.toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HoldingsTable;
