import type { Section, Tag } from '../shared';

export interface Skill extends Tag {}

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface LevelledSkill extends Skill {
  /**
   * Your level of skill proficiency in a 1-5 scale.
   */
  level: SkillLevel;
}

export interface SkillSet {
  /**
   * Title that will be displayed above the list of skills.
   */
  title: string;

  /**
   * List of skills with or without levels.
   *
   * If you want to displays skills with levels, we recommend to also provide the `description` property.
   * This way anyone viewing your resume will know what is the meaning of each level.
   */
  skills: Skill[] | LevelledSkill[];
}

export interface SkillsSection extends Section {
  /**
   * Grouped lists of your skills.
   */
  skillSets: SkillSet[];
}
