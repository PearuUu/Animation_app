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
      - **chain/**: Komponenty związane z animacjami z użyciem useChain().
      - **interactive/**: Komponenty związane z interaktywnymi animacjami.
      - **scroll/**: Komponenty związane z animacjami związanymi ze scrollowaniem strony.
      - **useCases/**: Komponenty związane z przykładowymi zastosowaniami animacji.
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

## Komponenty

### Common

#### `Button`
Plik: [`src/components/common/Button.tsx`](src/components/common/Button.tsx)
Opis: Komponent przycisku z różnymi typami stylów, takimi jak `Neutral`, `Primary`, `Secondary`, `Accent`, `Ghost`, i `Link`.

#### `NavBar`
Plik: [`src/components/common/NavBar.tsx`](src/components/common/NavBar.tsx)
Opis: Komponent nawigacji, który zawiera elementy nawigacyjne oraz kontroler motywu.

#### `ThemeController`
Plik: [`src/components/common/ThemeController.tsx`](src/components/common/ThemeController.tsx)
Opis: Komponent kontrolera motywu, który pozwala użytkownikowi na zmianę motywu aplikacji poprzez rozwijane menu.

#### `Footer`
Plik: [`src/components/common/Footer.tsx`](src/components/common/Footer.tsx)
Opis: Komponent stopki.

### Chain

#### `ChainTypingAnimation`
Plik: [`src/components/animation/chain/ChainTypingAnimation.tsx`](src/components/animation/chain/ChainTypingAnimation.tsx)
Opis: Komponent chain animation, który pokazuje animację wpisywania tekstu i rysowanie siatki.

#### `ChainSwipeAnimation`
Plik: [`src/components/animation/chain/ChainSwipeAnimation.tsx`](src/components/animation/chain/ChainSwipeAnimation.tsx)
Opis: Komponent chain animation, który pokazuje animację otwierania i zamykania okna.

### Interactive

#### `DragAnimation`
Plik: [`src/components/animation/Interactive/DragAnimation.tsx`](src/components/animation/Interactive/DragAnimation.tsx)
Opis: Komponent animacji przeciągania, który pozwala użytkownikowi na przeciąganie elementów po ekranie.

#### `HoverAnimation`
Plik: [`src/components/animation/Interactive/HoverAnimation.tsx`](src/components/animation/Interactive/HoverAnimation.tsx)
Opis: Komponent animacji najechania, który zmienia styl elementu, gdy użytkownik najeżdża na niego myszką.

#### `DoubleClickAnimation`
Plik: [`src/components/animation/Interactive/DoubleClickAnimation.tsx`](src/components/animation/Interactive/DoubleClickAnimation.tsx)
Opis: Komponent animacji podwójnego kliknięcia, który reaguje na podwójne kliknięcie użytkownika.

### Scroll

#### `ParallaxAnimation`
Plik: [`src/components/animation/scroll/ParallaxAnimation.tsx`](src/components/animation/scroll/ParallaxAnimation.tsx)
Opis: Komponent animacji paralaksy, który tworzy efekt głębi poprzez różne prędkości przewijania warstw.

#### `ShowOnScroll`
Plik: [`src/components/animation/scroll/ShowOnScroll.tsx`](src/components/animation/scroll/ShowOnScroll.tsx)
Opis: Komponent animacji, który pokazuje elementy podczas przewijania strony gdy obiekt staje się widoczny na stronie.

### UseCases

#### `TypingAnimation`
Plik: [`src/components/animation/useCases/TypingAnimation.tsx`](src/components/animation/useCases/TypingAnimation.tsx)
Opis: Komponent animacji pisania, który symuluje efekt pisania tekstu na ekranie, idealny do prezentacji dynamicznie zmieniających się treści.

#### `RouterAnimationDesc`
Plik: [`src/components/animation/useCases/RouterAnimationDesc.tsx`](src/components/animation/useCases/RouterAnimationDesc.tsx)
Opis: Komponent opisujący animacje przejść między stronami, ich zastosowanie i korzyści.

#### `LikeAnimation`
Plik: [`src/components/animation/useCases/LikeAnimation.tsx`](src/components/animation/useCases/LikeAnimation.tsx)
Opis: Komponent animacji polubienia, który dodaje przyjemny efekt wizualny podczas interakcji użytkownika.

#### `ProgressBarAnimation`
Plik: [`src/components/animation/useCases/ProgressBarAnimation.tsx`](src/components/animation/useCases/ProgressBarAnimation.tsx)
Opis: Komponent animacji paska postępu, który dynamicznie zmienia szerokość w zależności od wartości postępu.

## Instalacja

Aby uruchomić projekt lokalnie, wykonaj poniższe kroki:

0. Rekomendowana wersja node.js
    ```
    v22
    np v22.9.0

    v23 nie działa
    ```

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

5. Jeśli css się nie ładuje (opcjonalne)
    ```sh
    npx tailwindcss -i ./src/index.css -o ./src/main.css --watch
    ```


# Pliki Konfiguracyjne

### Konfiguracja ESLint
Plik `eslint.config.js` zawiera konfigurację ESLint, która pomaga w utrzymaniu jakości kodu poprzez wykrywanie błędów i wymuszanie dobrych praktyk.

### Konfiguracja TypeScript
Pliki `tsconfig.json`, `tsconfig.app.json` i `tsconfig.node.json` zawierają konfigurację TypeScript, która definiuje ustawienia kompilatora i ścieżki do plików źródłowych.

### Konfiguracja Tailwind CSS
Plik `tailwind.config.js` zawiera konfigurację Tailwind CSS, która definiuje niestandardowe style i klasy używane w aplikacji.



