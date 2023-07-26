import { Routes } from '@angular/router';

import { PagesFrontHomeComponent } from '@/pages/front/home/pages-front-home.component';
import { PagesFrontComponent } from '@/pages/front/pages-front.component';

export const routes: Routes = [
  {
    path: '',
    component: PagesFrontComponent,
    children: [{ path: '', component: PagesFrontHomeComponent }],
  },
];
