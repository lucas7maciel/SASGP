import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface CardProps {
  title: string;
  description: string;
  icon: IconDefinition;
  extraClasses?: string;
}
