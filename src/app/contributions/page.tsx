"use client";

import { DATA } from "@/data/resume";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Award, BookOpen, Layers } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

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

export default function ContributionsPage() {
  const categories = DATA.contributions as unknown as ContributionCategory[];

  return (
    <main className="min-h-dvh max-w-2xl mx-auto px-4 py-8 sm:py-12 flex flex-col gap-8 relative">
      {/* Navigation Header */}
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors w-fit group"
          >
            <ArrowLeft className="size-4 -translate-x-0.5 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          <div className="flex flex-col gap-1 border-b border-border/40 pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
              <Layers className="size-6 text-primary" />
              Contributions & Research
            </h1>
            <p className="text-sm text-muted-foreground">
              Open source protocol contributions, research publications, grants, and key ecosystem achievements.
            </p>
          </div>
        </div>
      </BlurFade>

      {/* Full Content */}
      <div className="flex flex-col gap-10">
        {categories.map((section: ContributionCategory, sIdx: number) => (
          <BlurFade key={section.category} delay={BLUR_FADE_DELAY * 2 + sIdx * 0.08}>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase border-b border-border/30 pb-2">
                {section.category === "CONTRIBUTION & RESEARCH WORK" ? (
                  <BookOpen className="size-4 text-muted-foreground/80" />
                ) : (
                  <Award className="size-4 text-muted-foreground/80" />
                )}
                <span>{section.category}</span>
              </div>
              <ul className="flex flex-col gap-4 font-sans">
                {section.items.map((item: ContributionItem, iIdx: number) => (
                  <li key={iIdx} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    <span className="text-muted-foreground/50 select-none mt-1.5 text-xs">•</span>
                    <div className="flex-1">
                      {item.href ? (
                        <Link
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline border-b border-border/70 hover:border-foreground text-foreground/95 hover:text-foreground transition-all group font-medium"
                        >
                          {item.title}{" "}
                          <ArrowUpRight className="inline size-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                      ) : (
                        <span className="text-foreground/90 font-medium">
                          {item.title}
                        </span>
                      )}
                      {item.badge && (
                        <span className="ml-2.5 inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>
        ))}
      </div>
    </main>
  );
}
