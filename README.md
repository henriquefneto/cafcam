# 🌱 CAFCAM App

Aplicativo desenvolvido para auxiliar a **Cooperativa da Agricultura Familiar de Campina do Simão - PR (CAFCAM)** na **organização e gestão de produtos e fornecedores** de forma prática e acessível.

---

## 📱 Sobre o Projeto

O **CAFCAM App** tem como objetivo facilitar o controle e o registro das atividades da cooperativa, permitindo o **cadastro e listagem de produtos e fornecedores** diretamente pelo aplicativo móvel.

Atualmente, o foco está em oferecer uma interface limpa e funcional, garantindo que os cooperados possam gerenciar suas informações de maneira simples e intuitiva.

---

## 🧩 Funcionalidades Atuais

✅ **Cadastro de Produtos**  
- Permite adicionar novos produtos com informações básicas (nome, categoria, descrição, etc.).  
- Armazena os dados localmente (ou em banco de dados integrado, se configurado).  

✅ **Listagem de Produtos**  
- Exibe todos os produtos cadastrados com visual moderno.  
- Opção de visualizar detalhes básicos de cada item.  

✅ **Cadastro de Fornecedores**  
- Registra informações de fornecedores (nome, telefone, e-mail e outros dados importantes).  

✅ **Listagem de Fornecedores**  
- Mostra os fornecedores cadastrados de forma organizada.  

✅ **Página de Perfil**  
- Exibe informações do usuário (foto/avatar, nome, telefone e e-mail).  

---

## 🚀 Futuras Implementações

🔸 Integração com banco de dados remoto (Firebase ou Supabase)  
🔸 Autenticação de usuários (login e cadastro)  
🔸 Controle de estoque e relatórios de vendas  
🔸 Dashboard financeiro da cooperativa  
🔸 Sistema de notificações e lembretes  

---

## 🛠️ Tecnologias Utilizadas

- **React Native** com **Expo**
- **Expo Router** (navegação entre páginas)
- **TypeScript**
- **@expo/react-native-action-sheet**
- **Tailwind CSS / NativeWind** (estilização)
- **React Native Safe Area Context**

---

## 🎨 Identidade Visual

O design do app é inspirado na logo oficial da CAFCAM, utilizando uma **paleta de tons de verde** que representa o **crescimento, sustentabilidade e união dos agricultores familiares**.

| Cor | Hexadecimal | Descrição |
|------|-------------|-----------|
| 🌿 Verde Claro | `#A8E6A1` | Fundo principal do app |
| 🌱 Verde Médio | `#6EDC5F` | Botões e destaques |
| 🌾 Verde Escuro | `#2E7D32` | Textos e cabeçalhos |
| ☀️ Amarelo Claro | `#F5E663` | Ícones e detalhes visuais |

---

## ⚙️ Como Executar o Projeto

### 🧰 Pré-requisitos

Antes de começar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- Um editor de código como [VS Code](https://code.visualstudio.com/)

---

### 💻 Passo a passo para executar o app

#### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/henriquefneto/cafcam.git

#### 2️⃣ Acessar o diretório do projeto

```bash
cd cafcam

#### 3️⃣ Instalar as dependências

```bash
yarn install

#### 4️⃣ Executar o aplicativo

```bash
yarn expo start
