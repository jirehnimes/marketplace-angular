import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-front-toolbar',
  templateUrl: './front-toolbar.component.html',
  styleUrls: ['./front-toolbar.component.sass'],
  standalone: true,
  imports: [MatToolbarModule],
})
export class FrontToolbarComponent {}
