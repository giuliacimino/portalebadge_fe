import {Component, OnInit} from '@angular/core';
import {BadgeService} from "../../../service/badge.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Badge} from "../../../model/badge";

@Component({
  selector: 'app-badge-show',
  templateUrl: './badge-show.component.html',
  styleUrls: ['./badge-show.component.css']
})
export class BadgeShowComponent implements OnInit{
  constructor(private badgeService:BadgeService,private route: ActivatedRoute,private router: Router) {}

  badgeDetail?:Badge;


  ngOnInit(): void {
    this.badgeService.getBadge(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(badge => this.badgeDetail = badge);
  }


  onBack():void {
    this.router.navigate(['/badge/list']);
  }



}
