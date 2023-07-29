const csv_writer=require('csv-writer').createObjectCsvWriter;

const csvWriter=csv_writer({
    path:'test.csv',
    header:[
        {id:'url',title:'URL'},
        {id:'internal',title:'Internal Links'},
        {id:'broken',title:'Broken Links'}
    ]
})




async function Writer(pages){
    data=[]
    pagekey=Object.keys(pages)
    try{
        for(url of pagekey){
            data.push({url:url,
                internal:pages[url].count,
                broken:pages[url].brokenurls})
        }
        await csvWriter.writeRecords(data)
        console.log('The CSV file was written successfully')
    }catch(err){
        console.log(err.message)
    }
    return
}

module.exports={Writer}