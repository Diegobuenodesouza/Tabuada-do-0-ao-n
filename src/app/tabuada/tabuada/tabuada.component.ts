import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css']
})
export class TabuadaComponent implements OnInit {

  numerosUm = [1,2,3,4,5]
  numerosDois = [6,7,8,9,10]
  lista = []
  valor: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.numerosUm.forEach((n: number) => {
      this.lista.push(n)
    })

    this.numerosDois.forEach((n: number) => {
      this.lista.push(n)
    })

  }

  alterarValor(evento : any): void {
    this.valor =evento.target.value;
  }
}
