console.log(process.argv);


function main(){
    if(process.argv.length>3){
        console.log("More than one arguments passed")
    }
    if(process.argv.length>3){
        console.log("No argument passed")
    }
    const requrl=process.argv[2]
    console.log(`Now Crwaling on ${requrl}`)
}

main()