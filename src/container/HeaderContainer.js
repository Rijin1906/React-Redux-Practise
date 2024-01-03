import Header from"../components/Header";
import{connect} from "react-redux"
// import{addToCart} from "../services/actions/Action"


const mapStateToProps=state=>({
    // removeToCartHandler:data=>dispatch(addToCart(data))
    cardData:state.cardItems

    // state ke andar hume cardData mil raha hai reducer.js se. Fir yeah data hum Home component me pass kar rahe hai.
})
const mapDispatchToProps=dispatch=>({
    // addToCartHandler:data=>dispatch(addToCart(data))
})
// export default Home;
export default connect (mapStateToProps,mapDispatchToProps)(Header);