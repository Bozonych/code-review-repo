import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ComponentBookServiceListComponent} from "../component-book-service-list/component-book-service-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentBookServiceListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'code-review-repo';
}
