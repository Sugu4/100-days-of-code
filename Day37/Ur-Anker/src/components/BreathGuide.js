// UrAnker/src/components/BreathGuide.js
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Alert } from 'react-native';
import Header from './Header';

const COHERENCE_TIME = 10000; // 5s Einatmen + 5s Ausatmen = 10 Sekunden Zyklus
const INHALE_EXHALE_DURATION = COHERENCE_TIME * 0.5; // 5000ms pro Phase

const BreathGuide = ({ duration, feeling, onComplete, onBack }) => {
    // Wenn keine Duration übergeben wird, verwenden wir 5 Minuten (Morgen-Anker)
    const totalDuration = duration || (5 * 60 * 1000);

    const [timeLeft, setTimeLeft] = useState(totalDuration);
    const [phase, setPhase] = useState('INHALE');
    const scaleAnim = useRef(new Animated.Value(0)).current;

    // 1. Visueller Atem-Pulsator
    const startBreathingAnimation = () => {
        // Stellt sicher, dass der Loop nur läuft, wenn der Timer noch aktiv ist
        Animated.loop(
            Animated.sequence([
                // Einatmen (Expand)
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: INHALE_EXHALE_DURATION,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
                // Ausatmen (Shrink)
                Animated.timing(scaleAnim, {
                    toValue: 0,
                    duration: INHALE_EXHALE_DURATION,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
            ])
        ).start();
    };

    // 2. Timer-Logik
    useEffect(() => {
        startBreathingAnimation();

        const phaseInterval = setInterval(() => {
            setPhase(currentPhase => currentPhase === 'INHALE' ? 'EXHALE' : 'INHALE');
        }, INHALE_EXHALE_DURATION);

        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1000) {
                    clearInterval(timer);
                    clearInterval(phaseInterval);
                    Alert.alert("Anker gesetzt!", `${feeling} wurde in deinem Herzen verankert.`);
                    if (typeof onComplete === 'function') {
                        onComplete();
                    }
                    return 0;
                }
                return prevTime - 1000;
            });
        }, 1000);

        return () => {
            clearInterval(timer);
            clearInterval(phaseInterval);
            scaleAnim.stopAnimation && scaleAnim.stopAnimation(); // optional
        };
    }, []);


    const formattedTime = new Date(timeLeft).toISOString().substr(14, 5);

    const animatedStyle = {
        transform: [{
            scale: scaleAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.6, 1.25]
            })
        }]
    };

    const currentInstruction = phase === 'INHALE'
        ? 'EINATMEN (5s) | Ich werde geleitet'
        : 'AUSATMEN (5s) | Ich bin geerdet';

    const pulsatorColor = feeling === 'Ruhe & Klarheit' ? '#4A90E2' : '#8E44AD'; // Blau für Morgen, Lila für Abend

    return (
        <View style={styles.fullScreen}>
            <Header
                title={feeling === 'Ruhe & Klarheit' ? 'Morgen-Anker' : 'Abend-Anker'}
                onBack={onBack}
            />

            <View style={styles.container}>
                <Text style={styles.sessionTitle}>Session-Fokus: {feeling}</Text>
                <Text style={styles.timeText}>Verbleibende Zeit: {formattedTime}</Text>

                <View style={styles.pulsatorArea}>
                    <Animated.View style={[styles.pulsator, animatedStyle, { backgroundColor: pulsatorColor }]}>
                        <Text style={styles.focusText}>
                            {timeLeft > 0 ? currentInstruction : 'Geschafft!'}
                        </Text>
                        <Text style={styles.feelingText}>
                            Gefühl: {feeling.split(' ')[0]}
                        </Text>
                    </Animated.View>
                </View>
                <Text style={styles.tipText}>
                    *Stellen Sie sich vor, wie dieses Gefühl durch jeden Atemzug Ihr Herz nährt.*
                </Text>
            </View>
        </View>
    );
};

// Stylesheets für die Darstellung des Pulsators
const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingVertical: 40,
    },
    sessionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#666',
        marginBottom: 10,
    },
    timeText: {
        fontSize: 28,
        color: '#333',
        marginBottom: 40,
        fontWeight: '700',
    },
    pulsatorArea: {
        width: 250,
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pulsator: {
        width: 180,
        height: 180,
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10,
        paddingHorizontal: 10,
    },
    focusText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        paddingHorizontal: 10,
    },
    feelingText: {
        color: 'white',
        fontSize: 16,
        marginTop: 5,
        textAlign: 'center',
    },
    tipText: {
        marginTop: 50,
        paddingHorizontal: 30,
        textAlign: 'center',
        color: '#666',
        fontStyle: 'italic',
        maxWidth: 400,
    }
});

export default BreathGuide;