# 💼 Portfolio - Ibrahima SECK

Portfolio moderne, dynamique et responsive pour Ibrahima SECK - Cybersecurity Junior Analyst & Développeur Web.

## 🚀 Fonctionnalités

- **Design moderne** : Interface élégante avec animations fluides
- **Responsive** : Compatible mobile, tablette et desktop
- **Mode sombre/clair** : Basculement automatique du thème
- **Animations** : Transitions et effets visuels avancés
- **Performance optimisée** : Chargement rapide et SEO-friendly
- **Sécurisé** : Protection contre les vulnérabilités courantes

## 🛠️ Technologies utilisées

### Backend
- **Python 3.11+** : Langage principal
- **Flask 2.3.3** : Framework web léger et flexible


### Frontend
- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes avec variables CSS
- **JavaScript ES6+** : Interactions dynamiques
- **Font Awesome** : Icônes vectorielles
- **Google Fonts** : Typographie optimisée

## 📦 Installation

### Prérequis
- Python 3.11 ou supérieur
- pip (gestionnaire de paquets Python)

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone <votre-repo-url>
   cd Portfolio
   ```

2. **Créer un environnement virtuel**
   ```bash
   python -m venv venv
   ```

3. **Activer l'environnement virtuel**
   
   **Windows :**
   ```bash
   venv\Scripts\activate
   ```
   
   **macOS/Linux :**
   ```bash
   source venv/bin/activate
   ```

4. **Installer les dépendances**
   ```bash
   pip install -r requirements.txt
   ```

5. **Lancer l'application**
   ```bash
   python app.py
   ```

6. **Accéder au portfolio**
   Ouvrez votre navigateur et allez sur : `http://localhost:5000`

## 📁 Structure du projet

```
Portfolio/
├── app.py                 # Application Flask principale
├── requirements.txt       # Dépendances Python
├── README.md             # Documentation
├── assets/               # Images et ressources
│   └── avatar.jpg        # Photo de profil
├── static/               # Fichiers statiques
│   ├── css/
│   │   └── style.css     # Styles CSS
│   └── js/
│       └── main.js       # JavaScript principal
└── templates/            # Templates HTML
    └── index.html        # Page principale
```

## 🎨 Personnalisation

### Modifier les informations personnelles

Éditez le dictionnaire `portfolio_data` dans `app.py` :

```python
portfolio_data = {
    "personal_info": {
        "name": "Votre Nom",
        "title": "Votre Titre",
        "email": "votre@email.com",
        # ... autres informations
    },
    # ... autres sections
}
```

### Changer les couleurs

Modifiez les variables CSS dans `static/css/style.css` :

```css
:root {
    --primary-color: #votre-couleur;
    --secondary-color: #votre-couleur;
    --accent-color: #votre-couleur;
}
```

### Ajouter des projets

Ajoutez vos projets dans la section `projects` du `portfolio_data` :

```python
"projects": [
    {
        "name": "Nom du projet",
        "description": "Description du projet",
        "technologies": ["Tech1", "Tech2"],
        "image": "assets/project-image.jpg"
    }
]
```

## 🌐 Déploiement

### Déploiement local pour production

1. **Désactiver le mode debug**
   ```python
   app.config['DEBUG'] = False
   ```

2. **Utiliser un serveur WSGI**
   ```bash
   pip install gunicorn
   gunicorn -w 4 -b 0.0.0.0:5000 app:app
   ```

### Déploiement sur Heroku

1. **Créer un fichier `Procfile`**
   ```
   web: gunicorn app:app
   ```

2. **Ajouter gunicorn aux dépendances**
   ```
   gunicorn==21.2.0
   ```

3. **Déployer sur Heroku**
   ```bash
   heroku create votre-app-name
   git push heroku main
   ```

### Déploiement sur Vercel

1. **Créer un fichier `vercel.json`**
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "app.py",
         "use": "@vercel/python"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "app.py"
       }
     ]
   }
   ```

## 🔧 Configuration avancée

### Variables d'environnement

Créez un fichier `.env` pour les variables sensibles :

```env
SECRET_KEY=votre-clé-secrète
DEBUG=False
DATABASE_URL=votre-url-base-de-données
```

### Sécurité

- Changez la `SECRET_KEY` par défaut
- Activez HTTPS en production
- Configurez les en-têtes de sécurité
- Limitez les requêtes (rate limiting)

### Performance

- Optimisez les images
- Activez la compression gzip
- Utilisez un CDN pour les assets statiques
- Mettez en cache les ressources

## 📱 Responsive Design

Le portfolio est optimisé pour :
- **Mobile** : 320px - 768px
- **Tablette** : 768px - 1024px
- **Desktop** : 1024px+

## 🎯 SEO

Le portfolio inclut :
- Meta tags optimisés
- Open Graph pour les réseaux sociaux
- Structure HTML sémantique
- URLs propres
- Performance optimisée

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

- **Email** : hibouseck10@gmail.com
- **LinkedIn** : [Ibrahima SECK](https://www.linkedin.com/in/ibrahima-seck-b1193a223)
- **GitHub** : [Xvlil69](https://github.com/Xvlil69)

## 🙏 Remerciements

- [Flask](https://flask.palletsprojects.com/) - Framework web
- [Font Awesome](https://fontawesome.com/) - Icônes
- [Google Fonts](https://fonts.google.com/) - Typographie
- [Unsplash](https://unsplash.com/) - Images de qualité

---

⭐ N'hésitez pas à donner une étoile si ce portfolio vous a été utile ! 
