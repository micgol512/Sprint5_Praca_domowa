Zadanie 1:
Na podstawie tablicy obiektów stwórz przyciski i umieść je w kontenerze buttons. Wewnątrz każdego przycisku wyświetl
tekst pobrany z klucza value. Dodaj do każdego przycisku klasę odpowiadającą wartości pobranej z klucza action.

Zadanie 2:
Stwórz funkcję handleButton i przekaż ją jako nasłuchiwacz zdarzeń dla każdego przycisku. Wewnątrz funkcji pobierz
wartość oraz klasę przycisku i zapisz je do zmiennych. Wyświetl te zmienne w konsoli.

Zadanie 3:
Zadeklaruj trzy zmienne przechowujące aktualnie wprowadzoną wartość, tymczasowy wynik (wartość przechowywaną) oraz wprowadzony operator. Na początku będą to puste ciągi znaków.
Zmienne te powinny być dostępne w całym programie.
Stwórz funkcję, calculate która zwróci wynik w formacie string obliczany na podstawie operatora oraz liczby aktualnie wprowadzonej oraz przechowywanej.
Jeśli żaden przypadek nie zostanie spełniony, funkcja nie powinna nic zwracać.

Zadanie 4:
Stwórz warunek w funkcji handleButton sprawdzający, czy akcja przycisku ma wartość "number". Jeżeli tak, wyświetl jego wartość na wyświetlaczu.
Zadbaj o możliwość wprowadzenia większej liczby poprzez wielokrotne kliknięcia przycisków typu number. Np. 125

Zadanie 5:
Stwórz warunek, w którym sprawdzisz, czy akcja przycisku jest typu operator.
W warunku sprawdz czy w zmiennej znajduje się aktualnie wprowadzona wartość. Wewnatrz tego warunku sprawdź czy tymczasowy wynik istnieje. Jeśli nie ma tymczasoweg wyniku to
przypisujemy wprowadzoną wartość do tymczasowego wyniku. Jeżeli zmienna z tymczasowym wynikiem istnieje to wywołujemy funkcję obliczajacą i zapisujemy wynik wywołania funkcji do zmiennej przechowującej tymczasowy wynik
Przechowaj wartość operatora w zmiennej zadeklarowanej w zadaniu 3 oraz wyczyść stan wprowadzonej wartości.

Zadanie 6:
Stwórz warunek sprawdzający, czy akcja jest typu decimal. Wewnatrz umieść kod odpowiedzialny za dodanie ułamka. Pamiętaj, że kropkę można wprowadzić tylko raz (nie wyłączaj przycisku).
Rozważ przypadek, gdy klikniemy ten przycisk zanim wartość zostanie wprowadzona. Sprawdź w kalkulatorze jak to działa.

Zadanie 7:
Stwórz warunek sprawdzający, czy akcja jest typu calculate. W zależności od tego, czy obecnie wprowadzona wartość oraz przechowywana wartość są dostępne,
wywołaj funkcję obliczającą, a następnie wyświetl aktualny wynik na wyświetlaczu.

Zadanie 8:
Stwórz warunek sprawdzający, czy akcja jest typu clear. Stwórz odpowiednią funkcję do czyszczenia stanu kalkulatora i przypisz ją do tego warunku.

Zadanie 9:
Przetestuj działanie kalkulatora. Jeżeli występują sytuacje, w których kalkulator nie działa jak powinien, rozwiąż te problemy.

Zadanie 1:
Na podstawie tablicy obiektów stwórz przyciski i umieść je w kontenerze o nazwie buttons. Wewnątrz każdego przycisku wyświetl tekst pobrany z klucza value. Dodaj do każdego przycisku klasę odpowiadającą wartości pobranej z klucza action.

Zadanie 2:
Stwórz funkcję handleButton i przypisz ją jako nasłuchiwacz zdarzeń dla każdego przycisku. Wewnątrz funkcji pobierz wartość oraz klasę przycisku i zapisz je do zmiennych. Wyświetl te zmienne w konsoli.

Zadanie 3:
Zadeklaruj trzy zmienne, które będą przechowywać:

- aktualnie wprowadzoną wartość,
- tymczasowy wynik,
- wprowadzony operator.
  Na początku przypisz do nich puste ciągi znaków. Zmienne te powinny być dostępne w całym programie.
  Stwórz funkcję calculate, która zwróci wynik w formacie string, obliczony na podstawie operatora oraz liczb aktualnie wprowadzonej oraz tymczasowego wyniku.
  Jeśli żaden przypadek nie zostanie spełniony, funkcja nie powinna nic zwracać.

Zadanie 4:
W funkcji handleButton stwórz warunek sprawdzający, czy akcja przycisku ma wartość "number".
Jeżeli tak, wyświetl jego wartość na wyświetlaczu. Zadbaj o możliwość wprowadzenia większej liczby poprzez wielokrotne kliknięcia przycisków typu "number", np. 125.

Zadanie 5:
Stwórz warunek sprawdzający, czy akcja przycisku jest typu "operator". W warunku sprawdź, czy w zmiennej znajduje się aktualnie wprowadzona wartość.
Wewnatrz warunku sprawdz dodatkowo czy tymczasowy wynik istnieje, jeśli nie przypisz wprowadzoną wartość do zmiennej przechowującej tymczasowy wynik.
Jeśli tymczasowy wynik już istnieje, wywołaj funkcję calculate, a wynik wywołania tej funkcji zapisz do zmiennej przechowującej tymczasowy wynik.
Następnie, przechowaj wartość operatora w zmiennej zadeklarowanej w zadaniu 3 oraz wyczyść stan wprowadzonej wartości.

Zadanie 6:
Stwórz warunek sprawdzający, czy akcja przycisku jest typu "decimal".
Wewnątrz tego warunku umieść kod odpowiedzialny za dodanie ułamka (kropki) do aktualnie wprowadzanej wartości.
Pamiętaj, że kropkę można wprowadzić tylko raz. Rozważ również przypadek, gdy użytkownik kliknie przycisk z kropką przed wprowadzeniem jakiejkolwiek wartości.
Sprawdź, jak to działa w kalkulatorze.

Zadanie 7:
Stwórz warunek sprawdzający, czy akcja przycisku jest typu "calculate".
W zależności od tego, czy obecnie wprowadzona wartość oraz przechowywana wartość są dostępne, wywołaj funkcję calculate, a następnie wyświetl aktualny wynik na wyświetlaczu.

Zadanie 8:
Stwórz warunek sprawdzający, czy akcja przycisku jest typu "clear". Stwórz odpowiednią funkcję do czyszczenia stanu kalkulatora i przypisz ją do tego warunku.

Zadanie 9:
Przetestuj działanie kalkulatora. Jeżeli występują sytuacje, w których kalkulator nie działa zgodnie z oczekiwaniami, popraw błędy i rozwiąż te problemy.
