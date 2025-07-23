import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  categoryColor?: "primary" | "secondary" | "accent";
}

const categoryColors = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  accent: "bg-accent text-accent-foreground"
};

export default function NewsCard({ 
  title, 
  description, 
  category, 
  date, 
  image, 
  categoryColor = "primary" 
}: NewsCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-3">
          <Badge className={categoryColors[categoryColor]}>
            {category}
          </Badge>
          <span className="text-gray-500 text-sm">{date}</span>
        </div>
        <CardTitle className="text-xl font-bold line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm leading-relaxed line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
