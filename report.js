// printReport takes a dictionary of pages and prints them
// to the console in a human-friendly way
function printpages(pages){
  console.log('==========')
  console.log('REPORT')
  console.log('==========')
  const sortedPages = sortPages(pages)
  const sortedarr=Object.keys(sortedPages)

  for (const sortedelement of sortedarr){
    const url = sortedelement
    const count = sortedPages[sortedelement].count
    const brokenurls=sortedPages[sortedelement].brokenurls
    console.log(`Found ${count} internal links to ${url}`)
    if(brokenurls.length!==0){
      console.log("Broken urls on this page are")
      console.log(brokenurls)
    }
  }
}

// sortPages sorts a dictionary of pages
// into a list of tuples (url, count)
// with the highest counts first in the list

/*function sortPages(pages){
  // 2D array where the
  // inner array: [ url, count ]
  const pagesArr = Object.entries(pages)
  pagesArr.sort((pageA, pageB) => {
    return pageB[1] - pageA[1]
  })
  return pagesArr
}
*/

function sortPages(pages){
  const sortedarr={}
  const arr=Object.keys(pages).sort((p1,p2)=>{
    return pages[p2][0]-pages[p1][0]
  })

  arr.forEach((key)=>{
    sortedarr[key]=pages[key]
  })

  return sortedarr
}

module.exports = {
  printpages,
  sortPages,
}