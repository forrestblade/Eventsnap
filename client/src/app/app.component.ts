import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = "happenin'"

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
    document.onload = function () {

      document.getElementById('hamburger').addEventListener('click', event => {

        let sidebar = document.getElementById('sidebar')
        let hamburger = document.getElementById('hamburger')
        let sidebarWidth = sidebar.getBoundingClientRect().width

        event.preventDefault()
        sidebar.classList.toggle('transform-off')

        hamburger.style.transform = hamburger.style.transform ? '' : 'translate3d(-' + sidebarWidth + 'px, 0, 0)'
      })

      document.getElementById('principles').addEventListener('click', event => {
        document.getElementById('hamburger').style.transform = ''
        document.getElementById('sidebar').classList.add('transform-off')
      })

    }
  }
  ngOnInit() {
    this.auth.isAdmin();
  }
}
