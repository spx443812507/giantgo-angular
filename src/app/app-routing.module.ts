import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent as WebinarsComponent } from './webinars/components/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: '/webinars', pathMatch: 'full' },
  { path: 'webinars', component: WebinarsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
