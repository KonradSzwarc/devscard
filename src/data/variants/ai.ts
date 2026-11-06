import type { DataTransformer } from '../_internals/transformers';
import { sortSkills, updateJob, updateMainSection, updateMeta } from '../_internals/transformers';
import {
  bluetooth,
  gpu,
  huggingFace,
  langChain,
  llamaIndex,
  opencv,
  pydanticAi,
  python,
  pytorch,
  tensorflow,
  wifi,
  yolo,
} from '../helpers/skills';

/**
 * Resume variant targeting AI / LLM engineering roles.
 */
const aiVariant: DataTransformer[] = [
  updateMeta({
    title: 'Arshia Soori - Senior Python and AI Engineer',
    description:
      'Senior Python and AI engineer building LLM agents, RAG pipelines, and ML systems that turn sensor data into production-ready products.',
  }),
  updateMainSection({
    role: 'Senior Python and AI Engineer',
    description:
      '**Senior Python and AI engineer** building production AI systems end to end: LLM agents and RAG pipelines, ML models that turn raw wearable and radio sensor data into meaningful insights, and the Python backends that serve them. Track record of taking AI products from research to production as CTO of two knowledge-based products. Looking to take on new challenges building AI-powered products.',
    tags: [{ name: 'Open for new adventures' }, { name: 'AI & LLM specialist' }, { name: 'LLM agents & RAG' }],
    action: {
      label: 'Download CV',
      url: '/cv.pdf',
      downloadedFileName: 'CV-Arshia_Soori-AI_Engineer.pdf',
    },
  }),
  sortSkills('I already know', [
    'Python',
    'LangChain',
    'LlamaIndex',
    'Pydantic AI',
    'Hugging Face',
    'PyTorch',
    'TensorFlow',
    'Pydantic',
    'FastAPI',
    'Django Ninja',
    'Django',
    'Django REST Framework',
  ]),
  updateJob('DelBand', {
    description: `
      Iran's first smart health monitoring service, and the first to hold a Med 3.0 license. Owned and operated by Ayandeh Pardaz, backed by MCI's investment fund Harekat Aval, with Hamrahe Aval (MCI) as investor and business partner.

      - Leading a team dedicated to medical algorithms, turning raw wearable sensor data (ECG, HRV, sleep, blood oxygen, falls) into meaningful health insights using ML and AI.
      - Building AI agents that answer users' questions about their health data and give exercise, food, and sleep recommendations.
      - Owning the AI and data architecture, from sensor signal processing to LLM-powered features in the app.
      - Leading, hiring, and mentoring the engineering team and owning the company's technical strategy.
    `,
    tagsList: {
      title: 'Technologies',
      tags: [python(), langChain(), llamaIndex(), pydanticAi(), huggingFace(), gpu()],
    },
  }),
  updateJob('IndoorA', {
    description: `
      The first indoor positioning and navigation system in the Middle East, owned and operated by Ayandeh Pardaz.

      - Led development of the positioning engine fusing BLE, Wi-Fi, and UWB signals with KNN, neural networks, CNNs, LSTMs, Kalman filters, and particle filters.
      - Took the product from early stage to a certified knowledge-based positioning and navigation platform.
      - Owned technical strategy, architecture, and hiring for the engineering organization.
      - Delivered for MCI, Radin, Tehran International Exhibition Center, Iran Mall, and Mobarakeh Steel Company.
    `,
    tagsList: {
      title: 'Technologies',
      tags: [python(), pytorch(), tensorflow(), huggingFace(), gpu(), bluetooth(), wifi()],
    },
  }),
  updateJob('Advanced Aerospace Structures Laboratory, K. N. Toosi University of Technology', {
    description: `
      Led the development of an intelligent traffic and movement management system combining image processing, CNNs, and language models for entry/exit management, automated door control, guest management, and reporting.

      - Led development of real-time CNN-based (YOLO) detection and identification of vehicles and people.
      - Used language models to interpret activity and generate human-readable summaries and reports.
      - Led a team of 7 engineers, setting technical direction and reviewing implementation.
    `,
    tagsList: {
      title: 'Technologies',
      tags: [python(), opencv(), yolo(), pytorch(), tensorflow(), gpu()],
    },
  }),
];

export default aiVariant;
