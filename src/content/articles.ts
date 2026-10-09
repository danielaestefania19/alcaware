import type { Article } from "./types";

export const ARTICLES: Article[] = [
  {
    id: "costo-software-a-medida",
    slug: { es: "cuanto-cuesta-desarrollar-software-a-medida", en: "how-much-does-custom-software-cost" },
    date: "2026-10-09",
    services: ["webmobil"],
    title: {
      es: "¿Cuánto cuesta desarrollar software o una app a medida?",
      en: "How much does custom software or an app cost?",
    },
    description: {
      es: "Los factores que definen el costo de una app o plataforma a medida, cómo reducir el riesgo con un MVP y qué preguntar antes de contratar a un equipo de desarrollo.",
      en: "The factors that drive the cost of a custom app or platform, how an MVP reduces risk, and what to ask before hiring a development team.",
    },
    body: {
      es: [
        {
          p: "Es la primera pregunta de casi cualquier proyecto, y la respuesta honesta es: depende de qué se construye y cómo. Dos apps que parecen iguales pueden tener costos muy distintos según sus integraciones, su seguridad o la cantidad de usuarios que deben soportar. Estos son los factores que más pesan.",
        },
        { h2: "1. Alcance y número de funcionalidades" },
        {
          p: "Cada pantalla, rol de usuario, reporte o flujo de aprobación suma trabajo de diseño, desarrollo y pruebas. Un sistema interno con tres pantallas no se parece a una plataforma con pagos, notificaciones, panel de administración y app móvil.",
        },
        { h2: "2. Plataformas: web, iOS, Android" },
        {
          p: "Una web app funciona en cualquier navegador. Si además necesitas apps móviles, tecnologías como React Native o Flutter permiten compartir gran parte del código entre iOS y Android, lo que reduce el costo frente a desarrollar dos apps nativas por separado.",
        },
        { h2: "3. Integraciones con otros sistemas" },
        {
          p: "Conectar con un ERP, una pasarela de pagos, el SAT, plataformas judiciales o cualquier API externa suele ser donde aparecen las sorpresas. Conviene listarlas desde el inicio, porque cada una implica entender sistemas de terceros, manejar errores y probar casos límite.",
        },
        { h2: "4. Seguridad, cumplimiento y escala" },
        {
          p: "Si el sistema maneja datos sensibles, información legal o financiera, o debe soportar muchos usuarios al mismo tiempo, se necesita más trabajo en arquitectura, permisos, auditoría y pruebas. Es una inversión que evita problemas mucho más caros después.",
        },
        { h2: "5. Diseño UI/UX" },
        {
          p: "Un buen diseño no es solo estética: reduce errores de los usuarios, acelera la adopción y, en productos comerciales, aumenta la conversión. Partir de un diseño validado también evita rehacer pantallas durante el desarrollo.",
        },
        { h2: "Cómo reducir el riesgo: empezar con un MVP" },
        {
          p: "En lugar de construir todo de una vez, recomendamos un roadmap por etapas. Un MVP (producto mínimo viable) incluye solo lo indispensable para resolver el problema principal y empezar a usarse. Con datos reales de uso se decide qué construir después.",
        },
        { ul: ["Inviertes primero en lo que más valor genera", "Validas la idea antes de comprometer todo el presupuesto", "Llegas antes al mercado o a tus usuarios internos", "La arquitectura queda lista para crecer"] },
        { h2: "Qué preguntar antes de contratar" },
        { ul: ["¿Cómo se definirá el alcance y qué pasa si cambia?", "¿Cada cuánto veré avances funcionando?", "¿De quién es el código y dónde queda alojado?", "¿Qué soporte hay después del lanzamiento?", "¿Cómo se manejan la seguridad y los respaldos?"] },
        {
          p: "Si nos cuentas qué quieres construir, te ayudamos a definir un alcance por etapas y a estimar cada una antes de empezar.",
        },
      ],
      en: [
        {
          p: "It is the first question in almost every project, and the honest answer is: it depends on what is built and how. Two apps that look the same can cost very different amounts depending on their integrations, security or the number of users they must support. These are the factors that matter most.",
        },
        { h2: "1. Scope and number of features" },
        {
          p: "Every screen, user role, report or approval flow adds design, development and testing work. An internal tool with three screens is nothing like a platform with payments, notifications, an admin panel and a mobile app.",
        },
        { h2: "2. Platforms: web, iOS, Android" },
        {
          p: "A web app works in any browser. If you also need mobile apps, technologies like React Native or Flutter share much of the code between iOS and Android, which lowers the cost compared with building two separate native apps.",
        },
        { h2: "3. Integrations with other systems" },
        {
          p: "Connecting to an ERP, a payment gateway, government services or any external API is usually where surprises appear. List them from the start: each one means understanding third-party systems, handling errors and testing edge cases.",
        },
        { h2: "4. Security, compliance and scale" },
        {
          p: "If the system handles sensitive, legal or financial data, or must support many users at once, it needs more work on architecture, permissions, auditing and testing. That investment prevents much more expensive problems later.",
        },
        { h2: "5. UI/UX design" },
        {
          p: "Good design is not just looks: it reduces user errors, speeds up adoption and, in commercial products, increases conversion. Starting from a validated design also avoids rebuilding screens during development.",
        },
        { h2: "How to reduce risk: start with an MVP" },
        {
          p: "Instead of building everything at once, we recommend a staged roadmap. An MVP (minimum viable product) includes only what is essential to solve the main problem and start being used. Real usage data then decides what to build next.",
        },
        { ul: ["You invest first in what creates the most value", "You validate the idea before committing the whole budget", "You reach the market or your internal users sooner", "The architecture is ready to grow"] },
        { h2: "What to ask before hiring" },
        { ul: ["How will the scope be defined, and what happens if it changes?", "How often will I see working progress?", "Who owns the code, and where is it hosted?", "What support is there after launch?", "How are security and backups handled?"] },
        {
          p: "Tell us what you want to build and we will help you define a staged scope and estimate each stage before starting.",
        },
      ],
    },
  },
  {
    id: "chatbots-ia-empresas",
    slug: { es: "chatbots-con-ia-para-empresas", en: "ai-chatbots-for-businesses" },
    date: "2026-10-09",
    services: ["ai"],
    title: {
      es: "Chatbots con IA para empresas: casos de uso y cómo implementarlos",
      en: "AI chatbots for businesses: use cases and how to implement them",
    },
    description: {
      es: "Qué puede hacer hoy un chatbot con inteligencia artificial en una empresa, qué casos de uso dan resultados rápidos y cómo implementarlo con tus propios datos de forma segura.",
      en: "What an AI chatbot can do for a business today, which use cases pay off quickly, and how to implement one safely with your own data.",
    },
    body: {
      es: [
        {
          p: "Los modelos de lenguaje actuales permiten crear asistentes que entienden preguntas en lenguaje natural y responden con información de tu propia empresa. Bien implementados, ahorran horas de trabajo repetitivo y mejoran la atención a clientes y equipos internos.",
        },
        { h2: "Casos de uso que dan resultados rápido" },
        { ul: ["Atención a clientes por WhatsApp o web, 24/7, con respuestas basadas en tus políticas y catálogo", "Asistente interno que responde dudas sobre procesos, manuales o recursos humanos", "Búsqueda y resumen de documentos: contratos, normas, reportes o expedientes", "Calificación de prospectos: el bot hace las preguntas iniciales y pasa al equipo de ventas los casos listos", "Automatización de tareas: crear tickets, agendar citas o actualizar el CRM a partir de una conversación"] },
        { h2: "Cómo funciona un chatbot con tus datos (RAG)" },
        {
          p: "La técnica más usada se llama RAG (generación aumentada con recuperación). Tus documentos se indexan en una base de datos vectorial; cuando alguien pregunta, el sistema busca los fragmentos relevantes y el modelo de IA redacta la respuesta usando solo esa información. Así las respuestas se basan en tus datos y no en conocimiento genérico.",
        },
        { h2: "Pasos para implementarlo" },
        { ul: ["Elegir un caso de uso concreto y medible (por ejemplo, reducir el tiempo de respuesta a clientes)", "Reunir y ordenar la información que el bot debe conocer", "Definir el tono, los límites y cuándo debe pasar la conversación a una persona", "Integrarlo con los canales y sistemas que ya usas: web, WhatsApp, CRM o ERP", "Medir resultados y mejorar las respuestas con las conversaciones reales"] },
        { h2: "Seguridad y privacidad" },
        {
          p: "Un chatbot empresarial debe respetar permisos: cada usuario solo debe poder consultar la información que le corresponde. También conviene definir qué datos se envían a proveedores de IA, registrar las conversaciones para auditoría y revisar periódicamente la calidad de las respuestas.",
        },
        { h2: "¿Por dónde empezar?" },
        {
          p: "Lo más efectivo es empezar con un piloto acotado en un solo proceso, medir el impacto y luego ampliar. En Alcaware diseñamos e integramos asistentes con IA a la medida de cada empresa; cuéntanos qué proceso quieres automatizar.",
        },
      ],
      en: [
        {
          p: "Today's language models make it possible to build assistants that understand natural-language questions and answer with your own company's information. Well implemented, they save hours of repetitive work and improve service for customers and internal teams.",
        },
        { h2: "Use cases that pay off quickly" },
        { ul: ["24/7 customer service on WhatsApp or the web, with answers based on your policies and catalog", "Internal assistant that answers questions about processes, manuals or HR", "Document search and summaries: contracts, regulations, reports or case files", "Lead qualification: the bot asks the first questions and hands ready leads to sales", "Task automation: create tickets, book appointments or update the CRM from a conversation"] },
        { h2: "How a chatbot works with your data (RAG)" },
        {
          p: "The most common technique is RAG (retrieval-augmented generation). Your documents are indexed in a vector database; when someone asks a question, the system finds the relevant passages and the AI model writes the answer using only that information. That keeps answers grounded in your data instead of generic knowledge.",
        },
        { h2: "Steps to implement it" },
        { ul: ["Pick a concrete, measurable use case (for example, cutting customer response time)", "Gather and organize the information the bot must know", "Define the tone, the limits and when to hand the conversation to a person", "Integrate it with the channels and systems you already use: web, WhatsApp, CRM or ERP", "Measure results and improve answers using real conversations"] },
        { h2: "Security and privacy" },
        {
          p: "A business chatbot must respect permissions: each user should only reach the information that belongs to them. It is also wise to decide what data is sent to AI providers, log conversations for auditing and review answer quality regularly.",
        },
        { h2: "Where to start" },
        {
          p: "The most effective approach is a focused pilot on a single process, measuring its impact before expanding. At Alcaware we design and integrate AI assistants tailored to each business; tell us which process you want to automate.",
        },
      ],
    },
  },
  {
    id: "blockchain-trazabilidad",
    slug: { es: "blockchain-para-trazabilidad-documental", en: "blockchain-for-document-traceability" },
    date: "2026-10-09",
    services: ["blockchain"],
    title: {
      es: "Blockchain para trazabilidad documental: cuándo sí tiene sentido",
      en: "Blockchain for document traceability: when it actually makes sense",
    },
    description: {
      es: "Cómo funciona la trazabilidad documental con blockchain, en qué casos aporta valor real a una empresa y en cuáles una base de datos tradicional es suficiente.",
      en: "How blockchain document traceability works, when it brings real value to a business, and when a traditional database is enough.",
    },
    body: {
      es: [
        {
          p: "Blockchain se ha usado para muchas cosas, no todas con sentido. Pero hay un uso empresarial muy concreto donde aporta valor real: demostrar que un documento o registro no fue alterado desde una fecha determinada.",
        },
        { h2: "Cómo funciona" },
        {
          p: "No hace falta subir el documento completo a la blockchain. El sistema calcula una huella digital única del archivo (un hash) y la registra en la cadena junto con la fecha. Si más adelante alguien modifica el documento, aunque sea una coma, su huella cambia y la diferencia queda en evidencia. El archivo original sigue guardado de forma privada en tus propios sistemas.",
        },
        { h2: "Cuándo sí tiene sentido" },
        { ul: ["Evidencias de cumplimiento legal, ambiental o de seguridad que se presentan en auditorías", "Certificados, constancias o diplomas que terceros necesitan verificar", "Trazabilidad de productos en cadenas de suministro con varios participantes", "Contratos y documentos donde varias partes necesitan confiar en el mismo registro", "Bitácoras donde es importante demostrar que nadie modificó la información"] },
        { h2: "Cuándo no hace falta" },
        {
          p: "Si solo una organización usa la información y nadie externo necesita verificarla, una base de datos bien diseñada, con permisos y registros de auditoría, suele ser suficiente y más simple. Blockchain aporta más cuando hay varias partes que no necesariamente confían entre sí, o cuando la prueba de integridad tiene peso legal o comercial.",
        },
        { h2: "Un ejemplo real" },
        {
          p: "En ACM Suite integramos trazabilidad documental basada en blockchain dentro de una plataforma de cumplimiento legal EHS. Las evidencias de auditorías, permisos y evaluaciones de riesgo quedan registradas de forma íntegra, lo que fortalece la respuesta de la organización ante auditorías, clientes y autoridades.",
        },
        { h2: "Lo importante: que el usuario no lo note" },
        {
          p: "La mejor integración de blockchain es la que el usuario final no tiene que entender. Sube su documento como siempre y el sistema se encarga del registro y la verificación por detrás. Si tienes un proceso donde la confianza en los documentos es crítica, podemos ayudarte a evaluar si blockchain es la herramienta adecuada.",
        },
      ],
      en: [
        {
          p: "Blockchain has been used for many things, not all of them sensible. But there is a very concrete business use where it adds real value: proving that a document or record has not been altered since a given date.",
        },
        { h2: "How it works" },
        {
          p: "The full document does not need to go on the blockchain. The system computes a unique digital fingerprint of the file (a hash) and records it on the chain together with the date. If someone later changes the document, even by a comma, its fingerprint changes and the difference becomes evident. The original file stays privately stored in your own systems.",
        },
        { h2: "When it makes sense" },
        { ul: ["Legal, environmental or safety compliance evidence presented in audits", "Certificates or diplomas that third parties need to verify", "Product traceability in supply chains with several participants", "Contracts and documents where several parties need to trust the same record", "Logs where it matters to prove nobody changed the information"] },
        { h2: "When you don't need it" },
        {
          p: "If only one organization uses the information and nobody outside needs to verify it, a well-designed database with permissions and audit logs is usually enough and simpler. Blockchain adds the most when several parties do not necessarily trust each other, or when proof of integrity carries legal or commercial weight.",
        },
        { h2: "A real example" },
        {
          p: "At ACM Suite we integrated blockchain-based document traceability into an EHS legal compliance platform. Evidence from audits, permits and risk assessments is recorded with guaranteed integrity, strengthening the organization's response to audits, clients and regulators.",
        },
        { h2: "What matters: users should not notice it" },
        {
          p: "The best blockchain integration is one the end user does not need to understand. They upload their document as usual and the system handles recording and verification behind the scenes. If you have a process where trust in documents is critical, we can help you assess whether blockchain is the right tool.",
        },
      ],
    },
  },
];
