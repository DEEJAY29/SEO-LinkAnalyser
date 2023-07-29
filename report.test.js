const {sortPages}=require('./report.js')
const {test,expect}=require('@jest/globals')

test(' check sorting',()=>{
    const input={"url1":{count:2,brokenurls:[]},
    "url2":{count:1,brokenurls:["fuck you"]},
    "url3":{count:5,brokenurls:["fuck you","fuck u too"]},
    "url4":{count:0,brokenurls:[]}}
    const processing=sortPages(input)
    const actual={
    "url4":{count:0,brokenurls:[]},
    "url2":{count:1,brokenurls:["fuck you"]},
    "url1":{count:2,brokenurls:[]},
    "url3":{count:5,brokenurls:["fuck you","fuck u too"]}}
    expect(processing).toEqual(actual)
})