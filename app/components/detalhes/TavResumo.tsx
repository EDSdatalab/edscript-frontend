"use client";

import React from 'react';

export default function TabResumo({ eventos }: { eventos: any[] }) {

  const eventosOrdenados = [...eventos].reverse();

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h3 className="text-text-secondary font-semibold mb-8 text-xs text-center uppercase tracking-widest">
        Linha do Tempo
      </h3>
      
      <div className="flex flex-col pr-2">
        {eventosOrdenados.map((evento, index) => (
          <div key={index} className="flex gap-4 relative">
            

            <div className="flex flex-col items-center shrink-0 w-14">

              <div className="w-12 h-10 rounded-lg border border-border-color bg-bg-panel flex items-center justify-center shadow-md z-10">
                <span className="text-sm font-black text-text-accent font-mono">
                  {evento.tempo}
                </span>
              </div>
              
              {index !== eventosOrdenados.length - 1 && (
                <div className="w-0.5 h-full bg-border-color my-1"></div>
              )}
            </div>

            <div className={`flex-1 mb-6 p-4 rounded-2xl transition-all ${
              evento.tipo === 'GOL' 
              ? 'bg-[#DF1A22]/15 border border-[#DF1A22]/40 shadow-[0_0_15px_rgba(223,26,34,0.1)]' 
              : 'bg-bg-input border border-border-color'
            }`}>
              <div className="flex items-center gap-3">

                <div className="text-2xl w-8 flex justify-center">
                  {evento.tipo === 'GOL' ? '⚽' : evento.tipo === 'CV' ? '🟥' : evento.tipo === 'CA' ? '🟨' : '⏱️'}
                </div>
                

                <div className="flex flex-col flex-1">
                  <span className="text-sm font-bold text-white">
                    {evento.jogador}
                  </span>
                  {evento.tipo === 'INT' && (
                    <span className="text-xs text-text-secondary font-medium uppercase tracking-wider mt-0.5">
                       Intervalo da Partida
                    </span>
                  )}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}