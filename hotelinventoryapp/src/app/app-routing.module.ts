import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoomsComponent} from "./rooms/rooms.component";
// import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', component: RoomsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
