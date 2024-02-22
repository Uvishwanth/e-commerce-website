
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/Features/prodSlice';
import { Link } from 'react-router-dom';
import { addCart } from '../redux/Features/cartSlice';
import { addItem, searchItem } from '../redux/Features/individualItem';

function Home() {
  const dispatch = useDispatch();
  const { status, data, error } = useSelector(state => state.products);
  const cartItem = useSelector(state => state.cart.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (status === 'fulfilled') {
      dispatch(addItem(data))
    }
  }, [dispatch, data, status])

  // console.log({data})

  const renderItems = () => {
    if (status === 'loading') {
      return (
        <div className="spinner-container mt-5">
          <div className="spinner"></div>
        </div>
      );
    } else if (status === 'fulfilled') {
      return data.map(item => ( // console.log(item),

        <div className="col-lg-3 col-md-4 col-sm-2" key={item.id}>
          <div className="item-card d-flex justify-content-center align-items-center">
            <div className="card my-4 shadow p-3 mb-5 bg-body-tertiary overflow-hidden"
              style={{ width: "18rem", 'height': '25rem', 'transform': 'scale' }}>
              <Link className='text-decoration-none text-dark' onClick={() => { dispatch(searchItem({ id: item.id })) }} to={`/${item.id}`}>
                <img src={item.image} className="card-img-top img-fluid" alt={item.category}
                  style={{ 'height': '200px', 'width': '18rem' }} />
                <div className="card-body" >
                  <p className="card-title"
                    style={{
                      'display': '-webkit-box',
                      'WebkitLineClamp': '2',
                      'WebkitBoxOrient': 'vertical',
                      'overflow': 'hidden',
                      'height': '45px'
                    }}>{item.title}</p>
                  <h6 className="card-text ">Price: $ {Math.round(item.price)}</h6>
                </div>
              </Link>
              <div className="d-flex justify-content-between">
                <button className="btn btn-danger w-100"
                  onClick={() => { dispatch(addCart(item)) }}>
                  Add to Cart
                  <i className="bi bi-cart ps-3"></i></button>
              </div>
            </div>
          </div>
        </div>
      ));
    } else if (status === 'rejected') {
      return <div>Error: {error}</div>;
    }
  };

  return (
    <div>
      <div className="container-fluid" >
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
           <Link to={`/login`} className='text-decoration-none text-dark d-flex align-items-center'>
              uppununthalavish<i className="fa fa-2x fa-user-circle"></i>
            </Link>
          </div>
        </div>


        <div className='container-xxl'>
          <div className="row pt-5">
            {renderItems()}
          </div>
        </div>
      </div>


    </div>
  );
}

export default Home;
