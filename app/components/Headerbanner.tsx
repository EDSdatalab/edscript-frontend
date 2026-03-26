import React from 'react';

export default function HeaderBanner() {
  return (
    <div className="bg-[url('/fundo-chap.png')] bg-cover bg-center bg-no-repeat rounded-xl border border-border-color p-8 flex items-center justify-between z-10 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="flex flex-col space-y-3 max-w-lg z-10">
        <h1 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
          CAMPEONATO <span className="text-text-accent">PERNAMBUCANO</span>
        </h1>
        <p className="text-text-secondary text-sm">
          Explore estatísticas detalhadas, odds ao vivo e todos os jogos do Campeonato Pernambucano. A sua jornada rumo à vitória começa aqui!
        </p>
      </div>
      

      <div className="relative z-10 flex items-center justify-center">
        <img 
            src="/camp.png" 
            alt="Champions League Trophy" 
            className="h-32 w-auto object-contain rounded-2xl opacity-90 shadow-lg"
        />
      </div>
    </div>
  );
}