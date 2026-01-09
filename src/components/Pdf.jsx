import React from 'react';
import '../styles/Pdf.css';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';


// Create styles
const styles = StyleSheet.create({
  page: {
    margin: 30,
    flexDirection: 'cloumn',
    backgroundColor: '#ffffffff',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  basicInfo: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,

  },
  title: {
    fontSize: 24,
  },
  underline: {
    borderBottomWidth: 0.8,
    borderBottomColor: 'black',
    marginBottom: 2,
  },
});

// Create Document Component
const MyDocument = ({ firstName,
  lastName,
  email,
  phone,
  linkedIn,
  github }) => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>{firstName} {lastName}</Text>
        <View style={styles.basicInfo}>
          <Text  >{email}</Text>
          <Text  >{phone}</Text>
          <Text >{linkedIn}</Text>
          <Text  >{github}</Text></View>

      </View>
      <View style={styles.underline}></View>
      <View style={styles.section}>
        <Text>Hey</Text>

      </View>
    </Page>
  </Document>
);

export default MyDocument;