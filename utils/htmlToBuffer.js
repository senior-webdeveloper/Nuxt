import htmlPdf from "html-pdf";

const defaultOptions = {
  border: {
    top: '.5in',
    bottom: '.5in',
    left: '1in',
    right: '1in'
  },
  format: "Letter",
  footer: {
    contents: {
      default:
        '<div style="font-size: 10px; text-align: right">{{page}}/<strong>{{pages}}</strong></div>'
    }
  },
  
  childProcessOptions: {
    env: {
      OPENSSL_CONF: '/dev/null',
    },
  }
  
};

export const htmlToBuffer = (markup, options = defaultOptions) => {
  return new Promise((resolve, reject) => {
    htmlPdf.create(markup, options).toBuffer(function(err, buffer) {
      if (err) return reject(err);
      return resolve(buffer);
    });
  });
};


// index.js
// const puppeteer = require("puppeteer");


// export const htmlToBuffer = async (markup) => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.setContent(markup)
//   const buffer = await page.pdf({ format: "A4" });
//   await browser.close();
//   return buffer;
// }


// export const htmlToBuffer = async (markup) => {
//   var doc = new jsPDF();
//   await doc.html(markup, {
//     callback: async function (doc) {
//       await doc.save();
//     },
//   });
//   return doc
// }