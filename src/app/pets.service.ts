import { Injectable } from '@angular/core';
import { Pet } from './pet.model';

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  private readonly pets: Pet[] = [
    {
      id: 1,
      name: 'Барсик',
      description: 'Кот, 3 года. На реабилитации, ищет заботливую семью.',
      imageUrl: 'assets/pets/barsik.png',
      urgent: true,
    },
    {
      id: 2,
      name: 'Ляля',
      description: 'Собака, 1 год. Активная и добрая, ищет семью с садом.',
      imageUrl: '',
      urgent: false,
    },
    {
      id: 3,
      name: 'Мурка',
      description: 'Кошка, 2 года. Спокойная, привита и стерилизована.',
      imageUrl: '',
      urgent: false,
    },
    {
      id: 4,
      name: 'Рекс',
      description: 'Пёс, 4 года. Ладит с детьми, нужен опытный хозяин.',
      imageUrl: '',
      urgent: true,
    },
  ];

  /** Возвращает список питомцев. */
  getPets(): Pet[] {
    return this.pets;
  }
}
