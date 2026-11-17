// @claude:user-owned — expandable version of the "How an engagement runs"
// process timeline on the homepage (see (setup)/page.tsx). Generic across
// both service lines (guard staffing and design-stage consulting) — each
// stage's expanded copy notes how it plays out for either one.

'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function ProcessIcon({ stage }: { stage: 1 | 2 | 3 | 4 }) {
  const common = { viewBox: '0 0 56 56', className: 'size-11 shrink-0', role: 'img' as const };

  if (stage === 1) {
    return (
      <svg {...common} aria-label="A site plan reviewed against a sightline before construction">
        <title>A conversation about the site and what it needs</title>
        <rect
          x="6"
          y="6"
          width="44"
          height="44"
          fill="none"
          stroke="var(--color-primary-foreground)"
          strokeOpacity="0.35"
          strokeWidth="1.25"
          strokeDasharray="3 3"
        />
        <rect x="14" y="26" width="18" height="18" fill="var(--color-gold)" opacity="0.85" />
        <path
          d="M 32 14 L 46 28"
          stroke="var(--color-primary-foreground)"
          strokeOpacity="0.6"
          strokeWidth="1.25"
          strokeDasharray="1 4"
          strokeLinecap="round"
        />
        <circle cx="46" cy="28" r="2.5" fill="var(--color-primary-foreground)" />
      </svg>
    );
  }

  if (stage === 2) {
    return (
      <svg {...common} aria-label="A walked route between waypoints, ending at a site marker">
        <title>A site visit, walked and documented</title>
        <path
          d="M 8 42 Q 16 30 14 20 T 28 8"
          fill="none"
          stroke="var(--color-primary-foreground)"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          strokeDasharray="1 5"
          strokeLinecap="round"
        />
        <circle cx="8" cy="42" r="2.25" fill="var(--color-primary-foreground)" fillOpacity="0.7" />
        <circle cx="14" cy="20" r="2.25" fill="var(--color-primary-foreground)" fillOpacity="0.7" />
        <path
          d="M28 4c-4.4 0-8 3.4-8 7.7 0 5.8 8 14.3 8 14.3s8-8.5 8-14.3C36 7.4 32.4 4 28 4z"
          fill="var(--color-gold)"
        />
        <circle cx="28" cy="11.5" r="3" fill="var(--color-primary)" />
      </svg>
    );
  }

  if (stage === 3) {
    return (
      <svg {...common} aria-label="A document listing findings, with the top priority flagged">
        <title>A written proposal, scoped and priced</title>
        <path
          d="M14 6h20l8 8v36H14z"
          fill="none"
          stroke="var(--color-primary-foreground)"
          strokeOpacity="0.4"
          strokeWidth="1.25"
        />
        <path
          d="M34 6v8h8"
          fill="none"
          stroke="var(--color-primary-foreground)"
          strokeOpacity="0.4"
          strokeWidth="1.25"
        />
        <line
          x1="20"
          y1="26"
          x2="40"
          y2="26"
          stroke="var(--color-primary-foreground)"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="20"
          y1="33"
          x2="40"
          y2="33"
          stroke="var(--color-primary-foreground)"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="23"
          y1="40"
          x2="35"
          y2="40"
          stroke="var(--color-gold)"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle cx="17" cy="40" r="1.75" fill="var(--color-gold)" />
      </svg>
    );
  }

  return (
    <svg {...common} aria-label="A checklist of verified items, the last one signed off">
      <title>Guards deployed, or the report delivered</title>
      <rect
        x="10"
        y="8"
        width="30"
        height="40"
        fill="none"
        stroke="var(--color-primary-foreground)"
        strokeOpacity="0.4"
        strokeWidth="1.25"
      />
      {[16, 26, 36].map((y, i) => (
        <g key={y}>
          <rect
            x="16"
            y={y}
            width="6"
            height="6"
            fill={i === 2 ? 'var(--color-gold)' : 'none'}
            stroke={i === 2 ? 'none' : 'var(--color-primary-foreground)'}
            strokeOpacity="0.6"
            strokeWidth="1.25"
          />
          <path
            d={`M17 ${y + 3}l1.5 1.5L21 ${y + 1.5}`}
            stroke={i === 2 ? 'var(--color-primary)' : 'var(--color-primary-foreground)'}
            strokeOpacity={i === 2 ? '1' : '0.8'}
            strokeWidth="1.25"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="27"
            y1={y + 3}
            x2="34"
            y2={y + 3}
            stroke="var(--color-primary-foreground)"
            strokeOpacity="0.35"
            strokeWidth="1.25"
          />
        </g>
      ))}
    </svg>
  );
}

