import { NgModule } from '@angular/core';
import { OwockiComponent } from './owocki/owocki.component';
import { OwocekDetailsComponent } from './owocek-details/owocek-details.component';
import { RouterModule, Routes } from '@angular/router';
import { OwockiMainComponent } from './owocki-main/owocki-main.component';

const routes: Routes = [
  { path: '', component: OwockiMainComponent},
  { path: 'owocki', component: OwockiComponent },
  { path: 'owocki/details/:id', component: OwocekDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }