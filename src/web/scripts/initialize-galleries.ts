import PhotoSwipe, { PhotoSwipeOptions } from 'photoswipe';
import cv from '@/data';
import type { Project } from '@/types/sections/portfolio-section.types';
import 'photoswipe/style.css';

const {
  sections: {
    portfolio: { projects },
  },
} = cv();

const galleryButtons = [...document.querySelectorAll('[data-gallery]')] as HTMLElement[];

const sharedOptions: PhotoSwipeOptions = {
  showHideAnimationType: 'none',
  pswpModule: () => import('photoswipe'),
  index: 0,
};

const generateOptions = (project: Project): PhotoSwipeOptions => {
  return {
    dataSource: project.screenshots?.map(({ src, alt }) => ({
      src,
      alt,
      width: 1920,
      height: 1080,
    })),
    ...sharedOptions,
  };
};

galleryButtons.forEach((galleryButton) => {
  const projectIndex = galleryButton.dataset.gallery;
  if (!projectIndex) return;

  const project = projects[Number(projectIndex)];

  if (!project?.screenshots) return;

  const options = generateOptions(project);

  galleryButton.addEventListener('click', () => {
    const photoswipe = new PhotoSwipe(options);

    photoswipe.init();
  });
});
