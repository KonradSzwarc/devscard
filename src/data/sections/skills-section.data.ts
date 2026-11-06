import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  celery,
  django,
  djangoNinja,
  djangoRestFramework,
  docker,
  fastApi,
  git,
  huggingFace,
  kubernetes,
  langChain,
  linux,
  llamaIndex,
  mqtt,
  postgreSql,
  pydantic,
  pydanticAi,
  python,
  pytorch,
  rabbitMq,
  redis,
  tensorflow,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        python({
          level: 5,
          description: 'Primary language for backend services, automation, and AI/LLM systems.',
        }),
        django({
          level: 5,
          description: 'Building full-featured backend services and internal platforms.',
        }),
        djangoRestFramework({
          level: 5,
          description: 'DRF and ADRF, FBVs and CBVs, for building REST APIs and microservices.',
        }),
        djangoNinja({
          level: 5,
          description: 'Building REST APIs with Django Ninja. Best choice for LLM agents and RAG pipelines.',
        }),
        celery({ level: 4, description: 'Distributed task queue for handling background tasks.' }),
        redis({ level: 4, description: 'In-memory data structure store.' }),
        pydantic({ level: 3, description: 'Data validation and settings management using Pydantic.' }),
        postgreSql({ level: 4, description: 'Relational database management system.' }),
        fastApi({
          level: 4,
          description: 'REST APIs for AI agents and microservices.',
        }),
        pydanticAi({ level: 4, description: 'AI-focused data validation using Pydantic.' }),
        langChain({
          level: 4,
          description: 'Building LLM agents and orchestration pipelines.',
        }),
        llamaIndex({
          level: 3,
          description: 'RAG pipelines and document indexing for LLM apps.',
        }),
        huggingFace({ level: 3, description: 'Hugging Face for LLM apps and models.' }),
        
        
        pytorch({ level: 3, description: 'Deep learning framework for building and training neural networks.' }),
        tensorflow({ level: 3, description: 'Machine learning library for building and training models.' }),
        
        // mongoDb({ level: 2, description: 'Document-oriented database.' }),
        rabbitMq({ level: 3, description: 'Message broker for asynchronous communication.' }),
        mqtt({ level: 4, description: 'Lightweight messaging protocol for IoT applications.' }),
        // qt({ level: 2, description: 'Cross-platform application framework.' }),
        docker({ level: 4, description: 'Containerization platform for deploying applications.' }),
        kubernetes({ level: 2, description: 'Orchestration platform for managing containerized applications.' }),
        linux({ level: 4, description: 'Open-source operating system.' }),
        git({ level: 5, description: 'Version control system for tracking changes in source code.' }),
      ],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:ir', name: 'Persian - native' },
        { icon: 'circle-flags:us', name: 'English - fluent' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
