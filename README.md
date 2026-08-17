# Vínculo

Uma rede social desenvolvida com React, criada para explorar na prática conceitos de desenvolvimento Front-End, componentização, gerenciamento de estado, navegação entre páginas e construção de interfaces responsivas.

O **Vínculo** permite que usuários criem uma conta, acessem um feed de publicações, interajam com outros usuários e gerenciem suas conexões dentro da aplicação.

> Projeto desenvolvido como parte do meu processo de aprendizado e evolução como desenvolvedor Front-End.

## Preview

![Vínculo](./src/assets/preview.png)

## Funcionalidades

* Cadastro e login de usuários
* Feed de publicações
* Visualização de perfil
* Sistema de amizades
* Solicitações de amizade
* Listagem de amigos
* Comentários em publicações
* Exibição de datas e horários localizados
* Feedback visual através de notificações
* Navegação entre páginas
* Interface responsiva
* Animações e transições de interface

## Tecnologias

### Front-End

* **React**
* **JavaScript**
* **Vite**
* **React Router**
* **Sass / SCSS**
* **Framer Motion**

## Estrutura do projeto

A aplicação foi organizada buscando separar responsabilidades entre componentes, páginas, lógica compartilhada e serviços.

```text
src/
├── components/     # Componentes reutilizáveis
├── contexts/       # Contextos e estados compartilhados
├── hooks/          # Hooks personalizados
├── layouts/        # Estruturas de layout da aplicação
├── pages/          # Páginas e telas
├── services/       # Comunicação e serviços da aplicação
├── styles/         # Estilos globais
├── utils/          # Funções utilitárias
├── App.jsx         # Configuração das rotas
└── main.jsx        # Ponto de entrada da aplicação
```

A navegação principal é organizada através do React Router, com layouts separados para as áreas autenticadas e de autenticação.

## Rotas principais

| Rota                | Descrição               |
| ------------------- | ----------------------- |
| `/feed`             | Feed principal          |
| `/friends`          | Lista de amigos         |
| `/friends-requests` | Solicitações de amizade |
| `/profile`          | Perfil do usuário       |
| `/login`            | Login                   |
| `/register`         | Cadastro                |

## Objetivos do projeto

O Vínculo foi desenvolvido com foco em praticar conceitos importantes para aplicações Front-End modernas, principalmente:

* Componentização com React
* Criação de componentes reutilizáveis
* Organização e escalabilidade de projetos
* Gerenciamento de estado compartilhado
* Hooks personalizados
* Roteamento no lado do cliente
* Separação de responsabilidades
* Consumo e organização de serviços
* Formatação e manipulação de datas
* Feedback visual para ações do usuário
* Animações de interface
* Desenvolvimento de interfaces responsivas

## Autor

Desenvolvido por **Jackson Coelho Roque**.

* GitHub: [@jacksoncroque](https://github.com/jacksoncroque)
* LinkedIn: [Jackson Coelho Roque](https://www.linkedin.com/in/jacksoncrq)
* Portfólio: [Jackson Coelho Roque](https://jacksoncroque.com/)

## Licença

Este projeto foi desenvolvido para fins de estudo e portfólio.
