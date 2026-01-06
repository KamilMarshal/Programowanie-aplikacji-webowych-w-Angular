export type Question = {
  id: number;
  number: string;
  text: string;
  answers: Record<string, string>;
  correct: Record<string, number>;
  rule?: string | null;
};

export type QuestionResult = {
  question: Question;
  selected: string[];
  isCorrect: boolean;
};

export type Pool = {
  label: string;
  value: string;
};

export const QuestionMockup: Question[] = // wzięte z mojego backendu do pracy inż
[
  {
    id: 1,
    number: "14.5",
    text: "Zawodnik BIALI 9 wykonuje rzut karny i zdobywa bramkę. Jednak zanim piłka opuszcza jego rękę, BIALI 4 przekracza linię rzutów wolnych drużyny CZERWONI. Prawidłowa decyzja?",
    answers: {
      a: "Bramka dla drużyny BIALI.",
      b: "Powtórzyć rzut karny.",
      c: "Rzut wolny dla drużyny CZERWONI.",
      d: "Powtórzyć rzut karny, upomnienie dla BIALI 4."
    },
    correct: {
      a: 0,
      b: 0,
      c: 1,
      d: 0
    },
    rule: "13:1a; 14:7; 15:7"
  },
  {
    id: 2,
    number: "2.34",
    text: "W których z poniższych sytuacji zatrzymanie czasu gry NIE jest obowiązkowe?",
    answers: {
      a: "Piłka odbija się daleko poza boisko",
      b: "Gwizdek mierzącego czas",
      c: "Zawodnik wydaje się kontuzjowany",
      d: "Sędziowie konsultują się po zasygnalizowaniu rozbieżnych decyzji",
      e: "Zmiana zawodnika z pola gry z bramkarzem w celu wykonania rzutu od bramki"
    },
    correct: {
      a: 1,
      b: 0,
      c: 1,
      d: 0,
      e: 1
    },
    rule: "2:8; Objaśnienie 2"
  },
  {
    id: 3,
    number: "17.9",
    text: "Po kolizji dwóch zawodników sędziowie równocześnie gwiżdżą. Sędzia z pola gry sygnalizuje faul w ataku, a sędzia bramkowy wskazuje przewinienie obrońcy. Prawidłowa decyzja?",
    answers: {
      a: "Decyzja sędziego bramkowego.",
      b: "Decyzja sędziego z pola gry.",
      c: "Sędziowie dokonują konsultacji w celu podjęcia wspólnej decyzji.",
      d: "Zatrzymanie czasu gry jest obowiązkowe.",
      e: "Zatrzymanie czasu gry nie jest obowiązkowe, jeśli sędziowie porozumiewają się przy pomocy sprzętu elektronicznego.",
      f: "Zatrzymanie czasu gry nie jest obowiązkowe, jeśli sędziowie porozumiewają się przy pomocy sprzętu elektronicznego."
    },
    correct: {
      a: 0,
      b: 0,
      c: 1,
      d: 1,
      e: 0,
      f: 0
    },
    rule: "17:7"
  },
  {
    id: 4,
    number: "8.21",
    text: "Kiedy zawodnik musi zostać zdyskwalifikowany (czerwona kartka lub czerwona i niebieska kartka pokazana przez sędziów)?",
    answers: {
      a: "Za szczególnie niesportowe zachowanie",
      b: "Za przerwanie sytuacji pewnej do zdobycia bramki przez aktywne blokowanie rzutu lub podania nogą",
      c: "Za błąd zmiany w trakcie trwania kary wykluczenia (nie w sytuacji pewnej do zdobycia bramki)",
      d: "Za nieodłożenie piłki po decyzji przeciwko swojej drużynie (nie w ostatnich 30 sekundach)"
    },
    correct: {
      a: 1,
      b: 0,
      c: 0,
      d: 0
    },
    rule: "4:6; 8:8b; 8:8f; 8:9; 16:6b"
  },
  {
    id: 5,
    number: "7.9",
    text: "Zawodnik BIALI 3 chcąc przebiec pomiędzy dwoma przeciwnikami wyrzuca piłkę przed siebie w kierunku swojego biegu. Łapię ją zanim spadnie ona na ziemię. Dzięki temu zyskuje dogodną pozycję do ataku na bramkę drużyny CZERWONI. BIALI 3 kozłuje piłkę i zdobywa bramkę. Prawidłowa decyzja?",
    answers: {
      a: "Bramka",
      b: "Rzut wolny dla drużyny CZERWONI",
      c: "Rzut od bramki dla drużyny CZERWONI"
    },
    correct: {
      a: 0,
      b: 1,
      c: 0
    },
    rule: "7:7; 13:1a"
  },
  {
    id: 6,
    number: "9.2",
    text: "Zawodnik BIALI 5 rzuca na bramkę, piłka odbija się od poprzeczki drużyny CZERWONI, a następnie uderza w stopę CZERWONI 3, który stoi w polu gry i wpada do bramki drużyny CZERWONI. Prawidłowa decyzja?",
    answers: {
      a: "Rzut wolny dla drużyny BIALI",
      b: "Bramka dla drużyny BIALI",
      c: "Rzut karny dla drużyny BIALI",
      d: "Rzut od bramki dla drużyny CZERWONI"
    },
    correct: {
      a: 0,
      b: 1,
      c: 0,
      d: 0
    },
    rule: "7:8; 9:1; 13:2"
  },
  {
    id: 7,
    number: "16.5",
    text: "Komu sędziowie muszą pokazać karę wykluczenia nałożoną na zawodnika?",
    answers: {
      a: "Winnemu zawodnikowi oraz sekretarzowi i mierzącemu czas.",
      b: "Osobie odpowiedzialnej za drużynę oraz sekretarzowi i mierzącemu czas.",
      c: "Sekretarzowi i mierzącemu czas.",
      d: "Winnemu zawodnikowi, osobie odpowiedzialnej za drużynę oraz sekretarzowi i mierzącemu czas."
    },
    correct: {
      a: 1,
      b: 0,
      c: 0,
      d: 0
    },
    rule: "16:4"
  },
  {
    id: 8,
    number: "7.33",
    text: "Sędziowie rozpoznają grę pasywną drużyny BIALI i pokazują sygnalizację ostrzegawczą. Po 4 podaniach BIALI 5 rzuca na bramkę. CZERWONI 3 blokuje rzut i piłka wraca do BIALI 5. Prawidłowa decyzja?",
    answers: {
      a: "Rzut wolny dla drużyny CZERWONI",
      b: "Drużyna BIALI może wykonać jeszcze 1 podanie przed oddaniem rzutu na bramkę",
      c: "Sygnalizacja ostrzegawcza obowiązuje",
      d: "Sygnalizacja ostrzegawcza już nie obowiązuje",
      e: "Drużyna BIALI nie może wykonać żadnego podania przed oddaniem rzutu na bramkę"
    },
    correct: {
      a: 0,
      b: 1,
      c: 1,
      d: 0,
      e: 0
    },
    rule: "7:11; 7:12; Objaśnienia 4; Zał. 1 Wsparcie „4 podania”"
  },
  {
    id: 9,
    number: "8.27",
    text: "W trakcie rozgrzewki zawodnik BIALI 3 i bramkarz CZERWONI 1 przypadkowo się zderzają. Obaj wpadają w złość i CZERWONI 1 uderza BIALI 3. BIALI 3 natychmiast rewanżuje się uderzeniem. Obaj zawodnicy są wpisani do protokołu. Prawidłowa decyzja?",
    answers: {
      a: "Dyskwalifikacja dla CZERWONI 1, opis w protokole (czerwona i niebieska kartka pokazane przez sędziów); 2-minutowe wykluczenie dla BIALI 3; obie drużyny mogą uzupełnić skład do 16 zawodników",
      b: "Dyskwalifikacja dla CZERWONI 1 i dla BIALI 3, opis w protokole (czerwona i niebieska kartka pokazane przez sędziów); obie drużyny mogą uzupełnić skład do 16 zawodników, ale obie będą grały na początku meczu w składzie pomniejszonym o 1 zawodnika przez 2 minuty",
      c: "2-minutowe wykluczenie dla obu zawodników, które rozpoczną się w momencie rozpoczęcia meczu; opis sytuacji w protokole",
      d: "Dyskwalifikacja dla CZERWONI 1 i dla BIALI 3, opis w protokole (czerwona i niebieska kartka pokazane przez sędziów); obie drużyny mogą uzupełnić skład do 16 zawodników"
    },
    correct: {
      a: 0,
      b: 0,
      c: 0,
      d: 1
    },
    rule: "8:10a; 16:6a; 16:11b; 17:10"
  },
  {
    id: 10,
    number: "2.17",
    text: "Jaka jest prawidłowa decyzja w sytuacji, gdy w podstawowym czasie gry, mecz zakończył się wynikiem 20:20, a gra musi być kontynuowana do wyłonienia zwycięzcy?",
    answers: {
      a: "1-minuta przerwy przed rozpoczęciem dogrywki",
      b: "5-minut przerwy przed rozpoczęciem dogrywki",
      c: "1-minuta przerwy między częściami dogrywki",
      d: "5-minut przerwy między częściami dogrywki"
    },
    correct: {
      a: 0,
      b: 1,
      c: 1,
      d: 0
    },
    rule: "2:2"
  },
  {
    id: 11,
    number: "16.12",
    text: "W trakcie przerwy w meczu, w drodze do szatni CZERWONI 7 ubliża sędziemu. Prawidłowa decyzja?",
    answers: {
      a: "Dyskwalifikacja dla CZERWONI 7, bez opisu w protokole (czerwona kartka pokazana przez sędziów) .",
      b: "2-minutowe wykluczenie dla CZERWONI 7.",
      c: "Drużyna CZERWONI będzie grała na boisku w składzie pomniejszonym o 1 zawodnika przez pierwsze 2 minuty II połowy.",
      d: "Dyskwalifikacja dla CZERWONI 7, opis w protokole (czerwona i niebieska kartka pokazane przez sędziów)."
    },
    correct: {
      a: 0,
      b: 0,
      c: 1,
      d: 1
    },
    rule: "8:10a; 16:6b; 16:10; 17:10"
  },
  {
    id: 12,
    number: "16.7",
    text: "Zawodnik BIALI 5 zostaje ukarany 2-minutowym wykluczeniem za faul. Opuszczając boisko ubliża sędziemu i zostaje zdyskwalifikowany. BIALI 5 jest tak zdenerwowany, że uderza jednego z sędziów. Prawidłowa decyzja?",
    answers: {
      a: "Opis w protokole (czerwona i niebieska kartka pokazane przez sędziów).",
      b: "Drużyna BIALI będzie grała na boisku w składzie pomniejszonym o 1 zawodnika przez 2 minuty.",
      c: "Drużyna BIALI będzie grała na boisku w składzie pomniejszonym o 2 zawodników przez 2 minuty.",
      d: "Drużyna BIALI będzie grała na boisku w składzie pomniejszonym o 1 zawodnika przez 4 minuty."
    },
    correct: {
      a: 1,
      b: 0,
      c: 0,
      d: 1
    },
    rule: "8:10a; 16:6b; 16:9c"
  },
  {
    id: 13,
    number: "16.16",
    text: "Zawodnik BIALI 7 zostaje ukarany dyskwalifikacją z powodu trzeciej kary 2-minutowego wykluczenia. Próbuje kłócić się z sędziami i nie opuszcza boiska. Prawidłowa decyzja?",
    answers: {
      a: "Brak reakcji.",
      b: "Drużyna BIALI będzie grała na boisku w składzie pomniejszonym o 1 zawodnika przez 4 minuty.",
      c: "Drużyna BIALI będzie grała na boisku w składzie pomniejszonym o 2 zawodników przez 2 minuty."
    },
    correct: {
      a: 0,
      b: 1,
      c: 0
    },
    rule: "16:9b"
  },
  {
    id: 14,
    number: "14.14",
    text: "Które z poniższych stwierdzeń odnośnie rzutu karnego są prawdziwe?",
    answers: {
      a: "Zawodnik wykonujący rzut karny musi zająć pozycję za linią 7 metrów, nie dalej niż 1 metr za tą linią.",
      b: "Sędziowie muszą zatrzymać czas gry, jeśli drużyna broniącą chce zmienić bramkarza.",
      c: "Na bramkarza należy nałożyć karę osobistą, jeśli wielokrotnie przekracza linię ograniczającą jego wyjście (4m) podczas obrony rzutów karnych.",
      d: "Zawodnicy drużyny broniącej muszą zachować odległość 3 metrów od wykonującego rzut"
    },
    correct: {
      a: 1,
      b: 0,
      c: 0,
      d: 0
    },
    rule: "14:3; 14:5; 14:8; 14:9"
  },
  {
    id: 15,
    number: "13.8",
    text: "Z powodu faulu sędziowie przyznali rzut wolny dla CZERWONI 9, ale BIALI 5 jest ciągle w posiadaniu piłki. BIALI 5 podchodzi do sędziów i „uprzejmie” oddaje im piłkę w ręce. Prawidłowa decyzja?",
    answers: {
      a: "2-minutowe wykluczenie dla BIALI 5; rzut wolny dla drużyny CZERWONI z miejsca, gdzie znajduje się piłka.",
      b: "Upomnienie dla BIALI 5; rzut wolny dla drużyny CZERWONI z miejsca, gdzie znajduje się piłka.",
      c: "2-minutowe wykluczenie dla BIALI 5; rzut wolny dla drużyny CZERWONI z miejsca popełnienia faulu .",
      d: "Upomnienie dla BIALI 5; rzut wolny dla drużyny CZERWONI z miejsca faulu."
    },
    correct: {
      a: 0,
      b: 0,
      c: 1,
      d: 0
    },
    rule: "8:8b; 13:5; 13:6 komentarz; 16:3f"
  },
  {
    id: 16,
    number: "6.21",
    text: "Bramkarz CZERWONI 1 obronił rzut na bramkę i jest gotowy podać do CZERWONI 6, który chce rozpocząć kontratak. Wykonując podanie CZERWONI 1 staje na linii pola bramkowego. CZERWONI 6 dostaje piłkę i zdobywa bramkę. Prawidłowa decyzja?",
    answers: {
      a: "Bramka",
      b: "Rzut wolny dla drużyny BIALI",
      c: "Korekta, powtórzyć rzut od bramki po sygnale gwizdkiem",
      d: "Nie uznać bramki"
    },
    correct: {
      a: 1,
      b: 0,
      c: 0,
      d: 0
    },
    rule: "1:3; 6:1"
  },
  {
    id: 17,
    number: "4.6",
    text: "W momencie rozpoczęcia gry obecnych jest tylko 6 zawodników drużyny BIALI. Zaraz po rozpoczęciu meczu przybywa spóźniony zawodnik BIALI 7. BIALI 7 wybiega ze strefy zmian wprost na boisko. Nie jest wpisany do protokołu. Prawidłowa decyzja?",
    answers: {
      a: "Dyskwalifikacja dla BIALI 7 (czerwona kartka pokazana przez sędziów)",
      b: "2-minutowe wykluczenie dla BIALI 7, który musi zostać dopisany do protokołu",
      c: "BIALI 7 musi zostać dopisany do protokołu, jeśli jest to zgodne ze szczegółowymi regulacjami danych zawodów",
      d: "Kara progresywna dla osoby odpowiedzialnej za drużynę BIALI"
    },
    correct: {
      a: 0,
      b: 0,
      c: 1,
      d: 1
    },
    rule: "4:3; 16:1b"
  },
  {
    id: 18,
    number: "16.3",
    text: "Jak jest maksymalna liczba upomnień, którymi mogą być ukarane osoby towarzyszące drużynie?",
    answers: {
      a: "0",
      b: "1",
      c: "2",
      d: "3"
    },
    correct: {
      a: 0,
      b: 1,
      c: 0,
      d: 0
    },
    rule: "16:1 komentarz"
  },
  {
    id: 19,
    number: "2.13",
    text: "Do jakiego momentu sędziowie mogę anulować zdobytą bramkę?",
    answers: {
      a: "Do czasu gwizdka na wykonanie rzutu rozpoczynającego grę",
      b: "Do czasu gwizdka kończącego mecz",
      c: "Bramka musi być anulowana, jeśli została zdobyta po tym jak mierzący czas przerwał grę lub rzut rozpoczynający grę został wykonany zanim to przerwanie zostało zauważone",
      d: "Zdobyta bramka nigdy nie może być anulowana"
    },
    correct: {
      a: 1,
      b: 0,
      c: 1,
      d: 0
    },
    rule: "2:9 komentarz; 9:2"
  },
  {
    id: 20,
    number: "2.49",
    text: "Drużyna BIALI zasygnalizowała zamiar wykorzystania przerwy dla drużyny. Osoba towarzysząca drużynie BIALI kładzie zieloną kartkę na stoliku sędziowskim przed mierzącym czas. Zanim mierzący czas gwiżdże, żeby przyznać przerwę dla drużyny, a 11 popełnia faul w ataku. Mierzący czas gwiżdże, żeby przyznać przerwę dla drużyny, zanim sędziowie decydują o faulu w ataku. Prawidłowa decyzja?",
    answers: {
      a: "Sędziowie decydują, że przerwa dla drużyny nie jest możliwa, bo faul w ataku nastąpił zanim mierzący czas zagwizdał, żeby przyznać przerwę dla drużyny",
      b: "Przerwa dla drużyny BIALI",
      c: "Zielona kartka musi zostać zwrócona drużynie BIALI",
      d: "Gra jest wznawiana rzutem wolnym dla drużyny CZERWONI",
      e: "Gra jest wznawiana rzutem wolnym dla drużyny BIALI"
    },
    correct: {
      a: 1,
      b: 0,
      c: 1,
      d: 1,
      e: 0
    },
    rule: "2:10; Objaśnienie 3 w połączeniu z 2:4"
  },
  {
    id: 21,
    number: "17.4",
    text: "Kto w razie wątpliwości decyduje o prawidłowości pomiaru czasu gry?",
    answers: {
      a: "Mierzący czas i sekretarz.",
      b: "Sędziowie prowadzący grę podejmują wspólną decyzję.",
      c: "Mierzący czas.",
      d: "Sędziowie prowadzący i mierzący czas podejmują wspólną decyzję."
    },
    correct: {
      a: 0,
      b: 1,
      c: 0,
      d: 0
    },
    rule: "17:9"
  },
  {
    id: 22,
    number: "6.17",
    text: "Bramkarz BIALI 12 wyskakuje z pola gry, zaraz przy linii pola bramkowego, łapie piłkę podaną do niego przez BIALI 4 i w powietrzu zagrywa nią poza linię końcową boiska. Następnie ląduje w polu bramkowym. Prawidłowa decyzja?",
    answers: {
      a: "Rzut od bramki dla drużyny BIALI",
      b: "Rzut z linii bocznej dla drużyny CZERWONI",
      c: "Rzut wolny dla drużyny CZERWONI",
      d: "Upomnienie dla BIALI 12"
    },
    correct: {
      a: 0,
      b: 1,
      c: 0,
      d: 0
    },
    rule: "5:3; 6:7c"
  },
  {
    id: 23,
    number: "3.1",
    text: "Jak wiele kolorów może mieć piłka?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "Dowolnie wiele"
    },
    correct: {
      a: 0,
      b: 0,
      c: 0,
      d: 1
    },
    rule: "3:1"
  },
  {
    id: 24,
    number: "4.43",
    text: "Po uzyskaniu pomocy medycznej na boisku BIALI 7 siada na ławce w strefie zmian swojego zespołu. W czasie pierwszego ataku drużyny BIALI, CZERWONI 2 przechwytuje podanie i biegnie w kontrataku sam na sam z bramkarzem BIALI 12. Zanim CZERWONI 2 oddaje rzut na bramkę, BIALI 7 wchodzi na boisko zmieniając się w strefie zmian z BIALI 9. Prawidłowa decyzja?",
    answers: {
      a: "Mierzący czas czeka na efekt rzutu CZERWONI 2 na bramkę, po czym przerywa gwizdkiem z powodu złej zmiany drużyny BIALI",
      b: "Mierzący czas natychmiast przerywa grę gwizdkiem z powodu złej zmiany drużyny BIALI",
      c: "Zatrzymanie czasu gry",
      d: "2-minutowe wykluczenie dla BIALI 7",
      e: "Dyskwalifikacja dla BIALI 7, bez opisu w protokole (czerwona kartka pokazana przez sędziów)",
      f: "Rzut karny dla drużyny CZERWONI",
      g: "Rzut wolny dla drużyny CZERWONI",
      h: "Bez względu na liczbę ataków swojej drużyny, BIALI 7 może ponownie wejść na boisku po odbyciu kary 2-minutowego wykluczenia,"
    },
    correct: {
      a: 0,
      b: 1,
      c: 1,
      d: 1,
      e: 0,
      f: 1,
      g: 0,
      h: 1
    },
    rule: "2:8; 4:5; 4:11; 13:2; 14:1; Objaśnienia 8"
  },
  {
    id: 25,
    number: "6.1",
    text: "Piłka leży na linii pola bramkowego. Atakujący BIALI 7 podnosi piłkę i próbuje zdobyć bramkę. BIALI 7 ma sytuację pewną do zdobycia bramki, kiedy jest nieprzepisowo zaatakowany. Prawidłowa decyzja?",
    answers: {
      a: "Rzut wolny dla drużyny CZERWONI",
      b: "Rzut wolny dla drużyny BIALI",
      c: "Rzut karny dla drużyny BIALI",
      d: "Rzut od bramki dla drużyny CZERWONI"
    },
    correct: {
      a: 0,
      b: 0,
      c: 0,
      d: 1
    },
    rule: "1:3; 6:5; 12:1"
  },
  {
    id: 26,
    number: "8.50",
    text: "Drużyna BIALI gra siedmioma zawodnikami w polu gry (pusta bramka). BIALI 4 rzuca na bramkę, ale bramkarz CZERWONI 1 broni. CZERWONI 1 w pełni panuje nad piłką i jest gotowy do oddania rzutu na bramkę. W tym momencie delegat przerywa grę z powodu złej zmiany w drużynie BIALI bo bramkarz BIALI 1 wbiegł na boisko zanim BIALI 7 je opuścił. Prawidłowa decyzja?",
    answers: {
      a: "Rzut od bramki dla drużyny CZERWONI po sygnale gwizdkiem",
      b: "Zatrzymanie czasu gry",
      c: "Rzut wolny dla drużyny CZERWONI",
      d: "Rzut karny dla drużyny CZERWONI",
      e: "2-minutowe wykluczenie dla BIALI 1",
      f: "2-minutowe wykluczenie dla BIALI 7"
    },
    correct: {
      a: 1,
      b: 1,
      c: 0,
      d: 0,
      e: 1,
      f: 0
    },
    rule: "2:8; 4:1; 4:4-6; 12:1 (II)"
  },
  {
    id: 27,
    number: "15.2",
    text: "Na 20 sekund przed końcem meczu drużyna BIALI prowadzi 20-19. Bramkarz BIALI 12 ociąga się z wykonaniem rzutu od bramki, kozłuje piłkę w polu bramkowym. Prawidłowa decyzja?",
    answers: {
      a: "Zatrzymanie czasu gry.",
      b: "Rzut wolny dla CZERWONI.",
      c: "Sygnał gwizdkiem sędziego na wykonanie rzutu od bramki.",
      d: "2-minutowe wykluczenie dla BIALI 12.",
      e: "Sygnalizacja ostrzegawcza o grze pasywnej."
    },
    correct: {
      a: 0,
      b: 0,
      c: 1,
      d: 0,
      e: 0
    },
    rule: "5:2; 12:2; 15:5b"
  },
  {
    id: 28,
    number: "4.44",
    text: "Po otrzymaniu opieki medycznej na boisku CZERWONI 11 siedzi na ławce zmian i komentuje decyzje sędziów. Z tego powodu otrzymuje swoje pierwsze w tym meczu 2-minutowe wykluczenie. Po drugim ataku swojej drużyny, po upływie 2-minutowego wykluczenie CZERWONI 11 wraca na boisko. Prawidłowa decyzja?",
    answers: {
      a: "Zatrzymanie czasu gry",
      b: "2-minutowe wykluczenie dla CZERWONI 11",
      c: "Grać dalej",
      d: "Rzut wolny dla drużyny BIALI"
    },
    correct: {
      a: 0,
      b: 0,
      c: 1,
      d: 0
    },
    rule: "4:11 – Objaśnienia 8"
  },
  {
    id: 29,
    number: "4.53",
    text: "W pierwszej minucie meczu dochodzi do bójki pomiędzy CZERWONI 3 BIALI BIALI 6. CZERWONI 3 upada na parkiet i wydaje się kontuzjowany. Sędziowie upominają słownie dla BIALI 6. CZERWONI 3 po otrzymaniu opieki medycznej na boisku jest gotowy kontynuować grę. Prawidłowa decyzja?",
    answers: {
      a: "CZERWONI 3 może kontynuować grę",
      b: "CZERWONI 3 musi opuścić boisko i może ponownie wejść na boisko dopiero po trzecim ataku jego drużyny"
    },
    correct: {
      a: 0,
      b: 1
    },
    rule: "4:11; Objaśnienia 8"
  },
  {
    id: 30,
    number: "16.20",
    text: "Zawodnik CZERWONI 8 został ukarany trzecim 2-minutowym wykluczeniem. Zaraz po gwizdku na zatrzymanie czasu gry, opuszczając boisko, zwraca się do sędziów w niesportowy sposób. Prawidłowa decyzja?",
    answers: {
      a: "Dodatkowa kara 2-minutowego wykluczenia dla CZERWONI 8; drużyna CZERWONI będzie grała na boisku w składzie pomniejszonym o 2 zawodników przez 2 minuty.",
      b: "Dodatkowa kara 2-minutowego wykluczenia dla CZERWONI 8; drużyna CZERWONI będzie grała na boisku w składzie pomniejszonym o 1 zawodnika przez 4 minuty.",
      c: "Dyskwalifikacja CZERWONI 8 (czerwona kartka pokazana przez sędziów); drużyna CZERWONI będzie grała na boisku w składzie pomniejszonym o 2 zawodników przez 2 minuty.",
      d: "Dyskwalifikacja CZERWONI 8 (czerwona kartka pokazana przez sędziów); drużyna CZERWONI będzie grała na boisku w składzie pomniejszonym o 1 zawodnika przez 4 minuty."
    },
    correct: {
      a: 0,
      b: 1,
      c: 0,
      d: 0
    },
    rule: "8:7a; 16:3d; 16:9a"
  }
]
