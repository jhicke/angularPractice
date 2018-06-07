import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { OtherViewComponent } from '../other-view/other-view.component';

export const routes: Routes = [
	{path:'home', component: HomeComponent},
	{path:'otherview', component: OtherViewComponent},
	{ path: '', redirectTo: '/home', pathMatch: 'full' }

]