"use client";

import React from 'react';

export default function PopularBets() {

  const apostasPopulares = [
    {
      id: '3344556',
      league: { name: 'UEFA Champions League', cc: 'eu' },
      home: { name: 'Manchester City', image_id: '17' }, 
      away: { name: 'Real Madrid', image_id: '137' },
      highlighted_odd: { label: 'Vencedor (Casa)', value: '1.30' } 
    },
    {
      id: '3344557',
      league: { name: 'UEFA Champions League', cc: 'eu' },
      home: { name: 'Bayern Munich', image_id: '18' },
      away: { name: 'Arsenal', image_id: '14' },
      highlighted_odd: { label: 'Vencedor (Casa)', value: '1.95' }
    }
  ];

  
  const gerarSigla = (nome: string) => {
    const palavras = nome.split(' ');
    if (palavras.length > 1) return (palavras[0][0] + palavras[1][0]).toUpperCase();
    return nome.substring(0, 2).toUpperCase();
  };

  return (
    <div className="bg-bg-panel rounded-xl border border-border-color overflow-hidden">

      <div className="bg-bg-accent p-3 flex justify-between items-center border-b border-border-color cursor-pointer">
        <h2 className="font-semibold text-sm text-white">Apostas Populares</h2>
      </div>
      

      <div className="p-2 space-y-2">
        {apostasPopulares.map((aposta) => (
          <div key={aposta.id} className="flex items-center justify-between p-2 hover:bg-bg-input rounded transition-colors cursor-pointer group">
            
            <div className="flex items-center space-x-3">

              <div className="w-8 h-8 rounded-full bg-bg-main border border-border-color flex items-center justify-center overflow-hidden shrink-0">
                {aposta.home.image_id ? (
                  <img 
                    src={`https://assets.b365api.com/images/team/m/${aposta.home.image_id}.png`} 
                    alt={aposta.home.name}
                    className="w-5 h-5 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-[10px] font-bold text-text-secondary">${gerarSigla(aposta.home.name)}</span>`;
                    }}
                  />
                ) : (
                  <span className="text-[10px] font-bold text-text-secondary">{gerarSigla(aposta.home.name)}</span>
                )}
              </div>
              

              <div className="text-xs">
                <p className="text-text-primary font-medium">
                  {aposta.home.name} <span className="text-text-secondary font-normal">vs</span>
                </p>
                <p className="text-text-primary">{aposta.away.name}</p>
              </div>
            </div>


            <div className="flex flex-col items-end">
              <span className="bg-bg-input px-3 py-1.5 rounded text-text-green font-bold group-hover:bg-bg-accent border border-border-color transition-colors">
                {aposta.highlighted_odd.value}
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}