import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() header: string | undefined;
  @Input() body: string | undefined;
  @Input() buttonText: string | undefined;
  @Input() link: string | undefined;
}
