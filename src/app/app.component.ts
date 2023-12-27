import { Component } from '@angular/core';
import { AuthService } from './Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmsApp';
  constructor(private authServ: AuthService){
    authServ.logOut(); 
  }
  isLoggedIn():boolean{
    return this.authServ.isLoggedIn();
  }

  logout(){
    this.authServ.logOut();
  }
}
