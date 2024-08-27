// // cart page (referance incorporeate website)


// import React from 'react';
// import './cart.css';

// const Cart = () => {
//   return (
//     <div className="cart-container">
//       <h1 className="cart-title">Shopping Cart</h1>

//       <table className="cart-table">
//         <thead className='tests'>
//           <tr>
//             <th>Item</th>
//             <th>Price</th>
//             <th></th>
//           </tr>
//         </thead>
//         <thead className='tst'>
//           <tr>
//             <th>The Essentials</th>
//             <th>Modifed</th>
//             <th>Remove</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="cart-item">
//             <td className="cart-item-details">
//              {/* <div className='priceHeadingWithAction'>
//              <h2>The Essentials</h2>
//               <button className="cart-action-button">Remove</button>
//               <button className="cart-action-button">Modify</button>
//              </div> */}
//               <p>Employer Identification Number (EIN)</p>
//               <p>Corporate Kit</p>
//               <p>Annual Report Prep & File Enrollment, LLC, Indiana</p>
//               <p>Formation, LLC, Indiana</p>
//               <div className='priceTotal'>
//               <strong>TOTAL The Essentials</strong>
//               <p className="cart-price">$249.00</p>
//               </div>
//             </td>
           
           
          
          
        
//           </tr>
//         </tbody>
//       </table>

//       <div className="cart-summary">
//         <div className="cart-summary-header">
//           <h3>Package Options and Fees</h3>
//         </div>
//         <div className="cart-summary-item">
//           <p>Shipping and Handling Fee for Corporate Kit</p>
//           <p className="cart-summary-price">$9.95</p>
//         </div>
//         <div className="cart-summary-item">
//           <p>State Fee for Formation, LLC, Indiana (IN)</p>
//           <p className="cart-summary-price">$97.14</p>
//         </div>
//         <div className="cart-summary-item total">
//           <strong>TOTAL Package Options and Fees</strong>
//           <strong className="cart-summary-price">$107.09</strong>
//         </div>
//       </div>

//       <div className="cart-total">
//         <strong>Total</strong>
//         <p>$356.09</p>
//       </div>
//       <p className="cart-disclaimer">
//         Additional sales tax may apply based on a jurisdiction's applicable state, local tax laws, or both. If applicable, sales tax will be calculated at the time the order is processed.
//       </p>

//       <div className="cart-buttons">
//         <button className="cart-button continue-shopping">continue shopping</button>
//         <button className="cart-button checkout">checkout</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;






// import React from 'react';
// import './cart.css';

// const Cart = () => {
//   return (
//     <div className="cart-container">
//       <h1 className="cart-title">Shopping Cart</h1>

//       <table className="cart-table">
//         <thead className='cart-table-header'>
//           <tr>
//             <th>Item</th>
//             <th>Price</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="cart-item">
//             <td className="cart-item-details">
//               <h2>The Essentials</h2>
//               <p>Employer Identification Number (EIN)</p>
//               <p>Corporate Kit</p>
//               <p>Annual Report Prep & File Enrollment, LLC, Indiana</p>
//               <p>Formation, LLC, Indiana</p>
//               <div className="price-total">
//                 <strong>TOTAL The Essentials</strong>
//                 <p className="cart-price">$249.00</p>
//               </div>
//             </td>
//             <td className="cart-item-price"></td> {/* Empty td to maintain alignment */}
//             <td className="cart-item-actions">
//               <button className="cart-action-button">Modify</button>
//               <button className="cart-action-button">Remove</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>

//       <div className="cart-summary">
//         <div className="cart-summary-header">
//           <h3>Package Options and Fees</h3>
//         </div>
//         <div className="cart-summary-item">
//           <p>Shipping and Handling Fee for Corporate Kit</p>
//           <p className="cart-summary-price">$9.95</p>
//         </div>
//         <div className="cart-summary-item">
//           <p>State Fee for Formation, LLC, Indiana (IN)</p>
//           <p className="cart-summary-price">$97.14</p>
//         </div>
//         <div className="cart-summary-item total">
//           <strong>TOTAL Package Options and Fees</strong>
//           <strong className="cart-summary-price">$107.09</strong>
//         </div>
//       </div>

//       <div className="cart-total">
//         <strong>Total</strong>
//         <p>$356.09</p>
//       </div>
//       <p className="cart-disclaimer">
//         Additional sales tax may apply based on a jurisdiction's applicable state, local tax laws, or both. If applicable, sales tax will be calculated at the time the order is processed.
//       </p>

//       <div className="cart-buttons">
//         <button className="cart-button continue-shopping">continue shopping</button>
//         <button className="cart-button checkout">checkout</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;






import React from 'react';
import './cart.css';
import { useCartGlobally } from '../../contexts/cartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCartGlobally();

  // Calculate the subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);

  // Additional fees (same as in CartCard)
  const shippingFee = 20;
  const stateExpediteFee = 130;
  const stateFee = 10;
  const creditCardSurcharge = 10;

  // Calculate the total
  const total = subtotal + shippingFee + stateExpediteFee + stateFee + creditCardSurcharge;

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="emptyCartContainer">
        <p>Your cart is empty</p>
        {/* <img className="emptyCartImg" src="/img/emptyCart.png" alt="cart image" /> */}
        <button className='empty_continue_Shopping'>Continue Shopping</button>
      </div>
      
      ) : (
        <>
          <table className="cart-table">
            <thead className="cart-table-header">
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id} className="cart-item">
                  <td className="cart-item-details">
                    <h2>{item.heading}</h2>
                    <ul>
                      {item.list.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <div className="price-total">
                      <strong>TOTAL {item.heading}</strong>
                      <p className="cart-price">${item.price.toFixed(2)}</p>
                    </div>
                  </td>
                  <td className="cart-item-price"></td> {/* Empty td to maintain alignment */}
                  <td className="cart-item-actions">
                    <button className="cart-action-button" onClick={() => removeFromCart(item._id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <div className="cart-summary-header">
              <h3>Package Options and Fees</h3>
            </div>
            <div className="cart-summary-item">
              <p>Shipping and Handling Fee for Corporate Kit</p>
              <p className="cart-summary-price">${shippingFee.toFixed(2)}</p>
            </div>
            <div className="cart-summary-item">
              <p>State Expedite Fee for Formation, LLC, Illinois</p>
              <p className="cart-summary-price">${stateExpediteFee.toFixed(2)}</p>
            </div>
            <div className="cart-summary-item">
              <p>State Fee for Formation, LLC, Illinois</p>
              <p className="cart-summary-price">${stateFee.toFixed(2)}</p>
            </div>
            <div className="cart-summary-item total">
              <strong>TOTAL Package Options and Fees</strong>
              <strong className="cart-summary-price">${subtotal + shippingFee + stateExpediteFee + stateFee}</strong>
            </div>
          </div>

          <div className="cart-total">
            <strong>Total</strong>
            <p>${total.toFixed(2)}</p>
          </div>
          <p className="cart-disclaimer">
            Additional sales tax may apply based on a jurisdiction's applicable state, local tax laws, or both. If applicable, sales tax will be calculated at the time the order is processed.
          </p>

          <div className="cart-buttons">
            <button className="cart-button continue-shopping">Continue Shopping</button>
            <button className="cart-button checkout">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
