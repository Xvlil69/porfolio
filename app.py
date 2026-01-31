from flask import Flask, render_template, jsonify
import json
from datetime import datetime

app = Flask(__name__)

# Configuration
app.config['SECRET_KEY'] = 'your-secret-key-here'
app.config['DEBUG'] = True

# Données du portfolio
portfolio_data = {
    "personal_info": {
        "name": "Ibrahima SECK",
        "title": "Cybersecurity Junior Analyst | Développeur Web",
        "email": "hibouseck10@gmail.com",
        "phone": "+221 78 534 11 77",
        "linkedin": "www.linkedin.com/in/ibrahima-seck-535888320",
        "github": "github.com/Xvlil69",
        "avatar": "avatar.jpg"
    },
    "about": {
        "description": "Passionné par la cybersécurité et le développement web, je combine ces deux expertises pour créer des solutions innovantes, performantes et sécurisées. Curieux, motivé et toujours à la recherche de nouveaux défis, je mets mes compétences au service de la protection des systèmes d'information et du développement d'applications web de qualité."
    },
    "skills": {
        "cybersecurity": [
            "Analyse des vulnérabilités & pentest",
            "Audit de sécurité",
            "Gestion et réponse aux incidents",
            "Sécurisation des applications web",
            "Analyse des logs et détection d'intrusions",
            "Outils : Wireshark, Metasploit, Burp Suite, Nessus",
            "Connaissances des normes ISO 27001 et OWASP"
        ],
        "web_development": [
            "HTML, CSS, JavaScript (React, Vue.js)",
            "PHP (Symfony, Laravel)",
            "Python (Flask, Django)",
            "WordPress (sites dynamiques et personnalisés)",
            "Intégration d'API, développement back-end et front-end",
            "UI/UX design, responsive design",
            "Sécurisation et optimisation des applications"
        ]
    },
    "projects": [
        {
            "name": "SDRIC",
            "description": "Système Python pour la détection d'incidents (collecte de logs, détection avancée, réponse automatisée)",
            "technologies": ["Python", "Log Analysis", "Automation"],
            "image": "assets/project1.jpg"
        },
        {
            "name": "Blog Technique",
            "description": "Plateforme d'articles et de sensibilisation sur la cybersécurité et le développement",
            "technologies": ["WordPress", "PHP", "CSS"],
            "image": "assets/project2.jpg"
        },
        {
            "name": "Sites E-commerce Sécurisés",
            "description": "Développement de boutiques intégrant des modules de sécurité avancés",
            "technologies": ["PHP", "JavaScript", "Security"],
            "image": "assets/project3.jpg"
        }
    ],
    "certifications": [
        "Analyste Junior en Cybersécurité — ForceN",
        "Certified C++ Practitioner (CCPP)",
        "Security Engineer ", 
        "SOC Analyst ",
        "Ethical Hacker",
        "Développement mobile ",
        "Digital Marketing Manager",
    ],
    "languages": [
        {"name": "Français", "level": "Courant"},
        {"name": "Anglais", "level": "Professionnel"}
    ],
    "interests": [
        "Challenges CTF & cybersécurité",
        "Développement open source",
        "Création de contenu tech (TikTok, LinkedIn)",
        "Veille technologique & innovation"
    ]
}

@app.route('/')
def index():
    return render_template('index.html', data=portfolio_data)

@app.route('/api/portfolio')
def api_portfolio():
    return jsonify(portfolio_data)

@app.route('/api/contact', methods=['POST'])
def contact():
    # Ici vous pouvez ajouter la logique pour envoyer un email
    return jsonify({"message": "Message envoyé avec succès!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True) 
