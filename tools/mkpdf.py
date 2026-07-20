#!/usr/bin/env python3
"""Render an IRYSS markdown plan to a print-quality PDF."""
import sys, re, pathlib
import markdown
from weasyprint import HTML, CSS

src = pathlib.Path(sys.argv[1])
out = pathlib.Path(sys.argv[2])
doc_title = sys.argv[3]
subtitle = sys.argv[4]

text = src.read_text(encoding="utf-8")

# Drop the H1 and the leading metadata block; both are rebuilt as the cover page.
lines = text.split("\n")
if lines and lines[0].startswith("# "):
    lines = lines[1:]
meta_prefixes = ("**Date:**", "**Author:**", "**Status:**", "**Supersedes:**")
cleaned, in_preamble = [], True
for ln in lines:
    if in_preamble:
        if ln.strip() == "" or ln.strip() == "---":
            continue
        if ln.startswith(meta_prefixes):
            continue
        in_preamble = False
    cleaned.append(ln)
body_md = "\n".join(cleaned).lstrip("\n")

# `<a name="x"></a>` on its own line becomes an empty <p>, which lands on its own
# page ahead of the heading's forced break — a blank sheet per section. Fold the
# anchor into an id on the following heading so contents links still resolve.
body_md = re.sub(
    r'<a\s+name="([^"]+)"\s*>\s*</a>\s*\n+(#{1,6})\s*(.+)',
    lambda m: f'{m.group(2)} {m.group(3)} {{: id="{m.group(1)}" }}',
    body_md,
)
# Any anchors not directly followed by a heading: drop them.
body_md = re.sub(r'<a\s+name="[^"]+"\s*>\s*</a>\s*\n?', "", body_md)

html_body = markdown.markdown(
    body_md,
    extensions=["tables", "fenced_code", "toc", "attr_list", "md_in_html", "sane_lists"],
    output_format="html5",
)

