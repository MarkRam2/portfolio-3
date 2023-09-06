import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { ExpirenceComponent } from './views/expirence/expirence.component';

const routes: Routes = [
  // {path: '', component: AboutMeComponent},
  // {path: 'expirence', component: ExpirenceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
