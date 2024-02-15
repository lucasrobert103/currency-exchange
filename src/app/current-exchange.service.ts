import { Injectable } from '@angular/core';
import { ExchangeModel, ExchangeHistoryModel } from './exchange.model'; // Importa modelos de dados
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrentExchangeService {

  // URL da API para obter a taxa de câmbio atual
  API_URL_TODAY = `https://api-brl-exchange.actionlabs.com.br/api/1.0/open/currentExchangeRate?apiKey=RVZG0GHEV2KORLNA&`;

  // URL da API para obter o histórico de taxas de câmbio
  API_URL_HISTORY = `https://api-brl-exchange.actionlabs.com.br/api/1.0/open/dailyExchangeRate?apiKey=RVZG0GHEV2KORLNA&`;

  constructor(private http: HttpClient) { }

  // Método para obter a taxa de câmbio atual entre duas moedas
  getPriceCurrency(from: string, toSymbol: string) {
    return this.http.get<ExchangeModel>(`${this.API_URL_TODAY}from_symbol=${from}&to_symbol=${toSymbol}`);
  }

  // Método para obter o histórico de taxas de câmbio entre duas moedas
  getHistoryPrice(from: string, toSymbol: string){
    return this.http.get<ExchangeHistoryModel>(`${this.API_URL_HISTORY}from_symbol=${from}&to_symbol=${toSymbol}`);
  }
}
