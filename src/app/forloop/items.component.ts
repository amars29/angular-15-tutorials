import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  template: `
      <div *ngFor="let item of items">{{item.name}}</div>

  
        
    `,
  imports: [],
  standalone: true,
})
export class Items {
  items = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];

  trackByItems(index: number, item: { id: number; name: string }): number {
    return item.id;
  }
}
