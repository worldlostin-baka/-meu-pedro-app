// Dados de exemplo para países (substitua por seus dados reais)
const countriesData = [
    {
        id: 'canada',
        name: 'Canadá',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',
        latitude: 56.1304,
        longitude: -106.3468,
        rating: 92,
        costOfLiving: 70,
        jobOpportunities: 90,
        healthSystem: 85,
        educationQuality: 90,
        safety: 95,
        averageSalary: 4500, // CAD
        currency: 'CAD',
        exchangeRateToBRL: 3.8, // 1 CAD = 3.8 BRL (exemplo)
        languages: ['Inglês', 'Francês'],
        visaRequirements: 'Visto de estudo ou trabalho necessário',
        climate: 'Temperado a Ártico',
        transportation: {
            public: 'Extenso em grandes cidades',
            private: 'Estradas bem mantidas',
            cost: 'Médio',
            commuteTime: '20-40 min'
        },
        rent: {
            studio: 1200, // CAD
            oneBedroom: 1500, // CAD
            threeBedroom: 2500 // CAD
        },
        universities: [
            { name: 'University of Toronto', rank: 1, programs: ['Engenharia', 'Ciência da Computação', 'Negócios'], tuition: { undergraduate: 30000, postgraduate: 20000 }, link: 'https://www.utoronto.ca/' },
            { name: 'University of British Columbia', rank: 2, programs: ['Artes', 'Ciências Ambientais', 'Medicina'], tuition: { undergraduate: 28000, postgraduate: 18000 }, link: 'https://www.ubc.ca/' }
        ],
        scholarships: [
            { name: 'Vanier Canada Graduate Scholarships', value: '50,000 CAD/ano', description: 'Para estudantes de pós-graduação.', link: '#' },
            { name: 'Quebec Merit Scholarships for Foreign Students', value: '10,000 CAD/ano', description: 'Para estudantes no Quebec.', link: '#' }
        ],
        news: [
            { title: 'Canadá anuncia novas regras de imigração para estudantes', date: '2025-06-15', link: '#' },
            { title: 'Mercado de trabalho de tecnologia em alta em Vancouver', date: '2025-06-10', link: '#' }
        ]
    },
    {
        id: 'portugal',
        name: 'Portugal',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg',
        latitude: 39.3999,
        longitude: -8.2245,
        rating: 88,
        costOfLiving: 80,
        jobOpportunities: 70,
        healthSystem: 80,
        educationQuality: 85,
        safety: 90,
        averageSalary: 1200, // EUR
        currency: 'EUR',
        exchangeRateToBRL: 5.5, // 1 EUR = 5.5 BRL (exemplo)
        languages: ['Português'],
        visaRequirements: 'Visto de estudo ou trabalho necessário',
        climate: 'Mediterrânico',
        transportation: {
            public: 'Boa rede de transportes',
            private: 'Estradas em bom estado',
            cost: 'Baixo',
            commuteTime: '15-30 min'
        },
        rent: {
            studio: 500, // EUR
            oneBedroom: 700, // EUR
            threeBedroom: 1200 // EUR
        },
        universities: [
            { name: 'Universidade de Lisboa', rank: 1, programs: ['Direito', 'Engenharia', 'Medicina'], tuition: { undergraduate: 3000, postgraduate: 2500 }, link: 'https://www.ulisboa.pt/' },
            { name: 'Universidade do Porto', rank: 2, programs: ['Artes', 'Arquitetura', 'Economia'], tuition: { undergraduate: 2800, postgraduate: 2200 }, link: 'https://www.up.pt/' }
        ],
        scholarships: [
            { name: 'Bolsas de Estudo para Estrangeiros (DGES)', value: 'Variável', description: 'Bolsas anuais do governo português.', link: '#' },
            { name: 'Bolsas Santander Universidades', value: 'Variável', description: 'Bolsas para estudantes ibero-americanos.', link: '#' }
        ],
        news: [
            { title: 'Portugal entre os melhores países para se viver em 2025', date: '2025-05-20', link: '#' },
            { title: 'Crescimento do setor de turismo impulsiona empregos', date: '2025-05-18', link: '#' }
        ]
    },
    {
        id: 'germany',
        name: 'Alemanha',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg',
        latitude: 51.1657,
        longitude: 10.4515,
        rating: 90,
        costOfLiving: 65,
        jobOpportunities: 85,
        healthSystem: 90,
        educationQuality: 95,
        safety: 88,
        averageSalary: 3500, // EUR
        currency: 'EUR',
        exchangeRateToBRL: 5.5, // 1 EUR = 5.5 BRL (exemplo)
        languages: ['Alemão'],
        visaRequirements: 'Visto de estudo ou trabalho necessário',
        climate: 'Temperado',
        transportation: {
            public: 'Excelente e pontual',
            private: 'Autobahns de alta qualidade',
            cost: 'Médio a alto',
            commuteTime: '20-45 min'
        },
        rent: {
            studio: 600, // EUR
            oneBedroom: 800, // EUR
            threeBedroom: 1500 // EUR
        },
        universities: [
            { name: 'Technical University of Munich (TUM)', rank: 1, programs: ['Engenharia', 'Ciência da Computação', 'Ciências Naturais'], tuition: { undergraduate: 0, postgraduate: 0 }, link: 'https://www.tum.de/' },
            { name: 'Heidelberg University', rank: 2, programs: ['Medicina', 'Direito', 'Humanidades'], tuition: { undergraduate: 0, postgraduate: 0 }, link: 'https://www.uni-heidelberg.de/en' }
        ],
        scholarships: [
            { name: 'DAAD Scholarships', value: 'Variável', description: 'Para estudantes internacionais.', link: '#' },
            { name: 'Deutschlandstipendium', value: '300 EUR/mês', description: 'Para estudantes talentosos.', link: '#' }
        ],
        news: [
            { title: 'Indústria 4.0 na Alemanha: novas oportunidades de emprego', date: '2025-06-01', link: '#' },
            { title: 'Alemanha investe pesado em energias renováveis', date: '2025-05-25', link: '#' }
        ]
    },
    {
        id: 'australia',
        name: 'Austrália',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg',
        latitude: -25.2744,
        longitude: 133.7751,
        rating: 85,
        costOfLiving: 60,
        jobOpportunities: 75,
        healthSystem: 80,
        educationQuality: 88,
        safety: 90,
        averageSalary: 5000, // AUD
        currency: 'AUD',
        exchangeRateToBRL: 3.5, // 1 AUD = 3.5 BRL (exemplo)
        languages: ['Inglês'],
        visaRequirements: 'Visto de estudo ou trabalho necessário',
        climate: 'Variado, de tropical a temperado',
        transportation: {
            public: 'Bom em cidades, menos em áreas rurais',
            private: 'Estradas de boa qualidade',
            cost: 'Alto',
            commuteTime: '30-60 min'
        },
        rent: {
            studio: 1400, // AUD
            oneBedroom: 1800, // AUD
            threeBedroom: 3000 // AUD
        },
        universities: [
            { name: 'University of Melbourne', rank: 1, programs: ['Medicina', 'Direito', 'Engenharia'], tuition: { undergraduate: 35000, postgraduate: 25000 }, link: 'https://unimelb.edu.au/' },
            { name: 'University of Sydney', rank: 2, programs: ['Artes', 'Ciência', 'Negócios'], tuition: { undergraduate: 32000, postgraduate: 23000 }, link: 'https://www.sydney.edu.au/' }
        ],
        scholarships: [
            { name: 'Australia Awards Scholarships', value: 'Cobertura total', description: 'Para estudantes de países em desenvolvimento.', link: '#' },
            { name: 'Destination Australia Program', value: '15,000 AUD/ano', description: 'Para estudos em regiões rurais.', link: '#' }
        ],
        news: [
            { title: 'Boom na demanda por profissionais de saúde na Austrália', date: '2025-06-05', link: '#' },
            { title: 'Novas políticas de imigração para graduados', date: '2025-05-30', link: '#' }
        ]
    }
];

