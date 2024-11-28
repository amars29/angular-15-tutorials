import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, HighlightDirective],

  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
      <section class="content">
        <app-home></app-home>
        
        <div style="marginTop: 20px; marginBottom: 20px">
          <h2>Pick a highlight color</h2>
          <input type="radio" name="colors" (click)="color='lightgreen'">Green
          <input type="radio" name="colors" (click)="color='yellow'">Yellow
          <input type="radio" name="colors" (click)="color='cyan'">Cyan
        </div>
        <p [appHighlight]="color" defaultColor='blue'>Highlight me!</p>
      </section>
      <section>
      
    </section>
      
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
  color = '';
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
