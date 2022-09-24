import PyPDF2

def Pdf_to_txt(pdf_file):
    pdfFileObj = open(pdf_file, 'rb')
    pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
    print(pdfReader.numPages)
    pageObj = pdfReader.getPage(0)
    s = pageObj.extractText()
    pdfFileObj.close()
    return s
