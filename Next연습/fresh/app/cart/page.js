import {age, name} from './data.js'

// 'use client'

export default function Cart() {
    return (
        <div>
            <h4 className="title">Cart</h4>
            <div className="cart-item">
                <p>상품명{age}</p>
                <p>$40</p>
                <p>1개</p>
            </div>
            <CartItem/>
        </div>
    )
}

//컴포넌트 생성 -->아무데서나 대충 만든 컴포넌트는 server component가 된다 하지만 상단에 'use client'라고 적으면 client component가 된다 
function CartItem(props){
    return(
       <div className="cart-item">
         <p>상품명</p>
         <p>$40</p>
         <p>1개</p>
       </div>
    )
}