import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});

export const python = createSkillFactory({
  name: 'Python',
  icon: 'simple-icons:python',
  iconColor: '#3776AB',
  url: 'https://www.python.org/',
});

export const rust = createSkillFactory({
  name: 'Rust',
  icon: 'simple-icons:rust',
  iconColor: '#000000',
  url: 'https://www.rust-lang.org/',
});

export const django = createSkillFactory({
  name: 'Django',
  icon: 'simple-icons:django',
  iconColor: '#092E20',
  url: 'https://www.djangoproject.com/',
});

export const fastApi = createSkillFactory({
  name: 'FastAPI',
  icon: 'simple-icons:fastapi',
  iconColor: '#009688',
  url: 'https://fastapi.tiangolo.com/',
});

export const flask = createSkillFactory({
  name: 'Flask',
  icon: 'simple-icons:flask',
  iconColor: '#000000',
  url: 'https://flask.palletsprojects.com/',
});

export const langChain = createSkillFactory({
  name: 'LangChain',
  icon: 'simple-icons:langchain',
  iconColor: '#1C3C3C',
  url: 'https://www.langchain.com/',
});

export const llamaIndex = createSkillFactory({
  name: 'LlamaIndex',
  icon: 'fa6-solid:layer-group',
  iconColor: '#000000',
  url: 'https://www.llamaindex.ai/',
});

export const openAi = createSkillFactory({
  name: 'OpenAI',
  icon: 'simple-icons:openai',
  iconColor: '#412991',
  url: 'https://openai.com/',
});

export const huggingFace = createSkillFactory({
  name: 'Hugging Face',
  icon: 'simple-icons:huggingface',
  iconColor: '#FFD21E',
  url: 'https://huggingface.co/',
});

export const pydantic = createSkillFactory({
  name: 'Pydantic',
  icon: 'simple-icons:pydantic',
  iconColor: '#E92063',
  url: 'https://docs.pydantic.dev/',
});

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'simple-icons:docker',
  iconColor: '#2496ED',
  url: 'https://www.docker.com/',
});

export const kubernetes = createSkillFactory({
  name: 'Kubernetes',
  icon: 'simple-icons:kubernetes',
  iconColor: '#326CE5',
  url: 'https://kubernetes.io/',
});

export const redis = createSkillFactory({
  name: 'Redis',
  icon: 'simple-icons:redis',
  iconColor: '#FF4438',
  url: 'https://redis.io/',
});

export const git = createSkillFactory({
  name: 'Git',
  icon: 'simple-icons:git',
  iconColor: '#F05032',
  url: 'https://git-scm.com/',
});

export const djangoRestFramework = createSkillFactory({
  name: 'Django REST Framework',
  icon: 'simple-icons:django',
  iconColor: '#092E20',
  url: 'https://www.django-rest-framework.org/',
});

export const djangoNinja = createSkillFactory({
  name: 'Django Ninja',
  icon: 'simple-icons:django',
  iconColor: '#092E20',
  url: 'https://django-ninja.dev/',
});

export const rabbitMq = createSkillFactory({
  name: 'RabbitMQ',
  icon: 'simple-icons:rabbitmq',
  iconColor: '#FF6600',
  url: 'https://www.rabbitmq.com/',
});

export const mqtt = createSkillFactory({
  name: 'MQTT',
  icon: 'simple-icons:mqtt',
  iconColor: '#660066',
  url: 'https://mqtt.org/',
});

export const qt = createSkillFactory({
  name: 'Qt',
  icon: 'simple-icons:qt',
  iconColor: '#41CD52',
  url: 'https://www.qt.io/',
});

export const pydanticAi = createSkillFactory({
  name: 'Pydantic AI',
  icon: 'simple-icons:pydantic',
  iconColor: '#E92063',
  url: 'https://ai.pydantic.dev/',
});

export const pytorch = createSkillFactory({
  name: 'PyTorch',
  icon: 'simple-icons:pytorch',
  iconColor: '#EE4C2C',
  url: 'https://pytorch.org/',
});

