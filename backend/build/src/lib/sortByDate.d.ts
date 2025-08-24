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
export default function SortByDate<T>(array: T[], key: keyof T, isStartFromLatest?: boolean, timeZone?: string): T[];
//# sourceMappingURL=sortByDate.d.ts.map