const {NormalizeURL,getHTMLURLs}=require('./crawl.js')
const {test,expect}=require('@jest/globals')

//NormalizeURL

test('check protocol' ,()=>{
    const inputurl='https://learnweb3.io'
    const processing=NormalizeURL(inputurl)
    const actualurl= 'learnweb3.io'
    expect(processing).toEqual(actualurl)
})

test( 'check slash'  ,()=>{
    const inputurl='https://learnweb3.io/'
    const processing=NormalizeURL(inputurl)
    const actualurl= 'learnweb3.io'
    expect(processing).toEqual(actualurl)
})

test('Check http',()=>{
    const inputurl='http://learnweb3.io'
    const processing=NormalizeURL(inputurl)
    const actualurl= 'learnweb3.io'
    expect(processing).toEqual(actualurl)
})

test('check case',()=>{
    const inputurl='https://leaRnwEb3.io'
    const processing=NormalizeURL(inputurl)
    const actualurl= 'learnweb3.io'
    expect(processing).toEqual(actualurl)

})

//getHTMLURLs

test('relative path check',()=>{
    const baseurl='https://learnweb3.io'
    const inputurl='<body><a href="/courses"><span>Learnweb3</span></a></body>'
    const processing=getHTMLURLs(inputurl,baseurl)
    const actualurl=['https://learnweb3.io/courses']
    expect(processing).toEqual(actualurl)
})

test('absolute path check',()=>{
    const baseurl='https://learnweb3.io'
    const inputurl='<body><a href="https://learnweb3.io/courses"><span>Learnweb3 courses"</span></a></body>'
    const processing=getHTMLURLs(inputurl,baseurl)
    const actualurl=['https://learnweb3.io/courses']
    expect(processing).toEqual(actualurl)
})

test('check broken links',()=>{
    const baseurl='https://learnweb3.io'
    const inputurl='<body><a href="courses"><span>Learnweb3</span></a></body>'
    const processing=getHTMLURLs(inputurl,baseurl)
    const actualurl=[]
    expect(processing).toEqual(actualurl)
})
test('check both ',()=>{
    const baseurl='https://learnweb3.io'
    const inputurl='<body><a href="https://learnweb3.io/courses"><span>Learnweb3 courses"</span></a><a href=/community><span>Learnweb3 courses</span></a></body>'
    const processing=getHTMLURLs(inputurl,baseurl)
    const actualurl=['https://learnweb3.io/courses','https://learnweb3.io/community']
    expect(processing).toEqual(actualurl)

})

