import { Component } from '@angular/core';
import {BadgeService} from "../../../service/badge.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Badge} from "../../../model/badge";

@Component({
  selector: 'app-badge-delete',
  templateUrl: './badge-delete.component.html',
  styleUrls: ['./badge-delete.component.css']
})
export class BadgeDeleteComponent {
  constructor(private badgeService: BadgeService, private route: ActivatedRoute, private router: Router) { }

  badgeDelete?: Badge;

  ngOnInit(): void {
    this.badgeService.getBadge(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(badge => this.badgeDelete = badge);
  }


  onBack(): void {
    this.router.navigate(['/badge/list']);
  }

  onConfermaDelete() {
    if (this.badgeDelete?.id) {
      this.badgeService.deleteBadge(this.badgeDelete.id).subscribe();
    }
    this.router.navigate(['badge/list']);
  }



}
