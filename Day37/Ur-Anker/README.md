# 🧘‍♀️ Ur-Anker: Die App zur Kohärenz und zum Urvertrauen

## Projektübersicht

Ur-Anker ist eine mobile Anwendung, entwickelt mit React Native/Expo, die Benutzern helfen soll, einen Zustand der **Herz-Hirn-Kohärenz** zu erreichen und zu halten. Das zentrale Ziel ist die Rückkehr zum **Urvertrauen** und zur **inneren Stabilität** – der Fähigkeit, auch im Stress verankert zu bleiben.

Die App bietet ein tägliches, automatisiertes Programm mit geführten Atemübungen, Soforthilfe und einer integrierten Tagebuchfunktion zur Selbstreflexion.

## Kernfunktionen (Optimaler Dauer-Modus)

| Funktion | Zielsetzung | Technische Umsetzung |
| :--- | :--- | :--- |
| **Automatisierte Führung** | Erinnerung zur optimalen Zeit (Morgen/Abend), um Gewohnheit zu verankern. | `App.js` nutzt die lokale Zeit (`new Date().getHours()`) zur automatischen Navigation. |
| **Geführte Atem-Kohärenz**| Stabilisierung des Herzrhythmus (HRV) auf 0.1 Hz. | `BreathGuide.js` verwendet `Animated` für den visuellen Pulsator (5s Ein / 5s Aus). |
| **Affirmationen** | Positive psychologische Verankerung des Trainings. | Dynamische Texte: "Ich werde geleitet" (Einatmen) / "Ich bin geerdet" (Ausatmen). |
| **Sofort-Anker** | Akute Stressreduktion vor wichtigen Entscheidungen. | `ThreeBreathRule.js` bietet eine schnelle, 3-schrittige Anleitung. |
| **Tagebuch (Daily Log)** | Langfristige Selbstreflexion und Fortschrittsmessung. | `DailyLog.js` erfasst Stimmung und Notizen; `App.js` speichert die Logs im Zustand. |

## Technische Struktur und Setup

Das Projekt basiert auf einem funktionalen Komponentenansatz (React Hooks) und nutzt Expo für die einfache Cross-Plattform-Entwicklung.

### Wichtige Dateien

| Datei / Ordner | Zweck |
| :--- | :--- |
| `App.js` | **Root-Komponente.** Zentrale Zustandsmaschine, Navigation und simulierter Log-Datenspeicher. |
| `src/components/BreathGuide.js` | Die **Atem-Engine**. Implementiert die Animation, Timer und psychologische Führung. |
| `src/components/DailyLog.js` | **Tagebuch-Eingabe.** Erfassung von Stimmung, Stress und Notizen. |
| `src/components/LogViewer.js` | **Chronik-Anzeige.** Listet alle gespeicherten Tagebucheinträge auf. |
| `src/components/Header.js` | **Wiederverwendbare Navigation.** Stellt die konsistente "Zurück zu Home"-Funktionalität sicher. |

### Lokale Entwicklung starten

Stellen Sie sicher, dass Node.js (LTS-Version) und Expo CLI global installiert sind.

1.  **Repository klonen & Ordner wechseln:**
    ```bash
    git clone https://github.com/Sugu4/100-days-of-code.git
    cd /Day37/Ur-Anker
    ```

2.  **Abhängigkeiten installieren:**
    ```bash
    npm install
    # Web-Abhängigkeiten installieren (zur Stabilität im Browser):
    npx expo install react-dom react-native-web
    ```

3.  **Projekt starten:**
    ```bash
    npm start
    ```

4.  **Testen:** Drücken Sie **`w`** im Terminal, um die App im Browser zu öffnen und alle Navigationspunkte (Morgen-Anker, Log-Eingabe, Log-Archiv) zu testen. Oder nutzen Sie die **Expo Go** App für mobile Tests.

## 🤝 Mitwirken

Dieses Projekt lebt von der Vision der inneren Ruhe. Wenn Sie Ideen zur Verbesserung der Kohärenz-Logik, des Designs oder zur Erweiterung der Funktionen haben, sind Pull Requests und Issues herzlich willkommen.