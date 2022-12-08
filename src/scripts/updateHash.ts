import type { Data } from '@/types/data';

const updateHash = (data: Data) => {
  const { seo, ...dataWithoutSeo } = data;

  const distancesToHeadingBottom = Object.keys(dataWithoutSeo)
    .flatMap((section) => {
      const sectionWrapper = document.getElementById(`${section}-heading`);

      if (!sectionWrapper) return [];

      const { bottom } = sectionWrapper.getBoundingClientRect();

      return {
        section,
        bottom,
      };
    })
    .filter((section) => section.bottom > 0);

  if (distancesToHeadingBottom.length === 0) return;

  const currentSection = distancesToHeadingBottom.reduce((previous, current) =>
    previous.bottom < current.bottom ? previous : current
  );

  window.history.pushState({}, '', `${window.location.pathname}#${currentSection.section}`);
};

export default updateHash;
