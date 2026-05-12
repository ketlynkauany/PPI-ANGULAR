import { Component } from '@angular/core';

@Component({
  selector: 'app-exibe-mensagem',
  standalone: true,
  imports: [],
  templateUrl: './exibe-mensagem.html',
  styleUrl: './exibe-mensagem.css'
})

export class ExibeMensagem {

  mensagem: string = '';

  alterarMensagem(nome: string) {
    this.mensagem = `Seja bem-vindo, ${nome}!`;
  }

}