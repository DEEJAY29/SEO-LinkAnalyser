const {JSDOM}=require('jsdom')

function NormalizeURL(url){                                  //normalizing the url so that all urls are deemed to be same
    const url1=new URL(url)                                   // ex- www.GOOgle.com
    let fullurl=`${url1.host}${url1.pathname}`                //     www.google.com/
    if(fullurl.length>0 && fullurl.slice(-1)==='/'){          //     www.google.com
        fullurl=fullurl.slice(0,-1)                           // all the above urls are same 
    }
    return fullurl
}

async function pagecrawler(base_url,current_url,totalpages){
    console.log(`Now crawling ${current_url}...`)

    const baseobject=new URL(base_url)
    const currentobject =new URL(current_url)
    if(currentobject.hostname!==baseobject.hostname){             //checking if the function has moved out from the base domain
        console.log("External link, exiting...")
        return
    }

    const normalizeurl=NormalizeURL(current_url)

    if (totalpages[normalizeurl]>1){                              //if the page has already been traversed this implies an entry 
        totalpages[normalizeurl]++                                // already exists,hence updating the entry and returning the func
        return
    }

    totalpages[normalizeurl]=1                                    // creating entry for new page



    htmlbody=''
    try{                                                                   //extracting the html body of the page through a request
        const webpage=await fetch(current_url)
        if (webpage.status>399){
            console.log(`HTTP error- code ${webpage.status}`)
            return 
        }
        const type=webpage.headers.get('content-type')
        if(type!=='text/html'){
            console.log("Doesn't contain text/html content" )
            return
        }
        htmlbody=webpage.text
    }
    catch(err){
        console.log(err.message)
    }

    const nextpages=getHTMLURLs(htmlbody,base_url)                 //extracts all urls from the current html body of the page
    for(const page of nextpages){
        totalpages=await pagecrawler(base_url,page,totalpages)           //calling recursive func on all the links in all further pages
    }
    return totalpages
}

function getHTMLURLs(htmlbdy,base){                  //extracts all urls from the html body and pushes them into an array
    const urls=[]
    const doc=new JSDOM(htmlbdy)
    const elements=doc.window.document.querySelectorAll("a")
    for(element of elements){
        if(element.href.slice(0,1)==='/'){
            try{urls.push(new URL(element.href,base))                   //converts relative urls to absolute urls
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
    getHTMLURLs,
    pagecrawler
}