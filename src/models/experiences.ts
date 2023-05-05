export type Experiences = {
  title: string,
  subtitle?: string,
  description?: string,
  company?: string,
  year_starting: number,
  tasks: string[]
  year_ending?: number,
  isPersonalProject: boolean,
  href?: string
}

export type IExperiencesTDO = {
  title: string,
  sub_title?: string,
  description?: string,
  tasks: string[],
  company?: string,
  year_started: number,
  year_ended?: number,
  href?: string,
}

export const experienceParser = (content: IExperiencesTDO): Experiences => {
  return {
    title: content.title,
    company: content.company,
    subtitle: content.sub_title,
    description: content.description,
    year_starting: content.year_started,
    year_ending: content.year_ended,
    isPersonalProject: !content.company,
    tasks: content.tasks,
    href: content.href,
  }
}
export const experiencesParser = (content: IExperiencesTDO[]): Experiences[] => {
  return content.map((el) => { return { ...experienceParser(el) }})
}
