import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ass8Q4';
  name: string;

  fun(event:any){
    this.name = (<HTMLInputElement>event.target).value;
  }
}
