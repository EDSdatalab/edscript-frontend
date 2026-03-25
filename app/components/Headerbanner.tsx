import React from 'react';

export default function HeaderBanner() {
  return (
    <div className="bg-[url('/fundo-chap.png')] bg-cover bg-center bg-no-repeat rounded-xl border border-border-color p-8 flex items-center justify-between z-10 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="flex flex-col space-y-3 max-w-lg z-10">
        <h1 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
          Acompanhe e Aposte <span className="text-text-accent">na UEFA Champions League</span>
        </h1>
        <p className="text-text-secondary text-sm">
          Explore estatísticas detalhadas, odds ao vivo e todos os jogos da Champions League. A sua jornada rumo à vitória começa aqui!
        </p>
      </div>
      
      {/* A SOLUÇÃO: 
        1. Removemos a largura fixa da div.
        2. Usamos 'h-32 w-auto' na imagem para ela manter a proporção original sem cortar.
        3. Colocamos o 'rounded-2xl' diretamente na imagem.
      */}
      <div className="relative z-10 flex items-center justify-center">
        <img 
            src="/logo-champ.png" 
            alt="Champions League Trophy" 
            className="h-32 w-auto object-contain rounded-2xl opacity-90 shadow-lg"
        />
      </div>
    </div>
  );
}