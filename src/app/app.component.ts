import { Component } from '@angular/core';
import { CurrentExchangeService } from './current-exchange.service';

interface Coin {
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedValue: string;
  coins: Coin[] = [
    { value: 'USD' },
    { value: 'EUR' },
    { value: 'GBP' },
    { value: 'JPY' },
    { value: 'CAD' },
  ];
  showDetails = false;

  exchangeRate: number = 0;
  lastUpdatedAt: string = '';
  fromSymbol: string = '';
  toSymbol: string = '';

  constructor(private currentExchangeService: CurrentExchangeService) {
    this.selectedValue = ''
  }

  // Método para obter e exibir a taxa de câmbio da moeda selecionada
  showValue(coin: string) {
    console.log(coin);
    this.currentExchangeService.getPriceCurrency(coin, 'BRL').subscribe((data) => {
      // Atribui os valores recebidos às variáveis correspondentes
      this.exchangeRate = data.exchangeRate
      this.lastUpdatedAt = data.lastUpdatedAt
      this.fromSymbol = data.fromSymbol
      this.toSymbol = data.toSymbol
      this.showDetails = true; // Exibe os detalhes da troca
    })
    // Redefine as variáveis caso o serviço falhe
    this.exchangeRate = 0
    this.lastUpdatedAt = ''
    this.fromSymbol = ''
    this.toSymbol = ''
    this.showDetails = false; // Oculta os detalhes da troca
  }
}
