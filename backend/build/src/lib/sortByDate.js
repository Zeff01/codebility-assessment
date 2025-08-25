"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SortByDate;
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
function SortByDate(array, key, isStartFromLatest = true, timeZone = "UTC") {
    // First sort based on ISO date strings
    const sortedArray = array.sort((a, b) => {
        const dateA = new Date(a[key]).getTime();
        const dateB = new Date(b[key]).getTime();
        return isStartFromLatest ? dateB - dateA : dateA - dateB;
    });
    // Then format to human readable with timezone
    return sortedArray.map((item) => {
        const date = new Date(item[key]);
        return Object.assign(Object.assign({}, item), { [key]: formatDateToReadable(date, timeZone) });
    });
}
/**Format the Date.now() to human readable like Jan 01, 2022 8:10 pm */
function formatDateToReadable(date, timeZone = 'UTC') {
    return date.toLocaleString("en-US", {
        timeZone,
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });
}
//# sourceMappingURL=sortByDate.js.map