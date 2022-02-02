import React from "react";

const ViewPokomonInfo =  ({result}) => {

    return (
        <>
         <div className="viewWrapper">
          
              <div className="viewHeaderWrapper 15">
                        <h1 className="hOne">{result.cardItems.name}</h1>
              </div>
             <div className="viewGroup  70">
                <div className="viewImageWrapper">
                    <img src={result.cardItems.sprites.other.dream_world.front_default}
                       />                    
                </div>
                <div className="viewContentWrapper"> 
                    <div className="buttonWrapper">
                         <button className="addBtnWrapper">
                             price : €<span>{result.cardItems.weight+3}</span>
                         </button>
                         <button className="buyBtnWrapper">
                             add <span>to favourite</span>
                         </button>
                    </div> 
                {console.log(result)}                
                 <section className="sectionWrapper" >
                     <span className="infoOne">weight: <span className="pokeWeight">{result.cardItems.weight}</span></span>   
                     <span className="infoOne">height: <span className="pokeWeight">{result.cardItems.height}</span></span>   

                     <span className="infoThree">experience: {result.cardItems.base_experience}</span>       
                  </section>
                  <section className="sectionMovesWrapper">
                     <span className="infFour">moves : <span className="pokeWeight">
                         {result.cardItems.moves.slice(0, 6).map((el,i) => <span className="pokeMoves" key={i}> <span className="arrayWrap">[</span>{el.move.name}<span className="arrayWrap">]</span></span> )}</span>
                     </span>   
                  </section>
               </div>      
             </div> 
             <div className="viewFooterWrapper">                  
                 <footer className="innerFooterWrapper" >
                     poke infos          
                  </footer>
              </div>      
         </div>
        </>
    )
  }

  export default ViewPokomonInfo;