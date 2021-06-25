import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { MatTableDataSource } from "@angular/material/table"

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  //produtos : Produto[] = [];
  produtos!: MatTableDataSource<Produto>;
  displayedColumns: string[] = ['id', 'nome', 'codigoBarras', 'preco', 'criadoEm'];

  constructor(private service: ProdutoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((produtos) => {
      //console.log(produtos);
      //this.produtos = produtos;
      this.produtos = new MatTableDataSource<Produto>(produtos);
    });
  }

}
