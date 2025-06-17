// // pages/index.js
// 'use client';
// import React, { useState, useRef } from 'react';
// import { PDFDownloadLink, pdf } from '@react-pdf/renderer';
// import { Document, Page } from 'react-pdf';
// import { TicketFormPDF } from '../components/TicketFormPDF';

// export default function Home() {
//   const [formData, setFormData] = useState({
//     name: '',
//     date: '',
//     destination: '',
//     reason: ''
//   });

//   const [blobUrl, setBlobUrl] = useState(null);

//   const generatePdf = async () => {
//     const doc = <TicketFormPDF formData={formData} />;
//     const asPdf = await pdf(doc).toBlob();
//     const url = URL.createObjectURL(asPdf);
//     setBlobUrl(url);
//   };

//   return (
//     <div>
//       <h1>Ticket Requisition</h1>
//       <input placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
//       <input placeholder="Date" onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
//       <input placeholder="Destination" onChange={(e) => setFormData({ ...formData, destination: e.target.value })} />
//       <textarea placeholder="Reason" onChange={(e) => setFormData({ ...formData, reason: e.target.value })} />

//       <button onClick={generatePdf}>Generate PDF</button>

//       {blobUrl && (
//         <div style={{ marginTop: 20 }}>
//           <h3>PDF Preview</h3>
//           <Document file={blobUrl}>
//             <Page pageNumber={1} />
//           </Document>
//           <a href={blobUrl} download="ticket_requisition.pdf">Download PDF</a>
//         </div>
//       )}
//     </div>
//   );
// }
