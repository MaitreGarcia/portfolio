export type Education = {
  title: string,
  school: string,
  graduated_year: number,
}

export type IEducationTDO = {
  title: string,
  school: string,
  graduated_year: number,
}

export const educationParser = (content: IEducationTDO): Education => {
  return {
    title: content.title,
    school: content.school,
    graduated_year: content.graduated_year
  }
}

export const educationsParser = (content: IEducationTDO[]): Education[] => {
  return content.map((el) => { return { ...educationParser(el) }})
}
