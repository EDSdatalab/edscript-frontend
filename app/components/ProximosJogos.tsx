"use client";

import React from 'react';

export default function ProximosJogos() {
  // Array fictício simulando os próximos jogos que virão da BetsAPI
  const jogos = [
    {
      id: 'p1',
      dataHora: 'Hoje, 16:00',
      campeonato: 'UEFA Champions League',
      casa: { nome: 'PSG', image_id: '24' },
      fora: { nome: 'Barcelona', image_id: '81' },
      odds: { casa: '2.10', empate: '3.50', fora: '3.20' }
    },
    {
      id: 'p2',
      dataHora: 'Amanhã, 16:00',
      campeonato: 'UEFA Champions League',
      casa: { nome: 'Atlético Madrid', image_id: '15' },
      fora: { nome: 'Borussia Dortmund', image_id: '19' },
      odds: { casa: '1.80', empate: '3.60', fora: '4.50' }
    },
    {
      id: 'p3',
      dataHora: 'Hoje, 20:00',
      campeonato: 'Brasileirão Série A',
      casa: { nome: 'Flamengo', image_id: '120' }, // ID fictício
      fora: { nome: 'Palmeiras', image_id: '121' }, // ID fictício
      odds: { casa: '2.05', empate: '3.10', fora: '3.80' }
    }
  ];

  // Plano B para quando a imagem não carregar
  const gerarSigla = (nome: string) => {
    const palavras = nome.split(' ');
    if (palavras.length > 1) return (palavras[0][0] + palavras[1][0]).toUpperCase();
    return nome.substring(0, 2).toUpperCase();
  };

  return (
    <div className="bg-bg-card border border-border-color rounded-xl p-6 shadow-lg mb-6">
      
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-6 border-b border-border-color pb-4">
        <h2 className="font-semibold text-lg text-white flex items-center">
          <svg className="w-5 h-5 mr-2 text-text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          Próximos Jogos
        </h2>
        <button className="text-sm text-text-accent hover:text-white transition-colors">
          Ver todos
        </button>
      </div>

      {/* Lista de Jogos */}
      <div className="space-y-3">
        {jogos.map((jogo) => (
          <div key={jogo.id} className="flex flex-col md:flex-row items-center justify-between p-4 bg-bg-input rounded-xl border border-border-color hover:border-text-accent/50 transition-all group">
            
            {/* Data e Campeonato */}
            <div className="flex flex-col text-center md:text-left mb-3 md:mb-0 md:w-32 shrink-0">
              <span className="text-xs text-text-accent font-medium">{jogo.dataHora}</span>
              <span className="text-[10px] text-text-secondary uppercase tracking-wider truncate">{jogo.campeonato}</span>
            </div>

            {/* Times */}
            <div className="flex items-center space-x-3 flex-1 justify-center w-full mb-4 md:mb-0">
              {/* Nome Casa */}
              <span className="text-sm font-medium text-text-primary text-right flex-1 truncate">{jogo.casa.nome}</span>
              
              {/* Escudos + VS */}
              <div className="flex items-center space-x-2 shrink-0">
                <div className="w-8 h-8 rounded-full bg-bg-panel border border-border-color flex items-center justify-center overflow-hidden">
                  <img 
                    src={`https://assets.b365api.com/images/team/m/${jogo.casa.image_id}.png`} 
                    alt={jogo.casa.nome}
                    className="w-5 h-5 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-[9px] font-bold text-text-secondary">${gerarSigla(jogo.casa.nome)}</span>`;
                    }}
                  />
                </div>
                
                <span className="text-[10px] text-text-secondary font-bold">VS</span>
                
                <div className="w-8 h-8 rounded-full bg-bg-panel border border-border-color flex items-center justify-center overflow-hidden">
                  <img 
                    src={`https://assets.b365api.com/images/team/m/${jogo.fora.image_id}.png`} 
                    alt={jogo.fora.nome}
                    className="w-5 h-5 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-[9px] font-bold text-text-secondary">${gerarSigla(jogo.fora.nome)}</span>`;
                    }}
                  />
                </div>
              </div>

              {/* Nome Fora */}
              <span className="text-sm font-medium text-text-primary text-left flex-1 truncate">{jogo.fora.nome}</span>
            </div>

            {/* Mercado de Odds (1x2) */}
            <div className="flex items-center space-x-2 w-full md:w-auto justify-center shrink-0">
              {/* Vitória Casa (1) */}
              <button className="flex flex-col items-center justify-center bg-bg-panel w-16 h-12 rounded border border-border-color hover:bg-text-green hover:border-text-green hover:text-bg-main transition-colors group/btn">
                <span className="text-[10px] text-text-secondary group-hover/btn:text-bg-main/70">1</span>
                <span className="text-sm font-bold text-white group-hover/btn:text-bg-main">{jogo.odds.casa}</span>
              </button>
              
              {/* Empate (X) */}
              <button className="flex flex-col items-center justify-center bg-bg-panel w-16 h-12 rounded border border-border-color hover:bg-text-green hover:border-text-green hover:text-bg-main transition-colors group/btn">
                <span className="text-[10px] text-text-secondary group-hover/btn:text-bg-main/70">X</span>
                <span className="text-sm font-bold text-white group-hover/btn:text-bg-main">{jogo.odds.empate}</span>
              </button>
              
              {/* Vitória Fora (2) */}
              <button className="flex flex-col items-center justify-center bg-bg-panel w-16 h-12 rounded border border-border-color hover:bg-text-green hover:border-text-green hover:text-bg-main transition-colors group/btn">
                <span className="text-[10px] text-text-secondary group-hover/btn:text-bg-main/70">2</span>
                <span className="text-sm font-bold text-white group-hover/btn:text-bg-main">{jogo.odds.fora}</span>
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}