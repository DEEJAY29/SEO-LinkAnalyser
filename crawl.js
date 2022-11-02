function NormalizeURL(url){
    const url1=new URL(url)
    let fullurl=`${url1.host}${url1.pathname}`
    if(fullurl.length>0 && fullurl.slice(-1)==='/'){
        fullurl=fullurl.slice(0,-1)
    }
    return fullurl
}

module.exports={
    NormalizeURL
}