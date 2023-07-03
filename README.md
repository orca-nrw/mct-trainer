![EILD-Logo](src/img/eild_header_logo.png)

# Multiple-Choice-Test Trainer (MCT-Trainer)

Dieser Multiple-Choice-Test-Trainer ist eine Lernanwendung für allgemeine Themen in Datenbanken. Der Multiple-Choice-Test (MCT) enthält mehr als 1300 Fragen zum Thema Datenbanken, aus denen 15 Fragen aus verschiedenen Kategorien zufällig ausgewählt und bewertet werden. Vor dem Test-Start kann ausgewählt werden, aus welchen der folgenden Kategorien die Fragen ausgewählt werden sollen:
- K1: Einführung in die Grundbegriffe der Datenbanken
- K2: Ein Phasenmodell der Datenbankentwicklung
- K3: Das ER-Modell und das EERM (erweitertes Entity-Relationship-Modell)
- K4: Datenmodelle, relationale Algebra und Anfrageverarbeitung
- K4: Funktionale Abhängigkeiten, Normalformen und Transformation auf ein relationales Datenmodell
- K5: Die Datenbanksprache SQL: relationale Bestandteile (DDL)
- K5: Die Datenbanksprache SQL: relationale Bestandteile (DML, DAL und DQL)
- K5: Die Datenbanksprache SQL2008: SQL-Tuning (Oracle)
- K6: Objektrelationales SQL
- K6: Objektrelationale Anwendungsprogrammierung: JDBC
- K6: Objektrelationale Anwendungsprogrammierung: SQLJ
- K7: Anwendungsprogrammierung: Oracle PL/SQL (Prozeduren und Funktionen)
- K7: Anwendungsprogrammierung: Aktive DBMS und PL/SQL-Trigger
- K8: Transaktionen und verwandte Konzepte
- K9: Physische Speicherstrukturen
- K7: PHP und MYSQL

Schlagworte: Datenbanksysteme, Datenbank, Multiple-Choice-Test, MCT

## Weitere Informationen
Der MCT-Trainer wurde im Projekt EILD.nrw weiterentwickelt. In EILD.nrw wird ein Ansatz mit weitgehender Adaptierbarkeit und Wiederverwendbarkeit der Lehrinhalte umgesetzt. Die entwickelten OER werden über ORCA.nrw zur Verfügung gestellt.
- [EILD.nrw]
- [ORCA.nrw]
- [ORCA.nrw Github]

## Verwendung

Es gibt verschiedene Möglichkeiten den Trainer zu benutzen. Am einfachsten ist die Verwendung der auf GitHub bereitgestellten Version [MCT-Trainer GH Pages]. Diese wird bei Änderungen regelmäßig Aktualisiert und muss nicht selbst betrieben werden.

Alternativ lässt sich diese Version aus dem `gh-pages`-Branch als .zip-Datei herunterladen und anschließend auf Ilias, Moodle oder ähnliche Plattformen hochladen. Dort muss diese lediglich entpackt werden. Ilias erkennt die `index.html` automatisch als Startpunkt der Anwendung, auf anderen Plattformen muss dies eventuell noch manuell passieren.

Als letzte Alternative kann die Anwendung auch aus dem Sourcecode generiert werden. Das entsprechende Build-Skript aus der Package.json lässt sich mit `npm run build` ausführen. Der generierte Ordner ist dann identisch zu dem, der auch im `gh-pages`-Branch liegt.


## Lizenzierung

[![License: MIT][MIT-shield]][MIT]

[![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

Die Anwendung MCT-Trainer wurde ursprünglich von der [Technischen Hochschule Köln][TH Köln] im Rahmen der Online-Lernplattform [EDB] entwickelt und wurde als Teil des Projektes [EILD.nrw] von Alexander Kosmehl weiterentwickelt und als Open-Source Anwendung veröffentlicht.

Dieses Repository enthält Software unter [MIT-Lizenz][MIT] und Content unter [Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa]. Content sind insbesondere die Fragen und Antworten. Ausgenommen von der CC BY-SA 4.0 Lizenz sind die verwendeten Logos sowie alle anders lizenzierten Inhalte.

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

![image](https://user-images.githubusercontent.com/73349129/233968870-b61f0850-e7c2-489f-a597-53e030794b22.png)


[MIT]: https://github.com/orca-nrw/mct-trainer/blob/master/LICENSE
[MIT-shield]: https://img.shields.io/badge/License-MIT-yellow.svg
[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg
[HSD]: https://www.hs-duesseldorf.de/
[TH Köln]: https://www.th-koeln.de/
[EDB]: https://edb2.gm.th-koeln.de/index
[MCT-Trainer]: https://github.com/orca-nrw/mct-trainer/tree/master
[MCT-Trainer GH Pages]: https://orca-nrw.github.io/mct-trainer/
[EILD.nrw]: https://www.eild.nrw/
[EILD.nrw GitHub]: https://github.com/EILD-nrw
[ORCA.nrw]: https://www.orca.nrw/
[ORCA.nrw Github]: https://github.com/orca-nrw
