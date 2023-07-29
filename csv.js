const csv_writer=require('csv-writer').createObjectCsvWriter;
const {pagecrawler}=require('./crawl.js')

const csvWriter=csv_writer({
    path:'test.csv',
    header:[
        {id:'url',title:'URL'},
        {id:'internal',title:'Internal Links'},
        {id:'broken',title:'Broken Links'}
    ]
})

data=[
    {
        
    }
]

async function writer(){
    try{
        const pages = JSON.stringify(await pagecrawler(reqURL, reqURL,{}))
        const data=pages

        await csvWriter.writeRecords(data)
        console.log('The CSV file was written successfully')
    }catch(err){
        console.log(err.message)
    }
    return
}

module.exports=writer