import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './main-content/about/about.component';
import { BlogComponent } from './main-content/blog/blog.component';
import { ContactComponent } from './main-content/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './login/callback.component';
import { AuthGuard } from './auth/auth.guard';
import { EditComponent } from './main-content/edit/edit.component';
import { LogoutComponent } from './login/logout.component';

const appRoutes: Routes = [
    {
        path: '',
        component: AboutComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'callback',
        component: CallbackComponent
    },
    {
        path: 'edit',
        component: EditComponent,
        canActivate: [
            AuthGuard
        ]
    },
    {
        path: 'logout',
        component: LogoutComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }
