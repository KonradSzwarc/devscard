import type { Section, Tag } from '../shared';

export interface Skill extends Tag {}

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface LevelledSkill extends Skill {
  readonly level: SkillLevel;
}

export interface SkillSet {
  readonly title: string;
  readonly skills: Readonly<Skill[] | LevelledSkill[]>;
}

export interface SkillsSection extends Section {
  readonly skillSets: Readonly<SkillSet[]>;
}
