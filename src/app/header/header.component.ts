import { Component } from '@angular/core';

interface NavItem {
  label: string;
  accent?: boolean;
}

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  readonly navItems: NavItem[] = [
    { label: 'Главная' },
    { label: 'ИИ', accent: true },
    { label: 'Донаты' },
    { label: 'Питомцы' },
  ];

  activeItem = 'Главная';

  select(label: string): void {
    this.activeItem = label;
  }
}
