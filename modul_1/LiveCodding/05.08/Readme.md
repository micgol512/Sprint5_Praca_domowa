Stworzymy stronę, na której użytkownik będzie mógł zmieniać kolor tekstu lub tła fragmentu tekstu "Stylizowany tekst"
poprzez wybór opcji z listy rozwijanej i kliknięcie w jeden z dostępnych kolorów.
Dostępne kolory będą wyświetlane jako przyciski w kształcie kwadratów 40x40px z tłem reprezentującym kolor,
który chcemy wykorzystać, a po ich kliknięciu wybrany kolor zostanie zastosowany do wybranego elementu (tekst lub tło).

1. Tworzenie struktury HTML

- Dodanie nagłowka h1 z tekstem "Wybierz stylizację"
- Dodanie select z opcjami "Zmień kolor tła", "Zmień kolor tekstu".
- Dodanie kontenera na przyciski.
- Dodanie paragrafu z tekstem "Stylizowany tekst".
- Podpięcie skryptu js
- podpięcie pliku css

2. Używając tablicy colors, stwórz pętlę generującą przyciski dla każdego koloru i dodaj je do kotenera na przyciski. W każdym przycisku wyświetl index zaczynając od 1.

3. Usunięcie logiki odpowiedzialnej za wyświetlanie cyfry w przycisku. Dodanie stylizacji do przycisków tak, aby kolor reprezentujący przycisk był zarazem tłem elementu. Ustaw wielkość przycisku 40px x 40px oraz dodaj odpowiednia odleglosc pomiedzy elementami na 10px za pomocą flexboxa.

4. Utwórz funkcję handleButton, która wyświetli aktualnie wybraną opcję z listy rozwijanej (select). Podłącz tę funkcję do przycisków.

5. Dostosuj funkcję handleButton, po kliknieciu której zmieni się kolor tekstu paragrafu, gdy wartość select będzie ustawiona na opcję "text"

6. Dostosuj funkcję handleButton, po kliknieciu której zmieni się kolor tekstu paragrafu, gdy wartość select będzie ustawiona na opcję "background"
