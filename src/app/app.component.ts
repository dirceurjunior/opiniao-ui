import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { ToastyConfig } from 'ng2-toasty';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'opiniao-ui';

   constructor(
      private toastyConfig: ToastyConfig,
      private router: Router
   ) {
      this.toastyConfig.theme = 'bootstrap';
   }

   exibindoNavBar() {
      return this.router.url !== '/login';
   }

}
