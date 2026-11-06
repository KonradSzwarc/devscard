# Data transformation

In some cases you may want to modify data between web and pdf versions of your resume or even create multiple variants of them. To address those needs while still providing single place for configuration we introduced a concept of data transformers.

When visiting `index.astro` (web resume source) or `pdf.astro` (pdf resume source) you can see that we use the `cv()` function to get data for a particular resume variant. By default `cv()` returns the entire configuration you specified within the `src/data` folder. However, you can modify this behavior by passing some data transformers into it.

For example:

```javascript
import cv, { hideProject, hideSkillSet, renameSkillSet } from '@/data';

cv(
  // [skills] Skill set with name "I want to learn" won't be displayed
  hideSkillSet('I want to learn'),

  // [skills] Skill set named "I speak" will be renamed to "Languages"
  renameSkillSet('I speak', 'Languages'),

  // [portfolio] "Disco Ninjas" project won't be visible
  hideProject('Disco Ninjas')
);
```

## Data transformers

### General

`hideSection(sectionKey)` — hides section with a specified key.

### Skills

`hideSkillSet(skillSetTitle)` — hides skill set with a specified title.

`renameSkillSet(from, to)` — changes name of a specified skill set (`from`) to a different one (`to`).

`hideSkills(skillSetTitle, skillNames[])` — finds the skill set by its title and hides all its skills matched by their name.

### Portfolio

`hideProject(projectName)` — hides project with a specified name.

### Main section and meta

`updateMeta(meta)` — overrides chosen page metadata properties (e.g. `title`, `description`).

`updateMainSection(main)` — overrides chosen main section properties (e.g. `role`, `description`, `tags`, `action`).

### Skills ordering

`sortSkills(skillSetTitle, skillNames[])` — moves the listed skills to the front of the skill set, in the given order. Unlisted skills keep their relative order after them.

### Experience

`updateJob(company, job)` — overrides chosen properties (e.g. `description`, `tagsList`) of jobs at a specified company.

`hideJob(role, company?)` — hides job where you had a specified role. If you had same role in multiple companies, you can provide a precise company as the second parameter.

### Education

`hideDiploma(title, institution?)` — hides education record by its title. If you have multiple diplomas with the same title, you can provide a an institution name as the second parameter to narrow the filter.

## Resume variants

This resume ships in three variants defined in `src/data/variants`, each a list of data transformers:

| Variant           | Web        | PDF preview    | Generated PDF           |
| ----------------- | ---------- | -------------- | ----------------------- |
| AI Engineer       | `/`        | `/pdf`         | `public/cv.pdf`         |
| Backend Tech Lead | `/backend` | `/pdf/backend` | `public/cv-backend.pdf` |
| Backend & AI      | `/general` | `/pdf/general` | `public/cv-general.pdf` |

The web pages include a switcher to move between variants. To add another variant, create a transformer list in `src/data/variants`, register it in `src/data/variants/index.ts`, add web and PDF pages rendering `<Resume variant="..." />`, and add it to `scripts/generate-pdf.ts`.