// Estado da aplicação
const appState = {
    isDarkMode: false,
    selectedEducationLevel: 'Ensino Médio',
    selectedCategories: ['Custo de Vida', 'Oportunidades de Trabalho'],
    idealScore: 80,
    searchQuery: '',
    map: null,
    markers: L.featureGroup(),
    currentCountryData: null,
    countriesToCompare: [],
    notifications: []
};

// Traduções
const translations = {
    pt: {
        appTitle: 'Morar no Mundo',
        appSubtitle: 'Salários Reais 2025 • Bolsas por Formação • Contatos por Localização • Dados Atualizados',
        filtersTitle: 'Filtros',
        searchCountry: 'Buscar País',
        searchCountryPlaceholder: 'Digite o nome do país...',
        educationLevel: 'Nível de Educação',
        highSchool: 'Ensino Médio',
        graduation: 'Graduação',
        postGraduation: 'Pós-graduação',
        phd: 'Doutorado',
        interestCategories: 'Categorias de Interesse',
        costOfLiving: 'Custo de Vida',
        jobOpportunities: 'Oportunidades de Trabalho',
        healthSystem: 'Sistema de Saúde',
        education: 'Educação',
        safety: 'Segurança',
        idealScore: 'Pontuação Ideal',
        applyFilters: 'Aplicar Filtros',
        mapTitle: 'Países no Mapa',
        legendHigh: 'Alto',
        legendMedium: 'Médio',
        legendLow: 'Baixo',
        salary: 'Salário Médio',
        rent: 'Aluguel Médio',
        visa: 'Visto',
        languages: 'Idiomas',
        climate: 'Clima',
        transportation: 'Transporte',
        detailsBtn: 'Ver Detalhes',
        compareBtn: 'Comparar',
        countryDetailsTitle: 'Detalhes do País',
        details: 'Detalhes',
        universities: 'Universidades',
        scholarships: 'Bolsas',
        currencyConverterTitle: 'Conversor de Moedas',
        to: 'para',
        compareCountries: 'Comparar Países',
        clearComparison: 'Limpar Comparação',
        login: 'Entrar',
        register: 'Cadastrar',
        emailPlaceholder: 'Email',
        passwordPlaceholder: 'Senha',
        namePlaceholder: 'Nome',
        logout: 'Sair',
        user: 'Usuário',
        notificationsTitle: 'Notificações',
        markAllRead: 'Marcar todas como lidas',
        settings: 'Configurações',
        notificationSettingsTitle: 'Configurações de Notificação',
        allowPushNotifications: 'Permitir notificações push',
        emailNotifications: 'Notificações por Email',
        universityRank: 'Classificação',
        universityPrograms: 'Programas',
        universityTuition: 'Mensalidade',
        rentStudio: 'Estúdio',
        rent1Bedroom: '1 Quarto',
        rent3Bedroom: '3 Quartos',
        publicTransport: 'Transporte Público',
        privateTransport: 'Transporte Privado',
        transportCost: 'Custo',
        commuteTime: 'Tempo de Deslocamento',
        newsAndUpdates: 'Notícias e Atualizações',
        noNotifications: 'Nenhuma notificação nova.'
    },
    en: {
        appTitle: 'Living in the World',
        appSubtitle: 'Real Salaries 2025 • Scholarships by Education • Contacts by Location • Updated Data',
        filtersTitle: 'Filters',
        searchCountry: 'Search Country',
        searchCountryPlaceholder: 'Enter country name...',
        educationLevel: 'Education Level',
        highSchool: 'High School',
        graduation: 'Undergraduate',
        postGraduation: 'Post-graduation',
        phd: 'PhD',
        interestCategories: 'Interest Categories',
        costOfLiving: 'Cost of Living',
        jobOpportunities: 'Job Opportunities',
        healthSystem: 'Health System',
        education: 'Education',
        safety: 'Safety',
        idealScore: 'Ideal Score',
        applyFilters: 'Apply Filters',
        mapTitle: 'Countries on the Map',
        legendHigh: 'High',
        legendMedium: 'Medium',
        legendLow: 'Low',
        salary: 'Average Salary',
        rent: 'Average Rent',
        visa: 'Visa',
        languages: 'Languages',
        climate: 'Climate',
        transportation: 'Transportation',
        detailsBtn: 'View Details',
        compareBtn: 'Compare',
        countryDetailsTitle: 'Country Details',
        details: 'Details',
        universities: 'Universities',
        scholarships: 'Scholarships',
        currencyConverterTitle: 'Currency Converter',
        to: 'to',
        compareCountries: 'Compare Countries',
        clearComparison: 'Clear Comparison',
        login: 'Login',
        register: 'Register',
        emailPlaceholder: 'Email',
        passwordPlaceholder: 'Password',
        namePlaceholder: 'Name',
        logout: 'Logout',
        user: 'User',
        notificationsTitle: 'Notifications',
        markAllRead: 'Mark all as read',
        settings: 'Settings',
        notificationSettingsTitle: 'Notification Settings',
        allowPushNotifications: 'Allow push notifications',
        emailNotifications: 'Email Notifications',
        universityRank: 'Rank',
        universityPrograms: 'Programs',
        universityTuition: 'Tuition',
        rentStudio: 'Studio',
        rent1Bedroom: '1 Bedroom',
        rent3Bedroom: '3 Bedrooms',
        publicTransport: 'Public Transport',
        privateTransport: 'Private Transport',
        transportCost: 'Cost',
        commuteTime: 'Commute Time',
        newsAndUpdates: 'News & Updates',
        noNotifications: 'No new notifications.'
    },
    es: {
        appTitle: 'Vivir en el Mundo',
        appSubtitle: 'Salarios Reales 2025 • Becas por Formación • Contactos por Ubicación • Datos Actualizados',
        filtersTitle: 'Filtros',
        searchCountry: 'Buscar País',
        searchCountryPlaceholder: 'Ingrese el nombre del país...',
        educationLevel: 'Nivel Educativo',
        highSchool: 'Escuela Secundaria',
        graduation: 'Grado',
        postGraduation: 'Posgrado',
        phd: 'Doctorado',
        interestCategories: 'Categorías de Interés',
        costOfLiving: 'Costo de Vida',
        jobOpportunities: 'Oportunidades Laborales',
        healthSystem: 'Sistema de Salud',
        education: 'Educación',
        safety: 'Seguridad',
        idealScore: 'Puntuación Ideal',
        applyFilters: 'Aplicar Filtros',
        mapTitle: 'Países en el Mapa',
        legendHigh: 'Alto',
        legendMedium: 'Medio',
        legendLow: 'Bajo',
        salary: 'Salario Promedio',
        rent: 'Alquiler Promedio',
        visa: 'Visa',
        languages: 'Idiomas',
        climate: 'Clima',
        transportation: 'Transporte',
        detailsBtn: 'Ver Detalles',
        compareBtn: 'Comparar',
        countryDetailsTitle: 'Detalles del País',
        details: 'Detalles',
        universities: 'Universidades',
        scholarships: 'Becas',
        currencyConverterTitle: 'Convertidor de Monedas',
        to: 'a',
        compareCountries: 'Comparar Países',
        clearComparison: 'Borrar Comparación',
        login: 'Iniciar Sesión',
        register: 'Registrarse',
        emailPlaceholder: 'Correo Electrónico',
        passwordPlaceholder: 'Contraseña',
        namePlaceholder: 'Nombre',
        logout: 'Cerrar Sesión',
        user: 'Usuario',
        notificationsTitle: 'Notificaciones',
        markAllRead: 'Marcar todas como leídas',
        settings: 'Configuración',
        notificationSettingsTitle: 'Configuración de Notificaciones',
        allowPushNotifications: 'Permitir notificaciones push',
        emailNotifications: 'Notificaciones por Email',
        universityRank: 'Ranking',
        universityPrograms: 'Programas',
        universityTuition: 'Matrícula',
        rentStudio: 'Estudio',
        rent1Bedroom: '1 Habitación',
        rent3Bedroom: '3 Habitaciones',
        publicTransport: 'Transporte Público',
        privateTransport: 'Transporte Privado',
        transportCost: 'Costo',
        commuteTime: 'Tiempo de Viaje',
        newsAndUpdates: 'Noticias y Actualizaciones',
        noNotifications: 'No hay notificaciones nuevas.'
    },
    fr: {
        appTitle: 'Vivre dans le Monde',
        appSubtitle: 'Salaires Réels 2025 • Bourses par Formation • Contacts par Localisation • Données Actualisées',
        filtersTitle: 'Filtres',
        searchCountry: 'Rechercher un Pays',
        searchCountryPlaceholder: 'Entrez le nom du pays...',
        educationLevel: 'Niveau d\'Éducation',
        highSchool: 'Lycée',
        graduation: 'Licence',
        postGraduation: 'Master',
        phd: 'Doctorat',
        interestCategories: 'Catégories d\'Intérêt',
        costOfLiving: 'Coût de la Vie',
        jobOpportunities: 'Opportunités d\'Emploi',
        healthSystem: 'Système de Santé',
        education: 'Éducation',
        safety: 'Sécurité',
        idealScore: 'Score Idéal',
        applyFilters: 'Appliquer les Filtres',
        mapTitle: 'Pays sur la Carte',
        legendHigh: 'Élevé',
        legendMedium: 'Moyen',
        legendLow: 'Bas',
        salary: 'Salaire Moyen',
        rent: 'Loyer Moyen',
        visa: 'Visa',
        languages: 'Langues',
        climate: 'Climat',
        transportation: 'Transport',
        detailsBtn: 'Voir les Détails',
        compareBtn: 'Comparer',
        countryDetailsTitle: 'Détails du Pays',
        details: 'Détails',
        universities: 'Universités',
        scholarships: 'Bourses',
        currencyConverterTitle: 'Convertisseur de Devises',
        to: 'à',
        compareCountries: 'Comparer les Pays',
        clearComparison: 'Effacer la Comparaison',
        login: 'Se Connecter',
        register: 'S\'inscrire',
        emailPlaceholder: 'Email',
        passwordPlaceholder: 'Mot de Passe',
        namePlaceholder: 'Nom',
        logout: 'Se Déconnecter',
        user: 'Utilisateur',
        notificationsTitle: 'Notifications',
        markAllRead: 'Marquer tout comme lu',
        settings: 'Paramètres',
        notificationSettingsTitle: 'Paramètres de Notification',
        allowPushNotifications: 'Autoriser les notifications push',
        emailNotifications: 'Notifications par Email',
        universityRank: 'Classement',
        universityPrograms: 'Programmes',
        universityTuition: 'Frais de Scolarité',
        rentStudio: 'Studio',
        rent1Bedroom: '1 Chambre',
        rent3Bedroom: '3 Chambres',
        publicTransport: 'Transport Public',
        privateTransport: 'Transport Privé',
        transportCost: 'Coût',
        commuteTime: 'Temps de Trajet',
        newsAndUpdates: 'Actualités et Mises à Jour',
        noNotifications: 'Aucune nouvelle notification.'
    }
};

