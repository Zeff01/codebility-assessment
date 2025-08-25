/**
 * A function that converts the date to a human readable format
 * @param dateInput date in string
 * @param timeZone timezone of the date
 * @returns string in human readable format like 1 hour ago, Jan 01, 2022 8:10 pm
 */
export default function formatDateToReadable(dateInput: Date | string, timeZone: string = "Asia/Manila"): string {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInHours = diffInMs / (1000 * 60 * 60);
    
    // If more than 24 hours ago, return formatted date
    if (diffInHours > 24) {
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
    
    // Less than 1 hour
    if (diffInHours < 1) {
        const diffInMinutes = Math.round(diffInMs / (1000 * 60));
        return diffInMinutes <= 1 ? 'just now' : `${diffInMinutes} minutes ago`;
    }
    
    // Between 1 and 24 hours
    const hours = Math.floor(diffInHours);
    return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
}
