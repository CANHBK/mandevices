import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {HomePageComponent} from './main/pages/home-page/home-page.component';


const routes: Routes = [{
    path: '',
    component: MainComponent,
    children:[
        {
            path:'',
            component: HomePageComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
