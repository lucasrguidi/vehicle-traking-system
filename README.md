### Resumo da Prova Técnica

**Objetivo:**
Desenvolver uma aplicação web utilizando **React** e **Next.js** que consome uma API REST para:

- **Autenticação** (JWT: login, validação e refresh de token)
- **Dashboard** com KPIs, como total de veículos ativos e quantidade de veículos online
- **CRUD de Veículos** (listagem, cadastro, edição e exclusão)
- **Rastreamento de Veículos** (mapa integrado com Google Maps API e atualização automática da posição)

**Tecnologias e Boas Práticas:**

- **Arquitetura:** Componentes reutilizáveis e organização modular
- **React Hooks:** Uso de hooks (useState, useEffect, useContext)
- **Next.js API Routes:** Para gerenciamento das chamadas ao backend
- **UI Responsiva:** Com TailwindCSS ou Chakra UI
- **Gerenciamento de Estado:** Zustand ou Redux
- **Feedback Visual:** Loading states e tratamento de erros
- **Melhorias adicionais (Diferenciais):**
  - Lazy loading e code splitting
  - PWA para funcionamento offline
  - Testes unitários com Jest e Testing Library
  - Atualização automática do dashboard

---

### Roadmap de Desenvolvimento

1. **Planejamento e Setup do Projeto**

   - [x] Criação do repositório e inicialização do projeto com Next.js.
   - [x] Configuração de dependências: React, Next.js, TailwindCSS/Chakra UI, Zustand/Redux, Axios/fetch para chamadas à API, etc.
   - [x] Definição da estrutura de pastas (componentes, páginas, hooks, contextos, etc).

2. **Implementação da Autenticação (JWT)**

   - [x] **Tela de Login:**
     - [x] Criar formulário de login e integrar com o endpoint `auth/login`.
     - [x] Armazenar os tokens (access e refresh) de forma segura (ex.: cookies ou storage com medidas de segurança).
   - [x] **Validação e Refresh:**
     - [x] Implementar verificação do token utilizando o endpoint `auth/me`.
     - [x] Configurar a lógica para refresh automático do token utilizando `auth/refresh`.
   - [x] **Proteção de Rotas:**
     - [x] Criar um componente de rota protegida para impedir o acesso a áreas que necessitam de autenticação.

3. **Dashboard com KPIs**

   - [x] **Integração com API:**
     - [x] Consumir os endpoints `dashboard/total_ativos/` e `dashboard/veiculos_online/` para buscar os dados dos KPIs.
   - [x] **Exibição dos KPIs:**
     - [x] Desenvolver componentes para exibir os dados de forma clara e visual (gráficos, números, cards, etc).
   - [x] **Atualização Automática:**
     - [x] Implementar atualização em tempo real ou com intervalos definidos para manter o dashboard sempre atualizado.

4. **CRUD de Veículos**

   - [x] **Listagem de Veículos:**
     - [x] Criar uma tela que consuma o endpoint GET `/vehicles` e exiba a lista de veículos.
   - [x] **Cadastro e Edição:**
     - [x] Desenvolver formulários para criar (POST) e editar (PUT/PATCH) veículos.
   - [x] **Exclusão:**
     - [x] Adicionar funcionalidade para remover veículos (DELETE).
   - [x] **Feedback e Validações:**
     - [x] Implementar mensagens de erro, loading states e validações de formulário.

5. **Tela de Rastreamento de Veículos**

   - [x] **Integração com Google Maps API:**
     - [x] Configurar a API do Google Maps para exibir um mapa.
   - [x] **Exibição e Atualização:**
     - [x] Marcar a posição dos veículos e implementar atualização automática da posição (ex.: via WebSockets ou polling).

6. **Aprimoramentos e Boas Práticas**

   - [x] **Lazy Loading e Code Splitting:**
     - [x] Otimizar o carregamento de componentes e páginas com recursos de lazy loading.
   - [ ] **PWA:**
     - [ ] Configurar a aplicação como Progressive Web App para suportar uso offline.
   - [ ] **Testes:**
     - [ ] Escrever testes unitários com Jest e Testing Library para componentes e integrações importantes.
   - [x] **SSR/SSG:**
     - [x] Identificar partes da aplicação que se beneficiam do Server Side Rendering ou Static Site Generation.

7. **Finalização e Deploy**

   - [x] **Revisão de Código:**
     - [x] Garantir boas práticas, refatoração e cobertura de testes.
   - [ ] **Deploy:**
     - [ ] Preparar a aplicação para produção, configurar variáveis de ambiente e realizar o deploy (ex.: Vercel para Next.js).
   - [x] **Documentação:**
     - [x] Documentar a arquitetura, principais decisões e instruções para rodar o projeto.

