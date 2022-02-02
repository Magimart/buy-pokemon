import React from "react";


const Card = ({result, paginate}) => {


    return ( 
                   <>
                        <div className="cardGroup">
                        <div className="imageWrapper"
                        >
                            <div className="pokeImage">
                               <img className="pokeCardImage"
                                 src={result?result.cardItems.sprites.front_default:"no preview"}/>
                           </div>                                               
                        </div>
                        <div className="contentWrapper">
                            <h2>{result.cardItems.name}</h2>
                            <span>
                               type: {result.cardItems.types[0].type.name}
                            </span>
                        </div>
                        <div className="footerWrapper">                            

                            <div id="" className="next relative mx-4 " onClick={() => paginate(1)}>
                                    {"next"}
                            </div>
                            <div className="prev relative  mx-4" onClick={() => paginate(-1)}>
                                {"prev"}
                            </div>
                        </div>
                    </div>
              </>
    )
}
export default Card;