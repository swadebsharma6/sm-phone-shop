import { useEffect, useState } from "react";
import FvPhone from "../../components/Favorite/FvPhone";


const Favorite = () => {

    const [favorites, setFavorites] = useState([]);

    const[noFound, setNoFound] = useState(false);

    const [isShowMore, setIsShowMore] = useState(false);
    

    useEffect(()=>{

        const favoriteItems = JSON.parse(localStorage.getItem('favorites'));

        if(favoriteItems){
            setFavorites(favoriteItems);
        
        }
        else{
            setNoFound('No data Found')
        }

    }, []);

    const handleRemove =() =>{
        localStorage.clear();
        setFavorites([]);
        setNoFound('No Data Found')
    }

 return (
 <div>
      {  noFound ?
         <p className="h-[70vh] flex justify-center items-center text-xl font-bold text-red-600">{noFound}
         </p> :
       <div>

       {favorites.length > 0 && <button onClick={handleRemove} className="btn btn-wide block mx-auto">Remove all Favorite</button> }
            
       <div className="grid md:grid-cols-2 gap-4">
          {
            isShowMore ?
            favorites.map(phone => <FvPhone key={phone.id}  phone={phone} ></FvPhone>)
            : 
            favorites.slice(0, 4).map(phone => <FvPhone key={phone.id}  phone={phone} ></FvPhone>)
        }
       </div>

       <div className="text-center py-5">
          {
            favorites.length > 2 && <button onClick={()=> setIsShowMore(!isShowMore)} className="btn btn-outline btn-primary">{isShowMore ? 'See Less' : 'See More'}</button>
          }
       </div>
            
            
 </div>

          }
        </div>
    );
};

export default Favorite;