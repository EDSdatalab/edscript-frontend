"use function";

import React from 'react';

export default function AiAnalysis() {
  return (
    <div className="bg-bg-panel rounded-xl border border-border-color overflow-hidden flex flex-col relative shadow-lg">
      
       
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-text-green"></div>
      
      <div className="bg-bg-accent/40 p-4 flex items-center space-x-3 border-b border-border-color">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-lg shrink-0">
          <span className="text-white text-xs">🤖</span>
        </div>
        <div>
          <h2 className="font-bold text-sm text-white flex items-center gap-2">
            IA Analista Esportiva
            
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-text-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-text-green"></span>
            </span>
          </h2>
          <p className="text-[10px] text-text-secondary uppercase tracking-wider">Processando Pernambucano...</p>
        </div>
      </div>

      <div className="p-4 space-y-4">
        
        
        <p className="text-sm text-text-secondary leading-relaxed">
          Analisando o panorama do <strong className="text-white">Campeonato Pernambucano</strong>, a competição está extremamente disputada neste ano. O <strong className="text-red-500">Sport</strong> vem demonstrando um excelente desempenho, com um modelo tático muito sólido e controle absoluto do meio-campo. 
        </p>
        
        
        <p className="text-sm text-text-secondary leading-relaxed">
          Em contrapartida, o <strong className="text-red-400">Náutico</strong> piorou drasticamente o seu rendimento nas últimas rodadas, perdendo totalmente a organização defensiva desde que o seu principal zagueiro recebeu aquele cartão vermelho polêmico e desfalcou a equipe.
        </p>

        
        <div className="bg-bg-input rounded-lg p-3 border border-purple-500/30 relative overflow-hidden group cursor-pointer hover:border-purple-500/60 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 mb-1 flex items-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path></svg>
              Tendência a Longo Prazo
            </span>
            <div className="flex justify-between items-end mt-2">
              <span className="text-sm text-white font-medium">Sport - Vencedor do Torneio</span>
              <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs font-bold border border-purple-500/30">
                Odd 1.95
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}