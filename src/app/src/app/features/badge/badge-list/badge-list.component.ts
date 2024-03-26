import {Component, OnInit} from '@angular/core';
import {Badge} from "../../../model/badge";
import {Subscription} from "rxjs";
import {BadgeService} from "../../../service/badge.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-badge-list',
  templateUrl: './badge-list.component.html',
  styleUrls: ['./badge-list.component.css']
})
export class BadgeListComponent implements OnInit{
  badges!:Badge[];
  sub?:Subscription;
  confirmMessage: string = '';
  displayedColumns: string[] = ['nome', 'cognome', 'dataNascita', 'codiceFiscale', 'actions'];

  constructor(private badgeService: BadgeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.sub = this.badgeService.getBadges().subscribe(badgesList => this.badges = badgesList);

      this.route
        .queryParams
        .subscribe(params => {
          this.confirmMessage = params['confirmMessage'] ? params['confirmMessage'] : '';
        });

  }


}
