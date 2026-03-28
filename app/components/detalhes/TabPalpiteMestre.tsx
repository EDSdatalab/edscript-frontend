"use client";

import React from 'react';

export default function TabPalpiteMestre({ jogo }: { jogo: any }) {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#DF1A22]/20 via-bg-panel to-[#text-green]/10 border border-border-color p-8 shadow-2xl">
        <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm11 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.51 5.11 3.5z"/></svg>
        </div>

        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-text-green text-bg-main text-[10px] font-black px-2 py-1 rounded-md uppercase">AI Analysis</div>
            <h2 className="text-2xl font-black text-white tracking-tight italic">PALPITE DE MESTRE</h2>
          </div>

          <p className="text-lg text-white/90 leading-relaxed font-medium">
            "Baseado em nossos dados processados em tempo real e no retrospecto dos últimos jogos, o {jogo.fora.nome} tem uma forte tendência a dominar a reta final da partida. Com o adversário a jogar com um a menos desde os 51', o cenário atual indica para uma pressão extrema e alta probabilidade de gol nos próximos minutos."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-bg-main/60 backdrop-blur-md border border-border-color p-4 rounded-2xl">
              <span className="text-text-secondary text-[10px] uppercase font-bold block mb-1">Probabilidade de +1 Gol</span>
              <span className="text-2xl font-black text-text-green">84.2%</span>
            </div>
            <div className="bg-bg-main/60 backdrop-blur-md border border-border-color p-4 rounded-2xl">
              <span className="text-text-secondary text-[10px] uppercase font-bold block mb-1">Ritmo de Jogo (Tempo)</span>
              <span className="text-2xl font-black text-[#DF1A22]">INTENSO</span>
            </div>
            <div className="bg-bg-main/60 backdrop-blur-md border border-border-color p-4 rounded-2xl">
              <span className="text-text-secondary text-[10px] uppercase font-bold block mb-1">Sugestão de Aposta</span>
              <span className="text-lg font-black text-white">Over gol</span>
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-bg-panel border border-border-color rounded-2xl p-6">
          <h4 className="text-text-accent font-bold text-sm uppercase mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-text-green rounded-full animate-pulse"></span>
            Ponto de Atenção
          </h4>
          <p className="text-text-secondary text-sm leading-relaxed">
            A expulsão de Ronaldo Henrique desestruturou o meio-campo defensivo do Sport. O Santa Cruz subiu a posse de bola para 65% nos últimos 10 minutos de jogo.
          </p>
        </div>

        <div className="bg-bg-panel border border-border-color rounded-2xl p-6">
          <h4 className="text-text-accent font-bold text-sm uppercase mb-4 flex items-center gap-2">
            💡 Insights Adicionais
          </h4>
          <ul className="text-sm text-text-secondary space-y-2">
            <li>• Historicamente, este clássico tem 70% de gols após os 80'.</li>
            <li>• Vagner Love está isolado no ataque, reduzindo contra-ataques.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}