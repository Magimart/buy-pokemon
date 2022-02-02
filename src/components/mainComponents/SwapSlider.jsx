import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import ViewPokomonInfo from "../microComponents/ViewPokemonInfo";
import Card from "../microComponents/Card";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};





export const SwapSlide = ({allPokemons}) => {

    const [limitedPokes, setLimitedPokes] = useState([]) 
    const [selectedPokes, setSelectedPokes] = useState("")
    const [[page, slideDirection], setSlideDirection] = useState([0, 0]);



    useEffect(() => {   
            setLimitedPokes(() => allPokemons && allPokemons.sort(() => 0.5 - Math.random()).slice(0, 20))    
       },[allPokemons, selectedPokes])
      
          

      const paginate = (newDirection) => {
            setSlideDirection([page + newDirection, newDirection]);
                 setSelectedPokes("")  //vry last        
      };

   
      const onChangeHandler = (e) => {
        return (
          setSelectedPokes(e.target.value)
        )
      }
     


      return ( 
            <>
              {

               limitedPokes && limitedPokes.length ?( [...limitedPokes].reduce((result, data, i, arr) => {

                    const contentIndex =  wrap(0, arr.length, page);
                    const getItemByIndex =  arr.find((el, index) => typeof el.name === "string" &&  index === contentIndex);



                  result = {
                        cardItems: getItemByIndex,
                        selectItems: arr.map(poke=>poke.name)
                  }


                  return (
                            <>
                              <AnimatePresence initial={false} custom={slideDirection} >
                                <div className="pokeWrapper 
                                "
                              >
                                <React.Fragment key={i}>
                                
                                  <div className=" sliderWrapper 
                                  ">
                                    <div className="leftWrapper">
                                    <motion.div
                                          key={page}
                                      >  
                                          <div className="cardWrapper  thumb-container">

                                            <div>
                                                                                  {/* select country__________ */}
                                              <div className="searchPokeWrapper">
                                                <span className="searchTitleWrapper">select pokemon </span>
                                                    <div className="searcInputWrapper">
                                                        <select className="searchInputField " 
                                                                required="" 
                                                                id="searchpoke"
                                                                placeholder="select pokemon"
                                                                name="selectedPokemon"  
                                                                value={selectedPokes} 
                                                                onChange={(e) => onChangeHandler(e)}
                                                        >
                                                            {
                                                              result? ( result.selectItems.map((pokemon, i) =>{ 
                              
                                                                return (
                                                                  <option key={i}
                                                                  > 
                                                                    {pokemon}                                                          
                                                                  </option>
                                                                )}
                                                                  )
                                                                ) : "no pokes fetched"
                                                            }
                                                        </select>
                                                    </div>
                                            </div>

                                                {/* end select poke */}
                                              </div>
                                                 <Card result={result} paginate={paginate}/>
                                            </div>
                                      </motion.div>
                                    </div>
                                    <div className="rightWrapper">
                                        <ViewPokomonInfo result={result}/>
                                    </div>
                                    </div>
                                </React.Fragment>
                                </div>
                                </AnimatePresence>
                            </>
                  )           
              },[])
                 ): ""
              }
            </>
         )
}  
       


