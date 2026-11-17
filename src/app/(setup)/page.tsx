// @claude:user-owned — starter home served at /. Replace it in place, or delete
// this route group before adding another page that resolves to /.

import { ArrowUpRight, Check } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ProcessAccordion } from '@/components/custom/process-accordion';
import { Button } from '@/components/ui/button';
import { siteDescription, siteName } from '@/lib/site';

// Keep this a Server Component so it can export metadata.
export const metadata: Metadata = {
  title: { absolute: siteName },
  description: siteDescription,
  // Do not export an explicit openGraph object here; that suppresses the
  // file-based opengraph-image.tsx for the home route.
  alternates: { canonical: '/' },
};

const SERVICES = [
  {
    number: '01',
    label: 'Guard services',
    title: 'Licensed, uniformed personnel on site',
    description:
      'Guards are vetted, trained, and assigned to a documented post order, so coverage is consistent shift to shift, not improvised.',
  },
  {
    number: '02',
    label: 'Guard services',
    title: 'Coverage built around your risk, not a default',
    description:
      'From a single shift to round-the-clock, multi-shift coverage, staffing and rates are scaled to what the site actually needs.',
  },
  {
    number: '03',
    label: 'Design consulting',
    title: 'Reviewed before a wall goes up',
    description:
      'Sightlines, entry points, and lighting plans are assessed on paper, while changes still cost a redline instead of a renovation.',
  },
  {
    number: '04',
    label: 'Design consulting',
    title: 'Findings tied to plan references',
    description:
      'Each recommendation cites the specific drawing, elevation, or zone it concerns — no generic checklist language.',
  },
] as const;

/** Decorative hero mark — an arc, four site datums, and a stack of massed
 * forms reading as a small building. Theme-aware via CSS custom properties
 * (see globals.css / custom-style.css) so it follows dark mode automatically. */
