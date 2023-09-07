import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-teste-cassio';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  onProcess() {
    this.router.navigate(['process'], {relativeTo: this.activatedRoute});
  }
}
