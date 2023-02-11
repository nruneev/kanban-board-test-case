import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';

import {Icon} from "../../enum/icon";


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ButtonsComponent {
  @Input() icon: Icon = Icon.none;
  @Input() name: string = '';
  @Input() isBackground: boolean = false;

  @HostBinding('class.g-flex-with-gap') get isGap() {
    return this.icon !== Icon.none && !!this.name.length;
  };
  @HostBinding('class.buttons-background') get isButtonBackground() {
    return this.isBackground;
  };
}
