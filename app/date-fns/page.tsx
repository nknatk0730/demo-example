import { addDays, addWeeks, format, formatDistanceToNow, subDays, subSeconds } from "date-fns";
import { ja } from "date-fns/locale";
import { format as formatTz } from 'date-fns-tz'
import { dynamicFormatDistanceToNow } from "./lib/dynamic-format-distance-to-now";

export default function Page() {
  const date = new Date;

  return (
    <div className="p-8">
      <p>
        {format(date, 'yyyy/MM/dd HH:mm:ss (E)', {
          locale: ja,
        })}
      </p>
      <p>
        {formatTz(date, 'yyyy/MM/dd HH:mm:ss (E)', {
          timeZone: 'Asia/Tokyo'
        })}
      </p>
      <p>
        {formatDistanceToNow(subSeconds(date, 60), {
          addSuffix: true,
          locale: ja,
        })}
      </p>
      <p>
        {dynamicFormatDistanceToNow(subDays(date, 60))}
      </p>
      <p>
        {dynamicFormatDistanceToNow(addDays(date, 1))}
      </p>
      <p>
        {dynamicFormatDistanceToNow(addWeeks(date, 1))}
      </p>
    </div>
  )
}
