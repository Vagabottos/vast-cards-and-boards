import { NgModule } from '@angular/core';
import { CardComponent } from './card/card';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [CardComponent],
	imports: [IonicModule],
	exports: [CardComponent]
})
export class ComponentsModule {}
