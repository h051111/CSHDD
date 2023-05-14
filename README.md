# Szakdolgozat példaprogram, HDD implementáció c# -ban
## Használat

CSHDD.exe [forráskód] [teszterszkript] [-g granularity] [-nc]\
A -g kapcsolóval lehet granularity -t állítani. A program alapból complement-first redukciót végez, az -nc kapcsolóval ezt meglehet fordítani. Alapértelmezett granularity = 2.\
Pl.\
CSHDD.exe C:/Programming/3361-orig.js C:/Programming/tester.py -g 3\
A program az outputot lementi fájlba és futás után kiírja.
