const pdfdocument=require("pdfkit");
const fs=require('fs');


const pdfdoc= new pdfdocument

const pdf=(Pages)=>{
    pdfdoc.pipe(fs.createWriteStream("testpdf.pdf"))
    const sortedarr=Object.keys(Pages)
      
        for (const sortedelement of sortedarr){
          const url = sortedelement
          const count = Pages[sortedelement].count
          const brokenurls=Pages[sortedelement].brokenurls
          pdfdoc.text(`Found ${count} internal links to ${url}`)
          if(brokenurls.length!==0){
            pdfdoc.text("Broken urls on this page are")
            pdfdoc.text(brokenurls)
          }
        }

    pdfdoc.end()
}

module.exports={pdf}