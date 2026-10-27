# Amelioras

[Public website](https://amelioras.josephjilovec.com/) · Living improvements and shared prosperity

Amelioras is a living-improvement concept exploring practical, accessible changes to household environments and daily routines. Its intended for-profit model places community benefit and reinvestment at the center of future operations.

## What this repository currently implements

- A responsive public presentation with an original household illustration and an illustrative routine comparison.
- A browser-local planner: choose an everyday goal, a space constraint, and a starting approach. The output explains each suggested planning step and adapts its constraint notes to the selections.
- Existing household and partnership email handoffs. The website does not send the plan automatically, collect personal intake, or retain planner choices.
- Clear distinctions between the current concept, proposed offerings, the reinvestment policy target, and future financial reporting.
- Keyboard-accessible navigation, native labeled form controls, focus management for the generated plan, and reduced-motion support.

The planner does not calculate a clinical or validated wellbeing score. Product kits, coordinated services, subscriptions, telemetry, partner portals, and audited financial reporting are proposed developments rather than implemented features of this repository.

## Public information

- [Business and reinvestment model](docs/business-model.md)
- [Current planner and proposed offerings](docs/offerings.md)
- [Governance information](docs/governance.md)
- [Partnership information](docs/partnerships.md)
- [Development status](docs/roadmap.md)

Earlier working documents were preserved unchanged in the private Venture Studio document repository before these public summaries were updated. Prior public versions can remain in Git history.

## Development

Next.js App Router, React, TypeScript, and venture-specific CSS. No new external service is required.

Run `npm ci`, `npm run dev`, `npm run typecheck`, and `npm run build`. The existing Vercel deployment configuration is preserved.

The parent Joseph Jilovec Venture Studio repository is excluded from this implementation. This design does not reuse its carousel or scroll experience.
