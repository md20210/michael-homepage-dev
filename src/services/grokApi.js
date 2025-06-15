// src/services/grokApi.js - Optimierte Fallback Version

import { getFallbackResponse, getApiErrorResponse } from '../utils/fallbackResponses.js';

export class GrokApiService {
    constructor() {
        this.fallbackMode = true; // Immer Fallback verwenden
    }

    async sendMessage(userMessage, language = 'en') {
        console.log('🤖 Processing message:', userMessage);
        
        // Simuliere kurze "Denkzeit" für realistisches Verhalten
        await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));
        
        try {
            // Generiere intelligente, kontextbezogene Antwort
            const response = this.generateIntelligentResponse(userMessage, language);
            
            console.log('✅ Intelligent fallback response generated');
            return {
                success: true,
                message: response,
                source: 'intelligent-fallback'
            };
            
        } catch (error) {
            console.error('❌ Fallback error:', error);
            return {
                success: false,
                message: getApiErrorResponse(language),
                source: 'error-fallback'
            };
        }
    }

    generateIntelligentResponse(userMessage, language) {
        const msgLower = userMessage.toLowerCase();
        
        // Spracherkennung
        const isGerman = language === 'de' || this.containsGermanWords(msgLower);
        const isSpanish = language === 'es' || this.containsSpanishWords(msgLower);
        const lang = isGerman ? 'de' : isSpanish ? 'es' : 'en';
        
        // Kontextbasierte Antworten
        if (this.isGreeting(msgLower)) {
            return this.getGreeting(lang);
        }
        
        if (this.isSkillsQuestion(msgLower)) {
            return this.getSkillsResponse(lang);
        }
        
        if (this.isExperienceQuestion(msgLower)) {
            return this.getExperienceResponse(lang);
        }
        
        if (this.isAIQuestion(msgLower)) {
            return this.getAIResponse(lang);
        }
        
        if (this.isAvailabilityQuestion(msgLower)) {
            return this.getAvailabilityResponse(lang);
        }
        
        if (this.isCognizantQuestion(msgLower)) {
            return this.getCognizantResponse(lang);
        }
        
        if (this.isContactQuestion(msgLower)) {
            return this.getContactResponse(lang);
        }
        
        // Default intelligente Antwort
        return this.getDefaultResponse(lang, userMessage);
    }

    // Hilfsfunktionen für Mustererkennung
    containsGermanWords(msg) {
        const germanWords = ['was', 'wie', 'warum', 'können', 'haben', 'ist', 'der', 'die', 'das', 'und', 'mit', 'für', 'kompetenzen', 'erfahrung', 'projekte'];
        return germanWords.some(word => msg.includes(word));
    }

    containsSpanishWords(msg) {
        const spanishWords = ['qué', 'cómo', 'por qué', 'puede', 'tiene', 'es', 'el', 'la', 'los', 'y', 'con', 'para', 'habilidades', 'experiencia', 'proyectos'];
        return spanishWords.some(word => msg.includes(word));
    }

    isGreeting(msg) {
        const greetings = ['hi', 'hello', 'hola', 'hallo', 'hey', 'good morning', 'good day', 'greetings'];
        return greetings.some(greeting => msg.includes(greeting));
    }

    isSkillsQuestion(msg) {
        const skillWords = ['skill', 'competen', 'ability', 'expertise', 'fähigkeit', 'können', 'habilidad', 'capac'];
        return skillWords.some(word => msg.includes(word));
    }

    isExperienceQuestion(msg) {
        const expWords = ['experience', 'work', 'job', 'career', 'background', 'erfahrung', 'arbeit', 'beruf', 'experiencia', 'trabajo', 'carrera'];
        return expWords.some(word => msg.includes(word));
    }

    isAIQuestion(msg) {
        const aiWords = ['ai', 'artificial intelligence', 'ki', 'chatgpt', 'grok', 'gemini', 'claude', 'machine learning', 'chatbot'];
        return aiWords.some(word => msg.includes(word));
    }

    isAvailabilityQuestion(msg) {
        const availWords = ['available', 'hire', 'contact', 'opportunity', 'job', 'verfügbar', 'kontakt', 'stelle', 'disponible', 'contacto', 'oportunidad'];
        return availWords.some(word => msg.includes(word));
    }

    isCognizantQuestion(msg) {
        return msg.includes('cognizant') || msg.includes('telecom') || msg.includes('pharma');
    }

    isContactQuestion(msg) {
        const contactWords = ['contact', 'email', 'phone', 'reach', 'kontakt', 'telefon', 'erreichen', 'contacto', 'teléfono', 'contactar'];
        return contactWords.some(word => msg.includes(word));
    }

    // Antwort-Generatoren
    getGreeting(lang) {
        const responses = {
            en: "Hello! I'm Grok, representing Michael Dabrock. I know his 20+ years of experience in AI consulting and enterprise architecture inside out. What would you like to know about his background, skills, or current availability?",
            de: "Hallo! Ich bin Grok und vertrete Michael Dabrock. Ich kenne seine 20+ Jahre Erfahrung in KI-Beratung und Enterprise Architecture in- und auswendig. Was möchten Sie über seinen Hintergrund, seine Fähigkeiten oder aktuelle Verfügbarkeit wissen?",
            es: "¡Hola! Soy Grok, representando a Michael Dabrock. Conozco sus 20+ años de experiencia en consultoría IA y arquitectura empresarial al dedillo. ¿Qué te gustaría saber sobre su background, habilidades o disponibilidad actual?"
        };
        return responses[lang] || responses.en;
    }

    getSkillsResponse(lang) {
        const responses = {
            en: "Michael's core expertise spans AI Consulting (ChatGPT, Grok, Gemini, Claude integration), Program Leadership (€20M+ budgets, global teams), Enterprise Architecture (TOGAF, cloud-native systems), and Cloud Technologies (Azure, AWS, S/4HANA). He's IBM Certified Architect, TOGAF certified, and has hands-on experience with LLM fine-tuning, vector embeddings, and AI agents. His unique strength is combining technical depth with strategic business leadership.",
            de: "Michaels Kernexpertise umfasst KI-Beratung (ChatGPT, Grok, Gemini, Claude Integration), Programmleitung (€20M+ Budgets, globale Teams), Enterprise Architecture (TOGAF, cloud-native Systeme) und Cloud-Technologien (Azure, AWS, S/4HANA). Er ist IBM Certified Architect, TOGAF-zertifiziert und hat praktische Erfahrung mit LLM-Feinabstimmung, Vektor-Embeddings und KI-Agenten. Seine einzigartige Stärke ist die Kombination von technischer Tiefe mit strategischer Unternehmensführung.",
            es: "La experiencia principal de Michael abarca Consultoría IA (integración ChatGPT, Grok, Gemini, Claude), Liderazgo de Programas (presupuestos €20M+, equipos globales), Arquitectura Empresarial (TOGAF, sistemas cloud-nativos) y Tecnologías Cloud (Azure, AWS, S/4HANA). Es IBM Certified Architect, certificado TOGAF y tiene experiencia práctica con ajuste fino de LLM, embeddings vectoriales y agentes IA. Su fortaleza única es combinar profundidad técnica con liderazgo estratégico empresarial."
        };
        return responses[lang] || responses.en;
    }

    getExperienceResponse(lang) {
        const responses = {
            en: "Michael has 20+ years of enterprise experience across major consulting firms. At Cognizant Technology Solutions (2011-2023) as Global Program Director, he led a €10M+ Pharma Cloud Migration achieving 30% cost reduction and managed a Telecom SAP Factory with 300+ consultants, increasing efficiency by 20%. At Wipro Technologies (2008-2011), he delivered €7M insurance platform projects. At IBM Business Consulting (2002-2007), he architected Enterprise Service Bus solutions achieving 20% faster integrations. Currently specializing in AI consulting with multilingual chatbot development.",
            de: "Michael hat 20+ Jahre Unternehmenserfahrung bei großen Beratungsfirmen. Bei Cognizant Technology Solutions (2011-2023) als Global Program Director leitete er eine €10M+ Pharma Cloud Migration mit 30% Kostensenkung und managte eine Telecom SAP Factory mit 300+ Beratern, wodurch die Effizienz um 20% gesteigert wurde. Bei Wipro Technologies (2008-2011) lieferte er €7M Versicherungsplattform-Projekte. Bei IBM Business Consulting (2002-2007) entwickelte er Enterprise Service Bus Lösungen mit 20% schnelleren Integrationen. Derzeit spezialisiert auf KI-Beratung mit mehrsprachiger Chatbot-Entwicklung.",
            es: "Michael tiene 20+ años de experiencia empresarial en grandes firmas consultoras. En Cognizant Technology Solutions (2011-2023) como Director Global de Programas, lideró una Migración Cloud Farmacéutica de €10M+ logrando 30% reducción de costos y gestionó una Fábrica SAP Telecom con 300+ consultores, aumentando eficiencia en 20%. En Wipro Technologies (2008-2011) entregó proyectos de plataforma de seguros de €7M. En IBM Business Consulting (2002-2007) arquitecturó soluciones Enterprise Service Bus logrando integraciones 20% más rápidas. Actualmente especializado en consultoría IA con desarrollo de chatbots multilingües."
        };
        return responses[lang] || responses.en;
    }

    getAIResponse(lang) {
        const responses = {
            en: "Michael is currently specializing in AI (Dec 2023-Present) with hands-on experience in ChatGPT (prompt engineering), Gemini (model evaluation), Grok (code generation, API integration), and Claude (workflow automation). He built an interactive multilingual chatbot (EN/DE/ES) powered by IIElevenLabs, ChatGPT, Gemini & n8n. His AI phone assistant is available at +34 93 694 5855. He integrates AI tools into enterprise solutions for enhanced efficiency and innovation, combining technical implementation with strategic business value.",
            de: "Michael spezialisiert sich derzeit auf KI (Dez 2023-heute) mit praktischer Erfahrung in ChatGPT (Prompt Engineering), Gemini (Modellevaluierung), Grok (Code-Generierung, API-Integration) und Claude (Workflow-Automatisierung). Er baute einen interaktiven mehrsprachigen Chatbot (EN/DE/ES) powered by IIElevenLabs, ChatGPT, Gemini & n8n. Sein KI-Telefon-Assistent ist unter +34 93 694 5855 verfügbar. Er integriert KI-Tools in Unternehmenslösungen für erhöhte Effizienz und Innovation, kombiniert technische Umsetzung mit strategischem Geschäftswert.",
            es: "Michael se especializa actualmente en IA (Dic 2023-presente) con experiencia práctica en ChatGPT (ingeniería de prompts), Gemini (evaluación de modelos), Grok (generación de código, integración API) y Claude (automatización de workflows). Construyó un chatbot interactivo multilingüe (EN/DE/ES) powered by IIElevenLabs, ChatGPT, Gemini & n8n. Su asistente telefónico IA está disponible en +34 93 694 5855. Integra herramientas IA en soluciones empresariales para mayor eficiencia e innovación, combinando implementación técnica con valor estratégico empresarial."
        };
        return responses[lang] || responses.en;
    }

    getAvailabilityResponse(lang) {
        const responses = {
            en: "Michael is available within 2-3 weeks for new opportunities. He's based in Barcelona, Spain with EU work permit and is willing to work remote/hybrid with monthly travel. Contact: michael.dabrock@gmx.es or +34 683 1782 48. Languages: German (native), English (fluent), Spanish (basic). He's looking for positions in AI consulting, enterprise architecture, or digital transformation. Try his AI phone assistant: +34 93 694 5855 for immediate response.",
            de: "Michael ist innerhalb von 2-3 Wochen für neue Möglichkeiten verfügbar. Er lebt in Barcelona, Spanien mit EU-Arbeitserlaubnis und ist bereit für Remote/Hybrid-Arbeit mit monatlichen Reisen. Kontakt: michael.dabrock@gmx.es oder +34 683 1782 48. Sprachen: Deutsch (Muttersprache), Englisch (fließend), Spanisch (Grundkenntnisse). Er sucht Positionen in KI-Beratung, Enterprise Architecture oder digitaler Transformation. Testen Sie seinen KI-Telefon-Assistenten: +34 93 694 5855 für sofortige Antwort.",
            es: "Michael está disponible dentro de 2-3 semanas para nuevas oportunidades. Está basado en Barcelona, España con permiso de trabajo UE y dispuesto a trabajar remoto/híbrido con viajes mensuales. Contacto: michael.dabrock@gmx.es o +34 683 1782 48. Idiomas: Alemán (nativo), Inglés (fluido), Español (básico). Busca posiciones en consultoría IA, arquitectura empresarial o transformación digital. Prueba su asistente telefónico IA: +34 93 694 5855 para respuesta inmediata."
        };
        return responses[lang] || responses.en;
    }

    getCognizantResponse(lang) {
        const responses = {
            en: "At Cognizant Technology Solutions (2011-2023), Michael achieved remarkable results as Global Program Director. His Pharma Cloud Migration project led €10M+ annual budget using Azure/ServiceNow, reducing IT infrastructure costs by 30% globally. The Telecom SAP Factory he built and managed included 300+ SAP consultants, increasing development efficiency by 20% for the customer globally. Special projects included PMO setup in USA and automotive software development, raising client satisfaction by 25%. He also managed a 40-expert UI/UX team with AI-augmented product design.",
            de: "Bei Cognizant Technology Solutions (2011-2023) erzielte Michael als Global Program Director bemerkenswerte Ergebnisse. Sein Pharma Cloud Migration Projekt führte ein €10M+ jährliches Budget mit Azure/ServiceNow und reduzierte IT-Infrastrukturkosten um 30% global. Die Telecom SAP Factory, die er aufbaute und managte, umfasste 300+ SAP-Berater und steigerte die Entwicklungseffizienz um 20% für den Kunden global. Sonderprojekte umfassten PMO-Aufbau in den USA und Automotive-Softwareentwicklung, wodurch die Kundenzufriedenheit um 25% stieg. Er managte auch ein 40-köpfiges UI/UX-Team mit KI-verstärktem Produktdesign.",
            es: "En Cognizant Technology Solutions (2011-2023), Michael logró resultados notables como Director Global de Programas. Su proyecto de Migración Cloud Farmacéutica lideró un presupuesto anual de €10M+ usando Azure/ServiceNow, reduciendo costos de infraestructura TI en 30% globalmente. La Fábrica SAP Telecom que construyó y gestionó incluyó 300+ consultores SAP, aumentando eficiencia de desarrollo en 20% para el cliente globalmente. Proyectos especiales incluyeron configuración PMO en USA y desarrollo software automotriz, elevando satisfacción del cliente en 25%. También gestionó un equipo de 40 expertos UI/UX con diseño de producto aumentado por IA."
        };
        return responses[lang] || responses.en;
    }

    getContactResponse(lang) {
        const responses = {
            en: "You can reach Michael at michael.dabrock@gmx.es or +34 683 1782 48. He's based in Barcelona, Spain with EU work permit. For immediate interaction, try his AI phone assistant at +34 93 694 5855 - it's a multilingual (EN/DE/ES) voice chatbot powered by IIElevenLabs, ChatGPT, Gemini & n8n. He's available for remote/hybrid work with monthly travel and looking for opportunities in AI consulting, enterprise architecture, or digital transformation.",
            de: "Sie erreichen Michael unter michael.dabrock@gmx.es oder +34 683 1782 48. Er lebt in Barcelona, Spanien mit EU-Arbeitserlaubnis. Für sofortige Interaktion probieren Sie seinen KI-Telefon-Assistenten unter +34 93 694 5855 - es ist ein mehrsprachiger (EN/DE/ES) Sprach-Chatbot powered by IIElevenLabs, ChatGPT, Gemini & n8n. Er ist verfügbar für Remote/Hybrid-Arbeit mit monatlichen Reisen und sucht Möglichkeiten in KI-Beratung, Enterprise Architecture oder digitaler Transformation.",
            es: "Puedes contactar a Michael en michael.dabrock@gmx.es o +34 683 1782 48. Está basado en Barcelona, España con permiso de trabajo UE. Para interacción inmediata, prueba su asistente telefónico IA en +34 93 694 5855 - es un chatbot de voz multilingüe (EN/DE/ES) powered by IIElevenLabs, ChatGPT, Gemini & n8n. Está disponible para trabajo remoto/híbrido con viajes mensuales y busca oportunidades en consultoría IA, arquitectura empresarial o transformación digital."
        };
        return responses[lang] || responses.en;
    }

    getDefaultResponse(lang, userMessage) {
        const responses = {
            en: `Thanks for your question about "${userMessage}". Michael Dabrock is an experienced AI Consultant & IT Architect with 20+ years in enterprise transformations. He combines deep technical expertise in AI technologies (ChatGPT, Grok, Gemini, Claude) with strategic program leadership. Currently available for new opportunities in Barcelona. What specific aspect of his background interests you most?`,
            de: `Danke für Ihre Frage zu "${userMessage}". Michael Dabrock ist ein erfahrener KI-Berater & IT-Architekt mit 20+ Jahren in Unternehmenstransformationen. Er kombiniert tiefgreifende technische Expertise in KI-Technologien (ChatGPT, Grok, Gemini, Claude) mit strategischer Programmleitung. Derzeit verfügbar für neue Möglichkeiten in Barcelona. Welcher spezifische Aspekt seines Hintergrunds interessiert Sie am meisten?`,
            es: `Gracias por tu pregunta sobre "${userMessage}". Michael Dabrock es un Consultor IA & Arquitecto TI experimentado con 20+ años en transformaciones empresariales. Combina experiencia técnica profunda en tecnologías IA (ChatGPT, Grok, Gemini, Claude) con liderazgo estratégico de programas. Actualmente disponible para nuevas oportunidades en Barcelona. ¿Qué aspecto específico de su background te interesa más?`
        };
        return responses[lang] || responses.en;
    }

    // Status-Methoden
    getStatus() {
        return {
            available: true,
            mode: 'intelligent-fallback',
            hasApiKey: false,
            fallbackMode: this.fallbackMode
        };
    }

    async testConnection() {
        return true; // Fallback ist immer verfügbar
    }
}

export const grokApi = new GrokApiService();