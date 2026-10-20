# Лапки — Angular (ЛР 3)

Базовая структура веб-приложения на Angular для мобильного приложения «Лапки»
(адаптация и сопровождение животных из приютов с ИИ-ассистентом).
Компоненты соответствуют макетам из ЛР №1 (Figma).

## Что реализовано

- модульная организация (`AppModule`, `@NgModule`);
- компоненты `HeaderComponent`, `PetListComponent`, `PetCardComponent` (`@Component`);
- сервис `PetsService` с mock-данными (`@Injectable({ providedIn: 'root' })`);
- внедрение зависимостей через конструктор, получение данных в `ngOnInit`;
- вывод списка через `*ngFor`, передача данных в карточку через `@Input`;
- инкапсулированные стили `*.component.css`, ресурсы из ЛР №1 в `src/assets`.

## Запуск

Нужны Node.js и Angular CLI (`npm install -g @angular/cli`).

```bash
npm install
ng serve
```

Откройте http://localhost:4200. Остановить сервер: Ctrl+C.
Сборка: `ng build`.

## Структура

```
src/
├── assets/
│   ├── icons/            логотип и сердечки из ЛР №1 (SVG)
│   └── pets/             фотографии питомцев
├── app/
│   ├── app.module.ts     корневой модуль
│   ├── pet.model.ts      интерфейс Pet
│   ├── pets.service.ts   PetsService (mock-данные)
│   ├── header/           HeaderComponent
│   ├── pet-list/         PetListComponent
│   └── pet-card/         PetCardComponent
├── index.html
└── styles.css            дизайн-токены (цвета, отступы, шрифты)
```

## Поток данных

`PetsService.getPets()` → `PetListComponent` (в `ngOnInit`) → `*ngFor` →
`<app-pet-card [pet]="pet">` → `PetCardComponent` (`@Input() pet`).
