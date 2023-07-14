#!/usr/bin/env node
const {pagecrawler}=require('../crawl.js')
const {printpages}=require('../report.js')


async function main(){
    if(process.argv.length>3){
        console.log("More than one arguments passed")
        return
    }
    if(process.argv.length<3){
        console.log("No argument passed")
        return
    }
    const reqURL=process.argv[2]
    console.log(`Now Crwaling on ${reqURL}`)

    const {pages,externalurls} = await pagecrawler(reqURL, reqURL, {})

    printpages(pages,externalurls)
    console.log("------------------------END OF REPORT-------------------------------")
    console.log(`This programming ran for ${process.uptime()} seconds`)
}

main()