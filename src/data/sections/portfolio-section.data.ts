import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';
import {
  bluetooth,
  django,
  gpu,
  huggingFace,
  jupyter,
  kaggle,
  langChain,
  llamaIndex,
  opencv,
  rust,
  djangoNinja,
  postgreSql,
  pydanticAi,
  python,
  pytorch,
  tensorflow,
  timescaleDb,
  wifi,
  yolo,
  mqtt,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'DelBand',
      image: import('@/assets/DelBand.png'),
      dates: [new Date('2026-03'), null],
      details: [
        { label: 'My role', value: 'CTO' },
        { label: 'Company', value: 'Ayandeh Pardaz' },
        { label: 'Backed by', value: ['Hamrahe Aval (MCI)', 'Harekat Aval'] },
        { label: 'Category', value: ['Health tech', 'AI agents'] },
        {
          label: 'Recognition',
          value: [
            'Certified knowledge-based product',
            'Selected Health & Care project, Presidential Innovation and Prosperity Fund',
            '6th International mHealth Congress of Shiraz University of Medical Sciences',
          ],
        },
      ],
      description:
        "Iran's first smart health monitoring service, and the first to hold a Med 3.0 license. Owned and operated by Ayandeh Pardaz, developed in collaboration with and supported by MCI, backed by MCI's investment fund Harekat Aval.\n\nWearable devices (rings, watches) capture sensor signals which are processed and turned into meaningful health insights shown in the app. AI agents answer users' questions about their data, help them understand it, and give recommendations on exercise, food, and sleep plans. For elderly users, the platform tracks ECG, HRV, sleep, falls, blood sugar, and blood oxygen, and can send notifications and emergency calls to observant family members or caregivers.",
      tagsList: {
        title: 'Technologies',
        tags: [python(), rust(), django(), djangoNinja(), pydanticAi(),langChain(), llamaIndex(), huggingFace(), postgreSql(), timescaleDb(), gpu()]
      },
      links: [website({ url: 'https://delbandcare.com/' })],
    },
    {
      name: 'IndoorA',
      image: import('@/assets/IndoorA.png'),
      dates: [new Date('2022-09'), new Date('2026-02')],
      details: [
        { label: 'My role', value: 'CTO and AI Tech Lead' },
        { label: 'Company', value: 'Ayandeh Pardaz' },
        { label: 'Category', value: ['Indoor positioning', 'Navigation'] },
        { label: 'Recognition', value: 'Member of Iran\'s Knowledge-Based Companies' },
      ],
      description:
        "The first indoor positioning and navigation system in the Middle East, owned and operated by Ayandeh Pardaz. A single knowledge-based positioning and navigation engine (BLE, Wi-Fi, UWB, beacons, and gateways with KNN, neural networks, CNNs, LSTMs, Kalman filters, and particle filters) powering three business models:\n\n- Indoor positioning for organizations managing physical and human assets: employee productivity, asset inventory, access control, and guest movement management. (Radin, MCI)\n- Life safety: continuous monitoring of access levels, movement through hazardous areas, and incidents, sending alerts to rescue teams and managers. (Mobarakeh Steel Company)\n- Positioning, wayfinding, visitor management, and personalized offers in malls and exhibitions, connecting business owners with their customers. (Tehran International Exhibition Center, Iran Mall)",
      tagsList: {
        title: 'Technologies',
        tags: [python(), rust(), django(), djangoNinja(), postgreSql(), timescaleDb(), bluetooth(), wifi(), tensorflow(), pytorch(), huggingFace(), mqtt(), gpu()],
      },
      links: [website({ url: 'https://indoora.net/' })],
    },
    {
      name: 'Intelligent Traffic and Movement Management System',
      image: import('@/assets/KNTU.png'),
      dates: [new Date('2021-09'), new Date('2022-08')],
      details: [
        { label: 'My role', value: 'Tech Lead' },
        { label: 'Company', value: 'Advanced Aerospace Structures Laboratory, K. N. Toosi University of Technology' },
        { label: 'Category', value: ['Computer vision', 'AI'] },
      ],
      description:
        "An intelligent traffic and movement management platform combining computer vision and language models to automate entry/exit control. CNN-based image processing detects and identifies vehicles and people in real time, driving automated door open/close control and streamlined guest management. Language models interpret activity and generate human-readable summaries, surfaced through a dashboard with detailed reports for facility operators.",
      tagsList: {
        title: 'Technologies',
        tags: [python(), opencv(), yolo(), pytorch(), tensorflow(), jupyter(), kaggle(), gpu()],
      },
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
