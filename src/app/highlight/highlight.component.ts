import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    let regEx = new RegExp('('+this.searchString+')');
    this.results = this.searchValue.split(regEx);
  }
  @Input() searchString: any;
  @Input() searchValue: any;
  results: any=[];
}
