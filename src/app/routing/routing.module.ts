import { NavbarComponent } from './../navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { EditorTextComponent } from './../editor-text/editor-text.component';

const routes: Routes = [
  {path: 'home', component: NavbarComponent},
  {path: 'editor', component: EditorTextComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  exports: [
    RouterModule,
   ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule {
}