## Documentação

# Projeto de Desenvolvimento Front-End

Este projeto foi desenvolvido como parte de um teste técnico para a vaga de Desenvolvedor Front-End. A aplicação é uma plataforma web que consome uma API REST para gerenciar veículos, rastreamento, controle de acesso (autenticação JWT) e exibir um dashboard com métricas.

## Tecnologias Utilizadas

- **Next.js 15**: Framework React para renderização do lado do servidor (SSR) e geração de sites estáticos (SSG).
- **shadcnui**: Biblioteca de componentes UI para construção de interfaces modernas e responsivas.
- **React Query**: Gerenciamento de estado e cache de dados para chamadas à API.
- **Auth.js**: Biblioteca para autenticação com JWT, incluindo tela de login, validação de token e proteção de rotas.
- **Google Maps API**: Integração para exibição de mapas e rastreamento de veículos.
- **TailwindCSS**: Framework CSS para estilização responsiva e acessível.

## Funcionalidades Implementadas

### 1. Autenticação com JWT

- **Tela de Login**: Interface para autenticação de usuários.
- **Validação do Token**: Verificação do token JWT para acesso às rotas protegidas.
- **Proteção de Rotas**: Acesso restrito a usuários autenticados.

### 2. Dashboard com KPIs

- **Total de Veículos Ativos**: Exibição do número total de veículos ativos.
- **Quantidade de Veículos Online**: Exibição do número de veículos online em tempo real.
- **Atualização Automática**: Atualização em tempo real das métricas.

### 3. CRUD de Veículos

- **Listagem**: Exibição de todos os veículos cadastrados.
- **Cadastro**: Interface para adicionar novos veículos.
- **Edição**: Interface para editar informações de veículos existentes.
- **Exclusão**: Funcionalidade para remover veículos.

### 4. Tela de Rastreamento de Veículos

- **Mapa com Google Maps API**: Exibição de um mapa com a localização dos veículos.
- **Atualização Automática**: Atualização em tempo real a cada 5 segundos da posição dos veículos.

## Boas Práticas e Tecnologias

- **Arquitetura Baseada em Componentes**: Utilização de componentes reutilizáveis para melhor organização e manutenção do código.
- **React Hooks**: Uso de `useState`, `useEffect` e `useContext` para gerenciamento de estado e efeitos colaterais.
- **Next.js API Routes**: Gerenciamento de chamadas ao backend diretamente no Next.js.
- **Layout Responsivo e Acessível**: Utilização do TailwindCSS para garantir uma experiência consistente em diferentes dispositivos.
- **Feedback Visual**: Implementação de estados de carregamento e mensagens de erro para melhorar a experiência do usuário.
- **Gerenciamento de Estado**: Utilização do React Query para gerenciamento de estado global e cache de dados.

## Diferenciais Implementados

- **Lazy Loading e Code Splitting**: Melhoria de performance com carregamento sob demanda de componentes.
- **Atualização Automática do Dashboard**: Atualização em tempo real das métricas exibidas no dashboard.

## Instruções para Execução do Projeto

### Pré-requisitos

- Node.js instalado (versão 16 ou superior)
- npm ou yarn instalado

### Passos para Execução

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/lucasrguidi/vehicle-traking-system.git
   cd vehicle-traking-system
   ```

2. **Instale as dependências**:

```bash
  pnpm install
  # ou
  npm install
  # ou
  yarn install
```

3. **Configure as variáveis de ambiente**:
   Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis:

```bash
  NEXT_PUBLIC_API_URL="http://ws.lifeonline.com.br:7060/api"
  AUTH_SECRET="f6NhY8AG4TDe3Z5nF7xBbz8K+enI8ShV4k5OdXu+9y4="
  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="AIzaSyAGr5xEFsOB2eVwFPUaH0uiypxlaXh4JC8"
```

4. **Inicie o servidor de desenvolvimento**:

```bash
  pnpm dev
  # ou
  npm run dev
  # ou
  yarn dev
```

5. **Acesse a aplicação**:
   Abra o navegador e acesse `http://localhost:3000`.

## Screenshots

**Tela de Login**
![[Pasted image 20250315201528.png]]

**Tela de Dashboard**
![[Pasted image 20250315201720.png]]

**Tela de CRUD de Veículos**
![[Pasted image 20250315201747.png]]

**Tela de Rastreamento**
![[Pasted image 20250315201805.png]]

## Considerações Finais

Este projeto foi desenvolvido com foco em boas práticas de desenvolvimento, utilizando tecnologias modernas e garantindo uma experiência de usuário fluida e responsiva.

## Usuário para testes

Usuário: `user02`
Senha:` x20QL8M`
