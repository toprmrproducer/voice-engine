# RapidX AI Voice Design Contract

## Product character

RapidX AI Voice is a premium operational workspace for building and running
voice agents. The interface should feel calm, capable, and trustworthy under
daily use. It uses warm ivory surfaces, restrained bronze accents, compact
navigation, and clear hierarchy rather than decorative dashboard chrome.

## Foundations

- Use the semantic tokens in `ui/src/app/globals.css`.
- Preserve the existing warm light theme and its dark-mode equivalent.
- Use one-pixel semantic borders, `rounded-2xl` cards, and the existing card
  shadow tokens. Never introduce isolated colors or arbitrary shadows.
- Use Lucide icons only. Color is never the sole carrier of meaning.

## Navigation

- Every primary product destination must remain directly visible in the
  expanded sidebar. Do not hide core tools behind a collapsed section.
- Sidebar labels use uppercase eyebrow typography. Active destinations retain
  the bronze rail and accent treatment.
- Client-facing navigation must not expose raw infrastructure terminology.

## Billing and plans

- The plan catalog stays visible even when checkout is temporarily unavailable.
- Starter, Growth, Scale, and Enterprise are presented together in ascending
  capability order. Trial is represented as the current account state, not a
  paid checkout card.
- A disabled payment gateway changes the call to action, not plan visibility.
- Supported checkout methods are named explicitly: UPI, cards, net banking,
  and wallets. Never imply a payment completed until the verified callback and
  ledger credit both succeed.

## Components and states

- Reuse the existing Button, card, badge, sidebar, and dialog primitives.
- Interactive controls require default, hover, focus, disabled, loading, empty,
  and error states where applicable.
- Plan cards use a shared structure, with Growth as the single highlighted
  recommendation and Enterprise as the custom-volume continuation.

## Responsive and accessibility

- Verify at 375, 768, and 1280 pixel widths.
- Keep tap targets at least 32 pixels and preserve visible keyboard focus.
- No horizontal overflow. Respect reduced motion.

## Accepted debt

- PayU remains the hosted checkout authority. Additional payment-method labels
  describe methods available through that checkout, not separate processors.
- A custom RapidX domain remains pending; the sslip.io showcase host is the
  current client-review surface.
