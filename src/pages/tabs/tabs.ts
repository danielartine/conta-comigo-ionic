import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Conta } from '../../models/conta';
import { ProdutosPage } from '../produtos/produtos';
import { PessoasPage } from '../pessoas/pessoas';
import { ContaService } from '../../services/conta/conta-service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public tab1Root = PessoasPage;
  public tab2Root = ProdutosPage;

  private conta: Conta = <Conta>{};

  constructor(public navParams: NavParams,
    private contaService: ContaService) {
    if (this.navParams.get('isNovaConta')) {
      this.conta = this.contaService.criaConta(this.navParams.get('nomeNovaConta'));
    }
    else {
      this.conta = this.navParams.get('contaAntiga');
    }
  }


}
