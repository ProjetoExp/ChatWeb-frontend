FROM node:18

# Cria o diretório da aplicação
WORKDIR /app

# Copia os arquivos do projeto para o container
COPY package*.json ./

# Instala dependências do projeto
RUN npm install

# Instala dependências adicionais
RUN npm install react-router-dom bootstrap

# Copia o restante do projeto
COPY . .

# Expõe a porta padrão do React
EXPOSE 3000

# Comando padrão ao iniciar o container
CMD ["npm", "start"]
