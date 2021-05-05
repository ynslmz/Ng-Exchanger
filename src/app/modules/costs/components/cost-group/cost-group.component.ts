import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BaseCurrency, CostGroup, CostItem, CostType } from 'src/app/shared/interfaces/cost.model';

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
      const cost = changes.cost.currentValue as CostGroup;
      this.calculateTotal(cost);
    }
  }

  private calculateTotal(cost: CostGroup): void {
    this.totalQuoted = 0;
    this.totalScreened = 0;
    cost.costItems.forEach(ci => ci.costs.forEach(cic => {
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
    );
  }

  changePriceAndRecalculate(costItem: CostItem): void {
    const itemId = this.cost.costItems.findIndex(ci => ci.id === costItem.id);
    this.cost.costItems[itemId] = costItem;
    this.calculateTotal(this.cost);
  }

  ngOnInit(): void {

  }

}