const STEPS = [
  {
    value: 'stage-1',
    index: '01',
    stage: 1 as const,
    title: 'Consultation',
    description:
      "We start with a conversation about the site: what's being protected, who moves through it, and whether the gap is a staffing gap, a design gap, or both.",
    deliverable: 'Scope-of-work outline',
    detail:
      "There's no standard answer here — a retail unit needing weekend coverage and a residential compound still at the design stage need two different conversations. We ask enough to know which service line (or both) actually applies before anything is proposed.",
  },
  {
    value: 'stage-2',
    index: '02',
    stage: 2 as const,
    title: 'Site assessment',
    description:
      'A walk-through documents current access points, sightlines, and traffic patterns — or, for design-stage work, the site plan and elevations are reviewed directly.',
    deliverable: 'Assessment notes',
    detail:
      'For guard staffing, this is where post locations, shift boundaries, and any existing gaps in coverage get mapped against how the site is actually used. For a design review, it is a plan-by-plan read against natural surveillance, access control, and territorial reinforcement principles — before construction documents are finalized.',
  },
  {
    value: 'stage-3',
    index: '03',
    stage: 3 as const,
    title: 'Proposal & rate schedule',
    description:
      'A written proposal sets out the plan — staffing levels and shift pattern with a full hourly-to-annual rate breakdown, a design-stage report, or both — scoped to what the assessment found.',
    deliverable: 'Written proposal',
    detail:
      'Guard-staffing proposals break the rate down from hourly to daily, weekly, monthly, and annual, so the full cost of a coverage plan is clear before anything is signed. Design-review proposals set out the scope, the documents to be reviewed, and the deliverable.',
  },
  {
    value: 'stage-4',
    index: '04',
    stage: 4 as const,
    title: 'Engagement begins',
    description:
      'Guards are deployed and supervised against a documented post order, or the design-stage report is delivered for the project team to act on — with follow-up built into either path.',
    deliverable: 'Deployment or final report',
    detail:
      'Guard deployments are backed by supervisory check-ins and incident reporting for the life of the contract. Design reviews include a follow-up pass once revised drawings or completed work come back, to confirm the recommendations were addressed.',
  },
] as const;

export function ProcessAccordion() {
  return (
    <Accordion type="single" collapsible defaultValue="stage-1" className="mt-4">
      {STEPS.map((step) => (
        <AccordionItem
          key={step.value}
          value={step.value}
          className="border-t border-primary-foreground/15 last:border-b"
        >
          <AccordionTrigger className="py-8 text-primary-foreground hover:no-underline sm:py-8">
            <div className="grid w-full gap-6 text-left sm:grid-cols-[5.5rem_1fr_1.2fr_1.1fr] sm:items-center sm:gap-8">
              <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-4">
                <ProcessIcon stage={step.stage} />
                <span className="font-display text-h3 font-normal text-gold">{step.index}</span>
              </div>
              <span className="font-display text-h4 font-normal text-primary-foreground">
                {step.title}
              </span>
              <p className="max-w-lg text-body text-primary-foreground/75">{step.description}</p>
              <div className="flex flex-col gap-1.5 border-t border-primary-foreground/15 pt-4 sm:border-t-0 sm:border-l sm:pl-6 sm:pt-0">
                <span className="text-caption font-semibold uppercase tracking-[0.08em] text-primary-foreground/45">
                  Written deliverable
                </span>
                <span className="text-small font-medium text-primary-foreground">
                  {step.deliverable}
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0 pb-0">
            <div className="bg-card p-5 sm:p-8">
              <p className="max-w-3xl text-body-lg text-muted-foreground">{step.detail}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
