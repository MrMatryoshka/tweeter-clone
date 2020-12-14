import formatDistance from "date-fns/formatDistance";
import ruLang from 'date-fns/locale/ru'

export const formatDate = (data : Date): string => {
 return formatDistance(
     data,
     new Date(),
     {locale:ruLang}
 )
}
