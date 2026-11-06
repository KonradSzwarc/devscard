import type { DataTransformer } from '../_internals/transformers';
import { addSkillSet, sortSkills, updateJob, updateMainSection, updateMeta } from '../_internals/transformers';
import {
  celery,
  django,
  djangoNinja,
  djangoRestFramework,
  elkStack,
  githubActions,
  gitlabCi,
  gpu,
  grafana,
  huggingFace,
  keycloak,
  langChain,
  llamaIndex,
  mqtt,
  opencv,
  openApi,
  postgreSql,
  prometheus,
  pydanticAi,
  python,
  pytorch,
  rabbitMq,
  redis,
  tensorflow,
  timescaleDb,
  yolo,
} from '../helpers/skills';

/**
 * General resume variant covering both backend engineering and AI engineering.
 */
const generalVariant: DataTransformer[] = [
  updateMeta({
    title: 'Arshia Soori - Backend and AI Tech Lead',
    description:
      'Hands-on backend and AI tech lead (Python, Django, LLMs) with 5 years of technical leadership, building Django microservices, event-driven systems, LLM agents, and ML pipelines.',
  }),
  updateMainSection({
    role: 'Backend & AI Tech Lead | Senior Python Engineer',
    pdfDetails: [
      { label: 'Phone', value: '+98 913 563 5155' },
      { label: 'Email', value: 'arshiasoori2000@gmail.com' },
      { label: 'LinkedIn', value: '/in/arshia-soori', url: 'https://linkedin.com/in/arshia-soori' },
      { label: 'GitHub', value: '/CaptainArshia', url: 'https://github.com/CaptainArshia' },
      {
        label: 'Website',
        value: 'https://arshiasoori.vercel.app/general',
        url: 'https://arshiasoori.vercel.app/general',
        fullRow: true,
      },
    ],
    description:
      '**Hands-on backend and AI tech lead** with 5 years of technical leadership and 4+ years owning product architecture end to end. On the backend I design Django/DRF and Django Ninja microservices and event-driven systems (Celery, RabbitMQ, Redis, MQTT) that handle sensitive data reliably at scale. On the AI side I build LLM agents, RAG pipelines, and ML models that turn raw wearable and radio sensor data into meaningful insights. As CTO of two knowledge-based products, I lead and hire engineering teams, set the engineering standards (code review, branching and release, testing, API documentation), and turn business requirements into reliable, observable products.',
    tags: [{ name: 'Open for new adventures' }, { name: 'Hands-on tech lead' }, { name: 'Backend & AI' }],
    action: {
      label: 'Download CV',
      url: '/cv-general.pdf',
      downloadedFileName: 'CV-Arshia_Soori-Backend_and_AI_Tech_Lead.pdf',
    },
  }),
  sortSkills('I already know', [
    'Python',
    'Django',
    'Django REST Framework',
    'Django Ninja',
    'FastAPI',
    'LangChain',
    'LlamaIndex',
    'Pydantic AI',
    'Pydantic',
    'PostgreSQL',
    'Celery',
    'RabbitMQ',
    'Redis',
    'MQTT',
    'Hugging Face',
    'PyTorch',
    'TensorFlow',
    'Docker',
    'Kubernetes',
    'Linux',
    'Git',
  ]),
  addSkillSet(
    {
      title: 'I also work with',
      skills: [openApi(), keycloak(), gitlabCi(), githubActions(), elkStack(), prometheus(), grafana()],
    },
    'I speak'
  ),
  updateJob('DelBand', {
    role: 'CTO and Hands-on Tech Lead',
    description: `
      Iran's first smart health monitoring service and the first holder of a Med 3.0 license, built by Ayandeh Pardaz, a technology company backed by Hamrahe Aval (MCI) and its investment fund Harekat Aval. Wearable rings and watches stream sensor data (ECG, HRV, sleep, falls, blood oxygen) that is analyzed and shown in the app, with emergency alerts to family members and caregivers.

      - Lead a team of 4 engineers and own architecture, technical strategy, hiring, and delivery.
      - Started the backend as a Django/DRF monolith, then led its refactor into microservices built on Django Ninja.
      - Run alarms, notifications, OTP, and background health analysis as asynchronous jobs on Celery, RabbitMQ, and Redis, with retries, circuit breakers, and idempotent processing so emergency alarms are neither lost nor sent twice.
      - Lead a team dedicated to medical algorithms, turning raw wearable sensor data into health insights with ML and AI.
      - Building AI agents that answer users' questions about their health data and give exercise, food, and sleep recommendations.
      - Designed PostgreSQL and TimescaleDB schemas for high-volume sensor time series, and secured health data with Keycloak, role-based access control, and encryption.
      - Defined engineering standards across DelBand and IndoorA: code review rules, branching and release process, testing requirements, and OpenAPI documentation.
      - Set up CI/CD, Docker and Kubernetes deployments, and observability with ELK, Prometheus, and Grafana.
    `,
    tagsList: {
      title: 'Technologies',
      tags: [
        python(),
        django(),
        djangoNinja(),
        celery(),
        rabbitMq(),
        redis(),
        postgreSql(),
        timescaleDb(),
        langChain(),
        llamaIndex(),
        pydanticAi(),
      ],
    },
  }),
  updateJob('IndoorA', {
    description: `
      The first indoor positioning and navigation system in the Middle East, built by Ayandeh Pardaz and serving asset tracking, workforce safety, and visitor wayfinding for enterprise and public venues.

      - Led a team of 6 engineers from early product to a certified knowledge-based platform, and hired 3 engineers across both products.
      - As AI tech lead, led development of the positioning engine fusing BLE, Wi-Fi, and UWB signals with KNN, neural networks, CNNs, LSTMs, Kalman filters, and particle filters.
      - Designed a microservice architecture with DRF and ADRF (async DRF) services, plus a dedicated Django Ninja edition for Tehran International Exhibition Center.
      - Built event-driven location processing over MQTT and RabbitMQ, with Celery workers for background position calculation and safety alerts.
      - Delivered and integrated the platform for MCI, Radin, Tehran International Exhibition Center, Iran Mall, and Mobarakeh Steel Company.
    `,
    tagsList: {
      title: 'Technologies',
      tags: [
        python(),
        djangoRestFramework(),
        djangoNinja(),
        mqtt(),
        rabbitMq(),
        celery(),
        postgreSql(),
        pytorch(),
        tensorflow(),
        huggingFace(),
        gpu(),
      ],
    },
  }),
  updateJob('Advanced Aerospace Structures Laboratory, K. N. Toosi University of Technology', {
    description: `
      Led the development of an intelligent entry/exit management system combining image processing, CNNs, and language models.

      - Led a team of 7 engineers, setting technical direction and reviewing implementation.
      - Built real-time CNN-based (YOLO) detection of vehicles and people, with automated door control, guest management, and an operator reporting dashboard.
      - Used language models to generate human-readable activity summaries and reports.
    `,
    tagsList: {
      title: 'Technologies',
      tags: [python(), opencv(), yolo(), pytorch(), gpu()],
    },
  }),
];

export default generalVariant;
