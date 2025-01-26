import { Component } from '@angular/core';
import { FilterService } from '../../filter.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  filterText: string = '';
  showSearchBar: boolean = false;
  
  
  constructor(private filterService: FilterService, private router: Router) { }

  ngOnInit() {
    const homeUrl = '/';
    this.router.events.subscribe(() => {
      this.showSearchBar = this.router.url === homeUrl; 
    });
  }

  onFilterChange() {
    this.filterService.setFilter(this.filterText);
  }

}
