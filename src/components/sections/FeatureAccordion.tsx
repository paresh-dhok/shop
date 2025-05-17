import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FeatureItem } from "@/types/feature";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type FeatureAccordionProps = {
  features: FeatureItem[];
  isExpanded: boolean;
};

export default function FeatureAccordion({
  features,
  isExpanded,
}: FeatureAccordionProps) {
  // Show only first 3 features if collapsed
  const displayFeatures = isExpanded ? features : features.slice(0, 3);

  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300",
        isExpanded ? "max-h-[2000px]" : "max-h-0"
      )}
    >
      <div className="grid gap-4 px-4 py-6 sm:grid-cols-2 md:grid-cols-3 sm:px-6">
        {displayFeatures.map((feature) => (
          <div
            key={feature.id}
            className="group relative rounded-lg border bg-background p-4 transition-all hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-medium">{feature.title}</h4>
              {feature.tag && (
                <Badge
                  variant={
                    feature.tag === "New"
                      ? "default"
                      : feature.tag === "Popular"
                      ? "secondary"
                      : "outline"
                  }
                  className="text-xs"
                >
                  {feature.tag}
                </Badge>
              )}
            </div>
          </div>
        ))}
      </div>

      {!isExpanded && features.length > 3 && (
        <div className="flex justify-center p-4">
          <span className="text-sm text-muted-foreground">
            {features.length - 3} more features...
          </span>
        </div>
      )}
    </div>
  );
}
