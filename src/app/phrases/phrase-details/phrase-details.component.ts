import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';
import { CanComponentDeactivate } from 'src/app/shared/can-deactivate-guard.service';
import { Phrase } from '../../shared/phrase.class';
import { PhraseService } from '../../shared/phrase.service';

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit, CanComponentDeactivate {
phrase: Phrase;
editValue:string;/// znacenie kotorye mogut smenitsa
editLanguage:string; ///znacenie kotorye mogut smenitsa
  constructor(private svc: PhraseService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,public authService:AuthService) { }

  ngOnInit(): void {
    /// this.svc.getPhrase(8).then(res => this.phrase=res);
    // scityvaem odnu zapisi params = observable
    
    this.activatedRoute.params.subscribe((params: Params) => {
      this.svc
      .getPhrase(+params.id)
      .then(res => { 
      this.phrase = res;
      if(this.phrase){
        this.editValue = this.phrase.value;
        this.editLanguage = this.phrase.language;
      }
      })
    });
  }


  
 goToPhrasesList(){
 const phraseID = this.phrase ? this.phrase.id : null;
                    ///'/phrase'
 this.router.navigate(['phrases',{id: phraseID}]);
//  {relativeTo:this.activatedRoute}); ///dobavleaem parametry v adresnuiu stroku
  }

 ///esli (phrase.value )- hranitsa v object phrase,to cto otobrajaem
 ///provereaem na izmenenia,esli s sprava i sleva nicego ne menealosi
 ///i invertiruem ego v false !(),togda esli cto to izmenitsa polucim true;
 isChanged(): boolean{
   return !(this.phrase.value === this.editValue && this.phrase.language === this.editLanguage);
 }
 
 save(): void{
   this.phrase.value = this.editValue;
   this.phrase.language = this.editLanguage;
 }
 canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
  if(!this.phrase){
    true; ///esli net frazy to true - uhodim
  }else if (!this.isChanged()){ ///esli net izmenenii frazy to true uhodim
  return true;
  } 
  console.log (false);
  return confirm('u dont save changes,\npls do it')
}///esli esti fraza i esti izmenenia togda false ne vyhodim
}
