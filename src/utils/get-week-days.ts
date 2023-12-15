interface GetWeekDaysParams {
  short?: boolean
}

export function getWeekDays({ short = false }: GetWeekDaysParams) {
  const formatter = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
  })

  const formattedDays = Array.from(Array(7).keys()).map((day) =>
    formatter.format(new Date(Date.UTC(2021, 5, day))),
  )

  if (short) {
    return formattedDays.map((weekDay) => {
      return weekDay.substring(0, 3).toUpperCase()
    })
  }

  return formattedDays
}
