# init repository Node.js

> Each task will be in the corresponding branch

branch:

- 1-generate-random ( es5 )
- 2-read-write ( es6 )

Stwórz w Node.js moduł zapisujący do plików dane z JSON według poniższej specyfikacji:

1. Moduł ma pobrać dane z pliku JSON zawierającego dane użytkowników i stworzyć odpowiednie pliki tekstowe z danymi
2. Z modułu można zaimportować funkcję saveData() - funkcja ma przyjąć trzy parametry - ścieżkę do pliku JSON, nazwę folderu, do którego mają być zapisane dane oraz wartość logiczną, która ma określać, czy mają zostać nadpisane istniejące dane
3. Po uruchomieniu funkcji moduł tworzy nowy folder o przekazanej w parametrze nazwie oraz osobny plik .txt dla każdego użytkownika zawierający pobrane z JSON dane - imię, nazwisko, adres (ulica, kod, miasto) oraz telefon - każda z tych informacji w nowej linii

Przykład:

```
Name: Clementina
Surname: DuBuque
Street: Kattie Turnpike
Zip Code: 31428-2261
City: Lebsackbury
Phone: 024-648-3804
```

4. Nazwa pliku tworzona jest wg schematu id-imie-nazwisko.txt
5. Jeśli folder istnieje i są w nim jakieś pliki, to mają być nadpisane, jeśli w parametrze funkcji saveData() było przekazane true - w innym przypadku ma zalogować odpowiedni komunikat

Moduł przetestuj na danych z załączonego pliku.

Cały projekt wgraj na GitHub i prześlij link do repozytorium.
