import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './components/timeline.component';

const routes: Routes = [
    { path: ':timelineId', component: TimelineComponent },
    { path: ':timelineId/:positionId', component: TimelineComponent },
    { path: ':timelineId/:positionId/:simple', component: TimelineComponent },
    { path: '', pathMatch: 'full', redirectTo: 'e1s' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
