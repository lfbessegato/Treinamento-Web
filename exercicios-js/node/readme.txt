Esse comando instala exatamente a versão e as dependencias para dev
npm install --save-dev axios@0.17.1 -E

@^0.17.1 -> significa que pode atualizar o minor

@~0.17.1 -> significa que pode atualizar o fix

o arquivo package-lock.json -> Tem mais informações sobre os pacotes e deve ir para o 
				repositório.

npm i --save axios -> Instala o pacote e salva no arquivo package.json a partir do diretório que
			estiver executando.

npm i -> para recriar a pasta node_modules
npm start -> Uma vez que definiu no arquivo package.json, esse comando irá fazer a chamada do programa
		definido no arquivo.

npm run dev -> para executar a instrução "dev": "nodemon", definido no arquivo packge.json

npm i -y -> para criar o arquivo package.json

npm start -> definido no arquivo package a inicialização de qual o arquivo .js ira iniciar,
o nodemon -> faz um restart na aplicação de qualquer mudança no código, geralmente
instala o pacote como dependencia de dev
npm i --save-dev nodem@1.14.11 -E (o E quer dizer exatamente)





