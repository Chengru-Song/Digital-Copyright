import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';

const routes: Routes = [{
  path: '',
  component: PersonalInfoComponent,
  children: [
    {
      
    }
  ]
}]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ProfileRoutingModule{

}