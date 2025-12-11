// UrAnker/src/components/ThreeBreathRule.js (Überarbeitet)
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Header from './Header'; // Importiere Header

const ThreeBreathRule = ({ onComplete }) => {
    const [step, setStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);

    const nextStep = () => {
        if (step === 3) {
            setIsComplete(true);
            Alert.alert(
                "Entscheidungs-Anker gesetzt",
                "Du bist jetzt im Kohärenz-Zustand. Triff deine Entscheidung aus dieser Klarheit heraus.",
                [{ text: "Zurück zum Home-Screen", onPress: onComplete }] 
            );
        } else {
            setStep(step + 1);
        }
    };

    const getInstruction = () => {
        switch (step) {
            case 1:
                return "1/3: Stopp. Atme tief aus. Fühle deinen Herzbereich.";
            case 2:
                return "2/3: Atme 5 Sekunden ein und 5 Sekunden aus. Sanft und zentriert.";
            case 3:
                return "3/3: Halte beim Ausatmen das Gefühl des Ur-Vertrauens fest.";
            default:
                return "Bereit für den nächsten Stress-Moment.";
        }
    };

    return (
        <View style={styles.fullScreen}>
            <Header title="3-Atemzug Sofort-Anker" onBack={onComplete} />
            <View style={styles.container}>
                <Text style={styles.title}>Sofort-Verankerung bei Stress</Text>

                <View style={styles.instructionBox}>
                    <Text style={styles.instructionText}>{getInstruction()}</Text>
                </View>

                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={nextStep}
                    disabled={isComplete}
                >
                    <Text style={styles.buttonText}>{isComplete ? 'Geschafft' : 'Nächster Atemzug'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// Stylesheets (leicht angepasst)
const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        backgroundColor: '#FFEBEE', // Leicht roter Hintergrund für Soforthilfe
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#C62828',
    },
    instructionBox: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#C62828',
        minHeight: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        width: '100%',
        maxWidth: 400,
    },
    instructionText: {
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 30,
        color: '#333',
    },
    nextButton: {
        backgroundColor: '#C62828',
        paddingVertical: 18,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default ThreeBreathRule;