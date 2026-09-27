import { jsPDF } from 'jspdf';
import { CONTACT_INFO, EXPERIENCE_DATA, EDUCATION_DATA, SKILLS_DATA, PROJECTS_DATA } from '../data/portfolioData';

/**
 * Downloads Phinihas Gandi's official resume in PDF format.
 * Uses a robust dual-strategy:
 * 1. Fetches the static high-res PDF and triggers a clean Blob URL download (no popup blocking).
 * 2. If blocked by iframe sandbox or network failure, dynamically generates an authoritative PDF via jsPDF.
 */
export async function downloadResumeFile(): Promise<void> {
  // Strategy 1: Fetch static PDF file as Blob
  try {
    const response = await fetch('/Phinihas_Gandi_Resume.pdf', { cache: 'no-cache' });
    if (response.ok) {
      const blob = await response.blob();
      if (blob.size > 2000) {
        triggerBlobDownload(blob, 'Phinihas_Gandi_Resume.pdf');
        return;
      }
    }
  } catch (err) {
    console.warn('Direct PDF fetch failed, switching to dynamic jsPDF engine:', err);
  }

  // Strategy 2: Client-side dynamic PDF generation via jsPDF
  try {
    generateAndDownloadPdfResume();
  } catch (genErr) {
    console.error('jsPDF generation error:', genErr);
    // Ultimate fallback: open in window or direct link
    const a = document.createElement('a');
    a.href = '/Phinihas_Gandi_Resume.pdf';
    a.download = 'Phinihas_Gandi_Resume.pdf';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

function triggerBlobDownload(blob: Blob, filename: string) {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 1500);
}

/**
 * Generates an executive, ATS-friendly curriculum vitae PDF matching Phinihas's resume
 */
export function generateAndDownloadPdfResume(): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4',
  });

  const margin = 40;
  const pageWidth = 595.28;
  const contentWidth = pageWidth - margin * 2;
  let y = 45;

  // Header: Name & Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text('PHINIHAS GANDI', margin, y);
  y += 18;

  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(14, 116, 144); // cyan-700
  doc.text('Software Engineer | AI/ML Engineer | Full-Stack Developer', margin, y);
  y += 16;

  // Contact Info row
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  const contactText = `Email: ${CONTACT_INFO.email}   |   Phone: ${CONTACT_INFO.phone}   |   Location: Hyderabad, India`;
  doc.text(contactText, margin, y);
  y += 12;

  const linksText = `LinkedIn: ${CONTACT_INFO.linkedin}   |   GitHub: ${CONTACT_INFO.github}`;
  doc.text(linksText, margin, y);
  y += 16;

  // Horizontal divider
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(1);
  doc.line(margin, y, margin + contentWidth, y);
  y += 16;

  // Section: Professional Summary
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('PROFESSIONAL SUMMARY', margin, y);
  y += 12;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const summary = 'Software Engineer with 1+ year of experience at Posidex Technologies, specializing in AI/ML application development, backend engineering, and full-stack development. Strong foundation in software engineering, object-oriented programming, database management, SQL, REST APIs, and problem-solving, with hands-on experience developing enterprise applications and AI-powered solutions.';
  const summaryLines = doc.splitTextToSize(summary, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 11 + 10;

  // Section: Work Experience
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('WORK EXPERIENCE', margin, y);
  y += 12;

  EXPERIENCE_DATA.forEach((exp) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${exp.company} — ${exp.location}`, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(14, 116, 144);
    const dateWidth = doc.getTextWidth(exp.period);
    doc.text(exp.period, margin + contentWidth - dateWidth, y);
    y += 12;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    doc.text(exp.role, margin, y);
    y += 11;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);
    exp.highlights.forEach((hl) => {
      const bullet = '• ';
      const bulletLines = doc.splitTextToSize(bullet + hl, contentWidth - 10);
      doc.text(bulletLines, margin + 8, y);
      y += bulletLines.length * 10.5 + 2;
    });
    y += 6;
  });

  // Section: Technical Skills
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('TECHNICAL SKILLS', margin, y);
  y += 12;

  SKILLS_DATA.forEach((cat) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(15, 23, 42);
    const label = `${cat.title}: `;
    doc.text(label, margin, y);
    const labelW = doc.getTextWidth(label);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const skillList = cat.skills.map((s) => s.name).join(', ');
    const skillLines = doc.splitTextToSize(skillList, contentWidth - labelW);
    doc.text(skillLines, margin + labelW, y);
    y += skillLines.length * 10 + 3;
  });
  y += 8;

  // Section: Education
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('EDUCATION', margin, y);
  y += 12;

  EDUCATION_DATA.forEach((edu) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(edu.degree, margin, y);

    const yearW = doc.getTextWidth(edu.period);
    doc.text(edu.period, margin + contentWidth - yearW, y);
    y += 10;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.text(`${edu.institution} | ${edu.gradeLabel}: ${edu.grade}`, margin, y);
    y += 12;
  });

  // Save the document
  const pdfBlob = doc.output('blob');
  triggerBlobDownload(pdfBlob, 'Phinihas_Gandi_Resume.pdf');
}
