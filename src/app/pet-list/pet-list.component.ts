import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet.model';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-pet-list',
  standalone: false,
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css',
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];
  lastViewed = '';

  constructor(private petsService: PetsService) {}

  ngOnInit(): void {
    this.pets = this.petsService.getPets();
  }

  onView(pet: Pet): void {
    this.lastViewed = pet.name;
  }
}
