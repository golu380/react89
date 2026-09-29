function ResultComponent({marks}){
    return(
        <>
        <div >
            {marks >= 40? (<p>Pass</p>):(<p>Fail</p>)
            }
         </div>

         <div>
            {marks >= 90 && (<p>Excelent performance</p>)}
         </div>

        </>
         
    )
}

export default ResultComponent;