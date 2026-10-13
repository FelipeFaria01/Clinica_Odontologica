# 🦷 Clínica Odontológica — Full Stack

Aplicação web Full Stack desenvolvida para simular o site institucional de uma clínica odontológica, com foco em experiência do usuário, responsividade, organização de componentes e integração entre frontend e backend.

O projeto apresenta os serviços da clínica, sua equipe de profissionais e um sistema de solicitação de agendamento integrado ao WhatsApp.

> **Projeto demonstrativo desenvolvido para fins de estudo e portfólio.**

## 📸 Demonstração

Adicione aqui capturas de tela do projeto, apresentando as principais seções e a versão mobile.

**Demonstração online:** [em andamento]

## 🚀 Funcionalidades

- Interface moderna e responsiva para desktop, tablet e dispositivos móveis.
- Navegação entre as seções do site.
- Apresentação dos serviços odontológicos.
- Exibição dos profissionais da clínica.
- Formulário de solicitação de agendamento.
- Validação dos dados preenchidos pelo usuário.
- Comunicação entre frontend e backend por API REST.
- Integração com WhatsApp para encaminhamento da solicitação de agendamento.
- Feedback visual durante o envio do formulário.
- Animações e transições para melhorar a experiência de navegação.

## 🛠️ Tecnologias utilizadas

### Frontend
- **React:** construção de interfaces baseadas em componentes.
- **TypeScript:** tipagem estática e maior segurança no desenvolvimento.
- **Vite:** ambiente de desenvolvimento e build.
- **Tailwind CSS:** estilização e responsividade.
- **Framer Motion:** animações e transições.
- **Lucide React:** biblioteca de ícones.
- **React Hook Form:** gerenciamento de formulários.
- **Zod:** validação de dados.

### Backend
- **Node.js:** ambiente de execução JavaScript.
- **TypeScript:** desenvolvimento tipado.
- **Fastify:** framework para construção da API REST.
- **Zod:** validação das requisições.
- **CORS:** controle de origens autorizadas.
- **Helmet:** configuração de cabeçalhos de segurança.
- **Rate Limit:** limitação de requisições.

## 📁 Estrutura do projeto

```text
ClinicaOodontologica/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   └── ...
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── schemas/
│   │   ├── utils/
│   │   ├── app.ts
│   │   └── server.ts
│   └── package.json
│
└── README.md
```

*A estrutura acima é ilustrativa e deve ser ajustada para corresponder às pastas do repositório.*

## 📲 Como funciona o agendamento?

1. O usuário acessa o site e preenche o formulário de agendamento.
2. O frontend valida as informações fornecidas.
3. Os dados são enviados ao backend por meio de uma requisição HTTP.
4. O servidor realiza uma nova validação utilizando Zod.
5. O backend organiza os dados em uma mensagem de agendamento.
6. É gerado um link do WhatsApp contendo a mensagem formatada.
7. O frontend recebe o link e direciona o usuário ao WhatsApp.

**Importante:** o sistema não realiza o agendamento automaticamente. Ele facilita o contato entre o paciente e a clínica para que a solicitação seja confirmada.

## 🔐 Segurança e validação

O backend foi desenvolvido com medidas para aumentar a segurança e a confiabilidade da aplicação:

- Validação das informações recebidas com Zod.
- Limitação de requisições por meio de Rate Limit.
- Proteção de cabeçalhos HTTP utilizando Helmet.
- Configuração de CORS.
- Limitação do tamanho das requisições.
- Utilização de variáveis de ambiente para configurações sensíveis.
- Tratamento de erros nas requisições.

## ⚙️ Como executar o projeto

### Pré-requisitos

- Node.js instalado.
- npm instalado.
- Git instalado.

### 1. Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
cd SEU-REPOSITORIO
```

### 2. Configure o frontend

```bash
npm install
npm run dev
```

O frontend estará disponível, por padrão, em:

`http://localhost:5173`

### 3. Configure o backend

Em outro terminal:

```bash
cd backend
npm install
```

Crie um arquivo `.env` dentro da pasta `backend`:

```env
PORT=3000
FRONTEND_URL=http://localhost:5173
WHATSAPP_NUMBER=SEU_NUMERO
```

Substitua `SEU_NUMERO` pelo número de destino no formato internacional, incluindo o código do país e DDD, sem símbolos.

Inicie o servidor:

```bash
npm run dev
```

A API estará disponível, por padrão, em:

`http://localhost:3000`

### 4. Endpoints da API

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/health` | Verifica o funcionamento da API |
| POST | `/api/agendamentos` | Valida os dados e gera o link de agendamento |

## 🎯 Objetivo do projeto

O principal objetivo foi aplicar conhecimentos de desenvolvimento Full Stack em um cenário próximo de uma necessidade comercial real.

Durante o desenvolvimento, foram trabalhados conceitos como:

- Componentização e reutilização de código.
- Desenvolvimento de interfaces responsivas.
- Gerenciamento de formulários.
- Comunicação com APIs REST.
- Validação de dados no cliente e no servidor.
- Organização de responsabilidades no backend.
- Integração com serviços externos.
- Boas práticas de segurança e manutenção de código.

## 📈 Aprendizados

Este projeto contribuiu para o aprimoramento das minhas habilidades em React, TypeScript e desenvolvimento de APIs com Fastify.

Também permitiu compreender melhor o fluxo completo de uma aplicação web, desde a interação do usuário com a interface até o processamento dos dados no servidor.

## 👨‍💻 Autor

**Felipe Rodrigo de Faria Mendes**

Desenvolvedor Web | Frontend & Full Stack

LinkedIn: [https://www.linkedin.com/in/feliperdrigomendes/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjiGwsu8ST4ytawrSFn0UwA%3D%3D]

---

⭐ Projeto desenvolvido para fins educacionais e demonstração de habilidades em desenvolvimento web.
