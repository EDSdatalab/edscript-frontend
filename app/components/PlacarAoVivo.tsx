"use client";

import React from 'react';

import Link from 'next/link';

export default function PlacarAoVivo() {
  
  const jogo = {
    tempo: "78:20",
    timeCasa: "Sport Recife",
    pathFotoCasa: "/sport.png", 
    golsCasa: 2,
    timeFora: "Santa Cruz",
    pathFotoFora: "/santa.png",
    golsFora: 1,
    estadio: "Ilha do Retiro",
    posseBola: { casa: 58, fora: 42 },
    chutes: { casa: 14, fora: 9 }
  };

  const gerarSigla = (nome: string) => {
    const palavras = nome.split(' ');
    if (palavras.length > 1) return (palavras[0][0] + palavras[1][0]).toUpperCase();
    return nome.substring(0, 2).toUpperCase();
  };

  return (

    <Link 
      href="/detalhes"
      rel="noopener noreferrer"
      className="block bg-bg-card border border-border-color rounded-xl p-6 shadow-lg mb-6 hover:border-text-accent/50 transition-colors cursor-pointer group"
    >
      
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2 bg-bg-main px-3 py-1 rounded-full border border-border-color">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
          <span className="text-red-500 font-bold text-xs tracking-wide">AO VIVO</span>
          <span className="text-text-primary text-xs font-mono ml-1">{jogo.tempo}</span>
        </div>
        <div className="text-text-secondary text-xs uppercase tracking-wider flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          {jogo.estadio}
        </div>
      </div>

      <div className="flex justify-between items-center mb-8 px-2 md:px-8">
        
        <div className="flex flex-col items-center space-y-3 w-1/3">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-bg-main flex items-center justify-center overflow-hidden shadow-md border border-border-color">
            <img 
              src={jogo.pathFotoCasa} 
              alt={jogo.timeCasa}
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = `<span class="text-xl md:text-2xl font-black text-text-secondary">${gerarSigla(jogo.timeCasa)}</span>`;
              }}
            />
          </div>
          <span className="font-semibold text-sm md:text-lg text-center text-text-primary">{jogo.timeCasa}</span>
        </div>

        <div className="flex items-center space-x-3 md:space-x-6 w-1/3 justify-center">
          <div className="text-4xl md:text-6xl font-black bg-bg-main text-white px-4 md:px-6 py-2 md:py-4 rounded-lg shadow-inner border border-border-color">
            {jogo.golsCasa}
          </div>
          <span className="text-2xl font-bold text-text-secondary">-</span>
          <div className="text-4xl md:text-6xl font-black bg-bg-main text-white px-4 md:px-6 py-2 md:py-4 rounded-lg shadow-inner border border-border-color">
            {jogo.golsFora}
          </div>
        </div>

        <div className="flex flex-col items-center space-y-3 w-1/3">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-bg-main flex items-center justify-center overflow-hidden shadow-md border border-border-color">
            <img 
              src={jogo.pathFotoFora} 
              alt={jogo.timeFora}
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = `<span class="text-xl md:text-2xl font-black text-text-secondary">${gerarSigla(jogo.timeFora)}</span>`;
              }}
            />
          </div>
          <span className="font-semibold text-sm md:text-lg text-center text-text-primary">{jogo.timeFora}</span>
        </div>
      </div>

      <div className="border-t border-border-color pt-5 mt-2">
        <h4 className="text-text-secondary text-xs uppercase tracking-widest mb-4 text-center">Termômetro da Partida</h4>
        
        <div className="space-y-4 max-w-md mx-auto">
          
          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="font-bold text-white">{jogo.posseBola.casa}%</span>
              <span className="text-text-secondary">Posse de Bola</span>
              <span className="font-bold text-white">{jogo.posseBola.fora}%</span>
            </div>
            <div className="w-full flex h-2 rounded-full overflow-hidden bg-bg-main">
              <div className="bg-red-600 h-full" style={{ width: `${jogo.posseBola.casa}%` }}></div>
              <div className="bg-gray-400 h-full" style={{ width: `${jogo.posseBola.fora}%` }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="font-bold text-white">{jogo.chutes.casa}</span>
              <span className="text-text-secondary">Finalizações</span>
              <span className="font-bold text-white">{jogo.chutes.fora}</span>
            </div>
            <div className="w-full flex h-2 rounded-full overflow-hidden bg-bg-main">
              <div className="bg-red-600 h-full" style={{ width: `${(jogo.chutes.casa / (jogo.chutes.casa + jogo.chutes.fora)) * 100}%` }}></div>
              <div className="bg-gray-400 h-full" style={{ width: `${(jogo.chutes.fora / (jogo.chutes.casa + jogo.chutes.fora)) * 100}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}