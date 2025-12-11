// UrAnker/App.js (Zentrale, intelligente Steuerung & Datenspeicher)
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, Platform } from 'react-native';
import BreathGuide from './src/components/BreathGuide';
import DailyLog from './src/components/DailyLog';
import ThreeBreathRule from './src/components/ThreeBreathRule';
import LogViewer from './src/components/LogViewer'; // NEU

// Definierte Zustände (Screens)
const SCREEN = {
    HOME: 'Home',
    BREATHING: 'Breathing', 
    LOG: 'Log', 
    QUICK_ANCHOR: 'QuickAnchor',
    LOG_VIEWER: 'LogViewer', // NEU: Zur Ansicht der Notizen
}

// Komponenten-Definitionen für die Session
const SESSION_CONFIG = {
    MORNING: {
        type: 'Morgen-Anker',
        duration: 5 * 60 * 1000, // 5 Minuten
        feeling: 'Ruhe & Klarheit'
    },
    EVENING: {
        type: 'Abend-Anker',
        duration: 10 * 60 * 1000, // 10 Minuten
        feeling: 'Dankbarkeit & Vergebung'
    }
}

// ------------------------------------------
// START: HOME SCREEN KOMPONENTE (Automatisiert)
// ------------------------------------------

const HomeScreen = ({ setCurrentScreen, dailyLogs }) => {
    const now = new Date();
    const hour = now.getHours();
    
    // Logik für die automatisierte Führung (Morgen 6-11 Uhr, Abend 18-22 Uhr)
    let currentSession = null;
    let headline = "Willkommen beim Ur-Anker.";
    let buttonText = "Zum Dashboard";
    let icon = "✨";

    if (hour >= 6 && hour < 11) {
        currentSession = SESSION_CONFIG.MORNING;
        headline = "🌅 Guten Morgen! Starte deine Kalibrierung.";
        buttonText = "Morgen-Anker (5 Min.) starten";
        icon = "🌅";
    } else if (hour >= 18 && hour < 22) {
        currentSession = SESSION_CONFIG.EVENING;
        headline = "🌙 Der Tag klingt aus. Finde Ruhe.";
        buttonText = "Abend-Anker (10 Min.) starten";
        icon = "🌙";
    } else {
        headline = "🌟 Ur-Anker ist bereit. Dein Tag ist verankert.";
        buttonText = "Zur täglichen Übersicht";
        icon = "💡";
    }

    const startBreathingOrLog = () => {
        if (currentSession) {
            setCurrentScreen({ 
                name: SCREEN.BREATHING, 
                config: currentSession 
            });
        } else {
            setCurrentScreen({ name: SCREEN.LOG });
        }
    };
    
    const currentStreak = 5; // Simuliert

    return (
        <SafeAreaView style={homeStyles.safeArea}>
            <ScrollView contentContainerStyle={homeStyles.container}>
                <Text style={homeStyles.title}>Ur-Anker {icon}</Text>
                
                <View style={homeStyles.card}>
                    <Text style={homeStyles.cardHeadline}>{headline}</Text>
                    
                    <TouchableOpacity 
                        style={[homeStyles.button, currentSession && homeStyles.activeButton]} 
                        onPress={startBreathingOrLog}
                    >
                        <Text style={homeStyles.buttonText}>{buttonText}</Text>
                    </TouchableOpacity>
                </View>

                {/* Sektion Notizen eingeben */}
                <View style={homeStyles.section}>
                    <Text style={homeStyles.sectionTitle}>Tagebuch & Reflexion</Text>
                    <TouchableOpacity 
                        style={homeStyles.logButton} 
                        onPress={() => setCurrentScreen({ name: SCREEN.LOG })}
                    >
                        <Text style={homeStyles.logButtonText}>✍️ Tages-Notizen erfassen</Text>
                    </TouchableOpacity>
                </View>

                {/* NEU: Sektion Notizen ansehen */}
                <View style={homeStyles.section}>
                    <Text style={homeStyles.sectionTitle}>Deine Chronik ({dailyLogs.length} Einträge)</Text>
                    <TouchableOpacity 
                        style={homeStyles.viewLogButton} 
                        onPress={() => setCurrentScreen({ name: SCREEN.LOG_VIEWER })}
                    >
                        <Text style={homeStyles.viewLogButtonText}>📖 Notizen und Verlauf ansehen</Text>
                    </TouchableOpacity>
                </View>


                <View style={homeStyles.section}>
                    <Text style={homeStyles.sectionTitle}>Deine Verankerung</Text>
                    <View style={homeStyles.statsBox}>
                        <Text style={homeStyles.statsValue}>🔥 {currentStreak} Tage Streak</Text>
                        <Text style={homeStyles.statsTip}>Ziel: 30 Tage in Folge</Text>
                    </View>
                </View>
            </ScrollView>
            
            {/* Quick Anchor Button (Bleibt immer sichtbar) */}
            <TouchableOpacity 
                style={homeStyles.quickButton} 
                onPress={() => setCurrentScreen({ name: SCREEN.QUICK_ANCHOR })}
            >
                <Text style={homeStyles.quickButtonText}>🚨 3-Atemzüge Jetzt</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};


// ------------------------------------------
// START: HAUPT-APP LOGIK (Zustandsverwaltung)
// ------------------------------------------

export default function App() {
    // currentScreen speichert jetzt ein Objekt { name: SCREEN.X, config: {...} }
    const [currentScreen, setCurrentScreen] = useState({ name: SCREEN.HOME }); 
    
    // NEU: Simulierter Datenspeicher
    const [dailyLogs, setDailyLogs] = useState([]);

    const resetToHome = () => setCurrentScreen({ name: SCREEN.HOME });
    const setScreen = (name, config = {}) => setCurrentScreen({ name, config });
    
    // Funktion zum Speichern des Eintrags
    const addLogEntry = (newLog) => {
        setDailyLogs(prevLogs => [...prevLogs, newLog]);
    }

    // Wenn die Atemübung abgeschlossen ist, gehen wir direkt ins Tagebuch
    const startLogAfterBreathing = () => {
        setScreen(SCREEN.LOG, { 
            sessionCompleted: currentScreen.config.type 
        });
    };

    if (currentScreen.name === SCREEN.HOME) {
        return <HomeScreen setCurrentScreen={setScreen} dailyLogs={dailyLogs} />;
    }

    if (currentScreen.name === SCREEN.BREATHING) {
        return (
            <BreathGuide 
                duration={currentScreen.config.duration} 
                feeling={currentScreen.config.feeling}
                onComplete={startLogAfterBreathing} // Geht ins Tagebuch
                onBack={resetToHome} // Geht direkt nach Home
            />
        );
    }
    
    if (currentScreen.name === SCREEN.LOG) {
        return (
            <DailyLog 
                onSave={addLogEntry} // Speichert Daten
                resetToHome={resetToHome} // Geht nach Speichern oder Abbruch nach Home
                sessionCompleted={currentScreen.config.sessionCompleted}
            />
        );
    }

    if (currentScreen.name === SCREEN.QUICK_ANCHOR) {
        return (
            <ThreeBreathRule onComplete={resetToHome} />
        );
    }
    
    // NEU: Log-Ansicht
    if (currentScreen.name === SCREEN.LOG_VIEWER) {
        return (
            <LogViewer 
                dailyLogs={dailyLogs} 
                resetToHome={resetToHome}
            />
        );
    }
}

// ------------------------------------------
// STYLESHEETS (Farbpalette beibehalten/verbessert)
// ------------------------------------------

const homeStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        width: '100%',
    },
    container: {
        alignItems: 'center',
        padding: 20,
        paddingBottom: 100,
    },
    title: {
        fontSize: 32,
        fontWeight: '900',
        color: '#4A90E2', // Kohärenz Blau
        marginVertical: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 30,
        alignItems: 'center',
        marginBottom: 30,
        width: '95%',
        maxWidth: 450,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 8,
    },
    cardHeadline: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    button: {
        backgroundColor: '#ddd',
        padding: 15,
        borderRadius: 10,
        width: '100%',
    },
    activeButton: {
        backgroundColor: '#4A90E2', // Aktiver Button
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
    },
    section: {
        width: '95%',
        maxWidth: 450,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4A90E2',
        marginBottom: 10,
    },
    logButton: {
        backgroundColor: '#FFD700', // Goldgelb für Notizen/Eingabe
        padding: 15,
        borderRadius: 10,
        width: '100%',
    },
    logButtonText: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        color: '#333',
    },
    viewLogButton: {
        backgroundColor: '#B0C4DE', // Sanftes Blau für die Ansicht
        padding: 15,
        borderRadius: 10,
        width: '100%',
    },
    viewLogButtonText: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        color: '#333',
    },
    statsBox: {
        backgroundColor: '#E8F5E9',
        padding: 15,
        borderRadius: 10,
    },
    statsValue: {
        fontSize: 20,
        fontWeight: '900',
        color: '#4CAF50', // Ruhe Grün
    },
    statsTip: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    quickButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#C62828', // Alarm Rot
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10,
    },
    quickButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }
});