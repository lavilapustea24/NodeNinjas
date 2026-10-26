# Node Ninjas — Site de prezentare

Proiect universitar realizat în contextul laboratorului **Generative AI**.

## Despre proiect

**Node Ninjas** este o echipă formată din patru studente ale Facultății de Științe Economice și Gestiunea Afacerilor (FSEGA), specializarea Informatică Economică:

- Lăpuștea Lavinia
- Oltean Andreea
- Gârbovan Ana-Maria
- Gherghel Anamaria

Site-ul prezintă echipa, interesele și activitățile de învățare legate de dezvoltarea web. Versiunea modernizată pornește de la un proiect existent și păstrează informațiile și logo-ul original.

## Tehnologii utilizate

- **HTML5** — structură semantică (`header`, `nav`, `main`, `section`, `article`, `footer`), conținut și formular.
- **CSS3** — design pastel-futurist, gradienți, umbre, efecte hover, Flexbox, CSS Grid și Media Queries.
- **JavaScript (vanilla)** — comutarea temei luminoase/întunecate, memorarea preferinței în `localStorage`, meniul mobil și interacțiunea demonstrativă cu formularul.
- **GitHub Pages** — platforma gratuită propusă pentru publicarea site-ului static; publicarea nu este documentată aici ca fiind efectuată.

Nu sunt utilizate framework-uri sau biblioteci externe. Varianta modernizată nu necesită PHP ori bază de date.

## Structura proiectului

```text
NodeNinjas_Modern/
├── index.html
├── style.css
├── script.js
├── assets/
│   └── LOGO-Node.ninjas.jpeg
└── README.md
```

## Secțiunile site-ului

1. **Header** — logo, navigare și buton pentru schimbarea temei.
2. **Hero / Meet the Ninjas** — prezentare introductivă.
3. **About Us** — informații despre echipă și facultate.
4. **Meet the Team** — patru carduri individuale, cu hobby, mâncare preferată și calitate personală.
5. **Projects & Skills** — noțiuni de dezvoltare web abordate prin proiect, fără proiecte externe inventate.
6. **Fun Facts** — tabelul cu hobby-uri și mâncăruri preferate.
7. **Ninja Gallery** — logo-ul original și elemente decorative CSS.
8. **Contact** — formular demonstrativ cu validare HTML.
9. **Footer** — numele echipei și navigare rapidă.

**Notă:** Formularul verifică introducerea datelor, dar **nu trimite e-mailuri** și nu are backend.

## Procesul de lucru cu AI

### 1. Planificare

Au fost definite scopul site-ului, publicul-țintă, informațiile de păstrat din arhiva originală, secțiunile necesare, paleta de culori și funcționalitățile dorite.

### 2. Formularea promptului

A fost oferit asistentului AI un prompt detaliat care solicita analizarea proiectului existent, păstrarea informațiilor reale și a logo-ului, modernizarea vizuală și generarea unui site static compatibil cu GitHub Pages.

### 3. Generarea cu AI

Asistentul AI a produs versiunea inițială modernizată, organizată în `index.html`, `style.css` și `script.js`, împreună cu logo-ul original ca fișier local.

### 4. Analiza codului

Au fost discutate elementele HTML5 semantice, folosirea Flexbox și CSS Grid, adaptarea prin Media Queries, funcționarea Dark Mode și o oportunitate de îmbunătățire a efectelor hover.

### 5. Personalizarea manuală

Efectul hover pentru cardurile din secțiunea **Meet the Team** a fost modificat manual în `style.css` pentru a ridica ușor cardurile și a afișa o umbră violet luminoasă. Această modificare a fost realizată de studentă, nu aplicată automat de AI în fișierele sale locale.
În cadrul personalizării manuale am modificat efectul `hover` al celor patru carduri din secțiunea **Meet the Team**, folosind proprietățile CSS `transform`, `border-color` și `box-shadow`. Cardurile se ridică cu 12 pixeli și afișează o umbră violet luminoasă atunci când utilizatorul trece cu mouse-ul peste ele.

În timpul verificării am identificat o greșeală de scriere a funcției `rgba()` (scrisă inițial `rbba()`), care împiedica afișarea umbrei. Am corectat eroarea și am verificat funcționarea efectului în browser.

### 6. Testarea confirmată

Site-ul a fost testat atât pe calculator, cât și pe telefon, utilizând Google Chrome. Au fost verificate afișarea paginii, navigarea între secțiuni, meniul responsive, imaginile, cardurile și funcționalitatea Dark Mode.

După personalizarea manuală, a fost verificat efectul hover al cardurilor pe calculator, observându-se ridicarea acestora și apariția umbrei violet luminoase.

Site-ul a fost publicat cu succes prin GitHub Pages și a fost accesat și verificat de pe telefon.

## Cum se rulează local

1. Deschide folderul proiectului în Visual Studio Code.
2. Deschide `index.html` în browser (sau folosește extensia Live Server, dacă este instalată).
3. Navighează între secțiuni și verifică tema și cardurile.
4. Pentru modificări CSS, salvează `style.css` și reîncarcă pagina.

Site-ul este static și nu necesită instalarea unor dependențe.

## Publicare gratuită prin GitHub Pages

1. Autentifică-te pe [GitHub](https://github.com/).
2. Creează un repository **public**, de exemplu `NodeNinjas`, sau utilizează un repository potrivit deja existent.
3. Încarcă în rădăcina repository-ului `index.html`, `style.css`, `script.js`, folderul `assets/` și `README.md`. **Nu încărca doar arhiva ZIP** și nu pune toate fișierele într-un subfolder dacă vei publica din rădăcină.
4. Fă commit modificărilor pe ramura aleasă (de exemplu, `main`).
5. Deschide **Settings → Pages** în repository.
6. La **Build and deployment**, setează **Source: Deploy from a branch**.
7. Selectează ramura care conține fișierele (de exemplu, `main`) și folderul **/(root)**, apoi apasă **Save**.
8. După finalizarea publicării, deschide linkul afișat de GitHub în secțiunea Pages. Pentru un repository de proiect, adresa are de regulă forma `https://UTILIZATOR.github.io/NodeNinjas/`.
9. Verifică online încărcarea logo-ului și a stilurilor, navigarea, Dark Mode, meniul mobil și efectele hover.

Ghid oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Site publicat

Proiectul Node Ninjas este disponibil online prin GitHub Pages:

**https://lavilapustea24.github.io/NodeNinjas/**

Repository-ul cu fișierele proiectului, promptul inițial și capturile de ecran este disponibil la:

**https://github.com/lavilapustea24/NodeNinjas**

## Limitări și îmbunătățiri viitoare

- Formularul de contact este numai demonstrativ și nu poate expedia mesaje.
- Efectele hover au fost personalizate manual; pot fi dezvoltate ulterior cu interacțiuni diferențiate pe membră.
- După publicare pot fi efectuate verificări suplimentare pe mai multe dispozitive și browsere.

## Concluzie

Proiectul ilustrează folosirea AI ca instrument de sprijin în dezvoltarea web: cerințele au fost planificate, codul a fost generat și analizat, iar o modificare vizuală a fost realizată și testată manual. Site-ul rămâne ușor de continuat și de modificat ca pagină statică.
