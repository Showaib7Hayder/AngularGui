import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit {
  pSelected: boolean = false;
  npSelected: boolean = false;
  isActive: boolean = false;
  selectedVars: Array<string> = [];
  try: string = '';
  testClicked: boolean = false;
  testName: string = '';

  constructor() {}
  @Input() csvRecords: any;
  ngOnInit(): void {}
  pClicked() {
    this.pSelected = !this.pSelected;
    this.npSelected = false;
  }
  npClicked() {
    this.npSelected = !this.npSelected;
    this.pSelected = false;
  }
  checkActive() {
    this.isActive = !this.isActive;
  }
  onClick(item: string) {
    this.selectedVars.push(item);
  }
  testClick() {
    this.testClicked = !this.testClicked;
    this.testName = document
      .getElementsByClassName('ui vertical pointing menu a')[0]
      .TEXT_NODE.toString();
  }
  onSelect() {}
}
