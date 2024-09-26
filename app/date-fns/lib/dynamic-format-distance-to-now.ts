import { differenceInDays, format, formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";

export const dynamicFormatDistanceToNow  = (date: Date) => {
  const now = new Date;

  if (Math.abs(differenceInDays(date, now)) < 2) {
    return formatDistanceToNow(date, {
      addSuffix: true,
      locale: ja,
    })
  } else {
    return format(date, 'yyyy/MM/dd HH:mm');
  }
}