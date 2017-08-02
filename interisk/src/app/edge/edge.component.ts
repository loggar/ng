import { Component, OnInit, Input } from '@angular/core';

import { EdgeService } from '../service/edge.service';

@Component({
  selector: 'app-edge',
  templateUrl: './edge.component.html',
  styleUrls: ['./edge.component.css']
})
export class EdgeComponent implements OnInit {
  @Input() auditId: number

  constructor(private edgeService: EdgeService, ) { }

  ngOnInit() {
  }

  transferToEdge() {
    this.edgeService.transfer(this.auditId)
      .then(result => {
        console.log(result);
      })
      .catch(err => console.log(err));
  }

}
