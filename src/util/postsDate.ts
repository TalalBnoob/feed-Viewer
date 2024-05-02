export function getDurationFromNow(startDate: Date): string {
  const currentDate = new Date()
  const diffMillis = currentDate.getTime() - startDate.getTime()

  const seconds = Math.floor(diffMillis / 1000)
  const minutes = Math.floor(seconds / 60)
  if (minutes === 0) return `${seconds}sec`
  const hours = Math.floor(minutes / 60)
  if (hours === 0) return `${minutes}min`
  const days = Math.floor(hours / 24)
  if (days === 0) return `${hours}h`
  const weeks = Math.floor(days / 7)
  if (weeks === 0) return `${days}d`

  return String(startDate).slice(4, 10)
}
