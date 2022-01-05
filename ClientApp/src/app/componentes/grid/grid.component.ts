import { Component, Input } from '@angular/core';

@Component({
    selector: 'grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})
/** grid component*/
export class GridComponent {
  /** grid ctor */

  @Input() lista: any[];

    constructor() {

    }
}
