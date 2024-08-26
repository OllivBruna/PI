import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'telaprincipal',
    loadChildren: () => import('./telaprincipal/telaprincipal/telaprincipal.module').then( m => m.TelaprincipalPageModule)
  },
  {
    path: 'telacadastrar1',
    loadChildren: () => import('./telacadastrar1/telacadastrar1/telacadastrar1.module').then( m => m.Telacadastrar1PageModule)
  },
  {
    path: 'telacadastrarjuridica',
    loadChildren: () => import('./telacadastrarjuridica/telacadastrarjuridica.module').then( m => m.TelacadastrarjuridicaPageModule)
  },
  {
    path: 'telacadastrarfisca',
    loadChildren: () => import('./telacadastrarfisca/telacadastrarfisca.module').then( m => m.TelacadastrarfiscaPageModule)
  },

  {
    path: 'telapersonalizacao',
    loadChildren: () => import('./telapersonalizacao/telapersonalizacao/telapersonalizacao.module').then( m => m.TelapersonalizacaoPageModule)
  },
  {
    path: 'telaavaliacoes',
    loadChildren: () => import('./telaavaliacoes/telaavaliacoes/telaavaliacoes.module').then( m => m.TelaavaliacoesPageModule)
  },
  {
    path: 'telaagenda',
    loadChildren: () => import('./telaagenda/telaagenda/telaagenda.module').then( m => m.TelaagendaPageModule)
  },
  {
    path: 'telaagenda',
    loadChildren: () => import('./telaagenda/telaagenda/telaagenda.module').then( m => m.TelaagendaPageModule)
  },
  {
    path: 'telahorarios',
    loadChildren: () => import('./telahorarios/telahorarios/telahorarios.module').then( m => m.TelahorariosPageModule)
  },
  {
    path: 'telasuporte',
    loadChildren: () => import('./telasuporte/telasuporte/telasuporte.module').then( m => m.TelasuportePageModule)
  },
  {
    path: 'telamenu',
    loadChildren: () => import('./telamenu/telamenu/telamenu.module').then( m => m.TelamenuPageModule)
  },
  {
    path: 'telaconta',
    loadChildren: () => import('./telaconta/telaconta/telaconta.module').then( m => m.TelacontaPageModule)
  },
  {
    path: 'telacustomizarlink',
    loadChildren: () => import('./telacustomizarlink/telacustomizarlink/telacustomizarlink.module').then( m => m.TelacustomizarlinkPageModule)
  },
  {
    path: 'teladesignweb',
    loadChildren: () => import('./teladesignweb/teladesignweb/teladesignweb.module').then( m => m.TeladesignwebPageModule)
  },
  {
    path: 'telacriarservico',
    loadChildren: () => import('./telacriarservico/telacriarservico/telacriarservico.module').then( m => m.TelacriarservicoPageModule)
  },
  {
    path: 'telaeditarservico',
    loadChildren: () => import('./telaeditarservico/telaeditarservico/telaeditarservico.module').then( m => m.TelaeditarservicoPageModule)
  },
  {
    path: 'telapreviweb',
    loadChildren: () => import('./telaprevieweb/telapreviweb/telapreviweb.module').then( m => m.TelapreviwebPageModule)
  },
  {
    path: 'telacadastrarfuncionario',
    loadChildren: () => import('./telacadastrarfunionario/telacadastrarfuncionario/telacadastrarfuncionario.module').then( m => m.TelacadastrarfuncionarioPageModule)
  },
  {
    path: 'telavisualizarlink',
    loadChildren: () => import('./telavisualizarlink/telavisualizarlink/telavisualizarlink.module').then( m => m.TelavisualizarlinkPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
