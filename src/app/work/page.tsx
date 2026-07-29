/* eslint-disable @next/next/no-img-element */
"use client";

import { DATA } from "@/data/resume";
import Link from "next/link";
import { ArrowLeft, Briefcase, Calendar, MapPin } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export interface WorkRole {
  title: string;
  start: string;
  end?: string;
  duration?: string;
  location?: string;
  description?: string;
  bullets?: readonly string[];
}

export interface WorkExperienceItem {
  company: string;
  href?: string;
  badges?: readonly string[];
  location?: string;
  title?: string;
  logoUrl: string;
  start: string;
  end?: string;
  employmentType?: string;
  description?: string;
  roles?: readonly WorkRole[];
  bullets?: readonly string[];
}

const workData = DATA.work as unknown as WorkExperienceItem[];

function LogoAvatar({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="size-10 sm:size-12 rounded-full border border-border shadow-sm ring-2 ring-border/50 overflow-hidden bg-background flex items-center justify-center flex-none">
      <img
        src={src}
        alt={alt}
        className="size-full object-cover rounded-full"
      />
    </div>
  );
}

export default function WorkExperiencePage() {
  return (
    <main className="min-h-dvh max-w-2xl mx-auto px-4 py-8 sm:py-12 flex flex-col gap-8 relative">
      {/* Top Header & Navigation */}
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
              <Briefcase className="size-6 text-primary" />
              Work Experience
            </h1>
            <p className="text-sm text-muted-foreground">
              A comprehensive breakdown of my professional journey, roles, and technical contributions.
            </p>
          </div>
        </div>
      </BlurFade>

      {/* Experience Feed - LinkedIn Style */}
      <div className="flex flex-col gap-10">
        {workData.map((work: WorkExperienceItem, index: number) => {
          const hasMultipleRoles = Boolean(work.roles && work.roles.length > 0);

          return (
            <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 2 + index * 0.05}>
              <div className="rounded-xl border border-border/60 bg-card p-5 sm:p-6 shadow-sm hover:border-border transition-all flex flex-col gap-4">
                {/* Header info */}
                <div className="flex items-start gap-4">
                  <LogoAvatar src={work.logoUrl} alt={work.company} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <h2 className="text-lg font-bold text-foreground leading-snug">
                        {work.company}
                      </h2>
                      {work.employmentType && (
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground">
                          {work.employmentType}
                        </span>
                      )}
                    </div>
                    {!hasMultipleRoles && (
                      <p className="text-sm font-semibold text-foreground/90 mt-0.5">
                        {work.title}
                      </p>
                    )}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1 flex-wrap">
                      {work.location && (
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="size-3 text-muted-foreground/70" />
                          {work.location}
                        </span>
                      )}
                      {!hasMultipleRoles && (
                        <span className="inline-flex items-center gap-1 tabular-nums">
                          <Calendar className="size-3 text-muted-foreground/70" />
                          {work.start} – {work.end ?? "Present"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Multiple Roles View (LinkedIn style nested timeline) */}
                {hasMultipleRoles ? (
                  <div className="relative pl-6 sm:pl-8 border-l-2 border-border/80 ml-5 sm:ml-6 flex flex-col gap-6 mt-2">
                    {work.roles?.map((role: WorkRole, rIndex: number) => (
                      <div key={role.title + rIndex} className="relative flex flex-col gap-2">
                        {/* Dot indicator */}
                        <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 size-3.5 rounded-full border-2 border-background bg-muted-foreground/50 shadow-sm" />
                        <div>
                          <h3 className="text-base font-bold text-foreground">
                            {role.title}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5 flex-wrap">
                            <span className="font-medium text-foreground/80">
                              {role.start} – {role.end ?? "Present"}
                            </span>
                            {role.duration && (
                              <>
                                <span>·</span>
                                <span>{role.duration}</span>
                              </>
                            )}
                            {role.location && (
                              <>
                                <span>·</span>
                                <span>{role.location}</span>
                              </>
                            )}
                          </div>
                        </div>
                        {role.description && (
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-1">
                            {role.description}
                          </p>
                        )}
                        {role.bullets && role.bullets.length > 0 && (
                          <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-1.5 mt-1 font-sans">
                            {role.bullets.map((bullet: string, bIdx: number) => (
                              <li key={bIdx} className="leading-relaxed">
                                <span className="text-foreground/90">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Single Role View */
                  <div className="flex flex-col gap-3 mt-1">
                    {work.description && (
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {work.description}
                      </p>
                    )}
                    {work.bullets && work.bullets.length > 0 && (
                      <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-1.5 font-sans">
                        {work.bullets.map((bullet: string, bIdx: number) => (
                          <li key={bIdx} className="leading-relaxed">
                            <span className="text-foreground/90">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </BlurFade>
          );
        })}
      </div>
    </main>
  );
}
