import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-bg-panel border-t border-border-color p-6 text-sm text-text-secondary shrink-0 mt-auto overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-6">
        <div>
          <h3 className="text-white font-semibold mb-3 uppercase tracking-wider">SOBRE NÓS</h3>
          <ul className="space-y-1">
            <li><a className="hover:text-white transition-colors" href="#">• detalhes da Empresa</a></li>
            <li><a className="hover:text-white transition-colors" href="#">• Promoções</a></li>
            <li><a className="hover:text-white transition-colors" href="#">• Termos Gerais e Condições</a></li>
            <li><a className="hover:text-white transition-colors" href="#">• Política de Privacidade</a></li>
            <li><a className="hover:text-white transition-colors" href="#">• Política de Cookies</a></li>
            <li><a className="hover:text-white transition-colors" href="#">• Jogo Responsável</a></li>
            <li><a className="hover:text-white transition-colors" href="#">• Afiliados</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3 uppercase tracking-wider">SUPORTE</h3>
          <ul className="space-y-1">
            <li><a className="hover:text-white transition-colors" href="#">• Contate-nos</a></li>
            <li><a className="hover:text-white transition-colors" href="#">• Comprovabet</a></li>
            <li><a className="hover:text-white transition-colors" href="#">• Saque</a></li>
            <li><a className="hover:text-white transition-colors" href="#">• Depositar</a></li>
            <li><a className="hover:text-white transition-colors" href="#">• Regras Sportbook</a></li>
            <li><a className="hover:text-white transition-colors" href="#">• Regras gerais de bônus</a></li>
            <li><a className="hover:text-white transition-colors" href="#">• Help</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3 uppercase tracking-wider">REGRAS</h3>
          <ul className="space-y-1">
            <li><a className="hover:text-white transition-colors" href="#">• Regras Sportbook</a></li>
            <li><a className="hover:text-white transition-colors" href="#">• Política de Privacidade</a></li>
            <li><a className="hover:text-white transition-colors" href="#">• AML & KYC Policy</a></li>
            <li><a className="hover:text-white transition-colors" href="#">•Jogo Responsável</a></li>
            <li><a className="hover:text-white transition-colors" href="#">• Sistema Centralizado de Autoexclusão de Apostas</a></li>
            <li><a className="hover:text-white transition-colors" href="#">• Tutorial Jogos</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3 uppercase tracking-wider">PRINCIPAL</h3>
          <ul className="space-y-1">
            <li><a className="hover:text-white transition-colors" href="#">• Esportes</a></li>
            <li><a className="hover:text-white transition-colors" href="#">• Apostas ao Vivo</a></li>
            <li><a className="hover:text-white transition-colors" href="#">•Cassino ao Vivo</a></li>
            <li><a className="hover:text-white transition-colors" href="#">• Jogos-Online</a></li>
          </ul>
        </div>
      </div>

      {/* Seção de Textos Legais Adicionada Abaixo */}
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-border-color text-xs text-text-secondary/80 text-center space-y-4">
        <p>
          Jogue com responsabilidade! Jogue de forma consciente e racional, leia todas as informações disponíveis em nossa seção de Jogo Responsável.
        </p>
        <p>
          esportesdasorte.bet.br é operado pela empresa ESPORTES GAMING BRASIL LTDA. (CNPJ nº 56.075.466/0001-00), entidade devidamente autorizada pela Secretaria de Prêmios e Apostas (Ministério da Fazenda), através da Portaria SPA/MF nº 136, de 23 de Janeiro de 2025. A plataforma detém a certificação GLI Brasil, emitida pela Gaming Laboratories International (GLI).
        </p>
        <p>
          Ao utilizar os serviços, você também aceita que utilizaremos certos cookies de navegador com o objetivo de melhorar a sua experiência enquanto utiliza nosso site. O website apenas utiliza cookies para melhorar a sua experiência e não interferem com sua privacidade. Quaisquer dúvidas, sugestões ou questionamentos podem ser enviados pelo suporte.
        </p>
        <p>
          Não é permitido o uso de recursos de programas sociais como o Bolsa Família e o LOAS.
        </p>
        <p className="font-semibold text-text-secondary">
          Atenção: Jogos de aposta podem causar dependência patológica (ludopatia), transtornos de ansiedade, depressão e levar ao superendividamento. Jogue com responsabilidade. Proibido para menores de 18 anos.
        </p>
      </div>
    </footer>
  );
}