let currentLang = 'pt'; // Idioma padrão

// --- Funções de Ajuda ---

// Função para aplicar traduções
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.setAttribute('placeholder', translations[currentLang][key]);
        }
    });

    document.querySelectorAll('[data-i18n-value]').forEach(element => {
        const key = element.getAttribute('data-i18n-value');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.value = translations[currentLang][key];
        }
    });
}

// Função para alternar o modo escuro
function toggleDarkMode() {
    appState.isDarkMode = !appState.isDarkMode;
    document.body.classList.toggle('dark-mode', appState.isDarkMode);
    localStorage.setItem('darkMode', appState.isDarkMode);
    document.getElementById('themeToggle').innerHTML = appState.isDarkMode ?
        '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    if (appState.map) {
        // Isso pode não ser suficiente para atualizar completamente o estilo do mapa Leaflet.
        // Em casos reais, pode ser necessário recarregar o tile layer com um URL de estilo diferente.
        // Para este exemplo, faremos uma atualização simples.
        appState.map.remove();
        initMap();
        renderCountryMarkers();
    }
}

// Função para formatar números como moeda
function formatCurrency(amount, currencyCode, locale = currentLang) {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currencyCode }).format(amount);
}

// Função para obter a classificação baseada na pontuação
function getRatingClass(score) {
    if (score >= 85) return 'rating-high';
    if (score >= 70) return 'rating-medium';
    return 'rating-low';
}

function getOpportunityTagClass(score) {
    if (score >= 85) return 'tag-high';
    if (score >= 70) return 'tag-medium';
    return 'tag-low';
}

// --- Funções de Renderização ---

// Inicializa o mapa Leaflet
function initMap() {
    appState.map = L.map('mapid').setView([20, 0], 2); // Centraliza o mapa globalmente, alterado para mapid

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(appState.map);

    appState.markers.addTo(appState.map);
    renderCountryMarkers(); // Renderiza os marcadores de países inicialmente
}

// Renderiza marcadores de países no mapa
function renderCountryMarkers() {
    appState.markers.clearLayers(); // Limpa marcadores existentes
    const filteredCountries = filterCountries();

    filteredCountries.forEach(country => {
        const marker = L.marker([country.latitude, country.longitude]).addTo(appState.markers);
        marker.bindPopup(`<b>${country.name}</b><br>Score: ${country.rating}`);
        marker.on('click', () => showCountryDetails(country.id));
    });
}

