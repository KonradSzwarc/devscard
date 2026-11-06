import type { DataTransformer } from '../_internals/transformers';
import {
  addSkillSet,
  hideSkills,
  sortSkills,
  updateJob,
  updateMainSection,
  updateMeta,
} from '../_internals/transformers';
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
  locust,
  mqtt,
  opencv,
  openApi,
  postgreSql,
  prometheus,
  python,
  pytorch,
  rabbitMq,
  redis,
  tensorflow,
  timescaleDb,
} from '../helpers/skills';

/**
 * Resume variant targeting backend tech lead roles.
 */
const backendLeadVariant: DataTransformer[] = [
  updateMeta({
    title: 'Arshia Soori - Backend Tech Lead',
    description:
      'Hands-on backend tech lead (Python, Django, distributed systems) with 5 years of technical leadership and 4+ years owning product architecture end to end.',
  }),
  updateMainSection({
    role: 'Backend Tech Lead | Python, Django, Distributed Systems',
    details: [
      { label: 'Phone', value: '+98 913 563 5155', url: 'tel:+98 913 563 5155' },
      { label: 'Email', value: 'arshiasoori2000@gmail.com', url: 'mailto:arshiasoori2000@gmail.com' },
      { label: 'From', value: 'Tehran, Iran' },
      { label: 'Military service', value: 'Exempt (guardianship exemption)' },
    ],
    pdfDetails: [
      { label: 'Phone', value: '+98 913 563 5155' },
      { label: 'Email', value: 'arshiasoori2000@gmail.com' },
      { label: 'LinkedIn', value: '/in/arshia-soori', url: 'https://linkedin.com/in/arshia-soori' },
      { label: 'GitHub', value: '/CaptainArshia', url: 'https://github.com/CaptainArshia' },
      {
        label: 'Website',
        value: 'https://arshiasoori.vercel.app/backend',
        url: 'https://arshiasoori.vercel.app/backend',
        fullRow: true,
      },
      { label: 'Military service', value: 'Exempt (guardianship exemption)', fullRow: true },
    ],
    description:
      '**Hands-on backend tech lead** with 5 years of technical leadership and 4+ years owning product architecture end to end. I design and build Django/DRF and Django Ninja services, integration-heavy microservice platforms, and event-driven systems (Celery, RabbitMQ, Redis, MQTT) that handle sensitive personal data in production. I set the engineering standards (code review, branching and release, testing, API documentation), lead and hire engineers, and turn business and partner requirements into reliable, observable systems.',
    tags: [{ name: 'Open for new adventures' }, { name: 'Hands-on tech lead' }, { name: 'Distributed systems' }],
    action: {
      label: 'Download CV',
      url: '/cv-backend.pdf',
      downloadedFileName: 'CV-Arshia_Soori-Backend_Tech_Lead.pdf',
    },
  }),
  hideSkills('I already know', ['Hugging Face', 'TensorFlow']),
  sortSkills('I already know', [
    'Python',
    'Django',
    'Django REST Framework',
    'Django Ninja',
    'FastAPI',
    'Pydantic',
    'PostgreSQL',
    'RabbitMQ',
    'Celery',
    'Redis',
    'MQTT',
    'Docker',
    'Kubernetes',
    'Linux',
    'Git',
  ]),
  addSkillSet(
    {
      title: 'I also work with',
      skills: [openApi(), keycloak(), locust(), gitlabCi(), githubActions(), elkStack(), prometheus(), grafana()],
    },
    'I speak'
  ),
  updateJob('DelBand', {
    role: 'CTO and Hands-on Tech Lead',
    description: `
      Iran's first smart health monitoring service and the first holder of a Med 3.0 license, built by Ayandeh Pardaz, a technology company backed by Hamrahe Aval (MCI) and its investment fund Harekat Aval. Wearable rings and watches stream sensor data (ECG, HRV, sleep, falls, blood oxygen) that is analyzed and shown in the app, with emergency alerts to family members and caregivers.

      - Lead a team of 4 engineers and own architecture, technical strategy, and delivery.
      - Started the backend as a Django/DRF monolith, then led its refactor into microservices built on Django Ninja.
      - Designed integrations with MCI APN and 5G SIM cards for emergency calls, Bale, Kavenegar, and SMS.ir for OTP and messaging, and MCI Evano Pay.
      - Built fault-tolerant external calls with timeouts, retries, circuit breakers, and idempotent processing, so emergency alarms are neither lost nor sent twice.
      - Run alarms, notifications, OTP, email, and background health analysis as asynchronous jobs on Celery, RabbitMQ, and Redis.
      - Secured sensitive health data with Keycloak-based authentication, role-based access control, and encryption.
      - Designed PostgreSQL and TimescaleDB schemas for high-volume sensor time series and optimized slow queries.

      Engineering standards across DelBand and IndoorA:

      - Defined code review rules, branching and release process, testing requirements, and OpenAPI documentation standards.
      - Set up CI/CD with GitLab CI and GitHub Actions, containerized services with Docker, and deployed to Kubernetes with the DevOps engineer.
      - Built observability with ELK for logging and Prometheus and Grafana for metrics, dashboards, and alerting.
      - Ran load and performance tests with Locust before releases to plan capacity.
    `,
    tagsList: {
      title: 'Technologies',
      tags: [
        python(),
        django(),
        djangoRestFramework(),
        djangoNinja(),
        celery(),
        rabbitMq(),
        redis(),
        postgreSql(),
        timescaleDb(),
        keycloak(),
      ],
    },
  }),
  updateJob('IndoorA', {
    role: 'CTO and AI Tech Lead',
    description: `
      The first indoor positioning and navigation system in the Middle East, built by Ayandeh Pardaz and serving asset tracking, workforce safety, and visitor wayfinding for enterprise and public venues.

      - Led a team of 6 engineers from early product to a certified knowledge-based platform, and hired 3 engineers across both products.
      - As AI tech lead, led development of the positioning engine fusing BLE, Wi-Fi, and UWB signals with KNN, neural networks, CNNs, LSTMs, Kalman filters, and particle filters.
      - Designed a fully microservice architecture with DRF and ADRF (async DRF) services, plus a dedicated Django Ninja edition (IndoorA-Hall) for Tehran International Exhibition Center.
      - Delivered and integrated the platform for MCI, Radin, Tehran International Exhibition Center, Iran Mall, and Mobarakeh Steel Company, translating each client's business requirements into technical solutions.
      - Built event-driven location processing over MQTT and RabbitMQ, with Celery workers for background position calculation and safety alerts, and Redis for caching and rate limiting.
      - Versioned public APIs (v1, v2) to keep mobile apps and partner integrations backward compatible.
      - Secured APIs with JWT authentication and access control.
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
        redis(),
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
      - Led a team of 7 engineers building an intelligent entry/exit management system: real-time vehicle and person detection, automated door control, guest management, and an operator reporting dashboard.
      - Coordinated scope and delivery with university researchers and stakeholders.
    `,
    tagsList: {
      title: 'Technologies',
      tags: [python(), opencv()],
    },
  }),
];

export default backendLeadVariant;
