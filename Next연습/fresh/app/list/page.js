// import Image from "next/image"
// import 작명 from '/public/banana.jpg'

export default function List() {
   let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
//    let 어레이 = [2,3,4]
//    어레이.map(function(){})
//    어레이.map((a)=>{
//     return 10
//    })

//    let b = 어레이.map((a)=>{
//     return 10
//    })
//    console.log(b)

    return (
        <div>
          <h4 className="title">상품 목록 </h4>
          {
            상품.map((a, i)=>{
                return (
                    <div className="food" key={i}>
                        <img src={`/food${i}.jpg`} className="food-img" />
                       <h4>{상품[i]} $40</h4>
                    </div>
                )
            })
          }
          {/* <div className="food">
            <h4>{상품[0]} $40</h4>
          </div>
          <div className="food">
            <h4>{상품[1]} $40</h4>
          </div>
          <div className="food">
            <h4>{상품[2]} $40</h4>
          </div> */}

        </div>
    )
  }

  // /list로 접속 