CSS_TEXT = """
@page {
  size: A4;
  margin: 20mm 17mm 18mm 17mm;
  @bottom-center {
    content: counter(page);
    font-family: "DejaVu Sans", "Liberation Sans", sans-serif;
    font-size: 8pt; color: #8a8f98;
  }
  @top-right {
    content: "IRYSS Platform — Technical Plan";
    font-family: "DejaVu Sans", "Liberation Sans", sans-serif;
    font-size: 7.5pt; color: #a5aab2;
  }
}
@page :first { @top-right { content: ""; } @bottom-center { content: ""; } }

html { font-size: 10pt; }
body {
  font-family: "DejaVu Sans", "Liberation Sans", sans-serif;
  line-height: 1.5; color: #1c1f24; hyphens: none;
}

/* ---------- cover ---------- */
.cover { page-break-after: always; page-break-inside: avoid; padding-top: 52mm; }
.cover .rule { height: 3pt; width: 46mm; background: #c2410c; margin-bottom: 11mm; }
.cover h1 { font-size: 30pt; line-height: 1.12; margin: 0 0 5mm 0; color: #0f1115;
            letter-spacing: -0.5pt; border: 0; padding: 0;
            page-break-before: avoid; }
.cover .sub { font-size: 12.5pt; color: #4b5563; margin-bottom: 22mm; line-height: 1.45; }
.cover .meta { font-size: 9.5pt; color: #6b7280; line-height: 1.85; }
.cover .meta b { color: #1c1f24; font-weight: 600; }

/* ---------- headings ---------- */
h1 { font-size: 17pt; margin: 0 0 6mm 0; padding-bottom: 2.5mm;
     border-bottom: 1.5pt solid #c2410c; color: #0f1115; page-break-before: always;
     page-break-after: avoid; letter-spacing: -0.2pt; }
h2 { font-size: 13pt; margin: 8mm 0 3mm 0; color: #0f1115; page-break-after: avoid;
     page-break-before: always; padding-bottom: 2mm; border-bottom: 0.8pt solid #d8dce2; }
h3 { font-size: 11pt; margin: 6mm 0 2.5mm 0; color: #1c1f24; page-break-after: avoid; }
h4 { font-size: 10pt; margin: 5mm 0 2mm 0; color: #374151; page-break-after: avoid; }
h2 + h3, h3 + h4 { margin-top: 3mm; }

p { margin: 0 0 3mm 0; orphans: 3; widows: 3; }

/* ---------- tables ---------- */
/* Keep a table whole when it fits; WeasyPrint falls back to splitting
   any table taller than one page (DNS map, service inventory). */
table { border-collapse: collapse; width: 100%; margin: 4mm 0 5mm 0;
        font-size: 8.4pt; page-break-inside: avoid; }
thead { display: table-header-group; }
tr { page-break-inside: avoid; }
th { background: #f3f4f6; text-align: left; font-weight: 600; color: #0f1115;
     padding: 2mm 2.4mm; border: 0.5pt solid #d8dce2; font-size: 8.2pt; }
td { padding: 2mm 2.4mm; border: 0.5pt solid #e3e6ea; vertical-align: top; }
tbody tr:nth-child(even) td { background: #fafbfc; }

/* ---------- code ---------- */
pre { background: #f7f8fa; border: 0.5pt solid #e0e3e8; border-left: 2.5pt solid #c2410c;
      padding: 3mm 3.5mm; font-size: 7.4pt; line-height: 1.36; overflow: hidden;
      page-break-inside: avoid; margin: 3mm 0 4mm 0; border-radius: 1.5pt; }
pre code { font-family: "DejaVu Sans Mono", "Liberation Mono", monospace;
           white-space: pre; color: #1c1f24; }
code { font-family: "DejaVu Sans Mono", "Liberation Mono", monospace;
       font-size: 8.4pt; background: #f0f2f5; padding: 0.3mm 1.1mm;
       border-radius: 1.5pt; color: #b3350a; }
td code, th code { font-size: 7.6pt; background: #eef0f3; }

/* ---------- callouts ---------- */
blockquote { margin: 3.5mm 0; padding: 2.6mm 4mm; background: #fff8f3;
             border-left: 2.5pt solid #ea7317; color: #3a3f47; font-size: 9pt;
             page-break-inside: avoid; border-radius: 1.5pt; }
blockquote p { margin: 0 0 2mm 0; }
blockquote p:last-child { margin-bottom: 0; }

ul, ol { margin: 0 0 3.5mm 0; padding-left: 6mm; }
li { margin-bottom: 1.3mm; }
li > ul, li > ol { margin-top: 1.3mm; }

/* Section separators are redundant once every section starts its own page,
   and an <hr> stranded at the top of a page produced blank sheets. */
hr { display: none; }
a { color: #b3350a; text-decoration: none; }
strong { font-weight: 600; color: #0f1115; }
"""

cover = f"""
<div class="cover">
  <div class="rule"></div>
  <h1>{doc_title}</h1>
  <div class="sub">{subtitle}</div>
  <div class="meta">
    <b>Prepared by</b> &nbsp;Samy<br>
    <b>Date</b> &nbsp;20 July 2026<br>
    <b>Status</b> &nbsp;Draft for review<br>
    <b>Supersedes</b> &nbsp;parts of <i>IRYSS Marketplace Technical Stack</i> and
    <i>IRYSS Content Platform</i> — see §2 and Appendix&nbsp;A
  </div>
</div>
"""

# The first h2 (Contents) shouldn't force a page break straight after the cover.
html_body = html_body.replace("<h2>Contents</h2>",
                              '<h2 style="page-break-before:avoid">Contents</h2>', 1)

full = f"<html><head><meta charset='utf-8'><title>{doc_title}</title></head><body>{cover}{html_body}</body></html>"

HTML(string=full, base_url=str(src.parent)).write_pdf(
    str(out), stylesheets=[CSS(string=CSS_TEXT)]
)
print(f"wrote {out}")
