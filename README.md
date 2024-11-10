# Animation App

## Opis projektu

Projekt **"Animation App"** demonstruje różne techniki animacji w aplikacjach frontendowych z wykorzystaniem React, TypeScript i Vite. Aplikacja jest przykładem na to, jak można tworzyć interaktywne i atrakcyjne wizualnie interfejsy użytkownika, co jest istotne w nowoczesnym web developmencie.

# Technologie

- **React**: Biblioteka do budowy interfejsów użytkownika.
- **TypeScript**: Język programowania będący nadzbiorem JavaScript, dodający statyczne typowanie.
- **Vite**: Szybki bundler javascript.
- **Tailwind CSS**: Framework css ułatwiający i przyspieszający stylowanie komponentów dzięki wbudowanym klasom.
- **react-spring**: Biblioteka do animacji w React.
- **react-router-dom**: Biblioteka do zarządzania trasami w aplikacjach React.

### Pliki i katalogi

- **.gitignore**: Plik konfiguracyjny Git ignorujący określone pliki i katalogi.
- **eslint.config.js**: Konfiguracja ESLint dla projektu.
- **index.html**: Główny plik HTML aplikacji.
- **package.json**: Plik konfiguracyjny npm zawierający zależności i skrypty.
- **postcss.config.js**: Konfiguracja PostCSS.
- **public/**: Katalog zawierający pliki publiczne.
- **README.md**: Plik z dokumentacją projektu.
- **src/**: Główny katalog źródłowy aplikacji.
  - **App.tsx**: Główny komponent aplikacji.
  - **assets/**: Katalog z zasobami (np. obrazki, ikony).
  - **components/**: Katalog z komponentami aplikacji.
    - **animation/**: Komponenty związane z animacjami.
    - **common/**: Wspólne komponenty używane w różnych miejscach aplikacji.
  - **data/**: Katalog z danymi aplikacji.
    - **tabs.ts**: Dane dotyczące zakładek nawigacyjnych.
  - **helpers/**: Katalog z pomocniczymi funkcjami i klasami.
    - **AnimationHelper.ts**: Pomocnicze funkcje do animacji.
  - **index.css**: Główny plik CSS aplikacji.
  - **layouts/**: Katalog z layoutami stron.
    - **AnimationLayout.tsx**: Layout dla komponentów z animacjami.
    - **BaseAnimationLayout.tsx**: Bazowy layout dla komponentów z animacjami.
    - **BasePageLayout.tsx**: Bazowy layout dla stron.
  - **main.tsx**: Główny plik aplikacji.
  - **models/**: Katalog z modelami danych.
    - **IAnimationConfig.ts**: Interfejs konfiguracji animacji.
    - **NavBarItem.ts**: Model elementu nawigacyjnego.
    - **NestedObject.ts**: Model zagnieżdżonego obiektu.
  - **pages/**: Katalog z stronami aplikacji.
  - **router.tsx**: Konfiguracja tras aplikacji.
  - **themes.ts**: Konfiguracja tematów aplikacji.
  - **vite-env.d.ts**: Deklaracje typów dla Vite.
- **tailwind.config.js**: Konfiguracja Tailwind CSS.
- **tsconfig.app.json**: Konfiguracja TypeScript dla aplikacji.
- **tsconfig.json**: Główna konfiguracja TypeScript.
- **tsconfig.node.json**: Konfiguracja TypeScript dla narzędzi Node.js.
- **vite.config.ts**: Konfiguracja Vite.

## Instalacja

Aby uruchomić projekt lokalnie, wykonaj poniższe kroki:

1. Sklonuj repozytorium:
   ```sh
   git clone <URL_REPOZYTORIUM>
   ```
2. Przejdź do katalogu projektu:
    ```sh
    cd Animation_app
    ```
3. Zainstaluj zależności
    ```sh
    npm install
    ```
4. Uruchom aplikację w trybie deweloperskim
    ```sh
    npm run dev
    ```



# Pliki Konfiguracyjne

### Konfiguracja ESLint
Plik `eslint.config.js` zawiera konfigurację ESLint, która pomaga w utrzymaniu jakości kodu poprzez wykrywanie błędów i wymuszanie dobrych praktyk.

### Konfiguracja TypeScript
Pliki `tsconfig.json`, `tsconfig.app.json` i `tsconfig.node.json` zawierają konfigurację TypeScript, która definiuje ustawienia kompilatora i ścieżki do plików źródłowych.

### Konfiguracja Tailwind CSS
Plik `tailwind.config.js` zawiera konfigurację Tailwind CSS, która definiuje niestandardowe style i klasy używane w aplikacji.



