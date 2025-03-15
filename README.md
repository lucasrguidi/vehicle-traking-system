# Projeto de Desenvolvimento Front-End

Esse projeto se consiste em uma aplicação que é uma plataforma web que consome uma API REST para gerenciar veículos, rastreamento, controle de acesso (autenticação JWT) e exibir um dashboard com métricas.

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
