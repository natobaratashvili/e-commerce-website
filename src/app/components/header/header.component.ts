import { Component } from '@angular/core';
import { FilterService } from '../../filter.service';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  filterText: string = '';
  
  constructor(private filterService: FilterService) { }

  onFilterChange() {
    this.filterService.setFilter(this.filterText);
  }

}
