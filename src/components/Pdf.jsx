import React from 'react';
import '../styles/Pdf.css';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';


// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    flexDirection: 'cloumn',
    backgroundColor: '#ffffffff',
    fontSize: 11,
    gap: 30,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,

  },
  basicInfo: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,

  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },

  mainTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  nameSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    fontWeight: '600',

  },
  containerSkill: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,

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
  github,
  educations,
  experiences,
  projects,
  skills }) => (

  <Document>
    <Page size="LETTER" style={styles.page}>

      <View style={styles.header}>
        <Text style={styles.title}>{firstName} {lastName}</Text>
        <View style={styles.basicInfo}>
          <Text  >{email} -</Text>
          <Text  >{phone} -</Text>
          <Text >{linkedIn} -</Text>
          <Text  >{github}</Text></View>
      </View>
      <View className={styles.container}>
        <Text style={styles.mainTitle}>Education</Text>
        <View style={styles.underline}></View>
        <View style={styles.container}>
          {educations.map((education) => (
            <View>
              <View key={education.id} style={styles.nameSection}>
                <Text style={styles.name} >{education.universityName}</Text>
                <Text style={styles.name}>{education.startDate} - {education.endDate}</Text>
              </View>
              <View>
                <Text>{education.degree}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View className={styles.container}>
        <Text style={styles.mainTitle}>Experience</Text>
        <View style={styles.underline}></View>
        <View style={styles.container}>
          {experiences.map((experience) => (
            <View>
              <View key={experience.id} style={styles.nameSection}>
                <Text style={styles.name} >{experience.position}</Text>
                <Text style={styles.name}>{experience.startDate} - {experience.endDate}</Text>
              </View>
              <View>
                <Text>{experience.companyName}</Text>
                <Text>{experience.jobDescription}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View className={styles.container}>
        <Text style={styles.mainTitle}>Projects</Text>
        <View style={styles.underline}></View>
        <View style={styles.container}>
          {projects.map((project) => (
            <View>
              <View key={project.id} style={styles.nameSection}>
                <Text style={styles.name} >{project.projectName}</Text>

              </View>
              <View>
                <Text>{project.projectDescription}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View className={styles.container}>
        <Text style={styles.mainTitle}>Skills</Text>
        <View style={styles.underline}></View>
        <View style={styles.containerSkill}>
          {skills.map((skill) => (

            <Text style={styles.name} >•{skill.skillName}  </Text>


          ))}
        </View>
      </View>


    </Page>
  </Document>
);

export default MyDocument;