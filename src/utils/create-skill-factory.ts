import type { LevelledSkill, Skill, SkillLevel } from '@/types/sections/skills-section.types';
import type { Merge } from 'type-fest';

type SkillWithoutDescription = Omit<Skill, 'description'>;

interface SkillFactory<S extends SkillWithoutDescription> {
  <T extends Partial<LevelledSkill>>(data: Readonly<T & { level: SkillLevel }>): Readonly<Merge<S, T>>;
  <T extends Partial<Skill> | undefined = undefined>(data?: Readonly<T & { level?: never }>): T extends undefined
    ? Readonly<S>
    : Readonly<Merge<S, T>>;
}

const createSkillFactory = <S extends SkillWithoutDescription>(defaultData: Readonly<S>) =>
  ((data: Record<string, unknown>) => ({ ...defaultData, ...data })) as SkillFactory<S>;

export default createSkillFactory;
