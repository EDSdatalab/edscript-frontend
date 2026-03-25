import React from 'react';

export default function BettingSlip() {
  return (
    <div className="bg-bg-panel rounded-xl border border-border-color overflow-hidden flex flex-col h-auto max-h-[500px]">
      <div className="bg-bg-accent p-3 flex justify-between items-center border-b border-border-color cursor-pointer">
        <h2 className="font-semibold">Betting Slip</h2>
      </div>
      
      <div className="flex border-b border-border-color text-sm">
        <button className="flex-1 py-2 text-center border-b-2 border-text-green text-white font-medium">Select</button>
        <button className="flex-1 py-2 text-center text-text-secondary border-b-2 border-transparent hover:text-white">Smile</button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar p-3 space-y-3">
       
        <div className="flex items-start justify-between bg-bg-input p-2 rounded border border-border-color">
          <div className="flex items-start space-x-2">
            <div className="text-sm">
              <p className="font-medium">Manchester City <span className="font-normal text-text-secondary">vs</span> Real Madrid</p>
            </div>
          </div>
        </div>

       
        <div className="flex items-start justify-between bg-bg-input p-2 rounded border border-border-color">
          <div className="flex items-start space-x-2">
            <div className="text-sm">
              <p className="font-medium">Bayern Munich <span className="font-normal text-text-secondary">vs</span> Arsenal</p>
              <p className="text-xs text-text-secondary">Paris</p>
            </div>
          </div>
        </div>

        <button className="w-full bg-bg-green-primary hover:bg-green-500 text-black font-semibold py-2 rounded flex justify-between items-center px-4 transition-colors">
          <span>Select teams</span>
        </button>
      </div>

      
      <div className="p-4 border-t border-border-color space-y-3 bg-bg-accent/30">
        <div className="flex justify-between items-center text-sm">
          <span className="text-text-secondary">Stake</span>
          <div className="flex items-center space-x-2">
            <input className="w-16 bg-bg-input border border-border-color rounded px-2 py-1 text-right text-white focus:outline-none focus:border-text-green" type="text" defaultValue="1" />
          </div>
        </div>
        <div className="flex justify-between items-center text-sm font-semibold">
          <span className="text-text-secondary">Potential return</span>
          <span className="text-text-green">$35.00</span>
        </div>
        <button className="w-full bg-bg-green-primary hover:bg-green-500 text-black font-semibold py-2 rounded transition-colors text-sm">
          Return €36.00
        </button>
      </div>
    </div>
  );
}