// Renderiza os cards de países
function renderCountryCards(countries) {
    const container = document.getElementById('countryCardsContainer');
    if (!container) return; // Adicionada verificação

    container.innerHTML = ''; // Limpa cards existentes

    countries.forEach(country => {
        const card = document.createElement('div');
        card.className = 'country-card';
        card.innerHTML = `
            <div class="country-header">
                <h3 class="country-name">
                    <img src="${country.flag}" alt="${country.name} Flag" class="country-flag">
                    ${country.name}
                </h3>
                <span class="country-rating ${getRatingClass(country.rating)}">${country.rating}</span>
                <div class="compare-checkmark"><i class="fas fa-check"></i></div>
            </div>
            <div class="country-stats">
                <div class="stat-item">
                    <span class="stat-value">${formatCurrency(country.averageSalary, country.currency)}</span>
                    <span class="stat-label" data-i18n="salary">Salário Médio</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${formatCurrency(country.rent.oneBedroom, country.currency)}</span>
                    <span class="stat-label" data-i18n="rent">Aluguel Médio (1 Quarto)</span>
                </div>
            </div>
            <div class="opportunity-tag ${getOpportunityTagClass(country.jobOpportunities)}">
                Oportunidades de Trabalho: ${country.jobOpportunities}
            </div>
            <ul class="country-features">
                <li class="feature-item"><i class="fas fa-passport"></i> <span data-i18n="visa">Visto:</span> ${country.visaRequirements}</li>
                <li class="feature-item"><i class="fas fa-language"></i> <span data-i18n="languages">Idiomas:</span> ${country.languages.join(', ')}</li>
                <li class="feature-item"><i class="fas fa-cloud-sun"></i> <span data-i18n="climate">Clima:</span> ${country.climate}</li>
            </ul>
            <div class="action-buttons">
                <button class="action-btn details-btn" data-country-id="${country.id}" data-i18n="detailsBtn">Ver Detalhes</button>
                <button class="action-btn compare-btn" data-country-id="${country.id}" data-i18n="compareBtn">Comparar</button>
            </div>
        `;
        container.appendChild(card);
    });

    // Adiciona event listeners para botões de detalhes e comparar
    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const countryId = event.target.dataset.countryId;
            showCountryDetails(countryId);
        });
    });

    document.querySelectorAll('.compare-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const countryId = event.target.dataset.countryId;
            toggleCountryForComparison(countryId);
        });
    });

    updateComparisonSidebar();
    applyTranslations(); // Aplica traduções aos novos elementos
}

// --- Funções de Filtro e Pesquisa ---

// Filtra os países com base nos critérios do appState
function filterCountries() {
    return countriesData.filter(country => {
        const matchesEducation = appState.selectedEducationLevel === 'Todos' ||
            country.universities.some(uni => {
                // Lógica de correspondência de nível de educação aqui, simplificada para o exemplo
                if (appState.selectedEducationLevel === 'Ensino Médio') return true; // Todos podem ir para o Ensino Médio (fora do escopo de universidades)
                if (appState.selectedEducationLevel === 'Graduação' && uni.programs.length > 0) return true;
                if (appState.selectedEducationLevel === 'Pós-graduação' && uni.programs.length > 0) return true;
                if (appState.selectedEducationLevel === 'Doutorado' && uni.programs.length > 0) return true;
                return false;
            });

        const matchesCategories = appState.selectedCategories.every(category => {
            if (category === 'Custo de Vida') return country.costOfLiving >= appState.idealScore;
            if (category === 'Oportunidades de Trabalho') return country.jobOpportunities >= appState.idealScore;
            if (category === 'Sistema de Saúde') return country.healthSystem >= appState.idealScore;
            if (category === 'Educação') return country.educationQuality >= appState.idealScore;
            if (category === 'Segurança') return country.safety >= appState.idealScore;
            return true;
        });

        const matchesScore = country.rating >= appState.idealScore;
        const matchesSearch = country.name.toLowerCase().includes(appState.searchQuery.toLowerCase());

        return matchesEducation && matchesCategories && matchesScore && matchesSearch;
    });
}

// Configura filtros de nível de educação
function setupEducationLevelFilters() {
    document.querySelectorAll('input[name="education"]').forEach(radio => {
        radio.addEventListener('change', (event) => {
            appState.selectedEducationLevel = event.target.value;
            renderCountryCards(filterCountries());
            renderCountryMarkers();
        });
    });
}

// Configura filtros de categoria de interesse (checkboxes)
function setupStudyAreaFilters() {
    const container = document.getElementById('studyAreaFilters');
    if (!container) return; // Adicionada verificação
    container.innerHTML = `
        <div class="checkbox-group">
            <div class="checkbox-item">
                <input type="checkbox" id="costOfLiving" value="Custo de Vida" ${appState.selectedCategories.includes('Custo de Vida') ? 'checked' : ''}>
                <label for="costOfLiving" data-i18n="costOfLiving">Custo de Vida</label>
            </div>
            <div class="checkbox-item">
                <input type="checkbox" id="jobOpportunities" value="Oportunidades de Trabalho" ${appState.selectedCategories.includes('Oportunidades de Trabalho') ? 'checked' : ''}>
                <label for="jobOpportunities" data-i18n="jobOpportunities">Oportunidades de Trabalho</label>
            </div>
            <div class="checkbox-item">
                <input type="checkbox" id="healthSystem" value="Sistema de Saúde" ${appState.selectedCategories.includes('Sistema de Saúde') ? 'checked' : ''}>
                <label for="healthSystem" data-i18n="healthSystem">Sistema de Saúde</label>
            </div>
            <div class="checkbox-item">
                <input type="checkbox" id="educationCategory" value="Educação" ${appState.selectedCategories.includes('Educação') ? 'checked' : ''}>
                <label for="educationCategory" data-i18n="education">Educação</label>
            </div>
            <div class="checkbox-item">
                <input type="checkbox" id="safety" value="Segurança" ${appState.selectedCategories.includes('Segurança') ? 'checked' : ''}>
                <label for="safety" data-i18n="safety">Segurança</label>
            </div>
        </div>
    `;

    document.querySelectorAll('.filter-group input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            if (event.target.checked) {
                appState.selectedCategories.push(event.target.value);
            } else {
                appState.selectedCategories = appState.selectedCategories.filter(cat => cat !== event.target.value);
            }
            renderCountryCards(filterCountries());
            renderCountryMarkers();
        });
    });
}

// Configura slider de pontuação ideal
function setupScoreSlider() {
    const slider = document.getElementById('idealScoreSlider');
    const scoreValue = document.getElementById('scoreValue');
    if (!slider || !scoreValue) return; // Adicionada verificação

    slider.value = appState.idealScore;
    scoreValue.textContent = appState.idealScore;

    slider.addEventListener('input', (event) => {
        appState.idealScore = parseInt(event.target.value);
        scoreValue.textContent = appState.idealScore;
        renderCountryCards(filterCountries());
        renderCountryMarkers();
    });
}

// Configura campo de pesquisa
function setupSearch() {
    const searchInput = document.getElementById('countrySearch');
    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            appState.searchQuery = event.target.value;
            renderCountryCards(filterCountries());
            renderCountryMarkers();
        });
    }
}