function HeroMark() {
  return (
    <svg
      viewBox="0 0 470 478"
      className="w-full max-w-[26rem]"
      role="img"
      aria-label="Abstract illustration of a building massed within a site datum"
    >
      <title>A building massed within a site datum</title>
      <path
        d="M 235 14 A 225 225 0 0 0 235 464"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 235 14 A 225 225 0 0 1 235 464"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="0.5 12"
      />
      <circle cx="235" cy="14" r="5" fill="var(--color-primary)" />
      <circle cx="235" cy="464" r="5" fill="var(--color-primary)" />
      <circle cx="10" cy="239" r="5" fill="var(--color-primary)" />
      <circle cx="460" cy="239" r="5" fill="var(--color-primary)" />
      <line x1="235" y1="14" x2="235" y2="464" stroke="var(--color-border)" strokeWidth="1" />
      <line x1="10" y1="239" x2="460" y2="239" stroke="var(--color-border)" strokeWidth="1" />

      <g>
        <ellipse cx="235" cy="381" rx="180" ry="10" fill="var(--color-primary)" opacity="0.08" />
        <path
          d="M 55 376 Q 130 358 195 376 T 340 368 Q 375 363 405 372"
          fill="none"
          stroke="var(--color-muted-foreground)"
          strokeWidth="1.75"
          opacity="0.5"
        />
        <polygon points="135,378 135,235 202,178 202,378" fill="var(--color-primary)" />
        <polygon
          points="135,235 202,178 202,235 162,264"
          fill="var(--color-primary)"
          opacity="0.75"
        />
        <polygon points="202,378 202,270 265,270 265,378" fill="var(--color-muted-foreground)" />
        <polygon
          points="265,270 265,378 292,378 292,281"
          fill="var(--color-muted-foreground)"
          opacity="0.8"
        />
        <polygon points="292,378 292,210 345,178 345,378" fill="var(--color-gold)" />
        <polygon points="345,210 345,178 375,196 345,231" fill="var(--color-gold)" opacity="0.8" />
      </g>
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="section-lg relative">
        <div className="container-page relative grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-3 duration-700">
            <div className="mb-6 flex items-center gap-3 text-caption font-semibold uppercase tracking-[0.18em] text-gold">
              <span className="h-px w-6 bg-gold" />
              Guard services · Security design consulting
            </div>
            <h1 className="font-display text-h1 font-normal leading-[1.08] tracking-tight text-foreground sm:text-[3.4rem]">
              Security from the design stage, and on every shift after.
            </h1>
            <p className="mt-7 max-w-lg text-body-lg text-muted-foreground">
              {siteName} staffs licensed, uniformed guards for day-to-day coverage, and reviews a
              site's layout and access before a single wall goes up — so protection is built in, not
              added on after something goes wrong.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Request a consultation
                  <ArrowUpRight
                    className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/#services">See both service lines</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center animate-in fade-in slide-in-from-bottom-3 duration-700 delay-150 lg:justify-end">
            <HeroMark />
          </div>
        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section id="approach" className="border-y border-border bg-muted/35">
        <div className="container-page grid gap-12 py-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 lg:py-28">
          <div>
            <p className="text-eyebrow text-gold">The {siteName} standard</p>
            <h2 className="mt-4 max-w-md font-display text-h2 font-normal tracking-tight">
              Security is a schedule and a drawing, not just a guard at the gate.
            </h2>
          </div>
          <div className="max-w-2xl space-y-6 text-body-lg text-muted-foreground">
            <p>
              Most security problems are either a staffing gap or a design gap — a shift that goes
              uncovered, or a blind corner, a dark walkway, an entrance with no clear sightline that
              nobody flagged until after it was built. We work both sides: reliable guard staffing
              for the sites that need people on the ground today, and design-stage review for the
              ones still on paper.
            </p>
            <p>
              Led by Dwight Parchment, whose background spans close to a decade in frontline
              security and correctional services across Jamaica and the Cayman Islands, {siteName}{' '}
              is built on the same principle either way: security that people barely notice because
              it was planned for, not patched on afterward.
            </p>
            <div className="flex items-center gap-3 pt-3 text-small font-medium text-foreground">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="size-4" aria-hidden />
              </span>
              Licensed personnel. Clear reporting. Security built in, not bolted on.
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="section">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-5 border-b border-border pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-eyebrow text-gold">Two disciplines, one standard</p>
              <h2 className="mt-4 max-w-xl font-display text-h2 font-normal tracking-tight">
                Guard staffing and design-stage review, side by side.
              </h2>
            </div>
            <p className="max-w-xs text-small text-muted-foreground sm:text-right">
              From a single retail unit to a multi-building residential compound.
            </p>
          </div>
          <div className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ number, label, title, description }) => (
              <div key={number} className="border-l border-border pl-6 first:border-l-0 first:pl-0">
                <span className="text-caption font-semibold uppercase tracking-[0.08em] text-gold">
                  {label}
                </span>
                <h3 className="mt-4 font-display text-h4 font-normal tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-body text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section id="mission" className="border-y border-border bg-muted/35">
        <div className="container-page py-20 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-eyebrow text-gold">Why this work matters</p>
            <h2 className="mt-4 font-display text-h2 font-normal tracking-tight">
              Mission &amp; vision
            </h2>
          </div>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-caption font-semibold uppercase tracking-[0.08em] text-gold">
                Mission
              </span>
              <div className="mt-4 space-y-4 text-body-lg text-muted-foreground">
                <p>
                  To provide licensed, well-supervised guard services that clients can actually rely
                  on, and to review a site's design before construction locks in a security gap that
                  staffing alone can't fully fix.
                </p>
                <p>
                  Every staffing plan is documented — post orders, shift pattern, and rate, broken
                  down and accounted for — and every design review is referenced to the specific
                  drawing or elevation it concerns, so nothing is left to a generic checklist.
                </p>
                <p className="text-foreground">
                  Every engagement exists to protect the people who will live, work, and move
                  through that space — a responsibility we hold as central to the work, not
                  incidental to it.
                </p>
              </div>
            </div>
            <div className="lg:border-l lg:border-border lg:pl-16">
              <span className="text-caption font-semibold uppercase tracking-[0.08em] text-gold">
                Vision
              </span>
              <div className="mt-4 space-y-4 text-body-lg text-muted-foreground">
                <p>
                  We're working toward a standard where security is considered from the design stage
                  onward — never an afterthought added once the building is finished or a shift
                  schedule is already failing, but a discipline built into the process from the
                  start.
                </p>
                <p className="text-foreground">
                  The measure of good security, in the end, isn't the headcount on a roster or the
                  drawing itself — it's the confidence it gives the people who occupy that space
                  every day. That is the standard we hold every engagement to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section id="process" className="bg-primary text-primary-foreground">
        <div className="container-page py-20 lg:py-28">
          <div className="flex flex-col justify-between gap-5 border-b border-primary-foreground/15 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-eyebrow text-primary-foreground/60">How an engagement runs</p>
              <h2 className="mt-4 max-w-xl font-display text-h2 font-normal tracking-tight text-primary-foreground">
                Four stages, whether it's staffing, a design review, or both.
              </h2>
            </div>
          </div>
          <ProcessAccordion />
        </div>
      </section>

      {/* ================= SAMPLE WORK (placeholder) ================= */}
      <section id="sample" className="section">
        <div className="container-page">
          <div className="border border-dashed border-border bg-muted/30 px-6 py-16 text-center sm:px-12">
            <p className="text-eyebrow text-gold">Sample work</p>
            <h2 className="mt-4 font-display text-h3 font-normal tracking-tight text-foreground">
              Sample work coming soon
            </h2>
            <p className="mx-auto mt-4 max-w-md text-body text-muted-foreground">
              A sample staffing plan and a sample design-stage report will be posted here once
              they're ready to share.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section pt-8 sm:pt-12">
        <div className="container-page">
          <div className="relative overflow-hidden bg-primary px-6 py-14 text-primary-foreground sm:px-12 sm:py-20 lg:px-20">
            <div className="pointer-events-none absolute -right-20 -top-28 size-80 rounded-full border-[3rem] border-primary-foreground/10" />
            <div className="pointer-events-none absolute bottom-0 right-20 h-24 w-px bg-primary-foreground/25" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-2xl">
                <p className="text-caption font-semibold uppercase tracking-[0.18em] text-gold">
                  Staffing a site, or still at the drawing stage — either way
                </p>
                <h2 className="mt-5 font-display text-h1 font-normal tracking-tight">
                  Bring us in before the gap shows up.
                </h2>
                <p className="mt-5 max-w-xl text-body-lg text-primary-foreground/80">
                  Tell us about the site and what you need covered — guard staffing, a design
                  review, or both — and we'll scope it from there.
                </p>
              </div>
              <Button asChild size="lg" variant="secondary" className="group w-fit">
                <Link href="/contact">
                  Start a conversation
                  <ArrowUpRight
                    className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-8 text-small text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>{siteName} · Security From The Design Stage</p>
            <span>Guard services. Design consulting. One standard.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
