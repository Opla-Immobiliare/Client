import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  municipality: string | null = null;
  id: string | null = null;

  constructor(private route: Router) {}

  ngOnInit(): void {
    
  }

  hideHeader(): string {
    if (this.route.url.includes('property')) {
      return 'hidden lg:flex';
    }

    return 'flex';
  }
}