// --- Funções do Modal de Detalhes do País ---

function showCountryDetails(countryId) {
    appState.currentCountryData = countriesData.find(c => c.id === countryId);
    if (!appState.currentCountryData) return;

    const modal = document.getElementById('countryModal');
    if (!modal) return; // Adicionada verificação

    document.getElementById('modalCountryName').textContent = appState.currentCountryData.name;
    document.getElementById('modalCountryFlag').src = appState.currentCountryData.flag;
    document.getElementById('modalCountryRating').textContent = appState.currentCountryData.rating;
    document.getElementById('modalCountryRating').className = `country-rating ${getRatingClass(appState.currentCountryData.rating)}`;

    // Renderizar a aba de detalhes por padrão
    renderCountryDetailsTab(appState.currentCountryData);
    renderUniversitiesTab(appState.currentCountryData);
    renderScholarshipsTab(appState.currentCountryData);

    // Resetar abas
    document.querySelectorAll('.modal-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.modal-tab-content').forEach(content => content.classList.remove('active'));
    document.querySelector('.modal-tab[data-tab="details"]').classList.add('active');
    document.getElementById('detailsTab').classList.add('active');

    modal.style.display = 'flex'; // Usar flex para centralizar
    modal.classList.add('show'); // Adicionar classe para animação
    applyTranslations(); // Aplica traduções ao modal
    populateCurrencySelectors(appState.currentCountryData.currency);
}

function setupModalTabs() {
    document.querySelectorAll('.modal-tab').forEach(tab => {
        tab.addEventListener('click', (event) => {
            document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.modal-tab-content').forEach(c => c.classList.remove('active'));

            event.target.classList.add('active');
            const tabId = event.target.dataset.tab;
            const contentElement = document.getElementById(`${tabId}Tab`);
            if (contentElement) contentElement.classList.add('active'); // Adicionada verificação
        });
    });
}

function renderCountryDetailsTab(country) {
    const content = document.getElementById('countryDetailsContent');
    if (!content) return; // Adicionada verificação
    content.innerHTML = `
        <div class="detail-section">
            <h3 data-i18n="salary"><i class="fas fa-money-bill-wave"></i> Salário Médio</h3>
            <p class="detail-value">${formatCurrency(country.averageSalary, country.currency)}</p>
        </div>
        <div class="detail-section">
            <h3 data-i18n="visa"><i class="fas fa-passport"></i> Requisitos de Visto</h3>
            <p class="detail-value">${country.visaRequirements}</p>
        </div>
        <div class="detail-section">
            <h3 data-i18n="languages"><i class="fas fa-language"></i> Idiomas Oficiais</h3>
            <p class="detail-value">${country.languages.join(', ')}</p>
        </div>
        <div class="detail-section">
            <h3 data-i18n="climate"><i class="fas fa-cloud-sun"></i> Clima</h3>
            <p class="detail-value">${country.climate}</p>
        </div>
        <div class="detail-section">
            <h3 data-i18n="rent"><i class="fas fa-house-user"></i> Custo de Aluguel (Médio)</h3>
            <div class="rent-info">
                <div class="rent-item">
                    <span class="rent-label" data-i18n="rentStudio">Estúdio:</span>
                    <span class="rent-value">${formatCurrency(country.rent.studio, country.currency)}</span>
                </div>
                <div class="rent-item">
                    <span class="rent-label" data-i18n="rent1Bedroom">1 Quarto:</span>
                    <span class="rent-value">${formatCurrency(country.rent.oneBedroom, country.currency)}</span>
                </div>
                <div class="rent-item">
                    <span class="rent-label" data-i18n="rent3Bedroom">3 Quartos:</span>
                    <span class="rent-value">${formatCurrency(country.rent.threeBedroom, country.currency)}</span>
                </div>
            </div>
        </div>
        <div class="detail-section">
            <h3 data-i18n="transportation"><i class="fas fa-bus"></i> Transporte</h3>
            <div class="rent-info"> <div class="rent-item">
                    <span class="rent-label" data-i18n="publicTransport">Público:</span>
                    <span class="rent-value">${country.transportation.public}</span>
                </div>
                <div class="rent-item">
                    <span class="rent-label" data-i18n="privateTransport">Privado:</span>
                    <span class="rent-value">${country.transportation.private}</span>
                </div>
                <div class="rent-item">
                    <span class="rent-label" data-i18n="transportCost">Custo:</span>
                    <span class="rent-value">${country.transportation.cost}</span>
                </div>
                <div class="rent-item">
                    <span class="rent-label" data-i18n="commuteTime">Tempo de Deslocamento:</span>
                    <span class="rent-value">${country.transportation.commuteTime}</span>
                </div>
            </div>
        </div>
        <div class="detail-section">
            <h3 data-i18n="newsAndUpdates"><i class="fas fa-newspaper"></i> Notícias e Atualizações</h3>
            <ul class="news-list">
                ${country.news.map(n => `
                    <li>
                        <a href="${n.link}" target="_blank">${n.title}</a>
                        <span>(${n.date})</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
    applyTranslations();
}

function renderUniversitiesTab(country) {
    const content = document.getElementById('universitiesContent');
    if (!content) return; // Adicionada verificação
    if (country.universities && country.universities.length > 0) {
        content.innerHTML = country.universities.map(uni => `
            <div class="university-item">
                <h4 class="university-name"><i class="fas fa-university"></i> ${uni.name}</h4>
                <p class="university-rank" data-i18n="universityRank">Classificação: ${uni.rank}</p>
                <p class="university-programs" data-i18n="universityPrograms">Programas: ${uni.programs.join(', ')}</p>
                <p class="university-tuition" data-i18n="universityTuition">Mensalidade: Graduação ${formatCurrency(uni.tuition.undergraduate, country.currency)}, Pós-graduação ${formatCurrency(uni.tuition.postgraduate, country.currency)}</p>
                <a href="${uni.link}" target="_blank" class="university-link">Visitar Site <i class="fas fa-external-link-alt"></i></a>
            </div>
        `).join('');
    } else {
        content.innerHTML = '<p>Nenhuma universidade encontrada para este país.</p>';
    }
    applyTranslations();
}

function renderScholarshipsTab(country) {
    const content = document.getElementById('scholarshipsContent');
    if (!content) return; // Adicionada verificação
    if (country.scholarships && country.scholarships.length > 0) {
        content.innerHTML = country.scholarships.map(scholarship => `
            <div class="scholarship-item">
                <h4 class="scholarship-name"><i class="fas fa-graduation-cap"></i> ${scholarship.name}</h4>
                <p class="scholarship-value">Valor: ${scholarship.value}</p>
                <p class="scholarship-description">${scholarship.description}</p>
                <a href="${scholarship.link}" target="_blank" class="scholarship-link">Mais Detalhes <i class="fas fa-external-link-alt"></i></a>
            </div>
        `).join('');
    } else {
        content.innerHTML = '<p>Nenhuma bolsa de estudo encontrada para este país.</p>';
    }
    applyTranslations();
}

// --- Funções de Conversor de Moedas ---

