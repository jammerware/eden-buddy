import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { E1sComponent } from './components/e1s/e1s.component';

const routes: Routes = [
    { path: 'e1s', component: E1sComponent },
    { path: 'e1s/:role', component: E1sComponent },
    { path: '', pathMatch: 'full', redirectTo: 'e1s/t1' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
