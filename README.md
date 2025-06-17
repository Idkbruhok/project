# Platforma za simulaciju i vežbu teorijskog ispita - v1.8

## O projektu

Web aplikacija za vežbu i simulaciju teorijskog ispita iz programiranja i web tehnologija. Podržava više jezika, naprednu statistiku, rangiranje i admin panel. Pripremljena za SaaS model.

## Struktura projekta

```
Webapp-1.8/
│
├── index.html                 # Glavna stranica
├── landing.html              # Landing stranica
├── question-selection.html   # Izbor pitanja
├── exam_simulation.html      # Simulacija ispita
├── uputstvo.html            # Uputstvo za korišćenje
│
├── styles.css               # Glavni CSS stilovi
├── landing.css              # Stilovi za landing stranicu
├── question-selection.css   # Stilovi za izbor pitanja
│
├── script.js                # Glavni JavaScript fajl
├── exam_simulation.js       # JavaScript za simulaciju ispita
├── question-selection.js    # JavaScript za izbor pitanja
│
├── src/
│   └── data/               # Podaci aplikacije
│
├── TEHNICKA_DOKUMENTACIJA.txt  # Tehnička dokumentacija
├── README.md               # Ova datoteka
└── .gitignore             # Git ignore pravila
```

## Funkcionalnosti v1.8

* **Registracija i login** - Korisnički sistem sa autentifikacijom
* **Korisnički profili i statistika** - Praćenje napretka i rezultata
* **Vizualizacija aktivnosti** - Grafički prikaz korisničke aktivnosti
* **Leaderboard i rank sistem** - Rangiranje korisnika
* **Simulacija ispita** - 50 pitanja, 120 min, automatsko ocenjivanje
* **Procentualna raspodela pitanja** - Po sekcijama i oblastima
* **Višejezičnost** - Podrška za ćirilicu, latinicu, engleski
* **Admin panel** - Upravljanje pitanjima i korisnicima
* **Priprema za SaaS** - Free/premium verzija

## Status i planovi

* ✅ **Frontend**: HTML/CSS/JS, osnovne stranice i organizacija
* ✅ **Korisnički interfejs**: Kompletna navigacija i UX/UI
* ✅ **Simulacija ispita**: Funkcionalna implementacija
* 🔄 **Baza**: SQL i XML šeme (u pripremi)
* 📋 **Sledeće**: Backend u C#, povezivanje sa bazom, napredna statistika

## TODO

* [ ] SQL tabela questions (id, section, lesson, language, question_text, options, correct_answer, points)
* [ ] Admin panel za unos pitanja
* [ ] Višejezičnost: proveriti koje jezike još dodati
* [ ] Simulacija: 50 pitanja, 257 ukupno, bodovanje do 100, 120 min
* [ ] Procentualna raspodela pitanja po sekcijama
* [ ] Ocene: 0–50 (1), 50.5–63 (2), 63.5–75 (3), 75.5–87 (4), 87.5–100 (5)
* [ ] Leaderboard: najbolje vreme za 100/100
* [ ] Leveling/rank sistem
* [ ] Free trial i premium (SaaS)
* [ ] Backend: C# + MySQL, bez frameworkova

## Pokretanje projekta

1. Instaliraj ekstenziju **Live Server** u VS Code
2. Desni klik na `index.html` i izaberi "Open with Live Server"
3. Projekat će se otvoriti u browseru i automatski osvežavati pri svakoj promeni

## Preporučene VS Code ekstenzije

* **Live Server** – Lokalni server i automatsko osvežavanje browsera
* **Prettier** – Automatsko formatiranje HTML, CSS i JS fajlova
* **ESLint** – Pronalaženje i ispravljanje grešaka u JavaScript kodu
* **CSS Peek** – Brzi skok iz HTML-a na CSS
* **Auto Rename Tag** – Automatska promena otvarajućih/zatvarajućih HTML tagova
* **Path Intellisense** – Automatsko dovršavanje putanja do fajlova
* **Bracket Pair Colorizer 2** – Lakše praćenje zagrada

## Changelog

### Project v1.8 – Napredna funkcionalnost i optimizacija
* Dodana simulacija ispita sa kompletnom funkcionalnosti
* Implementiran sistem za izbor pitanja
* Unapređen korisnički interfejs i navigacija
* Dodana tehnička dokumentacija
* Optimizovan kod i performanse
* Priprema za backend integraciju

### Project v1.3 – Konsolidacija strukture i UX/UI unifikacija
* Potpuna reorganizacija projekta
* Uklonjene duplirane i zastarele datoteke
* Svi HTML fajlovi koriste identičnu strukturu
* Stilovi objedinjeni u jedan CSS fajl
* Dodate stranice: registracija, login, admin panel
* Definisana SQL i XML šema

### Project v1.2 – Translation Update
* Dodata podrška za više jezika
* Ispravljene greške u prevodu
* Ažuriran README.md

## O projektu

QuizWebApp - Platforma za simulaciju i vežbu teorijskog ispita

### Resursi

* [GitHub Repository](https://github.com/Idkbruhok/project)
* [Tehnička dokumentacija](TEHNICKA_DOKUMENTACIJA.txt)
* [Uputstvo za korišćenje](uputstvo.html) 