import { Component } from '@angular/core';

@Component({
  selector: 'app-exibe-mensagem',
  standalone: true,
  imports: [],
  template: `
    <form>
      <label for="nome">Digite seu nome</label>

      <input
        id="nome"
        name="nome"
        type="text"
        #nome
        (keyup)="alterarMensagem(nome.value)"
      >
    </form>

    <div class="msg">
      <p>{{mensagem}}</p>
    </div>
  `,
  styles: [`
    div.msg {
      background-color: #CED8F6;
      border-radius: 5px;
      margin-top: 10px;
      padding: 10px;
    }
  `]
})

export class ExibeMensagem {

  mensagem: string = '';

  alterarMensagem(nome: string) {
    this.mensagem = `Seja bem-vindo, ${nome}!`;
  }

}