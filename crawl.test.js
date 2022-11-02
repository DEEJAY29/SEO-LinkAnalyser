const {NormalizeURL}=require('./crawl.js')
const {test,expect}=require('@global/jest')

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