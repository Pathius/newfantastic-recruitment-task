# newfantastic Recruitment

## Prototyp

- Desktop — https://www.figma.com/proto/n09uf08CIotpYzooxhBwBn/Kreator-Pizzy-UX?node-id=26%3A6&scaling=min-zoom
- Mobile — https://www.figma.com/proto/n09uf08CIotpYzooxhBwBn/Kreator-Pizzy-UX?node-id=29%3A261&scaling=scale-down
- Makiety — https://www.figma.com/file/n09uf08CIotpYzooxhBwBn/Kreator-Pizzy-UX?node-id=0%3A1

## Ogólny opis

Zadanie polega na stworzeniu kreatora pizzy. Głównym zadaniem appki jest umożliwienie użytkownikowi w prosty i szybki sposób stworzenia własnego customowego produktu przy uzyciu dostepnych skladnikow. User story składa się z następujących kroków:

### 1. Krok powitalny

"Witaj w naszym kreatorze — kliknij start aby rozpocząć tworzenie pizzy.." — Widok powitalny jest bardzo prosty, ale i też bardzo ważny — głównym wyzwaniem na tym etapie będzie zadbanie o ładne i szybkie załadowanie się danych i interfejsu użytjkownika.

> Endpoint dla strony startowej: https://wp.recruitment.newfantastic.com/wp-json/wp/v2/pages?slug=welcome

![Zrzut ekranu 2020-02-11 o 12 22 52](https://user-images.githubusercontent.com/37627284/74232619-76978380-4cc9-11ea-9d63-71e56e7cdd3c.jpg)

### 2. Wybierz rozmiar pizzy

Jest to pierwszy i decydujący krok, dlatego, że wpłynie on na następne etapy kreacji produktu.

> Endpoint z rozmiarami: https://wp.recruitment.newfantastic.com/wp-json/wp/v2/pizza_sizes

![Zrzut ekranu 2020-02-11 o 12 23 08](https://user-images.githubusercontent.com/37627284/74232642-844d0900-4cc9-11ea-895b-20b5d9e7f7df.jpg)

### 3. Wybierz składniki do pizzy

Każdy składnik ma swoją Nazwę, Wagę i Cenę.

Tutaj użytkownik będzie mógł wybrać Qty każdego ze składników, które wpłynie na cenę produktu oraz jego wagę.

Maksymalna waga składników określa limit dla produktu, który nie może zostać przekroczony. Dane dostępne w atrybucie `maximum_ingredients_weight`	z endpointu `/pizza_sizes`

> Endpoint ze składnikami: https://wp.recruitment.newfantastic.com/wp-json/wp/v2/pizza_ingredients

![Zrzut ekranu 2020-02-11 o 12 23 21](https://user-images.githubusercontent.com/37627284/74232679-96c74280-4cc9-11ea-9089-bc61bc405b02.jpg)

### 4. Podsumowanie zamówienia

Ostatni krok to Checkout, na którym możemy zakończyć zamówienie, bądź dodać nowy produkt. Kliknięcie na **Dodaj następny** powinno przekierowac do kroku 2 (_Wybierz rozmiar pizzy_) i umożliwić kreację kolejnego produktu.

![Zrzut ekranu 2020-02-11 o 12 23 33](https://user-images.githubusercontent.com/37627284/74232711-a47cc800-4cc9-11ea-818f-234a3c577239.jpg)

![Zrzut ekranu 2020-02-11 o 12 23 41](https://user-images.githubusercontent.com/37627284/74232714-a5155e80-4cc9-11ea-86af-065ad658a162.jpg)


## Czego trzeba użyć?:

- Vuex
- Vue Router (każdy krok to osobny route)
- Vue WordPress (https://docs.vuewordpress.io) / Fetch API / Axios


## Projekt ukończony!
Demo: https://pathius.github.io/recruitment-task/
