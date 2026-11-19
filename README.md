# Jogo da Velha com React

## Descrição do projeto

Este projeto consiste no desenvolvimento de um jogo da velha utilizando React, JavaScript, HTML e CSS. A aplicação permite que dois jogadores participem alternadamente, utilizando os símbolos X e O.

O jogo identifica automaticamente quando um jogador vence ou quando ocorre um empate, permitindo iniciar uma nova partida.

## Tecnologias utilizadas

- React
- JavaScript
- HTML5
- CSS3
- Vite

## Funcionalidades

- Tabuleiro com nove casas.
- Jogador X inicia a partida.
- Alternância automática entre X e O.
- Impedimento de selecionar uma casa já preenchida.
- Identificação das oito combinações possíveis de vitória.
- Bloqueio das jogadas após vitória ou empate.
- Identificação de empate.
- Botão "Novo Jogo" para reiniciar a partida.

## Pré-requisitos

Para executar o projeto, é necessário ter instalado:

- Node.js
- npm
- Navegador de internet atualizado.

## Como instalar e executar

1. Faça o download ou clone este repositório.
2. Abra a pasta do projeto no terminal.
3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Acesse no navegador o endereço informado pelo Vite, normalmente:

```text
http://localhost:5173/
```

## Estrutura do projeto

```text
tic-tac-toe-react/
├── src/
│   ├── components/
│   │   ├── Board/
│   │   │   ├── Board.jsx
│   │   │   └── Board.css
│   │   └── Square/
│   │       ├── Square.jsx
│   │       └── Square.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Autora

Adrienne Ellen Salgado

## Repositório

Projeto desenvolvido para fins acadêmicos e de aprendizagem dos fundamentos do React.