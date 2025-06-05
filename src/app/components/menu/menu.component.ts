import { Component, input } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
//import { RangePipe } from '../../pipes/range.pipe';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-menu',
  // imports: [MenuItemComponent, RangePipe],
  imports: [MenuItemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menuList = input<MenuItem[]>([]);

  // have to add from here onwards 
}
