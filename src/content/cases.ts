import acmsuiteAvif from "../assets/images/home/acmsuite.avif";
import acmsuiteWebp from "../assets/images/home/acmsuite.webp";
import isalegalAvif from "../assets/images/home/isalegal.avif";
import isalegalWebp from "../assets/images/home/isalegal.webp";
import sjiglobalAvif from "../assets/images/home/sjiglobal.avif";
import sjiglobalWebp from "../assets/images/home/sjiglobal.webp";
import type { CaseStudy } from "./types";

export const CASES: CaseStudy[] = [
  {
    id: "acm-suite",
    name: "ACM Suite",
    slug: { es: "acm-suite", en: "acm-suite" },
    image: { avif: acmsuiteAvif, webp: acmsuiteWebp },
    services: ["blockchain", "webmobil"],
    sector: { es: "Cumplimiento legal EHS", en: "EHS legal compliance" },
    title: {
      es: "ACM Suite: plataforma de cumplimiento legal EHS con trazabilidad blockchain",
      en: "ACM Suite: EHS legal compliance platform with blockchain traceability",
    },
    description: {
      es: "Cómo desarrollamos una plataforma que centraliza auditorías, permisos, evidencias y evaluaciones de riesgo EHS, con trazabilidad documental en blockchain.",
      en: "How we built a platform that centralizes EHS audits, permits, evidence and risk assessments, with blockchain-based document traceability.",
    },
    body: {
      es: [
        { h2: "El reto" },
        {
          p: "La información de cumplimiento legal, auditorías y gestión de riesgos estaba dispersa entre múltiples herramientas y documentos. Eso dificultaba el control operativo y la respuesta ante auditorías internas, clientes y autoridades regulatorias.",
        },
        { h2: "La solución" },
        {
          p: "Desarrollamos una plataforma empresarial para la gestión integral del cumplimiento legal EHS (Medio Ambiente, Seguridad y Salud), centralizando procesos críticos como auditorías, evidencias, permisos y evaluaciones de riesgo en dashboards interactivos con indicadores en tiempo real.",
        },
        {
          p: "Incorporamos trazabilidad documental basada en blockchain para garantizar la integridad de los registros: cada evidencia queda registrada de forma que no puede alterarse sin dejar rastro.",
        },
        { ul: ["Dashboards con indicadores en tiempo real", "Gestión de auditorías, permisos y evidencias en un solo sistema", "Evaluaciones de riesgo centralizadas", "Trazabilidad documental en blockchain"] },
        { h2: "Resultados" },
        {
          p: "La organización digitalizó y centralizó sus procesos de cumplimiento, mejoró el control operativo, incrementó la trazabilidad de las evidencias y obtuvo indicadores en tiempo real para tomar decisiones, fortaleciendo su capacidad de respuesta ante auditorías, clientes y autoridades.",
        },
        {
          quote:
            "Alcaware desarrolló nuestra plataforma de cumplimiento legal EHS desde cero. La integración con blockchain nos dio la trazabilidad documental que necesitábamos. Hoy gestionamos auditorías, permisos y evidencias en un solo sistema con indicadores en tiempo real.",
          author: "David Antúnez, CEO de ACM Suite",
        },
      ],
      en: [
        { h2: "The challenge" },
        {
          p: "Legal compliance, audit and risk management information was spread across multiple tools and documents. That made operational control harder and slowed the response to internal audits, clients and regulators.",
        },
        { h2: "The solution" },
        {
          p: "We developed an enterprise platform for comprehensive EHS (Environment, Health & Safety) legal compliance management, centralizing critical processes such as audits, compliance evidence, permits and risk assessments in interactive dashboards with real-time indicators.",
        },
        {
          p: "We incorporated blockchain-based document traceability to guarantee record integrity: every piece of evidence is recorded so it cannot be altered without leaving a trace.",
        },
        { ul: ["Dashboards with real-time indicators", "Audits, permits and evidence managed in one system", "Centralized risk assessments", "Blockchain document traceability"] },
        { h2: "Results" },
        {
          p: "The organization digitalized and centralized its compliance processes, improved operational control, increased the traceability of compliance evidence and gained real-time indicators for decision-making, strengthening its response to audits, clients and regulators.",
        },
        {
          quote:
            "Alcaware built our EHS legal compliance platform from scratch. The blockchain integration gave us the document traceability we needed. Today we manage audits, permits and compliance evidence in one single system with real-time indicators.",
          author: "David Antúnez, CEO of ACM Suite",
        },
      ],
    },
  },
  {
    id: "isa-legal",
    name: "ISA Legal",
    slug: { es: "isa-legal", en: "isa-legal" },
    image: { avif: isalegalAvif, webp: isalegalWebp },
    services: ["ai"],
    sector: { es: "Cumplimiento regulatorio", en: "Regulatory compliance" },
    title: {
      es: "ISA Legal: inteligencia artificial para analizar leyes y requerimientos legales",
      en: "ISA Legal: artificial intelligence to analyze laws and legal requirements",
    },
    description: {
      es: "Una plataforma de IA que procesa leyes, reglamentos y normas para extraer requerimientos legales y reducir el tiempo de revisión documental.",
      en: "An AI platform that processes laws, regulations and standards to extract legal requirements and reduce document review time.",
    },
    body: {
      es: [
        { h2: "El reto" },
        {
          p: "En entornos altamente regulados, identificar qué obligaciones legales aplican a una organización exige revisar leyes, reglamentos, normas y documentos regulatorios extensos. Hacerlo a mano consume mucho tiempo y es difícil mantener criterios consistentes.",
        },
        { h2: "La solución" },
        {
          p: "Diseñamos una plataforma de inteligencia artificial para el análisis y gestión de cumplimiento legal, capaz de procesar automáticamente leyes, reglamentos, normas y documentos regulatorios para extraer requerimientos legales de forma precisa.",
        },
        {
          p: "La plataforma se adapta a las necesidades de cada organización mediante instrucciones de usuario, de modo que cada equipo obtiene el análisis que necesita sin depender de configuraciones rígidas.",
        },
        { ul: ["Procesamiento automático de documentos regulatorios", "Extracción de requerimientos legales", "Análisis adaptable con instrucciones de usuario", "Información jurídica consistente y auditable"] },
        { h2: "Resultados" },
        {
          p: "La plataforma reduce los tiempos de revisión documental y permite tomar decisiones respaldadas por información jurídica consistente, escalable y auditable.",
        },
      ],
      en: [
        { h2: "The challenge" },
        {
          p: "In highly regulated environments, identifying which legal obligations apply to an organization means reviewing long laws, regulations, standards and regulatory documents. Doing it by hand takes a lot of time and makes consistent criteria hard to keep.",
        },
        { h2: "The solution" },
        {
          p: "We designed an AI-powered platform for legal compliance analysis and management, capable of automatically processing laws, regulations, standards and regulatory documents to extract legal requirements with precision.",
        },
        {
          p: "The platform adapts to each organization's needs through user instructions, so every team gets the analysis it needs without rigid configuration.",
        },
        { ul: ["Automatic processing of regulatory documents", "Legal requirement extraction", "Adaptable analysis through user instructions", "Consistent, auditable legal information"] },
        { h2: "Results" },
        {
          p: "The platform reduces document review time and enables decisions backed by consistent, scalable and auditable legal information.",
        },
      ],
    },
  },
  {
    id: "sji-global",
    name: "SJI Global",
    slug: { es: "sji-global", en: "sji-global" },
    image: { avif: sjiglobalAvif, webp: sjiglobalWebp },
    services: ["webmobil"],
    sector: { es: "Despacho jurídico", en: "Law firm" },
    title: {
      es: "SJI Global: plataforma para gestionar expedientes y procesos jurídicos",
      en: "SJI Global: platform to manage case files and legal proceedings",
    },
    description: {
      es: "Centralizamos expedientes, demandas y juicios con consulta automatizada a plataformas judiciales, control de plazos y seguimiento en tiempo real.",
      en: "We centralized case files, lawsuits and trials with automated queries to judicial platforms, deadline control and real-time tracking.",
    },
    body: {
      es: [
        { h2: "El reto" },
        {
          p: "Administrar expedientes y dar seguimiento a procedimientos legales implicaba muchas tareas operativas repetitivas, y la información no siempre estaba disponible para abogados y personal administrativo cuando la necesitaban.",
        },
        { h2: "La solución" },
        {
          p: "Desarrollamos una plataforma para la gestión integral de procesos jurídicos, que centraliza expedientes, demandas, juicios y documentación legal con mecanismos automatizados de consulta a plataformas judiciales y fuentes oficiales.",
        },
        { ul: ["Expedientes y documentación legal centralizados", "Consulta automatizada a plataformas judiciales", "Control de plazos y seguimiento de actuaciones", "Monitoreo de procesos legales en tiempo real"] },
        { h2: "Resultados" },
        {
          p: "El equipo aumentó su eficiencia operativa, redujo los tiempos de consulta y seguimiento de casos, fortaleció la trazabilidad documental y mejoró su capacidad de respuesta ante clientes y autoridades gracias a información centralizada y actualizada.",
        },
        {
          quote:
            "Necesitábamos centralizar todos nuestros expedientes y procesos jurídicos en un solo lugar. Alcaware entendió perfectamente el flujo de trabajo de un despacho legal y nos entregó una solución que mejoró la eficiencia de todo el equipo.",
          author: "Martha Herce, CEO de SJI Global",
        },
      ],
      en: [
        { h2: "The challenge" },
        {
          p: "Managing case files and following legal proceedings involved many repetitive operational tasks, and information was not always available to lawyers and administrative staff when they needed it.",
        },
        { h2: "The solution" },
        {
          p: "We developed a platform for comprehensive legal process management, centralizing case files, lawsuits, trials and legal documentation with automated queries to judicial platforms and official sources.",
        },
        { ul: ["Centralized case files and legal documentation", "Automated queries to judicial platforms", "Deadline control and procedural tracking", "Real-time legal process monitoring"] },
        { h2: "Results" },
        {
          p: "The team increased its operational efficiency, reduced case consultation and follow-up times, strengthened document traceability and improved its response to clients and authorities through centralized, up-to-date information.",
        },
        {
          quote:
            "We needed to centralize all our case files and legal processes in one place. Alcaware perfectly understood the workflow of a law firm and delivered a solution that improved the efficiency of the entire team.",
          author: "Martha Herce, CEO of SJI Global",
        },
      ],
    },
  },
];
