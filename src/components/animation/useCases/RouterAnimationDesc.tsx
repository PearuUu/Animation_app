import React from 'react'
import BaseAnimationLayout from '../../../layouts/BaseAnimationLayout'

export default function RouterAnimationDesc() {
  return (
    <BaseAnimationLayout title="Router Animation">
      <div>
        <h3 className="text-xl font-bold mb-2">Przypadki użycia</h3>
        <p className="mb-4">
          Animacje przejścia sprawdzają się dobrze w aplikacjach o
          wielostronicowej nawigacji, zwłaszcza tam, gdzie użytkownicy mogą
          często przechodzić między różnymi widokami, np. w:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            aplikacjach e-commerce (np. przejścia między kategoriami produktów),
          </li>
          <li>stronach portfolio (prezentacja projektów),</li>
          <li>aplikacjach informacyjnych (nawigacja między artykułami).</li>
        </ul>

        <h3 className="text-xl font-bold mb-2">Korzyści</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>Lepsze UX:</strong> Animacje przejścia czynią interfejs
            bardziej intuicyjnym, co pozytywnie wpływa na odbiór aplikacji.
          </li>
          <li>
            <strong>Płynność nawigacji:</strong> Przejścia pomagają uniknąć
            uczucia „skakania” między stronami, co czyni aplikację bardziej
            spójną.
          </li>
          <li>
            <strong>Profesjonalny wygląd:</strong> Subtelne animacje nadają
            aplikacji nowoczesny, dopracowany wygląd, co może poprawić jej
            postrzeganą wartość.
          </li>
        </ul>

        <p>
          Stosowanie przejść między stronami wspiera bardziej angażujące,
          przyjazne dla użytkownika aplikacje. W tej aplikacji zaimplementowałem przykładowe przejście między stronami
        </p>
      </div>
    </BaseAnimationLayout>
  );
}