async function fetchExchangeRates(baseCurrency) {
    // Em um ambiente real, você usaria uma API de conversão de moedas (ex: FreeCurrencyAPI, ExchangeRate-API)
    // const response = await fetch(`https://api.example.com/latest?base=${baseCurrency}`);
    // const data = await response.json();
    // return data.rates;

    // Para este exemplo, usaremos taxas fixas
    const rates = {
        'BRL': { 'CAD': 0.26, 'EUR': 0.18, 'AUD': 0.29, 'BRL': 1 },
        'CAD': { 'BRL': 3.8, 'EUR': 0.68, 'AUD': 1.1, 'CAD': 1 },
        'EUR': { 'BRL': 5.5, 'CAD': 1.47, 'AUD': 1.6, 'EUR': 1 },
        'AUD': { 'BRL': 3.5, 'CAD': 0.91, 'EUR': 0.63, 'AUD': 1 }
    };
    return rates[baseCurrency] || {};
}

async function populateCurrencySelectors(countryCurrency) {
    const currencyFromSelect = document.getElementById('currencyFrom');
    const currencyToSelect = document.getElementById('currencyTo');
    if (!currencyFromSelect || !currencyToSelect) return; // Adicionada verificação

    const allCurrencies = [...new Set(countriesData.map(c => c.currency).concat(['BRL']))]; // Inclui BRL

    currencyFromSelect.innerHTML = '';
    currencyToSelect.innerHTML = '';

    allCurrencies.forEach(currency => {
        const optionFrom = document.createElement('option');
        optionFrom.value = currency;
        optionFrom.textContent = currency;
        currencyFromSelect.appendChild(optionFrom);

        const optionTo = document.createElement('option');
        optionTo.value = currency;
        optionTo.textContent = currency;
        currencyToSelect.appendChild(optionTo);
    });

    // Define a moeda do país como padrão em 'converter de'
    currencyFromSelect.value = countryCurrency;
    // Define BRL como padrão em 'converter para'
    currencyToSelect.value = 'BRL';

    currencyFromSelect.addEventListener('change', convertCurrency);
    currencyToSelect.addEventListener('change', convertCurrency);
    const amountFromInput = document.getElementById('amountFrom');
    if (amountFromInput) amountFromInput.addEventListener('input', convertCurrency); // Adicionada verificação

    convertCurrency(); // Realiza a conversão inicial
}

async function convertCurrency() {
    const amountFromInput = document.getElementById('amountFrom');
    const currencyFromSelect = document.getElementById('currencyFrom');
    const currencyToSelect = document.getElementById('currencyTo');
    const resultElement = document.getElementById('currencyResult');

    if (!amountFromInput || !currencyFromSelect || !currencyToSelect || !resultElement) return; // Adicionada verificação

    const amount = parseFloat(amountFromInput.value);
    const fromCurrency = currencyFromSelect.value;
    const toCurrency = currencyToSelect.value;

    if (isNaN(amount) || amount <= 0) {
        resultElement.textContent = 'Insira um valor válido.';
        return;
    }

    if (fromCurrency === toCurrency) {
        resultElement.textContent = `${formatCurrency(amount, toCurrency)}`;
        return;
    }

    const rates = await fetchExchangeRates(fromCurrency);
    if (rates[toCurrency]) {
        const convertedAmount = amount * rates[toCurrency];
        resultElement.textContent = `${formatCurrency(convertedAmount, toCurrency)}`;
    } else {
        resultElement.textContent = 'Taxa de câmbio não disponível.';
    }
}

// --- Funções de Comparação ---

function toggleCountryForComparison(countryId) {
    const index = appState.countriesToCompare.indexOf(countryId);
    const card = document.querySelector(`.country-card .action-btn.compare-btn[data-country-id="${countryId}"]`)?.closest('.country-card'); // Optional chaining

    if (index > -1) {
        // Remover da comparação
        appState.countriesToCompare.splice(index, 1);
        if (card) card.classList.remove('selected-for-comparison');
    } else {
        // Adicionar à comparação, limitando a 2 países
        if (appState.countriesToCompare.length < 2) {
            appState.countriesToCompare.push(countryId);
            if (card) card.classList.add('selected-for-comparison');
        } else {
            alert('Você pode comparar no máximo 2 países.');
            return;
        }
    }
    updateComparisonSidebar();
}

function updateComparisonSidebar() {
    const sidebar = document.getElementById('comparisonSidebar');
    const compareList = document.getElementById('compareList');
    const compareBtn = document.getElementById('compareBtn');
    const clearComparisonBtn = document.getElementById('clearComparisonBtn');

    if (!sidebar || !compareList || !compareBtn || !clearComparisonBtn) return; // Adicionada verificação

    compareList.innerHTML = '';

    if (appState.countriesToCompare.length > 0) {
        sidebar.style.display = 'block';
        sidebar.classList.add('active'); // Adiciona classe para animação
        appState.countriesToCompare.forEach(countryId => {
            const country = countriesData.find(c => c.id === countryId);
            if (country) {
                const tag = document.createElement('span');
                tag.className = 'comparison-tag';
                tag.innerHTML = `${country.name} <i class="fas fa-times remove-comparison" data-country-id="${country.id}"></i>`;
                compareList.appendChild(tag);
            }
        });

        document.querySelectorAll('.remove-comparison').forEach(btn => {
            btn.addEventListener('click', (event) => {
                const countryIdToRemove = event.target.dataset.countryId;
                toggleCountryForComparison(countryIdToRemove); // Reusa a função para remover
            });
        });
    } else {
        sidebar.style.display = 'none';
        sidebar.classList.remove('active'); // Remove classe para animação
    }

    compareBtn.disabled = appState.countriesToCompare.length < 2;
    compareBtn.onclick = showComparisonModal; // Usa onclick para evitar múltiplos listeners
    clearComparisonBtn.onclick = clearComparison; // Usa onclick
    applyTranslations();
}


function clearComparison() {
    appState.countriesToCompare = [];
    document.querySelectorAll('.country-card').forEach(card => {
        card.classList.remove('selected-for-comparison');
    });
    updateComparisonSidebar();
}

