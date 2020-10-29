import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-typescript';
  xyzzy = 'transport me!';
  TheAnswer = 42;
  hammerTime = new Date(1990, 1, 13);
  whoKnows;
}

