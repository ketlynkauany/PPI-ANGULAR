import { Component } from '@angular/core';
import { ExibeMensagem } from './exibe-mensagem/exibe-mensagem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExibeMensagem],
  template: `<app-exibe-mensagem></app-exibe-mensagem>`,
})

export class App {}