import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {Column} from "../../interface/column";


@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ColumnComponent {
  @Input() column: Column;
}
