import { NgModule } from '@angular/core';
import { CardComponent } from './card/card';
import { IonicModule } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
	declarations: [CardComponent],
	imports: [IonicModule, IonicImageViewerModule],
	exports: [CardComponent]
})
export class ComponentsModule {}