export const tensorflow = createSkillFactory({
  name: 'TensorFlow',
  icon: 'simple-icons:tensorflow',
  iconColor: '#FF6F00',
  url: 'https://www.tensorflow.org/',
});

export const celery = createSkillFactory({
  name: 'Celery',
  icon: 'simple-icons:celery',
  iconColor: '#37814A',
  url: 'https://docs.celeryq.dev/',
});

export const linux = createSkillFactory({
  name: 'Linux',
  icon: 'simple-icons:linux',
  iconColor: '#FCC624',
  url: 'https://www.linux.org/',
});

export const opencv = createSkillFactory({
  name: 'OpenCV',
  icon: 'simple-icons:opencv',
  iconColor: '#5C3EE8',
  url: 'https://opencv.org/',
});

export const bluetooth = createSkillFactory({
  name: 'Bluetooth / BLE',
  icon: 'ri:bluetooth-fill',
  iconColor: '#0082FC',
  url: 'https://www.bluetooth.com/',
});

export const wifi = createSkillFactory({
  name: 'Wi-Fi',
  icon: 'ri:wifi-fill',
  iconColor: '#1E88E5',
});

export const timescaleDb = createSkillFactory({
  name: 'TimescaleDB',
  icon: 'simple-icons:timescale',
  iconColor: '#FDB515',
  url: 'https://www.timescale.com/',
});

export const yolo = createSkillFactory({
  name: 'YOLO',
  icon: 'fa6-solid:crosshairs',
  iconColor: '#00FFFF',
  url: 'https://docs.ultralytics.com/',
});

export const kaggle = createSkillFactory({
  name: 'Kaggle',
  icon: 'fa6-brands:kaggle',
  iconColor: '#20BEFF',
  url: 'https://www.kaggle.com/',
});

export const jupyter = createSkillFactory({
  name: 'Jupyter',
  icon: 'simple-icons:jupyter',
  iconColor: '#F37626',
  url: 'https://jupyter.org/',
});

export const gpu = createSkillFactory({
  name: 'GPU (CUDA)',
  icon: 'simple-icons:nvidia',
  iconColor: '#76B900',
  url: 'https://developer.nvidia.com/cuda-toolkit',
});

export const keycloak = createSkillFactory({
  name: 'Keycloak',
  icon: 'fa6-solid:key',
  iconColor: '#4D4D4D',
  url: 'https://www.keycloak.org/',
});

export const gitlabCi = createSkillFactory({
  name: 'GitLab CI',
  icon: 'simple-icons:gitlab',
  iconColor: '#FC6D26',
  url: 'https://docs.gitlab.com/ee/ci/',
});

export const githubActions = createSkillFactory({
  name: 'GitHub Actions',
  icon: 'simple-icons:githubactions',
  iconColor: '#2088FF',
  url: 'https://github.com/features/actions',
});

export const elkStack = createSkillFactory({
  name: 'ELK Stack',
  icon: 'simple-icons:elasticstack',
  iconColor: '#005571',
  url: 'https://www.elastic.co/elastic-stack',
});

export const prometheus = createSkillFactory({
  name: 'Prometheus',
  icon: 'simple-icons:prometheus',
  iconColor: '#E6522C',
  url: 'https://prometheus.io/',
});

export const grafana = createSkillFactory({
  name: 'Grafana',
  icon: 'simple-icons:grafana',
  iconColor: '#F46800',
  url: 'https://grafana.com/',
});

export const locust = createSkillFactory({
  name: 'Locust',
  icon: 'fa6-solid:gauge-high',
  iconColor: '#2E7D32',
  url: 'https://locust.io/',
});

export const openApi = createSkillFactory({
  name: 'OpenAPI / Swagger',
  icon: 'simple-icons:swagger',
  iconColor: '#85EA2D',
  url: 'https://swagger.io/',
});
