# 🎛️ ViaSmart - Totem de Consulta Interativo

Este repositório contém o **Totem Web** do projeto **ViaSmart**, desenvolvido com **Next.js** e projetado para uso em dispositivos interativos, como telas touch em estações e terminais. O totem permite a consulta rápida de rotas, dúvidas frequentes e navegação intuitiva por meio de interface limpa e direta.

---

## 🚀 Como executar o totem localmente

### ✅ Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)

### 📦 Passos para rodar localmente 

```bash
# Clone este repositório
git clone https://github.com/MatheusHenriqueNF/Totem-Sprint-4

# Acesse a pasta do projeto
cd Totem-Sprint-4

# Instale as dependências
npm install

# Execute o projeto
npm run dev
````

A aplicação estará disponível em localhost:
📎 [http://localhost:3000](http://localhost:3000)

### Clone a API em JAVA
```bash
# Clone o repositório
git clone https://github.com/MatheusHenriqueNF/Java-Sprint-4
````
---
## 🔧 Como rodar a API Java (Quarkus) no IntelliJ IDEA

### ✅ Pré-requisitos

* **Java 17** instalado ([OpenJDK 17](https://jdk.java.net/17/))
* **Maven** instalado ou configurado pelo IntelliJ
* **IntelliJ IDEA** (Community ou Ultimate)
* Conexão ativa com o banco de dados Oracle
* A API clonada localmente

---

### 💡 Instalar o plugin do Quarkus no IntelliJ

1. Abra no IntelliJ IDEA a pasta do arquivo da API "projeto-challenge-api"
2. Vá até `File > Settings > Plugins`

 ![image](https://github.com/user-attachments/assets/705c1ef7-0dcf-4afe-8241-1f0292099a5b)

3. Busque por **Quarkus** no Marketplace

![image](https://github.com/user-attachments/assets/6ec2b20b-3477-42e2-af0d-ac8b68856ed3)


4. Clique em **Install**
5. Reinicie o IntelliJ após a instalação

---

### 🚀 Executar a API no IntelliJ

1. **Importe o projeto:**

   * Vá em `File > Open` e selecione a pasta do projeto da API Java
   * O IntelliJ reconhecerá o projeto Maven automaticamente

  ![image](https://github.com/user-attachments/assets/cd72b62a-3bcf-4872-89d4-b97cc87ab498)


2. **Verifique o arquivo `pom.xml`:**

   * Certifique-se de que todas as dependências estão resolvidas (ícone verde no canto superior direito)

3. **Configure as variáveis de ambiente (se necessário):**

   * Como `QUARKUS_DATASOURCE_USERNAME`, `QUARKUS_DATASOURCE_PASSWORD` e `QUARKUS_DATASOURCE_JDBC_URL`
   * Isso pode ser feito dentro da aba `Edit Configurations` > `Application` > `Environment variables`

4. **Execute a API pelo RUN:**

   * RUN > Selecione o run com Quarkus

![image](https://github.com/user-attachments/assets/f5e56bd9-ce26-4488-a7ff-43ecf77d3d8e)


5. **Execute a API pelo TERMINAL:**

   * TERMINAL > Digite:  mvn quarkus:dev
   * ⚠️ Verifique se está no diretório correto, caso execute o código fora do repositória da API não irá funcionar

6. **A API estará disponível em:**

   ```
   http://localhost:8080
   ```

---

### 📌 Endpoints úteis

* **Login:** `POST http://localhost:8080/login`
* **Listar estações:** `GET http://localhost:8080/estacoes-linhas`
* **Dúvidas frequentes:** `GET http://localhost:8080/duvidas`

> Garanta que o CORS está habilitado no projeto Quarkus (`application.properties`):

```properties
quarkus.http.cors=true
```
---

## 🔌 Integração com a API

> ⚠️ O totem consome endpoints da **API Java com Quarkus**. Certifique-se de que a API esteja rodando localmente (porta 8080 por padrão) ou altere os endpoints do frontend para apontar para uma URL pública com CORS liberado.

Exemplo de endpoint usado:

```http
GET http://localhost:8080/rota?origem=SÉ&destino=LAPA
```

### ⚙️ Alterando a URL da API

A URL da API pode ser alterada nos arquivos de `fetch()` localizados nos componentes que consomem a API.

---

## 🧠 Funcionalidades do Totem

### 🛤️ Consulta de Rotas

* Escolha da estação de origem e destino
* Exibição do caminho

### ❓ Dúvidas Frequentes

* Exibição de perguntas cadastradas na API
* Ao clicar, a resposta é exibida de forma interativa

### ⏳ Inatividade

* Sistema de redirecionamento automático para a tela inicial após **15 segundos sem interação**

---

## 🧭 Navegação do Totem

O totem possui interface limpa e simplificada com navegação pelas seguintes páginas:

* **Página Inicial:** Menu com acesso às funções
* **Consulta de Rotas:** Simula uma linha do tempo interativa
* **Dúvidas Frequentes:** Mostra perguntas e respostas de forma expandível

---

## 🛠️ Tecnologias utilizadas

* [Next.js](https://nextjs.org/)
* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Vercel](https://vercel.com/) (Deploy)

---

## 🌐 Deploy

> O projeto pode ser acessado facilmente via VERCEL, porém não será possível navegar, pois o projeto não consegue ter acesso com a API em JAVA que esta localhost https://vercel.com/matheus-freitas-projects-364d2ef3/totem-sprint-4-xmx4

```bash
# (Opcional) Instale a Vercel CLI
npm install -g vercel

# Faça o deploy
vercel
```

---

## ⚠️ Observações importantes

* Caso a **API esteja rodando localmente**, o Vercel **não conseguirá acessá-la**.

---


# ACESSE TAMBÉM O SITE DESENVOLVIDO AQUI: https://github.com/MatheusHenriqueNF/Site-Sprint-4


---

## 🪖 Integrantes do Grupo

* **CLEYTON ENRIKE DE OLIVEIRA** – RM 560485 - Turma 1TDSQ
* **MATHEUS HENRIQUE NASCIMENTO DE FREITAS** – RM 560442 - Turma 1TDSQ
* **MATHEUS PINHEIRO ERMACORA MARTIN** – RM 557720 - Turma 1TDSZ
