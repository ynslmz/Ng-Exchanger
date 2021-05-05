import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/shared/interfaces/cost.model';

@Component({
  selector: 'mcr-cost-comments',
  templateUrl: './cost-comments.component.html',
  styleUrls: ['./cost-comments.component.scss']
})
export class CostCommentsComponent implements OnInit {

  @Input() comments!: Comment[];
  constructor() { }

  ngOnInit(): void {
  }

}
