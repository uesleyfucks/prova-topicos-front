import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  nome!: string;
  codigoBarras!: string;
  preco!: number;

  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    let produto = new Produto();
    produto.nome = this.nome;
    produto.codigoBarras = this.codigoBarras;
    produto.preco = this.preco;
    this.service.cadastrar(produto).subscribe((produto) =>{
      console.log(produto);
    })
  }
}
