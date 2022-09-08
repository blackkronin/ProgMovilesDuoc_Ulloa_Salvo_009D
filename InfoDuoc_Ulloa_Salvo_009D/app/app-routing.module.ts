import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./pages/asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule)
  },
  {
    path: 'leer-qr',
    loadChildren: () => import('./pages/leer-qr/leer-qr.module').then( m => m.LeerQRPageModule)
  },
  {
    path: 'ver-horario',
    loadChildren: () => import('./pages/ver-horario/ver-horario.module').then( m => m.VerHorarioPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./pages/eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'justificar',
    loadChildren: () => import('./pages/justificar/justificar.module').then( m => m.JustificarPageModule)
  },
  {
    path: 'recuperarpass',
    loadChildren: () => import('./pages/recuperarpass/recuperarpass.module').then( m => m.RecuperarpassPageModule)
  },
  {
    path: 'asig-alumno',
    loadChildren: () => import('./pages/asig-alumno/asig-alumno.module').then( m => m.AsigAlumnoPageModule)
  },
  {
    path: 'gestiondocente',
    loadChildren: () => import('./pages/gestiondocente/gestiondocente.module').then( m => m.GestiondocentePageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./pages/cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'desplegar-qr',
    loadChildren: () => import('./pages/desplegar-qr/desplegar-qr.module').then( m => m.DesplegarQrPageModule)
  },
  {
    path: 'enviarmsj',
    loadChildren: () => import('./pages/enviarmsj/enviarmsj.module').then( m => m.EnviarmsjPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('./pages/notas/notas.module').then( m => m.NotasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
