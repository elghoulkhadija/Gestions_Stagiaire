# Gestion des Stagiaires - React App

## Description

Cette application est un **système de gestion des stagiaires** développé avec **React**, **Redux** ,**Redux/Toolkit** et **TailwindCSS**.  
Elle permet de :

  - Afficher la liste des stagiaires avec leurs informations et photos.
  - Ajouter un nouveau stagiaire via un formulaire.
  - Consulter les détails d’un stagiaire spécifique.
  - Naviguer facilement entre les pages grâce à **React Router**.

---

## Structure du projet

src/
├── components/
│ └── Stagiaire/
│ ├── Stagiaire.js # Liste des stagiaires
│ ├── Details.js # Détails d’un stagiaire
│ ├── Add.js # Formulaire d’ajout
│
├── Header/
│ └── Header.js 
│
├── redux/
│ └── redux.js # Actions et reducers
│
├── store.js # Configuration du store Redux
├── App.js # Composant principal et routes

---

## Installation

1. Cloner le projet :  
```bash
git clone (https://github.com/elghoulkhadija/Gestions_Stagiaire.git)
````
## Installer les dépendances :

Dépendances principales
  React
  
  React Router 
  
  Redux /Toolkit

## Fonctionnalités :
Liste des Stagiaires 

Affiche tous les stagiaires sous forme de cartes.

Chaque carte contient la photo et le nom complet.

Cliquer sur une carte affiche les détails du stagiaire.

Détails du Stagiaire
Affiche les informations complètes d’un stagiaire : nom, prénom, âge, filiére et image.

Ajouter un Stagiaire
Formulaire complet pour ajouter un nouveau stagiaire.

Champs : Nom, Prénom, Âge, Image URL.


## Style et Design
Utilisation de TailwindCSS pour un design moderne et responsive.

Cartes, boutons et formulaire stylés avec effets hover et focus.
