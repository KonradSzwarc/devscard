import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'My favorites',
    slug: 'favorites',
    icon: 'fa6-solid:star',
    visible: true,
  },
  books: {
    title: 'Books I read',
    data: [
      {
        image: import('@/assets/favorites/books/book-1.jpeg'),
        title: 'The Pragmatic Programmer: From Journeyman to Master',
        author: 'Andy Hunt, Dave Thomas',
        url: 'https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer',
      },
      {
        image: import('@/assets/favorites/books/book-2.jpg'),
        title: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
        author: 'Eric Evans',
        url: 'https://www.goodreads.com/book/show/179133.Domain_Driven_Design',
      },
      {
        image: import('@/assets/favorites/books/book-3.jpeg'),
        title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        author: 'Robert C. Martin',
        url: 'https://www.goodreads.com/book/show/3735293-clean-code',
      },
      {
        image: import('@/assets/favorites/books/book-4.jpeg'),
        title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
        author: 'Robert C. Martin',
        url: 'https://www.goodreads.com/book/show/10284614-the-clean-coder',
      },
    ],
  },
 
  videos: {
    title: 'Videos I watched',
    data: [
      {
        image: import('@/assets/favorites/videos/progr1.png'),
        title: 'Why Programming Is Important?',
        url: 'https://www.youtube.com/watch?v=Dv7gLpW91DM&ab_channel=BugraKilic',
      },
      {
        image: import('@/assets/favorites/videos/hctor1.png'),
        title: 'Modificando los Operadores de C# .NET • hdeleon.net',
        url: 'https://www.youtube.com/watch?v=I9Sg0FcaQ4Y&ab_channel=hdeleon.net',
      },
      {
        image: import('@/assets/favorites/videos/hecc1.png'),
        title: "Arquitectura Limpia - Gavilanch2",
        url: 'https://www.youtube.com/watch?v=zEXf37fSUIs&ab_channel=gavilanch2',
      },
    ],
  },
 /* medias: {
    title: 'Media I follow',
    data: [
      {
        image: import('@/assets/favorites/media/media-1.jpeg'),
        title: 'Fireship.io',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/c/Fireship',
      },
      {
        image: import('@/assets/favorites/media/media-2.jpeg'),
        title: 'Healthy Software Developer',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/channel/UCfe_znKY1ukrqlGActlFmaQ',
      },
      {
        image: import('@/assets/favorites/media/media-3.png'),
        title: 'Bytes',
        type: 'Newsletter',
        url: 'https://bytes.dev/',
      },
      {
        image: import('@/assets/favorites/media/media-4.png'),
        title: 'TypeScript Weekly',
        type: 'Newsletter',
        url: 'https://typescript-weekly.com/',
      },
      {
        image: import('@/assets/favorites/media/media-5.jpeg'),
        title: 'Front End Happy Hour',
        type: 'Podcast',
        url: 'https://www.frontendhappyhour.com/',
      },
      {
        image: import('@/assets/favorites/media/media-6.webp'),
        title: '.cult by Honeypot',
        type: 'Blog',
        url: 'https://cult.honeypot.io/',
      },
    ],
  },*/
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
