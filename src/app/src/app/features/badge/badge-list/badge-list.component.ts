import {Component, OnInit} from '@angular/core';
import {Badge} from "../../../model/badge";
import {Subscription} from "rxjs";
import {BadgeService} from "../../../service/badge.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {EliminaBadgeModalComponent} from "../elimina-badge-modal/elimina-badge-modal.component";

@Component({
  selector: 'app-badge-list',
  templateUrl: './badge-list.component.html',
  styleUrls: ['./badge-list.component.css']
})
export class BadgeListComponent implements OnInit {
  badges!: Badge[];
  sub?: Subscription;
  confirmMessage: string = '';
  displayedColumns: string[] = ['nome', 'cognome', 'dataNascita', 'codiceFiscale', 'actions'];


  constructor(private badgeService: BadgeService, private route: ActivatedRoute, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.badgeService.getBadges().subscribe(badgesList => this.badges = badgesList);

    this.route
      .queryParams
      .subscribe(params => {
        this.confirmMessage = params['confirmMessage'] ? params['confirmMessage'] : '';
      });

  }

  getColumnHeader(column: string): string {
    switch (column) {
      case 'nome':
        return 'Nome';
      case 'cognome':
        return 'Cognome';
      case 'dataNascita':
        return 'Data di Nascita';
      case 'codiceFiscale':
        return 'Codice Fiscale';
      case 'actions':
        return 'Azioni';
      default:
        return '';
    }
  }

  openModal(): void {
    const dialogRef = this.dialog.open(EliminaBadgeModalComponent, {
      width: '250px',
    });
  }


  aggiungiAiPreferiti(badge: Badge) {
    this.badgeService.aggiungiPreferito(badge);
    console.log("click")
  }


}
