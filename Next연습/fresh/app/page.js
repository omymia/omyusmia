
export default function Home() {
  let name = 'park'
  let age = 20
  let link = 'http://google.com'
  return (
      <div>
        
        <h4 className="title">프레쉬마켓 {age}</h4>
        <p className="title-sub">by {name}</p>
        {/* <a href={link}>링크</a> */}
      </div>
  )
}

// /list로 접속하면 상품목록페이지 보여주기 
