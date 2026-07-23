"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
  MotionValue,
} from "framer-motion";
import { ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";

interface StackedProductCardsProps {
  studies: CaseStudy[];
}

interface StackedCardItemProps {
  study: CaseStudy;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  isActive: boolean;
}

function StackedCardItem({ study, index, total, scrollYProgress, isActive }: StackedCardItemProps) {
  // Compute individual card transform ranges
  // Card 0 is initial. Cards 1..N-1 enter during scroll segments.
  const segmentLength = 1 / (total - 0.3);

  // Range when this card enters (for index > 0)
  const enterStart = index === 0 ? 0 : (index - 1) * segmentLength;
  const enterEnd = index === 0 ? 0 : index * segmentLength;

  // Range for subsequent cards coming over this card
  const stackStart = index * segmentLength;
  const stackEnd = 1;

  // Y Translation: Card 0 stays at 0. Card i > 0 enters from 110% to 0%
  const y = useTransform(
    scrollYProgress,
    index === 0 ? [0, 1] : [enterStart, enterEnd],
    index === 0 ? ["0%", "0%"] : ["110%", "0%"],
  );

  // Scale: When subsequent cards stack over this card, scale down slightly
  const scale = useTransform(
    scrollYProgress,
    [stackStart, stackEnd],
    [1, Math.max(0.82, 1 - (total - index - 1) * 0.05)],
  );

  // Overlay Darkness (depth effect for cards underneath)
  const overlayOpacity = useTransform(
    scrollYProgress,
    [stackStart, Math.min(1, stackStart + segmentLength * 2)],
    [0, 0.45],
  );

  return (
    <motion.div
      style={{
        y: index === 0 ? 0 : y,
        scale,
        zIndex: index + 1,
      }}
      className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 will-change-transform"
    >
      <div className="relative w-full max-w-[540px] aspect-[4/3] overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem] border border-border/80 bg-card shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] group">
        {/* Darkening depth overlay when stacked underneath */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black pointer-events-none z-30 transition-opacity duration-300"
        />

        {/* Ambient Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${study.coverGradient} opacity-30 mix-blend-overlay z-10 pointer-events-none`}
        />

        {/* Product Screenshot */}
        <Image
          src={study.thumbnail}
          alt={study.altText}
          fill
          sizes="(max-width: 768px) 100vw, 540px"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Status Badge */}
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 rounded-full border border-white/20 bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-soft">
          {study.status}
        </div>

        {/* Bottom Glass Pill on Card */}
        <div className="absolute bottom-4 left-4 right-4 z-20 hidden sm:flex items-center justify-between rounded-xl border border-white/20 bg-black/45 backdrop-blur-md px-4 py-2.5 text-white">
          <span className="text-xs font-semibold tracking-wide truncate max-w-[70%]">
            {study.title}
          </span>
          <span className="text-[10px] uppercase font-bold tracking-wider text-white/80 bg-primary/80 px-2.5 py-0.5 rounded-full">
            {study.category.split("·")[0].trim()}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function StackedProductCards({ studies }: StackedProductCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = studies.length;
    if (total <= 1) return;

    const segmentLength = 1 / (total - 0.3);

    setActiveStep((prevStep) => {
      let nextStep = prevStep;

      // When scrolling DOWN: advance to next card only when it is properly in view (>= 70% threshold)
      while (nextStep < total - 1 && latest >= (nextStep + 0.7) * segmentLength) {
        nextStep++;
      }

      // When scrolling UP: retreat to previous card only when top card has properly exited (<= 30% threshold)
      while (nextStep > 0 && latest < (nextStep - 1 + 0.3) * segmentLength) {
        nextStep--;
      }

      return nextStep;
    });
  });

  const activeStudy = studies[activeStep] || studies[0];

  const handleJumpToCard = (idx: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    const segmentLength = 1 / (studies.length - 0.3);
    const targetProgress = idx === 0 ? 0 : Math.min(0.95, idx * segmentLength);
    const scrollTarget = containerTop + targetProgress * (containerHeight - window.innerHeight);
    window.scrollTo({ top: scrollTarget, behavior: "smooth" });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-background"
      style={{ height: `${studies.length * 95}vh` }}
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden pt-14 md:pt-0">
        <div className="mx-auto max-w-7xl px-6 w-full h-full flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12 items-center h-[calc(100vh-5rem)] md:h-auto">
            {/* Left Side Column: Synchronized Project Details */}
            <div className="md:col-span-5 flex flex-col justify-center order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStudy.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-3 sm:space-y-4"
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-primary">
                    <Sparkles size={12} />0{activeStep + 1} / 0{studies.length} —{" "}
                    {activeStudy.category.split("·")[0].trim()}
                  </div>

                  <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                    {activeStudy.title}
                  </h3>

                  <p className="text-xs sm:text-base leading-relaxed text-muted-foreground line-clamp-3 sm:line-clamp-4 max-w-lg">
                    {activeStudy.shortDescription}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/projects/${activeStudy.slug}`}
                      className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-primary-foreground shadow-soft transition hover:bg-[#b8040b]"
                    >
                      View Case Study
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>

                    {activeStudy.liveUrl && (
                      <a
                        href={activeStudy.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
                      >
                        Live Site <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Interactive Pagination Indicators */}
              <div className="mt-6 sm:mt-8 flex items-center gap-2">
                {studies.map((s, idx) => (
                  <button
                    key={s.slug}
                    onClick={() => handleJumpToCard(idx)}
                    aria-label={`Go to study ${s.title}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeStep === idx
                        ? "w-8 bg-primary"
                        : "w-2.5 bg-border hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side Column: Stacked Cards Viewport */}
            <div className="md:col-span-7 relative h-[320px] sm:h-[420px] md:h-[480px] lg:h-[540px] w-full flex items-center justify-center order-2">
              {studies.map((study, idx) => (
                <StackedCardItem
                  key={study.slug}
                  study={study}
                  index={idx}
                  total={studies.length}
                  scrollYProgress={scrollYProgress}
                  isActive={activeStep === idx}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
