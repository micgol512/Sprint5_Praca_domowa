// Celem zadania jest stworzenie gry przeglądarkowej, w której użytkownik odpowiada na serię pytań, wybierając "Prawda" lub "Fałsz".
// Na końcu powininismy wyswietlic podsumowanie wyświetlajac ilosc poprawnych odpowiedzi na ilosc zadan.

// Zadanie 1: Inicjalizacja projektu i stworzenie podstawowego HTML

// - Utwórz plik index.html.
// - Dodaj nagłówek <h1> z tytułem gry, np. "Quiz Prawda czy Fałsz".
// - Dodaj kontener <div> na pytania i umieść w nim treść "Kliknij "Start", aby rozpocząć quiz!". Dodaj id question-container.
// - Dodaj przycisk <button> z tekstem "Start" do rozpoczęcia gry.
// - Utwórz plik script.js
// - Powiąż plik JavaScript z HTML, aby móc korzystać z logiki gry..
// - Dodaj tablicę questions zawierającą pytania i poprawne odpowiedzi.
// - Wyśrodkuj elementy aplikacji, ustaw maksymalną szerokość kontenera na 600px.
// const questions = [
//     { question: "Słońce jest gwiazdą.", answer: true },
//     { question: "Londyn jest stolicą Francji.", answer: false },
//     { question: "Python to język programowania.", answer: true },
//     {
//       question: "Woda wrze w temperaturze 100°C na poziomie morza.",
//       answer: true,
//     },
//     { question: "2 + 2 = 5.", answer: false },
//     { question: "Czas jest mierzony w litrach.", answer: false },
//     { question: "Największym kontynentem na świecie jest Azja.", answer: true },
//     { question: "HTML to język programowania.", answer: false },
//     { question: "Rekiny to ssaki.", answer: false },
//     { question: "Liczba Pi wynosi około 3.14159.", answer: true },
//   ];

// Zadanie 2: Stworzenie funkcji startQuiz(), która uruchomi grę po kliknięciu przycisku "Start".

// - Stwórz funkcję startQuiz i przypisz ją do przycisku start.
// - Utwórz funkcje loadQuestion która wyświetli "Quiz ropoczęty" w konsoli.
// - W funkcji startQuiz usuń przycisk "Start" oraz wywołaj funkcję loadQuestion.

// Zadanie 3: Wyświetlanie pytań

// - W funkcji loadQuestion stwórz logikę która będzie odpowiadać za wyświetlanie aktualnego pytania z tablicy w kontenerze question-container.

// Zadanie 4: Implementacja przycisków "Prawda" i "Fałsz"

// - W funkcji startQuiz() utwórz przyciski "Prawda" i "Fałsz" oraz dodaj je do quiz-container.
// - Przypisz do nich event listenery, które wywołują funkcję handleAnswer() po kliknięciu.

// Zadanie 5: Obsługa odpowiedzi użytkownika
// - Modyfikacja funkcji handleAnswer(), która przetwarza odpowiedź użytkownika.
// - sprawdzamy, czy odpowiedź użytkownika jest poprawna .
// - Zwiększamy wynik, jeśli odpowiedź jest poprawna.
// - Przejdź do następnego pytania lub zakończ quiz, jeśli to było ostatnie pytanie.

// Zadanie 6: Wyświetlanie wyniku końcowego
//- Tworzymy funkcje showResult() wyświetlającą komunikat "Koniec quizu!" oraz wynik w formacie "Twój wyniki 2/10". Wykorzystujemy do tego kontener z id question-container
// - Usuń przyciski "Prawda" i "Fałsz", aby użytkownik nie mógł ich już używać.
// - Dodaajemy przycisk "Zagraj ponownie"

// Zadanie 7: Dodanie przycisku "Zagraj ponownie"
// - dodaj przycisk "Zagraj ponownie" w funkcji show result
// - Podepinij funkcje restartQuiz do przycisku, ktora zresetuje wszystko i wyswietli ponownie pytanie 1.
