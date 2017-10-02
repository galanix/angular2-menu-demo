import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { SearchComponent } from "./search/search.component";

export const router: Routes = [
	{ path: "search", component: SearchComponent },
    { path: "", redirectTo: "search", pathMatch: "full" }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);