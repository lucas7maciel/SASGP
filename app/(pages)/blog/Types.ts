
interface NewsCardProps {
    id: number,
    title: string,
    description: string,
    categories: string[],
    author: string,
    date: Date | string,
    coverUrl?: string
}

interface CategoryChipProps {
  title: string;
  selected?: boolean;
  onClick?: (category: string) => void;
}
