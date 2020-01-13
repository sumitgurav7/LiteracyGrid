import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
import { Literacy } from '../literacy/literacy';

@Component({
  selector: 'app-literacy-chart',
  templateUrl: './literacy-chart.component.html',
  styleUrls: ['./literacy-chart.component.scss']
})
export class LiteracyChartComponent implements OnInit {

  constructor() {
    this.rowData = [80, 25, 69];
  }

  /*@Input() */public rowData: any[];
  ngOnInit() {
    debugger;
    d3.select('.chart')
      .selectAll('div')
      .data(this.rowData)
      .enter().append('div')
      .style('width', (perc) => perc + 'px')
      .attr('class', 'bar') ;
  }

}
