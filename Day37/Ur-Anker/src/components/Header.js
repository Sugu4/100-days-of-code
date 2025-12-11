// UrAnker/src/components/Header.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Simuliertes Pfeil-Icon, da wir keine Icon-Bibliotheken haben
const BackArrow = () => <Text style={{ fontSize: 24, color: '#4A90E2', paddingRight: 5 }}>←</Text>;

const Header = ({ title, onBack }) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack} style={styles.backButton}>
                    <BackArrow />
                    <Text style={styles.backText}>Home</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
                {/* Dummy Platzhalter für Layout */}
                <View style={styles.dummySpace}></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingTop: 10,
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 50,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingRight: 15,
    },
    backText: {
        fontSize: 17,
        color: '#4A90E2',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    dummySpace: {
        width: 70, // Platzhalter, um den Titel zu zentrieren
    }
});

export default Header;