import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RolePage } from './role';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    RolePage
  ],
  imports: [
    IonicPageModule.forChild(RolePage),
    ComponentsModule
  ],
})
export class RolePageModule {}
