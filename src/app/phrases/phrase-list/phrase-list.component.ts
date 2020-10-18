import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Phrase } from '../../shared/phrase.class';
import { PhraseService } from '../../shared/phrase.service';

@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})
export class PhraseListComponent implements OnInit {
 
  phrases: Phrase[];
  selectedID:number;


  constructor(private svc: PhraseService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
  this.selectedID= +params.id; ///asinhronyi cod..kogda polucaem otvet,togda perestraevaem frazy...
  this.svc.getAll().then(res => this.phrases = res);
    })
    ///cerez observeble polucaem id 
    
    /// this.svc.getAll().then(res => this.phrases = res); ///poluceaem spisok fraz

  }

  

   isSelected(phrase: Phrase): boolean{
     return phrase.id===this.selectedID;
   }

  onSelect(select): void{ ///parametr selected ?
    console.log(select.id); ///puti perehoda dlea fraz s pomosiu Router i vstroenogo klasa navigate
    // this.router.navigate(['phrases',select.id])
    this.router.navigate([select.id], {relativeTo:this.activatedRoute})
  }
}
