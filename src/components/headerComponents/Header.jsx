import React from "react";
import AddTofavorite from "../microComponents/AddTofavarite";
import CartIcon from "../microComponents/CartIcon";


const Header =  () => {

    return (
        <>
        <header className="App-header">
        <div className="NavWrapper">
            <div className="brandWrapper">MagimArt</div>
             <div className="bigTitleWrap">
                    <p>
                        buy your favarite pokemon
                    </p>
             </div>
            <div className="miniCartAddFavouriteWrapper">
                <div className="addTowishList"> 
                     <AddTofavorite/>
                </div>
                <div className="addTowishList"> 
                     <CartIcon/>
                </div>
            </div>
        </div>
       
      </header>
        </>
    )
  }

  export default Header;
