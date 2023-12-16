//A classe Candle foi criada para lidar com a formatação e o armazenamento dos dados de vela (candlestick) de uma maneira mais fácil de ser manipulada.
//Esta classe Candle possui um construtor que recebe os dados de tempo de abertura (openTime), preço de abertura (open), preço máximo (high), preço mínimo (low) e preço de fechamento (close) de uma vela específica.

export default class Candle {
  constructor(openTime, open, high, low, close) {
    this.x = new Date(openTime);
    this.y = [
      parseFloat(open),
      parseFloat(high),
      parseFloat(low),
      parseFloat(close),
    ];
  }
}
