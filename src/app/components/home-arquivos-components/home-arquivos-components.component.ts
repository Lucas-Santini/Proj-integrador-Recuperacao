import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../../service/projeto.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Projeto } from '../../interface/projeto';
import { RouterModule } from '@angular/router';
import { EmpresaService } from '../../service/empresa.service';
import { Empresa } from '../../interface/empresa';
import { Session } from 'node:inspector';
import { Subscription } from 'rxjs';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../interface/usuario';

@Component({
  selector: 'app-home-arquivos-components',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-arquivos-components.component.html',
  styleUrl: './home-arquivos-components.component.css'
})
export class HomeArquivosComponentsComponent implements OnInit {

  projeto!: Projeto[];
  empresaSelecionada : Empresa| null = null;
  private empresaSubscription!: Subscription;

  usuarioAutenticado : Usuario | null = null;
  private usuarioAutenticadoSubscription!: Subscription;

  constructor(private projetoService: ProjetoService, usuarioService: UsuarioService, private router: Router) {
    this.usuarioAutenticadoSubscription = usuarioService.usuarioAutenticado$.subscribe(
      usuario => {
        this.usuarioAutenticado = usuario;
      }
    )

  }

  ngOnInit(): void {

    let usuarioId = 4;
    let usuarioTipo = 2;   //1=comun e admin | 2=superadmin
    this.getEmpresa(usuarioId, usuarioTipo);
  }

  getEmpresa(usuarioId: number, usuarioTipo: number): void {
    this.empresaSubscription = this.projetoService.empresaSelecionada$.subscribe(
      empresa => {
        this.empresaSelecionada = empresa;
        if (empresa) {
          if(usuarioTipo==1 || usuarioTipo==2){
            this.carregarProjeto(empresa.empresa_id, usuarioId);
          }
          else if(usuarioTipo==3){
            this.carregarProjetoSuperAdmin(empresa.empresa_id);
          }
        }
      }
    );
  }

  carregarProjeto(empresaId: number, usuarioId: number) {
    this.projetoService.findProjetosDaEmpresaIdDoUsuarioId(empresaId ,usuarioId).subscribe({
      next: (projeto)=> {
        this.projeto = projeto;
      },
      error: (error)=> console.log(error),
    });
  }

  carregarProjetoSuperAdmin(empresaId: number) {
    this.projetoService.findProjetosDaEmpresaId(empresaId).subscribe({
      next: (projeto)=> {
        this.projeto = projeto;
      },
      error: (error)=> console.log(error),
    });
  }

  toggleDropdown(projeto: any): void {
    projeto.dropdownOpen = !projeto.dropdownOpen;
  }

}
