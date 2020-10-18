import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
export interface CanComponentDeactivate {///zaprasivaem u componenta metod cadeactivate
  ///kotory vozvrasaet observable ili promis ili boolean
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<any>{

  constructor() { }
///proveream nalicie componenta kotoryi vuzuvaet candeactivate v phrase-routing
  canDeactivate(component: CanComponentDeactivate): Observable<boolean> | Promise<boolean> | boolean{
    return component.canDeactivate ? component.canDeactivate() : true; ///esli esti v componente metod candeactivate togda vyzyvaem esli net togda true
  } ///vyzvali metod candeactivate i proveream 
  ///esli esti candeactivate v componente phrasedetail i vyzuvaem ego

  }

