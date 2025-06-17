// // components/TicketFormPDF.js
// import React from 'react';
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: { padding: 30 },
//   section: { marginBottom: 10 },
//   heading: { fontSize: 18, marginBottom: 10 },
// });

// export const TicketFormPDF = ({ formData }) => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text style={styles.heading}>Ticket Requisition Form</Text>
//         <Text>Name: {formData.name}</Text>
//         <Text>Date: {formData.date}</Text>
//         <Text>Destination: {formData.destination}</Text>
//         <Text>Reason: {formData.reason}</Text>
//       </View>
//     </Page>
//   </Document>
// );
