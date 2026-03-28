"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';


import PlacarHeader from '../components/detalhes/PlacarHeader';
import TabResumo from '../components/detalhes/TavResumo';
import TabEstatisticas from '../components/detalhes/TavEstatistica';
import TabHistorico from '../components/detalhes/TabHistorico';
import TabPalpiteMestre from '../components/detalhes/TabPalpiteMestre';

export default function DetalhesDoClasico() {
  const [loading, setLoading] = useState(true);
  const [abaAtiva, setAbaAtiva] = useState('historico');


  const jogoDoClasico = {
    campeonato: 'PERNAMBUCANO SÉRIE A',
    dataHora: 'Arena Pernambuco',
    tempoDecorrido: '81:04',
    status: 'AO VIVO', 
    casa: {
      nome: 'SPORT RECIFE', pathFoto: '/sport.png', sigla: 'SR',
      gols: 2, posseBola: 60, chutesAGol: 7, cartoesVermelhos: 1, cartoesAmarelos: 3,
      info: { fundacao: '1905', estadio: 'Ilha do Retiro', titulos: 'Brasileiro 87, Copa do Brasil 08' }
    },
    fora: {
      nome: 'SANTA CRUZ', pathFoto: '/santa.png', sigla: 'SC',
      gols: 1, posseBola: 40, chutesAGol: 3, cartoesVermelhos: 0, cartoesAmarelos: 2,
      info: { fundacao: '1914', estadio: 'Arruda', titulos: 'Supercampeão PE, Copa do Nordeste' }
    },
    eventos: [
      { tempo: "78'", tipo: "CA", time: "casa", jogador: "Rafael Thyere" },
      { tempo: "72'", tipo: "GOL", time: "fora", jogador: "Italo Melo" },
      { tempo: "65'", tipo: "CV", time: "casa", jogador: "Ronaldo Henrique" },
      { tempo: "51'", tipo: "GOL", time: "casa", jogador: "Luciano Juba" },
      { tempo: "45+2'", tipo: "INT", jogador: "INTERVALO (1 - 0)" },
      { tempo: "38'", tipo: "CA", time: "fora", jogador: "Pipico" },
      { tempo: "23'", tipo: "GOL", time: "casa", jogador: "Vagner Love" },
    ],
    ultimosConfrontos: [
      { data: '15/02/2024', camp: 'Pernambucano', result: 'Santa Cruz 1 x 2 Sport' },
      { data: '11/03/2023', camp: 'Pernambucano', result: 'Sport 2 x 0 Santa Cruz' },
      { data: '19/02/2022', camp: 'Copa do Nordeste', result: 'Sport 0 x 0 Santa Cruz' },
    ]
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full w-full bg-bg-main text-text-secondary animate-pulse">
        A carregar o detalhamento...
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-bg-card flex flex-col overflow-hidden relative">
      <div className="absolute top-4 left-4 z-50">
        <Link href="/" className="inline-flex items-center text-text-secondary hover:text-white transition-all bg-bg-panel/80 hover:bg-bg-panel border border-border-color px-3 py-2 rounded-lg gap-2 text-xs font-medium shadow-lg group">
          <svg className="w-3 h-3 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Sair
        </Link>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden relative z-10">
        <div className="pt-10">
           <PlacarHeader jogo={jogoDoClasico} />
        </div>


        <div className="flex border-y border-border-color bg-bg-panel/20 shrink-0">
          {['resumo', 'estatisticas', 'historico', 'palpite'].map((aba) => {
            const ehPalpite = aba === 'palpite';
            const estaAtiva = abaAtiva === aba;


            let classesBase = "flex-1 py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all border-b-2 whitespace-nowrap";
            let classesEstado = "";

            if (ehPalpite) {
              
              classesEstado = estaAtiva
                ? "text-text-green border-text-green bg-text-green/10 shadow-[inset_0_-10px_20px_rgba(0,255,135,0.05)]" 
                : "text-text-green/70 border-transparent hover:text-text-green hover:bg-text-green/5 hover:border-text-green/30"; 
            } else {
              
              classesEstado = estaAtiva
                ? "text-white border-white bg-bg-input/40" 
                : "text-text-secondary border-transparent hover:text-white hover:bg-bg-input/20"; 
            }

            return (
              <button 
                key={aba}
                onClick={() => setAbaAtiva(aba)} 
                className={`${classesBase} ${classesEstado}`}
              >
                {ehPalpite ? 'Palpites' : aba.charAt(0).toUpperCase() + aba.slice(1)}
              </button>
            );
          })}
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar bg-bg-main/10 p-6 md:p-10">
          <div className="max-w-5xl mx-auto animate-fade-in transition-all duration-500">
            {abaAtiva === 'resumo' && <TabResumo eventos={jogoDoClasico.eventos} />}
            {abaAtiva === 'estatisticas' && <TabEstatisticas jogo={jogoDoClasico} />}
            {abaAtiva === 'historico' && <TabHistorico jogo={jogoDoClasico} />}
            {abaAtiva === 'palpite' && <TabPalpiteMestre jogo={jogoDoClasico} />}
          </div>
        </div>
      </div>
    </div>
  );
}