# AYK Solutions — Hreflang Implementation & Matrix

## Implementation Overview

Hreflang tags inform Google and other search engines which regional or language variation of a page to show users based on their location and language preference.

In Next.js 14 App Router, alternate language links are configured globally in `src/app/layout.tsx` using `metadata.alternates.languages` and overridden on specific regional pages.

---

## Hreflang Language & Region Matrix

| URL                                                          | ISO Language Code | ISO Region Code | Combined `hreflang` Tag | Description            |
| ------------------------------------------------------------ | ----------------- | --------------- | ----------------------- | ---------------------- |
| `https://ayksolutions.com/`                                  | `en`              | Multi           | `x-default` & `en`      | Global default page    |
| `https://ayksolutions.com/be/en/web-design-belgium/`         | `en`              | `BE`            | `en-BE`                 | Belgium — English      |
| `https://ayksolutions.com/be/fr/creation-site-web-belgique/` | `fr`              | `BE`            | `fr-BE`                 | Belgium — French       |
| `https://ayksolutions.com/be/nl/webdesign-belgie/`           | `nl`              | `BE`            | `nl-BE`                 | Belgium — Dutch        |
| `https://ayksolutions.com/sa/en/web-design-saudi-arabia/`    | `en`              | `SA`            | `en-SA`                 | Saudi Arabia — English |
| `https://ayksolutions.com/sa/ar/`                            | `ar`              | `SA`            | `ar-SA`                 | Saudi Arabia — Arabic  |
| `https://ayksolutions.com/au/en/small-business-web-design/`  | `en`              | `AU`            | `en-AU`                 | Australia — English    |

---

## Golden Rules for Hreflang Compliance

1. **Bi-directional symmetry:** If Page A links to Page B via hreflang, Page B MUST link back to Page A.
2. **Self-referencing tag:** Every page must include an hreflang tag pointing to itself.
3. **Include `x-default`:** Point `x-default` to `https://ayksolutions.com/` for unmatched regions/languages.
4. **Canonical URL alignment:** The canonical URL of a regional page must match its exact URL (not point back to root).
