import data from '../data';

const { seo, ...dataWithoutSeo } = data;

document.addEventListener('scroll', () => {
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

  const currentSection = distancesToHeadingBottom.reduce((previous, current) =>
    previous.bottom < current.bottom ? previous : current
  );

  window.location.hash = currentSection.section;
});
