import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
import { Literacy } from '../literacy/literacy';
import { LiteracyService } from '../Shared/literacy.service';

@Component({
  selector: 'app-literacy-chart',
  templateUrl: './literacy-chart.component.html',
  styleUrls: ['./literacy-chart.component.scss']
})
export class LiteracyChartComponent implements OnInit {

  constructor(public literacyService: LiteracyService) {
    this.rowData = [80, 25, 69];
  }

  /*@Input() */public rowData: any[];
  ngOnInit() {
    debugger;
    this.literacyService.getLiteracyRates().subscribe((res: Literacy[]) => {
      this.rowData = res;
      this.populateChart();
    });
  }


  // private populateChart() {
  //   d3.select('.chart')
  //     .selectAll('div')
  //     .data(this.rowData)
  //     .enter().append('div')
  //     .style('width', (data) => data.literacyRatePersons + 'px')
  //     .style('height', '25px').style('background-color', 'blue').style('margin', '5px')
  //     .text((data) => data.nameOfStatesUts);
  // }

  private populateChart() {
    const svg = this.createSvg();
    const tooltip = this.createToolTip();
    svg.attr('width', 500).attr('height', 600);
    svg.selectAll('rect')
      .data(this.rowData)
      .enter()
        .append('rect')
        .attr('x', (d, i) => {
          return 0; })
        .attr('y', (d, i) => {
          const len = (i * 20) ;
          console.log(`index = ${i} , len = ${len}`);
          return len; })
        .attr('width', (d, i) => {
          const len = d.literacyRatePersons + '%';
          return len; })
        .attr('height', '10px')
        .attr('fill', 'red')
        .append('title')
        .text((d) => 'literate' + (d.literacyRatePersons) + ' %   ')
      .exit()
      .data(this.rowData)
      .enter()
        .append('rect')
        .attr('x', (d, i) => {
          const len = (d.literacyRatePersons * 5) ;
          return len; })
        .attr('y', (d, i) => {
            const len = (i * 20) ;
            console.log(`index = ${i} , len = ${len}`);
            return len; })
        .attr('width', (d, i) => {
            const len = (100 - d.literacyRatePersons) + '%';
            return len; })
        .attr('height', '10px')
        .attr('fill', 'blue')
        .append('title')
        .text((d) => 'illiterate' + (100 - d.literacyRatePersons) + ' %   ');
        // .on('mouseover', (d) => {
        //     tooltip.text('illiterate' + (100 - d.literacyRatePersons) + ' %   ');
        //     return tooltip.style('visibility', 'visible'); })
        // .on('mousemove', () => {
        //   return tooltip.style('top', (d3.event.pageY - 10) + 'px').style('left', (d3.event.pageX + 10) + 'px'); 
        // })
        // .on('mouseout', () => tooltip.style('visibility', 'hidden' ));
  }
  createToolTip() {
    return d3.select('.chart')
    .append('div')
    .style('position', 'absolute')
    .style('z-index', '10')
    .style('visibility', 'hidden')
    .style('background', 'yellow')
    .text('a simple tooltip');
  }
  createSvg() {
    return d3.select('.chart')
      .append('svg');
  }
}