function showComparisonModal() {
    if (appState.countriesToCompare.length !== 2) {
        alert('Selecione exatamente 2 países para comparar.');
        return;
    }

    const country1 = countriesData.find(c => c.id === appState.countriesToCompare[0]);
    const country2 = countriesData.find(c => c.id === appState.countriesToCompare[1]);

    if (!country1 || !country2) {
        console.error('Países para comparação não encontrados.');
        return;
    }

    document.getElementById('compareCountry1Name').textContent = country1.name;
    document.getElementById('compareCountry2Name').textContent = country2.name;

    const tableBody = document.getElementById('comparisonTableBody');
    if (!tableBody) return; // Adicionada verificação
    tableBody.innerHTML = '';

    const features = [
        { label: 'Pontuação Geral', key: 'rating', type: 'score' },
        { label: 'Custo de Vida', key: 'costOfLiving', type: 'score' },
        { label: 'Oportunidades de Trabalho', key: 'jobOpportunities', type: 'score' },
        { label: 'Sistema de Saúde', key: 'healthSystem', type: 'score' },
        { label: 'Qualidade da Educação', key: 'educationQuality', type: 'score' },
        { label: 'Segurança', key: 'safety', type: 'score' },
        { label: 'Salário Médio', key: 'averageSalary', type: 'currency', currencyKey: 'currency' },
        { label: 'Aluguel (1 Quarto)', key: 'rent.oneBedroom', type: 'currency', currencyKey: 'currency' },
        { label: 'Idiomas', key: 'languages', type: 'array' },
        { label: 'Clima', key: 'climate', type: 'string' },
        { label: 'Requisitos de Visto', key: 'visaRequirements', type: 'string' }
    ];

    features.forEach(feature => {
        const row = tableBody.insertRow();
        const featureCell = row.insertCell();
        featureCell.textContent = translations[currentLang][feature.label] || feature.label; // Traduzir label

        const value1Cell = row.insertCell();
        const value2Cell = row.insertCell();

        let value1 = getNestedValue(country1, feature.key);
        let value2 = getNestedValue(country2, feature.key);

        if (feature.type === 'currency') {
            value1 = formatCurrency(value1, getNestedValue(country1, feature.currencyKey));
            value2 = formatCurrency(value2, getNestedValue(country2, feature.currencyKey));
        } else if (feature.type === 'array') {
            value1 = Array.isArray(value1) ? value1.join(', ') : value1;
            value2 = Array.isArray(value2) ? value2.join(', ') : value2;
        }

        value1Cell.textContent = value1;
        value2Cell.textContent = value2;

        // Adicionar destaque para o melhor valor (para scores e salários/aluguéis)
        if (feature.type === 'score' || feature.key === 'averageSalary') {
            if (getNestedValue(country1, feature.key) > getNestedValue(country2, feature.key)) {
                value1Cell.classList.add('highlight');
            } else if (getNestedValue(country2, feature.key) > getNestedValue(country1, feature.key)) {
                value2Cell.classList.add('highlight');
            }
        } else if (feature.key === 'rent.oneBedroom') { // Para aluguel, menor é melhor
            if (getNestedValue(country1, feature.key) < getNestedValue(country2, feature.key)) {
                value1Cell.classList.add('highlight');
            } else if (getNestedValue(country2, feature.key) < getNestedValue(country1, feature.key)) {
                value2Cell.classList.add('highlight');
            }
        }
    });

    const comparisonModal = document.getElementById('comparisonModal');
    if (comparisonModal) {
        comparisonModal.style.display = 'flex'; // Usar flex para centralizar
        comparisonModal.classList.add('show'); // Adicionar classe para animação
    }
    applyTranslations();
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

// --- Funções de Autenticação (Mock) ---
function setupAuth() {
    const userAuthDiv = document.getElementById('userAuth');
    if (!userAuthDiv) {
        console.warn("Element with ID 'userAuth' not found. Skipping authentication setup.");
        return;
    }

    // Exemplo de como você pode adicionar os elementos se eles não existirem (com base nos comentários)
    if (!document.getElementById('loginRegisterBtn')) {
        const tempDiv = document.createElement('div'); // Cria um div temporário para parsear o HTML
        tempDiv.innerHTML = `
            <button id="loginRegisterBtn" class="auth-btn" data-i18n="loginRegister">Entrar / Cadastrar</button>
            <div class="user-profile hidden" id="userProfile">
                <span id="userName"></span>
                <i class="fas fa-bell notifications-icon" id="notificationsBell"></i>
                <span class="notifications-count" id="notificationsCount">0</span>
                <button id="logoutBtn" data-i18n="logout">Sair</button>
            </div>
        `;
        // Adiciona os elementos do tempDiv ao userAuthDiv
        while (tempDiv.firstChild) {
            userAuthDiv.appendChild(tempDiv.firstChild);
        }
    }


    const loginRegisterBtn = document.getElementById('loginRegisterBtn');
    const userProfile = document.getElementById('userProfile');
    const userNameSpan = document.getElementById('userName');
    const logoutBtn = document.getElementById('logoutBtn');
    const authModal = document.getElementById('authModal');
    const closeAuthModalBtn = document.getElementById('closeAuthModalBtn');
    const authTabs = document.querySelectorAll('.auth-tab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginSubmitBtn = document.getElementById('loginSubmitBtn');
    const registerSubmitBtn = document.getElementById('registerSubmitBtn');
    const loginError = document.getElementById('loginError');
    const registerError = document.getElementById('registerError');

    // Estado de autenticação mock
    let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    let currentUser = localStorage.getItem('currentUser') || null;

    function updateAuthUI() {
        if (isLoggedIn) {
            if (loginRegisterBtn) loginRegisterBtn.style.display = 'none';
            if (userProfile) userProfile.classList.remove('hidden');
            if (userNameSpan) userNameSpan.textContent = currentUser || translations[currentLang].user;
        } else {
            if (loginRegisterBtn) loginRegisterBtn.style.display = 'block';
            if (userProfile) userProfile.classList.add('hidden');
        }
        applyTranslations();
    }

    if (loginRegisterBtn) {
        loginRegisterBtn.addEventListener('click', () => {
            if (authModal) {
                authModal.style.display = 'flex'; // Usar flex para centralizar
                authModal.classList.add('show'); // Adicionar classe para animação
            }
            if (loginForm) loginForm.classList.add('active');
            if (registerForm) registerForm.classList.remove('active');
            document.querySelector('.auth-tab[data-tab="login"]').classList.add('active');
            document.querySelector('.auth-tab[data-tab="register"]').classList.remove('active');
            if (loginError) loginError.textContent = '';
        });
    }


    if (closeAuthModalBtn) {
        closeAuthModalBtn.addEventListener('click', () => {
            if (authModal) {
                authModal.style.display = 'none';
                authModal.classList.remove('show'); // Remover classe de animação
            }
        });
    }

    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            authTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const targetForm = tab.dataset.tab === 'login' ? loginForm : registerForm;
            if (loginForm) loginForm.classList.remove('active');
            if (registerForm) registerForm.classList.remove('active');
            if (targetForm) targetForm.classList.add('active');
            if (loginError) loginError.textContent = '';
            if (registerError) registerError.textContent = '';
        });
    });

    if (loginSubmitBtn) {
        loginSubmitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            // Mock de autenticação
            if (email === 'teste@teste.com' && password === '123456') {
                isLoggedIn = true;
                currentUser = 'Teste User';
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('currentUser', currentUser);
                if (authModal) {
                    authModal.style.display = 'none';
                    authModal.classList.remove('show');
                }
                updateAuthUI();
                alert('Login bem-sucedido!');
            } else {
                if (loginError) loginError.textContent = 'Email ou senha incorretos.';
            }
        });
    }

    if (registerSubmitBtn) {
        registerSubmitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;

            // Mock de registro
            if (name && email && password) {
                // Em um ambiente real, você faria uma chamada a uma API para registrar o usuário
                alert(`Usuário ${name} registrado com sucesso! Por favor, faça login.`);
                document.getElementById('loginEmail').value = email;
                document.getElementById('loginPassword').value = '';
                if (loginRegisterBtn) loginRegisterBtn.click(); // Volta para a aba de login
            } else {
                if (registerError) registerError.textContent = 'Por favor, preencha todos os campos.';
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            isLoggedIn = false;
            currentUser = null;
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('currentUser');
            updateAuthUI();
            alert('Você foi desconectado.');
        });
    }

    updateAuthUI(); // Atualiza a UI no carregamento da página
}

