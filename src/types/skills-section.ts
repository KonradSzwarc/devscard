import type { SectionConfig, Tag } from './common';

export interface LevelledSkill extends Tag {
  level: 1 | 2 | 3 | 4 | 5;
}

export interface SkillSet<SkillType> {
  title: string;
  skills: SkillType[];
  pdfTitle?: string;
  excludeFromPdf?: boolean;
}

export interface SkillsSection {
  skillSets: (SkillSet<Tag> | SkillSet<LevelledSkill>)[];
  config: SectionConfig;
}
