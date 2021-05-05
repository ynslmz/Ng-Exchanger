import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BaseCurrency, CostGroup, CostType, DaCurrency } from 'src/app/shared/interfaces/cost.model';

@Component({
  selector: 'mcr-cost-group',
  templateUrl: './cost-group.component.html',
  styleUrls: ['./cost-group.component.scss']
})
export class CostGroupComponent implements OnInit, OnChanges {

  @Input() cost!: CostGroup;
  @Input() baseCurrency!: BaseCurrency;
  @Input() toCurrency!: BaseCurrency;

  totalQuoted = 0;
  totalScreened = 0;

  isCollapsed = false;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.cost) {
      let cost = changes.cost.currentValue as CostGroup;
      cost.costItems.forEach(ci =>
        ci.costs.forEach(cic => {
          switch (cic.type) {
            case CostType.Quoted:
              this.totalQuoted += cic.amount;
              break;
            case CostType.Screened:
              this.totalScreened += cic.amount;
              break;
            default:
              break;
          }
        })
      )
    }
  }

  ngOnInit(): void {

  }

}
