const ShimmerUi=()=>{
    return(
     <div className="restorent-list" data-testid="shimmer">
       {Array(10).fill("").map((e,index)=>(<div key={index} className="shimmer-card">
       </div>
))}
       
     </div>

    )
}
export default ShimmerUi


// https://formik.org/
// use forms use this library