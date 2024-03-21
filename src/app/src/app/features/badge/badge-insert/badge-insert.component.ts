import { Component } from '@angular/core';
import {Badge} from "../../../model/badge";
import {BadgeService} from "../../../service/badge.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Scadenza} from "../../../model/enumerations/scadenza";
import {AmbitoLavorativo} from "../../../model/ambito-lavorativo";
import {AmbitoLavorativoService} from "../../../service/ambito-lavorativo.service";

@Component({
  selector: 'app-badge-insert',
  templateUrl: './badge-insert.component.html',
  styleUrls: ['./badge-insert.component.css']
})
export class BadgeInsertComponent {
  badge: Badge = new Badge();
  errorMessage: string = '';
  scadenzaTemporaneo?: Scadenza.BADGE_TEMPORANEO;
  scadenzaPermanente?: Scadenza.BADGE_PERMANENTE;
  ambitiLavorativi: AmbitoLavorativo[] = [];



  constructor(private badgeService: BadgeService, private router: Router, private ambitoLavorativoService: AmbitoLavorativoService) { }

  ngOnInit(): void {
    this.ambitoLavorativoService.getAmbitiLavorativi().subscribe((ambitiLavorativiList: AmbitoLavorativo[]) => this.ambitiLavorativi= ambitiLavorativiList);

  }

  save(badgeForm: NgForm): void {
    console.log('sub ' + JSON.stringify(this.badge));
    if (badgeForm.valid) {
      this.badgeService.addBadge(this.badge).subscribe({
        next: badgeItem => this.badge = badgeItem,
        complete: () => this.router.navigate([`badge/list`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
      });
    } else
      this.errorMessage = 'Attenzione! Operazione fallita! Il form non è stato validato';
  }

  onBack():void {
    this.router.navigate(['/badge/list']);
  }


  protected readonly Object = Object;

}
