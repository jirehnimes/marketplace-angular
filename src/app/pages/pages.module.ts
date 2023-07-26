import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PagesFrontModule } from './front/pages-front.module';

@NgModule({
  declarations: [],
  imports: [PagesFrontModule],
  exports: [CommonModule],
})
export class PagesModule {}
