
/**Sort an array based on the date from the latest to the oldest.
 * It will also make the convert the Date.now() values to human readable
 * 
 * @param array The array to sort
 * @param key The key to sort by
 * @param isStartFromLatest Whether to sort from the latest to the oldest
 * @param timeZone The timezone to use for the date
 * @example
 * SortByDate(db, 'createdAt', true, 'Asia/Manila');
 */
export default function SortByDate<T>(
    array: T[],
    key: keyof T,
    isStartFromLatest: boolean = true,
    timeZone: string = "UTC"
  ): T[] {

// First sort based on ISO date strings
    const sortedArray = array.sort((a, b) => {
        const dateA = new Date(a[key] as unknown as string).getTime();
        const dateB = new Date(b[key] as unknown as string).getTime();
        return isStartFromLatest ? dateB - dateA : dateA - dateB;
    });
  
// Then format to human readable with timezone
    return sortedArray.map((item) => {
        const date = new Date(item[key] as unknown as string);
        return {
            ...item,
            [key]: formatDateToReadable(date, timeZone),
        };
    });
}
  

/**Format the Date.now() to human readable like Jan 01, 2022 8:10 pm */  
function formatDateToReadable(date: Date, timeZone: string = 'UTC'): string {
    return date.toLocaleString("en-US", {
        timeZone,
        month:  "short",   
        day:    "2-digit",   
        year:   "numeric",  
        hour:   "numeric",  
        minute: "2-digit",
        hour12: true
    });
}
