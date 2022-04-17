# APLICAÇÃO SCF - SIMULAÇÃO DO CAMPEONATO DE FUTEBOL

## Requisito Técnico
O sistema deverá ser desenvolvido utilizando Javascript e HTML.

## Instruções de uso

A aplicação encontra-se no repositório Projetos no repositório publico do github https://github.com/dabcsouza/ignis-challenge

- Para ter acesso ao código fonte pode se fazer uso CLI do versionador de código git. em um terminal digite:
  1. `git clone https://github.com/dabcsouza/ignis-challenge`
  2. `cd ignis-challenge`
  3. `cd Projeto`
  4. `npm install`  **instala o eslint**<br>
  *No editor de texto de sua prefência acesse o diretório presente, no meu caso usei o vscode:*
  5. `code .`

- Para facilitar a visualização do projeto funcionando, o endereço da aplicação funcionando pode ser encontrado em:
 **https://dabcsouza.github.io/ignis-challenge-app/**

- Caso tenha interesse e tenha acesso ao CLI do docker, pode se digitar o comando `docker run --rm -p 1234:5500 dsouza40/ignis-challenge` e, após baixar e executar a imagem docker, acesse no navegador o endereço **http://localhost:1234/** que terá acesso a aplicação funcionando.

- A fim de melhorar a qualidade e legibilidade do código, nesta aplicação foi feito o uso da ferramenta eslint com o padrão criado pela Airbnb de boas práticas de código.

## O desafio
Desenvolver um sistema de torneio de futebol de pontos corridos onde todos 
os clubes se enfrentam em dois turnos. Este sistema deverá ter os seguintes recursos:

1. Ler um TextArea contendo uma lista de times e seu respectivo estado separados
por “;” :heavy_check_mark:

2. Exibir na tela a combinação de jogos para todas as equipes, indicando a cidade do 
jogo, turno de ida :heavy_check_mark:

3. Printar na tela a combinação de jogos de returno, invertendo o mandante de cada 
jogo do turno de ida. :heavy_check_mark:

4. Gerar um resultado randômico para cada jogo gerado no turno e returno. :heavy_check_mark:

5. Determinar o campeão, considerando: Vitória = 3 pontos; Empate = 1 ponto, sem 
levar em conta saldo de gols. :heavy_check_mark:

6. Sinalizar as partidas com o texto "Rodada Dupla" quando houverem dois jogos na 
mesma cidade na mesma rodada. :heavy_check_mark:
