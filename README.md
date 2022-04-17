# APLICAÇÃO SCF - SIMULAÇÃO DO CAMPEONATO DE FUTEBOL

## Requisito Técnico
O sistema deverá ser desenvolvido utilizando Javascript e HTML.

## Instruções de uso

A aplicação encontra-se no repositório Projetos no repositório publico do github https://github.com/dabcsouza/ignis-challenge

- Para ter acesso ao código fonte pode se fazer uso CLI do versionador de código git. em um terminal digite:
  1. `git clone https://github.com/dabcsouza/ignis-challenge`
  2. `cd ignis-challenge`
  3. `cd Projeto`
  4. `npm install`  **instala o eslint**
  *No editor de texto de sua prefência acesse o diretório presente, no meu caso usei o vscode:*
  4. `code .`

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

###**Desde Já agradeço a oportunidade**

<!-- # DESAFIO IGNIS - 2022

**Parabéns!** <br>
Ficamos muito felizes por você ter chegado até aqui e agora chegou a hora de botar as mãos no código e mostrar toda a sua habilidade.
Nessa etapa queremos ver como você pensa e estrutura seu código, por isso se liga no que vamos desenvolver.

## Requisito Técnico
O sistema deverá ser desenvolvido utilizando Javascript e HTML.

## O desafio
Desenvolver um sistema de torneio de futebol de pontos corridos onde todos 
os clubes se enfrentam em dois turnos. Este sistema deverá ter os seguintes recursos:

1. Ler um TextArea contendo uma lista de times e seu respectivo estado separados
por “;”
Exemplo:<br>
Vasco;Rio de Janeiro <br>
Flamengo;Rio de Janeiro <br>
Palmeiras;São Paulo <br>
Santos;São Paulo <br>
Cruzeiro;Minas Gerais <br>
Internacional;Rio Grande do Sul <br>

2. Exibir na tela a combinação de jogos para todas as equipes, indicando a cidade do 
jogo, turno de ida, por exemplo:
Vasco vs Flamengo - Rio de Janeiro - Rodada 1 <br>
Palmeiras vs Cruzeiro - São Paulo - Rodada 1 <br>
Santos vs Internacional - São Paulo - Rodada 1 <br>
Flamengo vs Santos - Rio de Janeiro - Rodada 2 <br>
Palmeiras vs Internacional - São Paulo - Rodada 2 <br>
Cruzeiro vs Vasco - Minas Gerais - Rodada 2<br>

3. Printar na tela a combinação de jogos de returno, invertendo o mandante de cada 
jogo do turno de ida.

4. Gerar um resultado randômico para cada jogo gerado no turno e returno.

5. Determinar o campeão, considerando: Vitória = 3 pontos; Empate = 1 ponto, sem 
levar em conta saldo de gols.

6. Sinalizar as partidas com o texto "Rodada Dupla" quando houverem dois jogos na 
mesma cidade na mesma rodada, como no exemplo abaixo:

Vasco vs Flamengo - Rio de Janeiro - Rodada 1 <br>
Palmeiras vs Cruzeiro - São Paulo - Rodada 1 (RODADA DUPLA) <br>
Santos vs Internacional - São Paulo - Rodada 1 (RODADA DUPLA <br>

## Dicas
* Crie um Fork e em seguida faça o clone.
* Tente não fazer tudo em um mesmo commit.
* Assim que terminar, mande um e-mail para contact@ignisplanning.com avisando e não faça mais commits depois disso.
* O assunto do e-mail deverá ser [DESAFIO-DEV-2022] – SEU NOME COMPLETO

<br>
<br>

**Boa sorte! Estamos ansiosos pra ter você na equipe.** -->
