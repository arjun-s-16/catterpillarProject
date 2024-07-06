// GenerateCombinedPDF.jsx

import React, { useContext } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import DataContext from './DataContext';
import { Button } from '@chakra-ui/react';

function GeneratePDF() {
  const { formData } = useContext(DataContext);

  const head = {
    "leftFrontPressure": "Tires",
    "make": "Battery",
    "rustDentDamage": "Exterior",
    "fluidLevel": "Brakes",
    "rusDentDamage": "Engine",
    "Name": "Feedback"
  }

  const generateCombinedPdf = () => {
    const doc = new jsPDF();
    const tableColumn = ['Field', 'Value'];
    
    formData.forEach((data, index) => {
      let tableRows = [];
  
      // Extract the first key-value pair for the heading
      const firstKey = Object.keys(data)[0];
      const heading = "Report for "+head[firstKey];
  
      // Remove the first key-value pair from data
      delete data[firstKey];
  
      // Iterate over each key-value pair in the current data object
      Object.entries(data).forEach(([key, value]) => {
        tableRows.push([key, value]);
      });
  
      // Add a separator between tables except for the last one
      if (index !== formData.length - 1) {
        tableRows.push(['', '']); // Separator between forms
      }
  
      // Add heading text
      doc.setFontSize(16);
      doc.text(heading, 14, index === 0 ? 10 : doc.previousAutoTable.finalY + 20);
  
      // Add table
      doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: index === 0 ? 20 : doc.previousAutoTable.finalY + 30, // Start position for each table
      });
    });
    
    doc.save('combined_forms.pdf');
  };

  return (
    <div>
      <Button onClick={generateCombinedPdf}>Generate Combined PDF</Button>
    </div>
  );
}

export default GeneratePDF;
