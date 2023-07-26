import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FrontFooterComponent } from '@/components/front/footer/front-footer.component';
import { FrontToolbarComponent } from '@/components/front/toolbar/front-toolbar.component';
import { AppRoutingModule } from '@/router/app-routing.module';

import { PagesFrontHomeComponent } from './home/pages-front-home.component';
import { PagesFrontLoginComponent } from './login/pages-front-login.component';
import { PagesFrontComponent } from './pages-front.component';

@NgModule({
  declarations: [
    PagesFrontHomeComponent,
    PagesFrontLoginComponent,
    PagesFrontComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FrontToolbarComponent,
    FrontFooterComponent,
  ],
  exports: [PagesFrontHomeComponent, PagesFrontLoginComponent],
})
export class PagesFrontModule {}
