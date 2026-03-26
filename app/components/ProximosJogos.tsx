"use client";

import React, { useEffect, useState } from 'react';

export default function ProximosJogos() {

  const [jogos, setJogos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarDadosReais() {
      try {
        const resposta = await fetch('http://localhost:3001/api/eventos-ao-vivo');
        const resultado = await resposta.json();
        
        if (resultado.sucesso) {
          setJogos(resultado.dados);
        }
      } catch (error) {
        console.error("Erro ao conectar com o backend:", error);
      } finally {
        setLoading(false);
      }
    }
    buscarDadosReais();
  }, []);

  // 1. Mostra a mensagem de carregamento
  if (loading) return <div className="p-10 text-white text-center animate-pulse">Buscando os melhores jogos...</div>;

  // 2. Verifica se a lista veio vazia
  if (!jogos || jogos.length === 0) {
    return (
      <div className="bg-bg-card border border-border-color rounded-xl p-12 flex flex-col items-center justify-center text-center shadow-lg mb-6">
        <div className="w-16 h-16 bg-bg-main rounded-full flex items-center justify-center mb-4 border border-border-color">
          <span className="text-2xl text-text-secondary">⚽</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Sem partidas à vista</h3>
        <p className="text-text-secondary text-base">
          Não tem jogo perto de acontecer.
        </p>
        <p className="text-text-secondary text-sm mt-2 opacity-75">
          Aguarde mais um pouco para acompanhar as ligas da América do Sul, Europa e Ásia.
        </p>
      </div>
    );
  }

  
  return (
    <div className="bg-bg-card border border-border-color rounded-xl p-6 shadow-lg mb-6">
      <h2 className="font-semibold text-lg text-white mb-6">Daqui a pouco tem</h2>
      <div className="space-y-3">

        {jogos.map((jogo) => (
          <div key={jogo.id} className="flex flex-col md:flex-row items-center justify-between p-4 bg-bg-input rounded-xl border border-border-color transition-all hover:border-text-accent/50 group gap-4 overflow-hidden">
            
            {/* Bloco de Data e Campeonato */}
            <div className="flex flex-col md:w-1/4 shrink-0 mb-3 md:mb-0">
              <span className="text-xs text-text-accent font-medium">{jogo.dataHora}</span>
              <span className="text-[10px] text-text-secondary uppercase truncate w-full" title={jogo.campeonato}>
                {jogo.campeonato}
              </span>
            </div>

            {/* Bloco dos Times */}
            <div className="flex items-center space-x-3 flex-1 justify-center min-w-0 mb-4 md:mb-0">
              <span className="text-sm font-medium text-text-primary text-right w-1/3 truncate" title={jogo.casa.nome}>{jogo.casa.nome}</span>
              <span className="text-[10px] text-text-secondary font-bold bg-bg-main px-2 py-1 rounded shrink-0">VS</span>
              <span className="text-sm font-medium text-text-primary text-left w-1/3 truncate" title={jogo.fora.nome}>{jogo.fora.nome}</span>
            </div>

            {/* Bloco das Odds */}
            <div className="flex items-center space-x-2 shrink-0 md:w-1/4 justify-end">
              <button className="bg-bg-panel w-14 h-10 rounded border border-border-color text-white font-bold text-xs hover:bg-text-accent/20 transition-colors shrink-0">
                {jogo.odds.casa}
              </button>
              <button className="bg-bg-panel w-14 h-10 rounded border border-border-color text-white font-bold text-xs hover:bg-text-accent/20 transition-colors shrink-0">
                {jogo.odds.empate}
              </button>
              <button className="bg-bg-panel w-14 h-10 rounded border border-border-color text-white font-bold text-xs hover:bg-text-accent/20 transition-colors shrink-0">
                {jogo.odds.fora}
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}