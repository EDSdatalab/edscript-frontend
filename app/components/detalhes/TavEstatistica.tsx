import React from 'react';

export default function TabEstatisticas({ jogo }: { jogo: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-10">
       <h3 className="text-text-secondary font-semibold text-xs text-center uppercase tracking-widest">Termômetro da Partida</h3>
       
       <div>
        <div className="flex justify-between text-xs font-bold text-white mb-2">
          <span>{jogo.casa.posseBola}%</span>
          <span className="text-text-secondary uppercase">Posse de Bola</span>
          <span>{jogo.fora.posseBola}%</span>
        </div>
        <div className="w-full h-2.5 flex rounded-full overflow-hidden bg-bg-main">
          <div className="bg-[#DF1A22] h-full" style={{ width: `${jogo.casa.posseBola}%` }}></div>
          <div className="bg-white h-full" style={{ width: `${jogo.fora.posseBola}%` }}></div>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-xs font-bold text-white mb-2">
          <span>{jogo.casa.chutesAGol}</span>
          <span className="text-text-secondary uppercase">Finalizações</span>
          <span>{jogo.fora.chutesAGol}</span>
        </div>
        <div className="w-full flex gap-1 h-2.5">
          <div className="flex-1 bg-bg-main rounded-full overflow-hidden flex justify-end">
             <div className="bg-[#DF1A22] h-full" style={{ width: `${(jogo.casa.chutesAGol / (jogo.casa.chutesAGol + jogo.fora.chutesAGol)) * 100}%` }}></div>
          </div>
          <div className="flex-1 bg-bg-main rounded-full overflow-hidden">
             <div className="bg-white h-full" style={{ width: `${(jogo.fora.chutesAGol / (jogo.casa.chutesAGol + jogo.fora.chutesAGol)) * 100}%` }}></div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center bg-bg-input p-5 rounded-2xl border border-border-color">
          <div className="flex items-center gap-3">
              <span className="text-3xl font-black text-white">{jogo.casa.cartoesAmarelos}</span>
              <span className="w-4 h-6 bg-yellow-400 rounded"></span>
          </div>
          <span className="text-text-secondary text-xs uppercase font-bold tracking-widest">Amarelos</span>
          <div className="flex items-center gap-3">
              <span className="w-4 h-6 bg-yellow-400 rounded"></span>
              <span className="text-3xl font-black text-white">{jogo.fora.cartoesAmarelos}</span>
          </div>
      </div>
      
      <div className="flex justify-between items-center bg-bg-input p-5 rounded-2xl border border-border-color">
          <div className="flex items-center gap-3">
              <span className="text-3xl font-black text-white">{jogo.casa.cartoesVermelhos}</span>
              <span className="w-4 h-6 bg-red-600 rounded"></span>
          </div>
          <span className="text-text-secondary text-xs uppercase font-bold tracking-widest">Vermelhos</span>
          <div className="flex items-center gap-3">
              <span className="w-4 h-6 bg-red-600 rounded"></span>
              <span className="text-3xl font-black text-white">{jogo.fora.cartoesVermelhos}</span>
          </div>
      </div>
    </div>
  );
}