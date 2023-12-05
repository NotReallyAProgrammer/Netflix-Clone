import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentUrl: boolean = true;

  showDisc: boolean = false;

  fourfourheader: boolean = true;

  routerEvents: any;

  constructor(private router: Router) {
    // Checking if the current page is login to disable landing page footer
    this.routerEvents = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/log-in') {
          this.currentUrl = !this.currentUrl;
        }

        if (event.url === '/404') {
          this.fourfourheader = !this.fourfourheader;
          this.currentUrl = !this.currentUrl;
        }
      }
    });
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.routerEvents.unsubscribe();
    // Unsubscribe to avoid memory leak
  }

  //
  hideDisclaimer($event: any) {
    this.showDisc = $event;
  }

  showDisclaimer(): void {
    this.showDisc = true;
  }
}
