import type { Section, Tag } from '../shared';

export interface Skill extends Tag {}

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface LevelledSkill extends Skill {
  level: SkillLevel;
}

export interface SkillSet {
  title: string;
  skills: Skill[] | LevelledSkill[];
}

export interface SkillsSection extends Section {
  skillSets: SkillSet[];
}
