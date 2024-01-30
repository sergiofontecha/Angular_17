// Angular 
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
// Domain and components
import { UserComponent } from './user/user.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'angular-17-app'
  city: string = 'Barcelona'

  
}
