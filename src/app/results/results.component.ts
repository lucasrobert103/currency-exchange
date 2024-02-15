import { Component, Input } from '@angular/core';
import { CurrentExchangeService } from '../current-exchange.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent  {
  // Input para receber a taxa de câmbio atual da moeda
  @Input() exchangeRate: number = 0;
  // Variável para armazenar a última atualização da taxa de câmbio
  lastUpdatedAt: string = '';
  // Array para armazenar o histórico de taxas de câmbio dos últimos 30 dias
  history: any[] = [];

  constructor(
    private currentExchangeService: CurrentExchangeService
  ) {
  }

  // Método para obter o histórico de preços das últimas 30 taxas de câmbio
  historyPrice() {
    this.currentExchangeService.getHistoryPrice('USD', 'BRL').subscribe((res) => {
      // Mapeia os dados recebidos e os adiciona ao array de histórico
      res.data?.map((day) => {
        this.history.push(day)
      })
    })
  }
}
