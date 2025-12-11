// UrAnker/src/components/LogViewer.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from './Header'; // Neu: Header für Navigation

const LogViewer = ({ dailyLogs, resetToHome }) => {
    
    const formatEntry = (log) => {
        const date = new Date(log.date).toLocaleDateString('de-DE');
        const time = new Date(log.date).toLocaleTimeString('de-DE').substring(0, 5);
        return `${date} | ${time} | Stimmung: ${log.moodScore}/5`;
    }

    return (
        <View style={styles.fullScreen}>
            <Header title="Tagebuch-Archiv" onBack={resetToHome} />
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Gespeicherte Ur-Anker Einträge ({dailyLogs.length})</Text>

                {dailyLogs.length === 0 ? (
                    <Text style={styles.emptyText}>Noch keine Einträge gespeichert. Starte deinen ersten Anker!</Text>
                ) : (
                    dailyLogs.map((log, index) => (
                        <View key={index} style={styles.logCard}>
                            <Text style={styles.cardHeader}>{formatEntry(log)}</Text>
                            
                            {log.sessionCompleted && (
                                <Text style={styles.cardDetail}>Anker-Typ: {log.sessionCompleted}</Text>
                            )}

                            {log.stressEvent ? (
                                <Text style={styles.cardDetail}><Text style={{fontWeight: 'bold'}}>Stress-Moment:</Text> {log.stressEvent}</Text>
                            ) : null}
                            
                            {log.notes ? (
                                <Text style={styles.cardNotes}>{log.notes}</Text>
                            ) : null}
                            
                        </View>
                    )).reverse() // Neueste Einträge zuerst anzeigen
                )}

            </ScrollView>
        </View>
    );
};

// Stylesheets für LogViewer
const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    container: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4A90E2',
        marginBottom: 20,
    },
    logCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        width: '100%',
        maxWidth: 600,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    cardHeader: {
        fontSize: 16,
        fontWeight: '900',
        color: '#333',
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 5,
    },
    cardDetail: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    cardNotes: {
        fontSize: 15,
        marginTop: 10,
        fontStyle: 'italic',
        lineHeight: 22,
    },
    emptyText: {
        fontSize: 18,
        color: '#999',
        marginTop: 50,
        textAlign: 'center',
    }
});

export default LogViewer;