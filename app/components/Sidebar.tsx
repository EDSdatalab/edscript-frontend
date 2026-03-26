"use client"; 

import React, { useEffect, useState } from 'react';

interface LigaPopular {
  id: string;
  nome: string;
  cc: string; 
}

export default function Sidebar() {
  const [ligas, setLigas] = useState<LigaPopular[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarLigas() {
      try {
        // 🔥 Fazendo a chamada REAL para o seu Back-end
        const resposta = await fetch('http://localhost:3001/api/ligas-populares');
        const resultado = await resposta.json();
        
        if (resultado.sucesso) {
          setLigas(resultado.dados);
        }
      } catch (error) {
        console.error("Erro ao buscar ligas da API:", error);
      } finally {
        setLoading(false);
      }
    }

    buscarLigas();
  }, []);

  return (
    <aside className="w-64 bg-bg-sidebar border-r border-border-color flex flex-col py-4 shrink-0 overflow-y-auto no-scrollbar" data-purpose="main-sidebar">
      
      <div className="w-full border-b border-border-color mb-4"></div>

      <div className="flex-1 w-full px-4 space-y-1">
        <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wider pl-2 mb-3">
          Ligas Populares
        </h3>
        
        {loading ? (
          // Skeleton de carregamento
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-3 p-2 rounded-lg">
              <div className="w-6 h-6 rounded-full bg-bg-input animate-pulse shrink-0"></div>
              <div className="h-4 bg-bg-input rounded w-3/4 animate-pulse"></div>
            </div>
          ))
        ) : (
          // Dados reais vindos do Back-end
          ligas.map((liga) => (
            <div 
              key={liga.id} 
              title={liga.nome}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-bg-input cursor-pointer transition-colors group"
            >
              <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 border border-border-color bg-bg-panel flex items-center justify-center">
                 <img 
                    src={`https://flagcdn.com/w40/${liga.cc}.png`} 
                    alt={`Bandeira ${liga.nome}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<span class="text-[10px]">🌍</span>';
                    }}
                 />
              </div>
              
              <span className="text-sm font-medium text-text-secondary group-hover:text-white transition-colors truncate">
                {liga.nome}
              </span>
            </div>
          ))
        )}
      </div>
      
      <div className="w-full px-4 border-t border-border-color pt-4 space-y-1">
        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-bg-input cursor-pointer transition-colors group text-text-secondary">
          <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" fillRule="evenodd"></path>
          </svg>
          <span className="text-sm font-medium group-hover:text-white transition-colors">Ajuda e Suporte</span>
        </div>
      </div>
    </aside>
  );
}