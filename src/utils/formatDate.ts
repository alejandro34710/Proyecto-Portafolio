import { format } from 'date-fns'
import { es } from 'date-fns/locale'

type DateInput = Date | number | string

export function formatDate(
  date: DateInput,
  formatStr = 'dd MMM yyyy',
  locale = es,
) {
  const parsedDate = typeof date === 'string' ? new Date(date) : date
  return format(parsedDate, formatStr, { locale })
}
