#!/usr/bin/env python3
"""Assemble l'application en un seul fichier HTML, utilisable par double-clic
(sans serveur) : dist/cote-des-cartes.html

Usage : python3 build_single_file.py
"""
import re
from pathlib import Path

ROOT = Path(__file__).parent
MODULES = ["games.js", "providers.js", "scan.js", "app.js"]  # ordre des dépendances


def strip_module_syntax(code: str) -> str:
    code = re.sub(r"^import .*?;\n", "", code, flags=re.M)
    return re.sub(r"^export ", "", code, flags=re.M)


js = "\n".join(strip_module_syntax((ROOT / "js" / m).read_text(encoding="utf-8")) for m in MODULES)
html = (ROOT / "index.html").read_text(encoding="utf-8")
css = (ROOT / "styles.css").read_text(encoding="utf-8")

link_tag = '<link rel="stylesheet" href="styles.css" />'
script_tag = '<script type="module" src="js/app.js"></script>'
assert link_tag in html and script_tag in html
html = html.replace(link_tag, f"<style>\n{css}</style>")
html = html.replace(script_tag, f"<script>\n(() => {{\n{js}}})();\n</script>")

out = ROOT / "dist" / "cote-des-cartes.html"
out.parent.mkdir(exist_ok=True)
out.write_text(html, encoding="utf-8")
print(f"{out.relative_to(ROOT)} : {len(html) // 1024} Ko")
