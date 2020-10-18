import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PhraseDetailsComponent } from './phrase-details/phrase-details.component';
import { PhraseHomeComponent } from './phrase-home/phrase-home.component';
import { PhraseListComponent } from './phrase-list/phrase-list.component';
import { PhrasesRoutingModule } from './phrases-routing.module';




@NgModule({
  declarations: [PhraseHomeComponent, PhraseListComponent, PhraseDetailsComponent],
  exports: [PhraseHomeComponent,PhraseListComponent,PhraseDetailsComponent],
  imports: [CommonModule,
   PhrasesRoutingModule,FormsModule
  ]
})
export class PhrasesModule { }
