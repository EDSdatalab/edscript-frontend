import React from 'react';
import HeroBanner from './components/Headerbanner';
import PopularBets from './components/PopularBets';
import Footer from './components/Footer';
import PlacarAoVivo from './components/PlacarAoVivo';
import ProximosJogos from './components/ProximosJogos';
import AiAnalysis from './components/AiAnalysis';

export default function Home() {
  return (

    <div className="flex-1 bg-bg-main overflow-y-auto no-scrollbar flex flex-col w-full h-full text-text-primary">
      

      <div className="p-4 md:p-6 flex flex-col xl:flex-row gap-6 flex-1 w-full max-w-[1600px] mx-auto">
        

        <div className="flex-1 space-y-6 w-full min-w-0">
          <HeroBanner />
          <PlacarAoVivo />
          <ProximosJogos />
        </div>
        

        <aside className="w-full xl:w-[320px] space-y-6 shrink-0">
          <AiAnalysis />
          <PopularBets />
        </aside>

      </div>
      
      <Footer />
    </div>
  );
}