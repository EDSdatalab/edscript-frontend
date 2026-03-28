import React from 'react';

export default function TabHistorico({ jogo }: { jogo: any }) {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="bg-bg-panel border border-border-color rounded-2xl p-6 shadow-md flex flex-col gap-2">
            <div className="flex items-center gap-3 mb-3">
               <div className="w-10 h-10 rounded-full bg-bg-main flex items-center justify-center p-1 overflow-hidden border border-border-color">
                  <img src={jogo.casa.pathFoto} alt={jogo.casa.nome} className="w-full h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = `<span class="text-xs font-black text-text-secondary">${jogo.casa.sigla}</span>`; }} />
               </div>
               <h3 className="font-bold text-lg text-white">{jogo.casa.nome}</h3>
            </div>
            <p className="text-sm text-text-secondary"><strong className="text-white">Fundação:</strong> {jogo.casa.info.fundacao}</p>
            <p className="text-sm text-text-secondary"><strong className="text-white">Estádio:</strong> {jogo.casa.info.estadio}</p>
            <p className="text-sm text-text-secondary"><strong className="text-white">Títulos:</strong> {jogo.casa.info.titulos}</p>
         </div>
         
         <div className="bg-bg-panel border border-border-color rounded-2xl p-6 shadow-md flex flex-col gap-2">
            <div className="flex items-center gap-3 mb-3">
               <div className="w-10 h-10 rounded-full bg-bg-main flex items-center justify-center p-1 overflow-hidden border border-border-color">
                  <img src={jogo.fora.pathFoto} alt={jogo.fora.nome} className="w-full h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = `<span class="text-xs font-black text-text-secondary">${jogo.fora.sigla}</span>`; }} />
               </div>
               <h3 className="font-bold text-lg text-white">{jogo.fora.nome}</h3>
            </div>
            <p className="text-sm text-text-secondary"><strong className="text-white">Fundação:</strong> {jogo.fora.info.fundacao}</p>
            <p className="text-sm text-text-secondary"><strong className="text-white">Estádio:</strong> {jogo.fora.info.estadio}</p>
            <p className="text-sm text-text-secondary"><strong className="text-white">Títulos:</strong> {jogo.fora.info.titulos}</p>
         </div>
      </div>

      <div>
        <h3 className="text-text-secondary font-semibold mb-6 text-xs uppercase tracking-widest text-center">Últimos Confrontos Diretos</h3>
        <div className="space-y-3">
          {jogo.ultimosConfrontos.map((confronto: any, i: number) => (
            <div key={i} className="bg-bg-input p-4 rounded-xl border border-border-color flex justify-between items-center shadow-sm">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-text-accent">{confronto.data}</span>
                <span className="text-xs text-text-secondary uppercase">{confronto.camp}</span>
              </div>
              <div className="font-medium text-base text-white">{confronto.result}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}