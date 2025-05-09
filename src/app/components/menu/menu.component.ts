import { Component } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { RangePipe } from '../../pipes/range.pipe';

@Component({
  selector: 'app-menu',
  imports: [MenuItemComponent, RangePipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
