import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { InfoComponent } from "./info/info.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { ScheduleComponent } from "./schedule/schedule.component";
import { SpeakersComponent } from "./speakers/speakers.component";

export const COMPONENTS = [SpeakersComponent, ScheduleComponent, ItemDetailComponent, InfoComponent];

const routes: Routes = [
    { path: "", redirectTo: "/(scheduleTab:schedule//speakersTab:speakers//infoTab:info)", pathMatch: "full" },

    { path: "schedule", component: ScheduleComponent, outlet: "scheduleTab" },
    { path: "speakers", component: SpeakersComponent, outlet: "speakersTab" },
    { path: "info", component: InfoComponent, outlet: "infoTab" },

    { path: "item/:id", component: ItemDetailComponent, outlet: "scheduleTab" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
