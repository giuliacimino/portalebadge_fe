import { Component } from '@angular/core';
import {Badge} from "../../../model/badge";
import {BadgeService} from "../../../service/badge.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Scadenza} from "../../../model/enumerations/scadenza";

@Component({
  selector: 'app-badge-edit',
  templateUrl: './badge-edit.component.html',
  styleUrls: ['./badge-edit.component.css']
})
export class BadgeEditComponent {

  constructor(private badgeService: BadgeService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.badgeService.getBadge(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(badge => this.badgeEdit = badge);
  }

  badgeEdit?:Badge;

  errorMessage: string = '';

  update(badgeForm: NgForm): void {
    console.log('sub ' + JSON.stringify(this.badgeEdit));
    if (badgeForm.valid) {
      if (this.badgeEdit) {


        this.badgeService.updateBadge(this.badgeEdit).subscribe({
          next: badgeItem  => this.badgeEdit = badgeItem,
          complete: () => this.router.navigate([`badge/list`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
        });}
    } else
      this.errorMessage = 'Attenzione! Operazione fallita! Il form non è stato validato';
  }

  scadenzaTemporaneo?: Scadenza.BADGE_TEMPORANEO;
  scadenzaPermanente?: Scadenza.BADGE_PERMANENTE;

  onBack(): void {
    this.router.navigate(['/badge/list']);
  }


}
