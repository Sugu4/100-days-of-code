// UrAnker/src/components/DailyLog.js (Überarbeitet)
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert, Platform } from 'react-native';
import Header from './Header';

const DailyLog = ({ onSave, resetToHome, sessionCompleted }) => {
    // onSave ist die neue Funktion, die den Eintrag in App.js speichert
    const [moodScore, setMoodScore] = useState(4); 
    const [notes, setNotes] = useState('');
    const [stressEvent, setStressEvent] = useState('');
    
    const moodEmojis = ['😞 (Sehr schwer)', '🙁 (Schwer)', '😐 (Neutral)', '🙂 (Gut)', '😊 (Exzellent)'];

    const handleSave = () => {
        const newLog = {
            moodScore,
            notes,
            stressEvent,
            sessionCompleted, // Z.B. 'Morgen-Anker'
            date: new Date().toISOString(),
        };
        
        onSave(newLog); // Speichert den Log-Eintrag in App.js
        Alert.alert('Erfolg', 'Dein Tagebucheintrag wurde gespeichert.');
        
        // Nach dem Speichern zurück zum Home-Screen
        resetToHome(); 
    };

    return (
        <View style={styles.fullScreen}>
            <Header title="Tages-Reflexion" onBack={resetToHome} />
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>✍️ Dein Ur-Anker Tagebuch</Text>
                
                {sessionCompleted && (
                    <Text style={styles.sessionInfo}>
                        Abgeschlossene Session: <Text style={{fontWeight: 'bold', color: '#4A90E2'}}>{sessionCompleted}</Text>
                    </Text>
                )}

                <Text style={styles.question}>1. Wie stabil (emotional) fühlst du dich heute (1-5)?</Text>
                <View style={styles.moodSelector}>
                    {moodEmojis.map((label, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setMoodScore(index + 1)}
                            style={[styles.moodButton, moodScore === index + 1 && styles.moodButtonActive]}
                        >
                            <Text style={styles.moodEmoji}>{label.split(' ')[0]}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <Text style={styles.moodLabelText}>Aktuell: {moodEmojis[moodScore - 1]}</Text>


                <Text style={styles.question}>2. Welcher Stress-Moment hat dich heute am meisten gefordert?</Text>
                <TextInput
                    style={styles.textInputShort}
                    onChangeText={setStressEvent}
                    value={stressEvent}
                    placeholder="Kurze Beschreibung des Ereignisses..."
                />

                <Text style={styles.question}>3. Deine Notizen/Erkenntnisse des Tages:</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={setNotes}
                    value={notes}
                    placeholder="Was hat dir dein Ur-Anker heute gezeigt? (Bsp: Vertrauen, Akzeptanz...)"
                    multiline={true}
                    numberOfLines={4}
                />

                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>Eintrag speichern & Home</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

// Stylesheets (leicht angepasst)
const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        backgroundColor: '#f5f5f5', // Heller Hintergrund
    },
    container: {
        alignItems: 'center',
        padding: 20,
        maxWidth: 600,
        alignSelf: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#4A90E2',
    },
    sessionInfo: {
        fontSize: 16,
        marginBottom: 30,
        color: '#666',
    },
    moodLabelText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#4A90E2',
    },
    question: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 15,
        marginBottom: 10,
        textAlign: 'center',
        width: '100%',
    },
    moodSelector: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    moodButton: {
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#ddd',
        backgroundColor: '#fff',
    },
    moodButtonActive: {
        borderColor: '#4A90E2',
        backgroundColor: '#E1F5FE',
    },
    moodEmoji: {
        fontSize: 30,
    },
    textInput: {
        height: 120,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        width: '95%',
        textAlignVertical: 'top',
        backgroundColor: '#fff',
    },
    textInputShort: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        width: '95%',
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    saveButton: {
        marginTop: 40,
        backgroundColor: '#4CAF50', // Grün
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginBottom: 50,
    },
    saveButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default DailyLog;