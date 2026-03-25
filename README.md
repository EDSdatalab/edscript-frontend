# 🏆 Dashboard de Apostas Desportivas

Uma interface de utilizador (UI) moderna, responsiva e de alta performance para uma plataforma de apostas desportivas. O projeto foi desenhado com foco na experiência do utilizador, oferecendo navegação intuitiva, atualizações em tempo real (simuladas) e um design profissional.

Este Front-end foi construído para ser o "rosto" de uma aplicação que consumirá dados da **BetsAPI**, estando todos os seus componentes previamente estruturados para receber os dados dinâmicos do Back-end.

## 🚀 Tecnologias Utilizadas

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Biblioteca UI:** [React](https://reactjs.org/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Linguagem:** TypeScript / JavaScript

## ✨ Funcionalidades Principais

* **📱 Design Responsivo:** Interface adaptável a diferentes tamanhos de ecrã (Mobile, Tablet e Desktop).
* **⚽ Placar ao Vivo:** Acompanhamento de jogos a decorrer, com indicadores de tempo, golos e estatísticas dinâmicas.
* **📅 Próximos Jogos:** Lista de eventos futuros com mercados de apostas tradicionais (1x2) e escudos dinâmicos das equipas.
* **🤖 Analista de IA:** Componente inovador que simula uma Inteligência Artificial a fornecer dicas e previsões de apostas baseadas em estatísticas.
* **🔥 Apostas Populares:** Destaque para as cotações (odds) mais atrativas do momento.
* **🌍 Ligas Globais:** Barra lateral de navegação rápida pelas ligas de futebol mais populares (com bandeiras carregadas via CDN).

## 📂 Estrutura de Ficheiros (Componentes)

A arquitetura do Front-end foi modularizada para facilitar a manutenção e a integração:

```bash
├── app/
│   ├── components/
│   │   ├── AiAnalysis.tsx      # Dicas de apostas geradas por IA
│   │   ├── Footer.tsx          # Rodapé com links legais e licenças
│   │   ├── Header.tsx          # Navegação superior e autenticação
│   │   ├── HeaderBanner.tsx    # Banner de destaque (ex: Champions League)
│   │   ├── PlacarAoVivo.tsx    # Dashboard do jogo ao vivo
│   │   ├── PopularBets.tsx     # Lista de apostas em alta
│   │   ├── ProximosJogos.tsx   # Lista de jogos futuros e odds (1x2)
│   │   └── Sidebar.tsx         # Menu lateral com ligas populares
│   ├── layout.tsx              # Layout base do Next.js
│   ├── page.tsx                # Página principal agregando os componentes
│   └── globals.css             # Estilos globais e variáveis de cor
⚙️ Como correr o projeto localmente
Clone o repositório:

Bash
git clone [https://github.com/seu-utilizador/seu-repositorio.git](https://github.com/seu-utilizador/seu-repositorio.git)
Entre na pasta do projeto:

Bash
cd seu-repositorio
Instale as dependências:

Bash
npm install
# ou
yarn install
Inicie o servidor de desenvolvimento:

Bash
npm run dev
# ou
yarn dev
Abra o seu navegador e aceda a http://localhost:3000.

🔗 Integração com o Back-end (BetsAPI)
Este Front-end foi propositadamente construído com dados simulados (mockados) que imitam exatamente a estrutura JSON devolvida pela BetsAPI.

Para a equipa de Back-end:

Os IDs das partidas (ex: p1, p2) devem ser substituídos pelos IDs reais gerados pela API.

As imagens das equipas/ligas já estão configuradas para procurar os ficheiros diretamente no CDN da API (ex: https://assets.b365api.com/images/team/m/{image_id}.png). Se o image_id falhar, existe um fallback inteligente na UI que gera a sigla da equipa.