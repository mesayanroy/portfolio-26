"use client";

import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export interface ContributionItem {
  title: string;
  href?: string;
  external?: boolean;
  tag?: string;
  badge?: string;
}

export interface ContributionCategory {
  category: string;
  items: ContributionItem[];
}

interface ContributionsSectionProps {
  limit?: number;
}

export default function ContributionsSection({ limit }: ContributionsSectionProps) {
  const categories = DATA.contributions as unknown as ContributionCategory[];
  const researchCategory = categories.find(
    (c) => c.category === "CONTRIBUTION & RESEARCH WORK"
  );
  
  const displayItems = limit && researchCategory
    ? researchCategory.items.slice(0, limit)
    : researchCategory?.items || [];

  return (
    <div className="flex flex-col gap-4">
      <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
        CONTRIBUTION & RESEARCH WORK
      </div>
      <ul className="flex flex-col gap-3 font-sans">
        {displayItems.map((item: ContributionItem, idx: number) => (
          <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <span className="text-muted-foreground/60 select-none mt-1 text-xs">•</span>
            <div className="flex-1">
              {item.href ? (
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline border-b border-border/70 hover:border-foreground text-foreground/95 hover:text-foreground transition-all group font-medium"
                >
                  {item.title}{" "}
                  <ArrowUpRight className="inline size-3.5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              ) : (
                <span className="text-foreground/90 font-medium">
                  {item.title}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
