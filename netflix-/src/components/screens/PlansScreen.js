// import React, { useEffect, useState } from 'react';
// import db from '../Firebase';
// import "./PlansScreen.css";

// function PlansScreen() {
//     const [products, setProducts] = useState([]);
//     const user = userSelecor(selectuser);

//     useEffect(()=> {
//         db.collection('products')
//         .where('active', '==', true)
//         .get().then(querySnapshot => {
//             const products = {};
//             querySnapshot.forEach(async productDoc => {
//                 products[productDoc.id] = productDoc.data();
//                 const priceSnap = await productDoc.ref.collection('prices').get();
//                 priceSnap.docs.forEach(price=> {
//                     products[productDoc.id].prices ={
//                         priceId: price.id,
//                         priceData: price.data()

//                     }
//                 })
//             });
//             setProducts(products);
//         });
//     },[]);

//     const loadCheckout = async (priceId) => {
//         const docRef = await db.collection("customer").doc(user.uid).collection("checkout_sessions")
//         .add({
//             price: priceId,
//             success_url: window.location.original,
//             cancel_url: window.location.origin,
//         });
//         docRef.onSnapshot(async(snap) => {
//             const {error, sessionId } = snap.data();

//             if (error){
//                 alert(` An error occured: ${error.message}`);
//             }

//             if (sessionId) {
//                 // init stripe

//                 const stripe = await loadStripe()
//             }
//         })
//     };

//   return (
//     <div className='plansScreen'>
        // {Object.entries(products).map(([productId, productData]) => {
            // add some logic to check if the user's subscription is active ...
//         return(
//             <div className='plansScreen__plan'>
//                 <div className='plansScreen__info'>
//                     <h5>{productData.name}</h5>
//                     <h6>{productData.description}</h6>
//                 </div>

//                 <button onClick={()=>loadCheckout(productionData.prices.priceId)}>Subscribe </button>
//                 </div>
//         )
        
//             )};
//     </div>
//   )
// }

// export default PlansScreen