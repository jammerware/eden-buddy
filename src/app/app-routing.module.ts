import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './components/timeline/timeline.component';
import { CheatSheetComponent } from './components/cheat-sheet/cheat-sheet.component';

const routes: Routes = [
    { path: ':encounterId/cheat-sheet', component: CheatSheetComponent },
    { path: ':timelineId', component: TimelineComponent },
    { path: ':timelineId/:positionId', component: TimelineComponent },
    { path: ':timelineId/:positionId/:simple', component: TimelineComponent },
    { path: '', pathMatch: 'full', redirectTo: 'e1s/m1/simple' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
