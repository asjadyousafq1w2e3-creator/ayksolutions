"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEventHandler,
  type ReactNode,
  type Ref,
} from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export type SlideTabItem = {
  href: string;
  label: string;
};

type CursorPosition = {
  left: number;
  width: number;
  opacity: number;
};

type SlideTabsProps = {
  activeHref: string;
  items: readonly SlideTabItem[];
};

export function SlideTabs({ activeHref, items }: SlideTabsProps) {
  const [position, setPosition] = useState<CursorPosition>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const tabsRef = useRef<Array<HTMLAnchorElement | null>>([]);

  const activeIndex = Math.max(
    0,
    items.findIndex(({ href }) => href === activeHref),
  );

  const moveCursorTo = (index: number) => {
    const tab = tabsRef.current[index];
    if (!tab) return;

    setPosition({
      left: tab.offsetLeft,
      width: tab.offsetWidth,
      opacity: 1,
    });
  };

  useEffect(() => {
    const updateCursor = () => moveCursorTo(activeIndex);
    updateCursor();
    window.addEventListener("resize", updateCursor);
    return () => window.removeEventListener("resize", updateCursor);
  }, [activeIndex]);

  return (
    <nav aria-label="Primary navigation">
      <ul
        onMouseLeave={() => moveCursorTo(activeIndex)}
        className="relative flex h-11 items-center rounded-lg border border-border/90 bg-secondary/70 p-1 shadow-[inset_0_1px_0_rgb(255_255_255)]"
      >
        {items.map((item, index) => (
          <Tab
            key={item.href}
            href={item.href}
            ref={(element) => {
              tabsRef.current[index] = element;
            }}
            isActive={index === activeIndex}
            onMouseEnter={() => moveCursorTo(index)}
          >
            {item.label}
          </Tab>
        ))}
        <Cursor position={position} />
      </ul>
    </nav>
  );
}

type TabProps = {
  children: ReactNode;
  href: string;
  isActive: boolean;
  onMouseEnter: MouseEventHandler<HTMLAnchorElement>;
  ref: Ref<HTMLAnchorElement>;
};

function Tab({ children, href, isActive, onMouseEnter, ref }: TabProps) {
  return (
    <li className="relative z-10 h-full">
      <Link
        ref={ref}
        href={href}
        onMouseEnter={onMouseEnter}
        aria-current={isActive ? "page" : undefined}
        className={`flex h-full items-center px-3.5 text-[0.69rem] font-bold uppercase transition-colors xl:px-4 ${
          isActive ? "text-white" : "text-muted-foreground hover:text-white"
        }`}
      >
        {children}
      </Link>
    </li>
  );
}

function Cursor({ position }: { position: CursorPosition }) {
  return (
    <motion.li
      aria-hidden="true"
      animate={position}
      transition={{ type: "spring", stiffness: 420, damping: 34 }}
      className="absolute inset-y-1 z-0 rounded-md bg-foreground shadow-sm"
    />
  );
}
