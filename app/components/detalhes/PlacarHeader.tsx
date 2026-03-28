import React from 'react';

export default function PlacarHeader({ jogo }: { jogo: any }) {
  
  const gerarSigla = (nome: string) => {
    const palavras = nome.split(' ');
    if (palavras.length > 1) return (palavras[0][0] + palavras[1][0]).toUpperCase();
    return nome.substring(0, 2).toUpperCase();
  };

  return (
    <div className="p-6 sm:p-10 w-full">
      

      <div className="flex flex-col items-center justify-center mb-10 w-full gap-3">
        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-text-secondary uppercase tracking-widest font-semibold bg-bg-input/50 px-4 py-1.5 rounded-full border border-border-color/50">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          <span>{jogo.campeonato}</span>
          <span className="w-1 h-1 rounded-full bg-text-secondary/50"></span>
          <span>{jogo.dataHora}</span>
        </div>

        <div className="flex items-center gap-3 bg-[#DF1A22]/10 border border-[#DF1A22]/30 px-5 py-2 rounded-full shadow-[0_0_15px_rgba(223,26,34,0.15)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DF1A22] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#DF1A22]"></span>
          </span>
          <span className="text-[#DF1A22] font-black text-xs md:text-sm tracking-widest uppercase">{jogo.status}</span>
          <div className="w-[1px] h-3 bg-[#DF1A22]/30"></div>
          <span className="text-white font-mono font-bold text-xs md:text-sm">{jogo.tempoDecorrido}</span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        

        <div className="flex flex-col items-center flex-1 gap-4">

          <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
            <img 
              src={jogo.casa.pathFoto} 
              alt={jogo.casa.nome}
              className="w-full h-full object-contain drop-shadow-2xl" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = `<span class="text-3xl font-black text-text-secondary">${gerarSigla(jogo.casa.nome)}</span>`;
              }}
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white text-center leading-tight truncate w-full" title={jogo.casa.nome}>{jogo.casa.nome}</h2>
        </div>


        <div className="flex flex-col items-center justify-center px-4 sm:px-10 shrink-0">
          <div className="flex items-center gap-3 md:gap-6 justify-center">
            <div className="text-5xl sm:text-7xl font-black bg-bg-panel text-white px-4 md:px-6 py-2 md:py-4 rounded-lg shadow-inner border border-border-color shrink-0">
              {jogo.casa.gols}
            </div>
            <span className="text-3xl font-bold text-text-secondary shrink-0">-</span>
            <div className="text-5xl sm:text-7xl font-black bg-bg-panel text-white px-4 md:px-6 py-2 md:py-4 rounded-lg shadow-inner border border-border-color shrink-0">
              {jogo.fora.gols}
            </div>
          </div>
        </div>


        <div className="flex flex-col items-center flex-1 gap-4">

          <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
            <img 
              src={jogo.fora.pathFoto} 
              alt={jogo.fora.nome}
              className="w-full h-full object-contain drop-shadow-2xl" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = `<span class="text-3xl font-black text-text-secondary">${gerarSigla(jogo.fora.nome)}</span>`;
              }}
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white text-center leading-tight truncate w-full" title={jogo.fora.nome}>{jogo.fora.nome}</h2>
        </div>
        
      </div>
    </div>
  );
}