import React from "react";



export const SearhPokemon = ({handlerChange}) => {

    return (
               <>
                              {/* select country__________ */}
                              <div className="searchPokeWrapper">
                                        <span className="searchTitleWrapper">select pokemon </span>
                                            <div className="searcInputWrapper">
                                                <select className="searchInputField " 
                                                        required="required" 
                                                        id="searchpoke"
                                                        name=""  
                                                        value="" 
                                                        onChange={(e)=> handlerChange(e)}
                                                >
                                                    {
                                                        [  "Australia" , "Belgium", "Brazil", "Canada", "China ", "Denmark ", "Germany", 
                                                                "Hong Kong",  "Ireland ", "Italy ", "Japan ", "Luxembourg ", "Mexico ", "Netherlands", "Poland ", "Portugal", "Singapore",
                                                                "Uganda", "Tunisia", "United Kingdom ","Rassia", "Spain", "Tanzania","United States","Kenya",
                                                            ].map(country => (
                                                            <option key={country}
                                                            value={country}
                                                            > 
                                                                {country}
                                                            </option>

                                                        ))
                                                    }
                                                </select>

                                            </div>
                                    </div>
        </>
    )
}