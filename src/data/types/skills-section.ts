import type { SectionConfig, Tag } from './common';

interface LevelledSkill extends Tag {
  level: 1 | 2 | 3 | 4 | 5;
}

interface SkillSet<SkillType> {
  title: string;
  skills: SkillType[];
}

export interface SkillsSection {
  skillSets: SkillSet<Tag> | SkillSet<LevelledSkill>;
  config: SectionConfig;
}
