import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/Features/cartSlice";
import { Link } from 'react-router-dom';

function IndividualItem() {

  const item = useSelector(state => state.individualItem.item)
  const cartItem = useSelector(state => state.cart.cart);
  const dispatch = useDispatch()

  console.log(item)

  return (
    <div className=" container-xxl col-lg-12 col-md-8 col-xs-8 border-danger vh-100 ">
      {/* <div className="container d-flex justify-content-between align-items-center position-fixed z-3" style={{ backgroundColor: 'antiquewhite' }}>
       
      </div> */}
       <div className="row w-100 pt-1 px-lg-3 z-3 position-fixed" style={{ backgroundColor: 'antiquewhite' }}>
          <div className="col-lg-2 col-xs-3">
            <Link to={`/`} className='text-decoration-none text-dark'><i className="d-none d-md-block fs-2 ms-3 text-decoration-none text-dark">GoCart<i class="fa-solid fa-truck-fast"></i></i></Link>
          </div>
          <div className="col-lg-10 col-xs-9 py-1 d-flex justify-content-around align-items-center">
            <input type="text" placeholder="Search Item" className="w-50 col-lg-8 h-100" />
            <span className="cart-icon" data-toggle="tooltip" data-placement="bottom d-none d-md-block" title="Open Cart">
              <Link to="/cart" className='text-dark'>
                <i className="fa-solid fa-cart-plus"></i>
                <span className="cart-badge">{cartItem.length}</span>
              </Link>
            </span>
            <a href="/" className="text-dark ">
              <i className="fa fa-2x fa-user-circle"></i>
            </a>
          </div>
        </div>
      <div className="row ">
        <div className="py-3 col-lg-6 col-md-6 rounded-top d-flex justify-content-center align-items-center vh-100 custom-class">
          <img src={item.image} className="img-fluid h-50 h-xs-25 " alt={item.title} />
        </div>

        <div className="py-5 col-lg-6 col-md-6 rounded-top d-flex align-items-center align-items-xs-baseline">
          <div>
            <div className="d-flex justify-content-between py-3">
              <button className="btn btn-danger"
                onClick={() => { dispatch(addCart(item)) }}>
                Add to Cart
                <i className="bi bi-cart ps-3"></i></button>
            </div>
            <h4>{item.title} | <span>{item.category}</span></h4>
            <span className="">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <span className="mx-2">{item.rating && Math.round(item.rating.rate)}</span>
              <span className="px-3">${item.price} <strike>${Math.round(50 * Math.random() * item.price)}</strike>
                <span className="pt-3">{(item.rating && item.rating.count >= 100) ? <h6 className="text-success">In stock</h6> : <h6 className="text-danger">Currently Unavailable</h6>}</span>
              </span>
            </span>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default IndividualItem;

