import type { DraftData, PreciseData } from './cv';

type SectionKey = keyof PreciseData['sections'];

type ProjectName = PreciseData['sections']['portfolio']['projects'][number]['name'];

type SkillSetTitle = PreciseData['sections']['skills']['skillSets'][number]['title'];

type SkillSets = PreciseData['sections']['skills']['skillSets'];

type Filter<T extends Readonly<unknown[]>, P> = T extends Readonly<[infer A, ...infer Rest]>
  ? [...(A extends P ? [A] : []), ...Filter<Rest, P>]
  : [];

type SkillsBySkillSet<SkillSet extends SkillSetTitle> = Filter<
  SkillSets,
  { title: SkillSet }
>[number]['skills'][number]['name'];

export const hideSection = (section: SectionKey) => (draft: DraftData) => {
  draft.sections[section].config.visible = false;
};

export const hideProject = (name: ProjectName) => (draft: DraftData) => {
  draft.sections.portfolio.projects = draft.sections.portfolio.projects.filter((project) => project.name !== name);
};

export const renameSkillSet = (from: SkillSetTitle, to: string) => (draft: DraftData) => {
  draft.sections.skills.skillSets = draft.sections.skills.skillSets.map((skillSet) =>
    skillSet.title === from ? { ...skillSet, title: to } : skillSet
  );
};

export const hideSkillSet = (name: SkillSetTitle) => (draft: DraftData) => {
  draft.sections.skills.skillSets = draft.sections.skills.skillSets.filter((skillSet) => skillSet.title !== name);
};

export const hideSkills =
  <SkillSet extends SkillSetTitle>(skillSetTitle: SkillSetTitle, skills: SkillsBySkillSet<SkillSet>[]) =>
  (draft: DraftData) => {
    draft.sections.skills.skillSets = draft.sections.skills.skillSets.map((skillSet) => {
      if (skillSet.title !== skillSetTitle) return skillSet;

      return {
        ...skillSet,
        skills: skillSet.skills.filter((skill) => !skills.includes(skill.name as (typeof skills)[number])),
      };
    });
  };
