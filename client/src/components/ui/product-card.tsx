import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, LucideIcon } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  color: "primary" | "secondary" | "accent" | "success";
  buttonText?: string;
  onButtonClick?: () => void;
}

const colorClasses = {
  primary: {
    icon: "text-primary",
    iconBg: "bg-primary/10",
    button: "bg-primary hover:bg-primary/90",
    checkIcon: "text-primary"
  },
  secondary: {
    icon: "text-secondary",
    iconBg: "bg-secondary/10",
    button: "bg-secondary hover:bg-secondary/90",
    checkIcon: "text-secondary"
  },
  accent: {
    icon: "text-accent",
    iconBg: "bg-accent/10",
    button: "bg-accent hover:bg-accent/90",
    checkIcon: "text-accent"
  },
  success: {
    icon: "text-success",
    iconBg: "bg-success/10",
    button: "bg-success hover:bg-success/90",
    checkIcon: "text-success"
  }
};

export default function ProductCard({ 
  title, 
  description, 
  features, 
  icon: Icon, 
  color, 
  buttonText = "Learn More",
  onButtonClick 
}: ProductCardProps) {
  const colors = colorClasses[color];

  return (
    <Card className="product-card h-full">
      <CardHeader className="text-center">
        <div className={`w-16 h-16 ${colors.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
          <Icon className={`h-8 w-8 ${colors.icon}`} />
        </div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-between flex-1">
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-gray-700">
              <Check className={`h-4 w-4 ${colors.checkIcon} mr-2 flex-shrink-0`} />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
        <Button 
          className={`w-full ${colors.button} text-white`}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
