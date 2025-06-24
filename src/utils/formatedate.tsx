// src/utils/formatDate.ts
import { format, formatDistanceToNow, parseISO } from "date-fns";

export const formatPublishedDate = (isoDate: string): string => {
  const date = parseISO(isoDate);
  const now = new Date();

  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  // ถ้าน้อยกว่า 7 วัน ใช้ "x days/hours ago"
  if (diffInDays < 7) {
    const dateformatted = formatDistanceToNow(date, { addSuffix: true }); // "2 days ago"
    return dateformatted.replace(/^about/, "");
  }

  // มากกว่า 7 วัน → แสดงแบบ "6 Jul 2025"
  return format(date, "d MMM yyyy");
};
