import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
   /// dlea admin paneli metod loghina

  constructor(private router: Router,private authService:AuthService) { }
  canActivate(route:ActivatedRouteSnapshot,///infa o marsrute kotoraia sveazana s zagrujaemym comp 
  state: RouterStateSnapshot): boolean { ///infa o marsrute v opredelenyi promejutoc vremeni
      console.log(this.authService.isLoggedIn)

      if(this.authService.isLoggedIn){
      return true;
      }
      else {
        this.authService.redirectUrl = state.url;
        console.log('nash url',state.url);
        /// zapisali infa o marsrute iz state v redirectUrl,
        this.router.navigate(['login']); 
        return false;/// i esli my byli ne zalogin,smenili to peresli v  login
        
      }
  }
  
}
