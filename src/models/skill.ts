export type Skill = {
  title: string,
  level: number,
  grade?: number,
  maxGrade?: number,
  isInLearning: boolean
  exam?: string,
  category: string,
}

export type ISkillDTO = {
  title: string,
  level: number,
  grade?: number,
  grade_max?: number,
  exam?: string,
  category: string,
}

export const skillParser = (content: ISkillDTO): Skill => {
  return {
    title: content.title,
    level: content.level,
    grade: content.grade,
    maxGrade: content.grade_max,
    isInLearning: content.level === 1,
    category: content.category,
    exam: content.exam,
  }
}

export const skillsParser = (content: ISkillDTO[]): Skill[] => {
  return content.map((el) => { return { ...skillParser(el) }})
}
