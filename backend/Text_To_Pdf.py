import PyPDF2
from fpdf import FPDF


def Pdf_to_txt(pdf_file):
    pdfFileObj = open(pdf_file, 'rb')
    pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
    # print(pdfReader.numPages)
    pageObj = pdfReader.getPage(0)
    s = pageObj.extractText()
    pdfFileObj.close()
    return s

def Txt_to_Pdf(text):
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=15)
    pdf.cell(200, 10, txt=text,
             ln=1, align='C')
    pdf.output('new.pdf')
    # print(Pdf_to_txt('new.pdf'))


Txt_to_Pdf("cbhusdbhodinbrkwef htrjnrnrgtabh nmctmdtymnrgnrnrtmrm emthmftym tmgmtmty nmhrnm imtrtbhtrnrthtrnjytmyjk l m no p qr s tu  vw x yz")
print(Pdf_to_txt('new.pdf'))
