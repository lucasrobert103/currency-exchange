
# Aplicativo Web de Taxa de Câmbio

Este aplicativo Angular permite aos usuários verificar a taxa de câmbio do Real Brasileiro (BRL) em relação a outras moedas. Os usuários podem inserir um código de moeda, e o aplicativo exibe a taxa de câmbio atual, juntamente com a opção de visualizar a taxa de câmbio dos últimos 30 dias.

## Sumário

- [Especificações](#especificações)
- [Layout](#layout)
- [API](#api)
- [Como Começar](#como-começar)
- [Uso](#uso)
- [Dependências](#dependências)
- [Licença](#licença)

## Especificações

### Especificações

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

### Chave da API

Para acessar a API, você precisa usar a chave da API `RVZG0GHEV2KORLNA` em todas as chamadas de API. A API tem um limite de taxa de até 5 chamadas/minuto e 500 chamadas/dia. Se você atingir esses limites, a API retornará um erro indicando `rateLimitExceeded`. Lidar com esse erro não é necessário no aplicativo.

Exemplo de chamada de API:


## Getting Started

To run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the application using `ng serve`.
5. Access the application in your web browser at `http://localhost:4200`.

## Usage

- Input a currency code (e.g., USD, EUR, GBP, JPY, CAD) in the provided field.
- Click on the "Check Exchange Rate" button to view the current exchange rate.
- Optionally, click on the "View Last 30 Days" button to view the exchange rate history for the last 30 days.
- Each day's exchange rate card displays the "close diff" field, showing the difference between the day's close rate and the previous day’s close rate.

## Dependencies

The application uses Angular 10+ and may have additional dependencies specified in the `package.json` file.


