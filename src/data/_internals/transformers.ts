import type { Data } from '@/types/data';
import type { Draft } from 'immer';
import type { PreciseData } from './get-cv-data';

export type DraftData = Draft<Data>;

export type DataTransformer = (draft: DraftData) => void;

type Sections = PreciseData['sections'];

type SectionKey = keyof Sections;

type ProjectName = Sections['portfolio']['projects'][number]['name'];

type JobRole = Sections['experience']['jobs'][number]['role'];

type JobCompany = Sections['experience']['jobs'][number]['company'];

type DiplomaTitle = Sections['education']['diplomas'][number]['title'];

type DiplomaInstitution = Sections['education']['diplomas'][number]['institution'];

type SkillSets = Sections['skills']['skillSets'];

type SkillSetTitle = SkillSets[number]['title'];

type Filter<T extends Readonly<unknown[]>, P> = T extends Readonly<[infer A, ...infer Rest]>
  ? [...(A extends P ? [A] : []), ...Filter<Rest, P>]
  : [];

type SkillsBySkillSet<SkillSet extends SkillSetTitle> = Filter<
  SkillSets,
  { title: SkillSet }
>[number]['skills'][number]['name'];

export const hideSection =
  (section: SectionKey): DataTransformer =>
  (draft) => {
    draft.sections[section].config.visible = false;
  };

export const hideJob =
  (role: JobRole, company?: JobCompany): DataTransformer =>
  (draft) => {
    draft.sections.experience.jobs = draft.sections.experience.jobs.filter(
      (job) => job.role !== role && job.company !== company
    );
  };

export const hideDiploma =
  (title: DiplomaTitle, institution?: DiplomaInstitution): DataTransformer =>
  (draft) => {
    draft.sections.education.diplomas = draft.sections.education.diplomas.filter(
      (diploma) => diploma.title === title && diploma.institution === institution
    );
  };

export const hideProject =
  (name: ProjectName): DataTransformer =>
  (draft) => {
    draft.sections.portfolio.projects = draft.sections.portfolio.projects.filter((project) => project.name !== name);
  };

export const hideSkillSet =
  (name: SkillSetTitle): DataTransformer =>
  (draft) => {
    draft.sections.skills.skillSets = draft.sections.skills.skillSets.filter((skillSet) => skillSet.title !== name);
  };

export const renameSkillSet =
  (from: SkillSetTitle, to: string): DataTransformer =>
  (draft) => {
    draft.sections.skills.skillSets = draft.sections.skills.skillSets.map((skillSet) =>
      skillSet.title === from ? { ...skillSet, title: to } : skillSet
    );
  };

export const hideSkills =
  <SkillSet extends SkillSetTitle>(
    skillSetTitle: SkillSetTitle,
    skills: SkillsBySkillSet<SkillSet>[]
  ): DataTransformer =>
  (draft) => {
    draft.sections.skills.skillSets = draft.sections.skills.skillSets.map((skillSet) => {
      if (skillSet.title !== skillSetTitle) return skillSet;

      return {
        ...skillSet,
        skills: skillSet.skills.filter((skill) => !skills.includes(skill.name as (typeof skills)[number])),
      };
    });
  };
