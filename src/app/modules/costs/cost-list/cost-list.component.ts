import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoyageCostDetails } from 'src/app/shared/interfaces/cost.model';

@Component({
  selector: 'mcr-cost-list',
  templateUrl: './cost-list.component.html',
  styleUrls: ['./cost-list.component.scss']
})
export class CostListComponent implements OnInit {
  voyageDetails!: VoyageCostDetails;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => {
      this.voyageDetails = data.voyageDetails;
    });
  }

}
