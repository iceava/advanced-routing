import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userPassword = '123';
  userLogin = 'admin';
  message: string;
  
  constructor(public authService: AuthService,private router:Router) { }

  ngOnInit(): void {
    this.setMessage();
  }

 setMessage(): void{
   this.message = `logged ${this.authService.isLoggedIn ? 'in' : 'out'}`;
 }

  login(): void{
 this.message = 'Trying to login';
 this.authService.login(this.userLogin, this.userPassword)
 .subscribe((res: boolean)=>{ console.log('login result',res);
 this.setMessage();
 if(this.authService.isLoggedIn){
 const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
 this.router.navigate([redirect]);///v redirect nahoditsa znacenie marsruta is RouterStateSnapshot
 }
  });
  }

  logout(): void{
 this.authService.logout();
  }


}
