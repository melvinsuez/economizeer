import { Component, OnInit } from '@angular/core';
import { AdModel } from 'src/app/models/ad.model';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  ads: AdModel [] = [];
  constructor( private adService: AdService) { }

  ngOnInit(): void {

    this.adService.getAds()
    .subscribe((resp: any) => {
      console.log(resp);
      this.ads = resp;
    });
  }

}
