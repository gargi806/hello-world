import {CDN_URL} from "../utils/constants.js"


const RestaurantCard=(props) =>{
    const {resData} = props;

    const{
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
    } = resData;

    return(
        <div className="res-card">
            <img className="res-img" src={ CDN_URL +  cloudinaryImageId}/>
             <h3>{name}</h3>
             <h4>{cuisines.join(",")}</h4>
             <h4>{avgRating}stars</h4>
             <h4>{costForTwo/100} For Two</h4>
        </div>
    )
    };

    export default RestaurantCard;