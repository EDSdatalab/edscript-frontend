import React from 'react';
import Sidebar from './components/Sidebar';
import HeroBanner from './components/Headerbanner';

import BettingSlip from './components/BettingSlip';
import PopularBets from './components/PopularBets';
import Footer from './components/Footer';
import Header from './components/Header';
import PlacarAoVivo from './components/PlacarAoVivo';
import ProximosJogos from './components/ProximosJogos';
import AiAnalysis from './components/AiAnalysis';

export default function ChampionsLeagueDashboard() {
  return (
    <div className="bg-bg-main text-text-primary font-sans h-screen flex flex-col overflow-hidden">
      

      <Header />

      <div className="flex flex-1 overflow-hidden">
        
        <Sidebar />

        <main className="flex-1 flex flex-col h-full overflow-hidden" data-purpose="main-layout">
          

          <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col">
            
            <div className="p-4 xl:p-6 lg:flex lg:space-x-6 flex-1">
              

              <div className="flex-1 space-y-4 max-w-4xl w-full mx-auto" data-purpose="match-feed">
                <HeroBanner />
                <PlacarAoVivo />
                <ProximosJogos />
              </div>
              

              <aside className="w-full lg:w-80 space-y-4 shrink-0 mt-6 lg:mt-0">
                <AiAnalysis/>
                <PopularBets />
              </aside>

            </div>
            

            <Footer />
            
          </div>
          
        </main>
      </div>
      
    </div>
  );
}