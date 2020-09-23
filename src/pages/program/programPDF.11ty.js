const PDFDocument = require("pdfkit");
const fs = require("fs");

const pdf = new PDFDocument();

class Render {
  data() {
    return {
      permalink: "/program/program.pdf",
    };
  }

  render(data) {
    pdf.fontSize(30);
    pdf.text("Program", { align: "center" });
    pdf.moveDown();

    data.program.forEach((day) => {
      pdf.fontSize(20);
      pdf.text(day.title, { columns: 2, lineGap: 2.5 });

      pdf.fontSize(15);
      day.events.forEach((event) => {
        pdf.text(`${event.time} - ${event.title}`, { lineGap: 3.5 });
      });
      pdf.moveDown(1);
    });

    // pdf.pipe(fs.createWriteStream(data.page.outputPath));
    // pdf.end();
  }
}

module.exports = Render;
