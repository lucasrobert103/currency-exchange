# Rodando o Projeto Currency Exchange

Este é um tutorial sobre como rodar o projeto Currency Exchange localmente em seu ambiente de desenvolvimento.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js e npm (Node Package Manager) - [Instalação do Node.js](https://nodejs.org/)
- Angular CLI - Você pode instalar o Angular CLI globalmente usando o npm com o seguinte comando:
- npm install -g @angular/cli


## Passos para Rodar o Projeto

1. **Clone o repositório:**

git clone https://github.com/lucasrobert103/currency-exchange


2. **Navegue até o diretório do projeto:**

cd currency-exchange


3. **Instale as dependências:**

npm install


4. **Execute o aplicativo:**

ng serve / npm start


5. **Acesse o aplicativo no navegador:**

Abra seu navegador e vá para o seguinte endereço:

http://localhost:4200/

- Este aplicativo da web possui uma única página onde os usuários podem verificar a taxa de câmbio do Real Brasileiro (BRL) em relação a outras moedas.
- Os usuários inserem um código de moeda (por exemplo, USD, EUR, GBP, JPY, CAD) para visualizar a taxa de câmbio atual.
- O aplicativo exibe a taxa de câmbio atual e fornece a opção de visualizar a taxa de câmbio dos últimos 30 dias.
- O cartão de taxa de câmbio de cada dia inclui um campo "fechar diferença", que calcula a diferença entre a taxa de fechamento do dia e a taxa de fechamento do dia anterior.
- O aplicativo deve ser implementado usando Angular 10+ e deve ser executado com `ng serve`.
- Ajustes devem ser feitos para garantir que o aplicativo funcione em dispositivos móveis e desktops.

## Layout

O layout para o aplicativo está disponível [aqui](https://www.figma.com/file/hcwecJTI3KNnvy5LiFuYLi/BRL-Exchange-Rate?node-id=401%3A5266). O protótipo pode ser acessado [aqui](https://www.figma.com/proto/hcwecJTI3KNnvy5LiFuYLi/BRL-Exchange-Rate?node-id=401%3A5266).

Por favor, garanta que ajustes adequados sejam feitos para tornar o aplicativo responsivo e compatível tanto com dispositivos móveis quanto com desktops.

## API

### Documentação

A documentação da API pode ser acessada [aqui](https://api-brl-exchange.actionlabs.com.br/api/1.0/swagger-ui.html#/open45rest45controller). Consulte a documentação para obter informações sobre os pontos finais e o uso da API.