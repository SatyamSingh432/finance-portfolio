import React from "react";

function Sector({ sectors }) {
  return (
    <div className="bg-white shadow p-4 rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-4">Sector Breakdown</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sectors.map((sector, idx) => (
          <div key={idx} className="border p-4 rounded-lg">
            <h3 className="font-semibold">{sector.name}</h3>
            <p>Value: ${sector.value}</p>
            <p
              className={
                sector.gainLoss >= 0 ? "text-green-600" : "text-red-600"
              }
            >
              Gain/Loss: ${sector.gainLoss}
            </p>
            <p>Stocks: {sector.stocks}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sector;
