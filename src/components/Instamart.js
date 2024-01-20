import { useState } from "react"

const Section=({title,description,isVisible,setIsVisible})=>{

    // for hide and unhide
    // accordian
    // const[isVisible,setIsVisible]=useState(false)


    return (
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {isVisible? (
                 <button onClick={()=>setIsVisible(false)} className="cursor-pointer underline">Hide</button>
       
            ):(
                <button onClick={()=>setIsVisible(true)} className="cursor-pointer underline">show</button>
            )}

                {/* jab isvisible true hoga tb hi ye render hoga. */}
         { isVisible && <p>{description}</p>}
            </div>
        
    )
}

const Instamart=()=>{
    // setisvisible  cotrols what is visible true or false.
    const[visibleSection,setVisibleSection]=useState("about")
    return(
    <div>
        {/* alag alg componnet ki need nhi h  ase hi hm props use krje secyion me hi sb bna lenge. */}
        <h1 className="text-3xl p-2 m-2 font-bold">Intamart</h1>
        <Section title={"About Instamart"}
        description={"this is the about section of instamart  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."}
        isVisible={visibleSection==="about"}
        setIsVisible={()=>setVisibleSection("about")}/>

<Section title={"TeamInstamart"}
        description={"this is the Team of instamart   Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."}
        isVisible={visibleSection==="team"}
        setIsVisible={()=>setVisibleSection("team")}/>




<Section title={"Carrer"}
        description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."}
        isVisible={visibleSection==="carrer"}
        setIsVisible={()=>setVisibleSection("carrer")}/>

        
<Section title={"school"}
        description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."}
        isVisible={visibleSection==="school"}
        setIsVisible={()=>setVisibleSection("school")}/>



<Section title={"product"}
        description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."}
        isVisible={visibleSection==="product"}
        setIsVisible={()=>setVisibleSection("product")}/>

<Section title={"detail"}
        description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."}
        isVisible={visibleSection==="detail"}
        setIsVisible={()=>setVisibleSection("detail")}/>

     {/* <AboutInstaMart/>
     <DetailsOfInstamart/>
     <TeamInstamart/>
     <Product/>
     <Careers/> */}
     </div>
     )
}
export default Instamart;







// lengthy way to add new  component


// import { useState } from "react"

// const Section=({title,description,isVisible,setIsVisible})=>{

//     // for hide and unhide
//     // accordian
//     // const[isVisible,setIsVisible]=useState(false)


//     return (
//         <div className="border border-black p-2 m-2">
//             <h3 className="font-bold text-xl">{title}</h3>
//             {isVisible? (
//                  <button onClick={()=>setIsVisible(false)} className="cursor-pointer underline">Hide</button>
       
//             ):(
//                 <button onClick={()=>setIsVisible(true)} className="cursor-pointer underline">show</button>
//             )}

//                 {/* jab isvisible true hoga tb hi ye render hoga. */}
//          { isVisible && <p>{description}</p>}
//             </div>
        
//     )
// }

// const Instamart=()=>{
//     const[sectionConfig,setSectionConfig]=useState({
//         showAbout:false,
//         showTeam:false,
//         showCareers:false,
//         showSchool:false,
//         showProduct:false,
//         showDetails:false,
//     })
//     return(
//     <div>
//         {/* alag alg componnet ki need nhi h  ase hi hm props use krje secyion me hi sb bna lenge. */}
//         <h1 className="text-3xl p-2 m-2 font-bold">Intamart</h1>
//         <Section title={"About Instamart"}
//         description={"this is the about section of instamart  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."}
//         isVisible={sectionConfig.showAbout}
//         setIsVisible={()=>setSectionConfig({
//             showAbout:true,
//             showTeam:false,
//             showCareers:false,
//             showSchool:false,
//             showProduct:false,
//             showDetails:false,
//         }

//         )}/>

// <Section title={"TeamInstamart"}
//         description={"this is the Team of instamart   Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."}
//         isVisible={sectionConfig.showTeam}
//         setIsVisible={()=>setSectionConfig({
//             showAbout:false,
//             showTeam:true,
//             showCareers:false,
//             showSchool:false,
//             showProduct:false,
//             showDetails:false,
//         }

//         )}/>




// <Section title={"Carrer"}
//         description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."}
//         isVisible={sectionConfig.showCareers}
//         setIsVisible={()=>setSectionConfig({
//             showAbout:false,
//             showTeam:false,
//             showCareers:true,
//             showSchool:false,
//             showProduct:false,
//             showDetails:false,
//         }

//         )}/>

        
// <Section title={"school"}
//         description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."}
//         isVisible={sectionConfig.showSchool}
//         setIsVisible={()=>setSectionConfig({
//             showAbout:false,
//             showTeam:false,
//             showCareers:false,
//             showSchool:true,
//             showProduct:false,
//             showDetails:false,
//         }

//         )}/>



// <Section title={"product"}
//         description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."}
//         isVisible={sectionConfig.showProduct}
//         setIsVisible={()=>setSectionConfig({
//             showAbout:false,
//             showTeam:false,
//             showCareers:false,
//             showSchool:false,
//             showProduct:true,
//             showDetails:false,
//         }

//         )}/>

// <Section title={"detail"}
//         description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."}
//         isVisible={sectionConfig.showDetails}
//         setIsVisible={()=>setSectionConfig({
//             showAbout:false,
//             showTeam:false,
//             showCareers:false,
//             showSchool:false,
//             showProduct:false,
//             showDetails:true,
//         }

//         )}/>

//      {/* <AboutInstaMart/>
//      <DetailsOfInstamart/>
//      <TeamInstamart/>
//      <Product/>
//      <Careers/> */}
//      </div>
//      )
// }
// export default Instamart;