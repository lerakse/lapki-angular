import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pet } from '../pet.model';

@Component({
  selector: 'app-pet-card',
  standalone: false,
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.css',
})
export class PetCardComponent {
  @Input() pet!: Pet;
  @Output() view = new EventEmitter<Pet>();

  isFavorite = false;

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }

  onView(): void {
    this.view.emit(this.pet);
  }
}
