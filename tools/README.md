# tools

## mkpdf.py

Renders a plan markdown file to a print-quality PDF (A4, cover page,
running header, page numbers, styled tables and callouts).

Requires `weasyprint`, `markdown` and `pygments`. Pango and Cairo must be
present on the system — they are on most Linux desktops.

```bash
uv venv .pdfenv
uv pip install --python .pdfenv/bin/python weasyprint markdown pygments

.pdfenv/bin/python tools/mkpdf.py \
  plans/2026-07-20-iryss-platform-technical-plan.md \
  plans/IRYSS-Platform-Technical-Plan.pdf \
  "IRYSS Platform Technical Plan" \
  "Marketplace · Content Platform with live shoppable streaming · Shopify Connector"
```

Re-run after editing the markdown; the PDF is a build artefact, not the source.
