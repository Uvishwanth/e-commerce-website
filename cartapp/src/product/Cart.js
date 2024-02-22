import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, decrementCount, removeItem } from '../redux/Features/cartSlice';
import { Link } from 'react-router-dom';
import { searchItem } from '../redux/Features/individualItem';

function Cart() {

  const cartItem = useSelector(state => state.cart.cart)

  const dispatch = useDispatch()

  const render = cartItem.map(item => {
    return (
      <div className=" d-flex justify-content-center align-item-center mt-4 mb-3" key={item.id}>
        <div className="card col-lg-7 col-md-10 col-sm-10 rounded">
          <Link to={`/${item.id}`} onClick={()=>{dispatch(searchItem({ id: item.id }))}} className='text-decoration-none text-dark-emphasis' style={{ 'cursor': 'pointer' }}>
            <div className="row g-2">
              <div className="col-sm-2 p-2" >
                <img className="card-image img-fluid object-fit-cover rounded-start h-xs-25" src={item.image} alt={item.title} />
              </div>
              <div className="col-md-8">
                <div>
                  <div className="card-body">
                    <div>
                      <h5 className="card-title" style={{
                        'display': '-webkit-box',
                        'WebkitLineClamp': '1',
                        'WebkitBoxOrient': 'vertical',
                        'overflow': 'hidden',
                        'height': '30px'
                      }} >{item.title}</h5>
                    </div>
                    <span className="">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <span className='mx-2'>{item.rating && Math.round(item.rating.rate)}</span>                    
                      <span className="px-3">${item.price} <strike>${Math.round(50 * Math.random() * item.price)}</strike>
                        <span className="pt-3">{(item.rating && item.rating.count >= 100) ? <h6 className="text-success">In stock</h6> : <h6 className="text-danger">Currently Unavailable</h6>}</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className="my-3 d-flex justify-content-center">
            <button className="me-2" onClick={() => { dispatch(decrementCount({ id: item.id })) }}>-</button>
            <span>{item.count}</span>
            <button className="ms-2" onClick={() => { dispatch(addCount({ id: item.id })) }}>+</button>
            <button className="ms-4" onClick={() => { dispatch(removeItem({ id: item.id })) }}>
              <i className="bi bi-trash"></i> Delete
            </button>
          </div>
        </div>
      </div>
    )
  }
  )

  return (
    <div>
      <div className="d-flex justify-content-center align-items-end mt-2">
        <Link to={`/`}><i className="fa fa-2x fa-home text-dark me-3"></i></Link>
        <div className="btn btn-danger me-3">Buy Now</div> <h6 className='ms-2'>Subtotal { }</h6>
      </div>
      {cartItem && render}
    </div>


  );
}

export default Cart;