// --- Funções de Notificação (Mock) ---
function setupNotifications() {
    const notificationsBell = document.getElementById('notificationsBell');
    const notificationsCount = document.getElementById('notificationsCount');
    const notificationsModal = document.getElementById('notificationsModal');
    const closeNotificationsModalBtn = document.getElementById('closeNotificationsModalBtn');
    const notificationsList = document.getElementById('notificationsList');
    const markAllReadBtn = document.getElementById('markAllReadBtn');
    const viewNotificationSettingsBtn = document.getElementById('viewNotificationSettingsBtn');
    const notificationSettings = document.getElementById('notificationSettings');
    const allowNotificationsToggle = document.getElementById('allowNotifications');
    const emailNotificationsToggle = document.getElementById('emailNotifications');


    // Notificações mock
    let userNotifications = JSON.parse(localStorage.getItem('userNotifications')) || [
        { id: 1, title: 'Nova bolsa de estudo no Canadá!', message: 'Confira as novas oportunidades de bolsa de estudo para pós-graduação.', time: '2h atrás', read: false },
        { id: 2, title: 'Atualização de dados de Portugal', message: 'Dados de custo de vida e salários foram atualizados para Portugal.', time: '1 dia atrás', read: false },
        { id: 3, title: 'Bem-vindo ao Morar no Mundo!', message: 'Obrigado por se cadastrar em nossa plataforma.', time: '3 dias atrás', read: true }
    ];

    function updateNotificationCount() {
        const unreadCount = userNotifications.filter(n => !n.read).length;
        if (notificationsCount) {
            notificationsCount.textContent = unreadCount;
            notificationsCount.style.display = unreadCount > 0 ? 'flex' : 'none';
        }
    }

    function renderNotifications() {
        if (!notificationsList) return;
        notificationsList.innerHTML = '';
        if (userNotifications.length === 0) {
            notificationsList.innerHTML = `<li style="padding: 15px; text-align: center; color: var(--secondary-color);" data-i18n="noNotifications">Nenhuma notificação nova.</li>`;
            return;
        }
        userNotifications.forEach(notification => {
            const item = document.createElement('li');
            item.className = `notification-item ${notification.read ? '' : 'unread'}`;
            item.innerHTML = `
                <div class="notification-title">${notification.title}</div>
                <div class="notification-message">${notification.message}</div>
                <div class="notification-time">${notification.time}</div>
            `;
            item.addEventListener('click', () => {
                notification.read = true;
                localStorage.setItem('userNotifications', JSON.stringify(userNotifications));
                renderNotifications();
                updateNotificationCount();
                // Opcional: navegar para o link da notificação
            });
            notificationsList.appendChild(item);
        });
        applyTranslations();
    }

    if (notificationsBell) {
        notificationsBell.addEventListener('click', () => {
            if (notificationsModal) {
                notificationsModal.style.display = 'flex'; // Usar flex para centralizar
                notificationsModal.classList.add('show'); // Adicionar classe para animação
            }
            renderNotifications();
        });
    }


    if (closeNotificationsModalBtn) {
        closeNotificationsModalBtn.addEventListener('click', () => {
            if (notificationsModal) {
                notificationsModal.style.display = 'none';
                notificationsModal.classList.remove('show'); // Remover classe de animação
            }
        });
    }

    if (markAllReadBtn) {
        markAllReadBtn.addEventListener('click', () => {
            userNotifications.forEach(n => n.read = true);
            localStorage.setItem('userNotifications', JSON.stringify(userNotifications));
            renderNotifications();
            updateNotificationCount();
        });
    }

    if (viewNotificationSettingsBtn) {
        viewNotificationSettingsBtn.addEventListener('click', () => {
            if (notificationSettings) notificationSettings.style.display = notificationSettings.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Mock de configurações de notificação
    if (allowNotificationsToggle) {
        allowNotificationsToggle.checked = localStorage.getItem('allowPushNotifications') === 'true';
        allowNotificationsToggle.addEventListener('change', (event) => {
            localStorage.setItem('allowPushNotifications', event.target.checked);
        });
    }

    if (emailNotificationsToggle) {
        emailNotificationsToggle.checked = localStorage.getItem('emailNotifications') === 'true';
        emailNotificationsToggle.addEventListener('change', (event) => {
            localStorage.setItem('emailNotifications', event.target.checked);
        });
    }

    updateNotificationCount();
}


// --- Funções de Idioma ---
function setupLanguageSelector() {
    const langSelect = document.getElementById('siteLanguage');
    if (!langSelect) return;

    const savedLang = localStorage.getItem('siteLanguage');
    if (savedLang) {
        currentLang = savedLang;
        langSelect.value = savedLang;
    } else {
        localStorage.setItem('siteLanguage', currentLang);
    }

    langSelect.addEventListener('change', (event) => {
        currentLang = event.target.value;
        localStorage.setItem('siteLanguage', currentLang);
        applyTranslations();
        renderCountryCards(filterCountries()); // Recarrega cards para traduzir conteúdo dinâmico
        // Pode ser necessário recarregar outros elementos dinâmicos aqui
    });
}


// --- Inicialização da Aplicação ---
function initApp() {
    // Inicializa o mapa
    const mapElement = document.getElementById('mapid');
    if (mapElement) {
        initMap();
    } else {
        console.warn("Element with ID 'mapid' not found. Map initialization skipped.");
    }

    // Renderiza os cards de países inicialmente
    renderCountryCards(filterCountries());

    // Configura os ouvintes de eventos para os filtros
    setupEducationLevelFilters();
    setupStudyAreaFilters();
    setupScoreSlider();
    setupSearch();


    // Event listeners para fechar modais
    const closeModalBtn = document.getElementById('closeModalBtn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            const countryModal = document.getElementById('countryModal');
            if (countryModal) {
                countryModal.style.display = 'none';
                countryModal.classList.remove('show');
            }
        });
    }

    const closeComparisonModalBtn = document.getElementById('closeComparisonModalBtn');
    if (closeComparisonModalBtn) {
        closeComparisonModalBtn.addEventListener('click', () => {
            const comparisonModal = document.getElementById('comparisonModal');
            if (comparisonModal) {
                comparisonModal.style.display = 'none';
                comparisonModal.classList.remove('show');
            }
        });
    }

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkMode);
    }

    // Verifica o tema salvo
    if (localStorage.getItem('darkMode')) {
        appState.isDarkMode = localStorage.getItem('darkMode') === 'true';
        document.body.classList.toggle('dark-mode', appState.isDarkMode);
        if (themeToggle) {
            themeToggle.innerHTML = appState.isDarkMode ?
                '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        }
    }

    // Configura abas e filtros
    setupModalTabs();
    setupStudyAreaFilters();
    setupScoreSlider();
    setupSearch();
    setupAuth();
    setupNotifications();
    setupLanguageSelector(); // Deve ser chamado antes de applyTranslations para definir o idioma inicial
    applyTranslations(); // Aplica as traduções iniciais após carregar o idioma
}

// Inicia a aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initApp);