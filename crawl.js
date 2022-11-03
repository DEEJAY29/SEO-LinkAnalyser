const {JSDOM}=require('jsdom')

function NormalizeURL(url){
    const url1=new URL(url)
    let fullurl=`${url1.host}${url1.pathname}`
    if(fullurl.length>0 && fullurl.slice(-1)==='/'){
        fullurl=fullurl.slice(0,-1)
    }
    return fullurl
}

function getHTMLURLs(htmlbdy,base){
    const urls=[]
    const doc=new JSDOM(htmlbdy)
    const elements=doc.window.document.querySelectorAll("a")
    for(element of elements){
        if(element.href.slice(0,1)==='/'){
            try{urls.push(new URL(element.href,base))
            }
            catch(error){
                console.log(`${error.message}:${element.href}`)
            }
        }
        else{
            try{urls.push(new URL(element.href))
            }
            catch(error){
                console.log(`${error.message}:${element.href}`)
            }

        }
    }
    return urls

}

module.exports={
    NormalizeURL,
    getHTMLURLs
}