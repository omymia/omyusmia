import { useState } from 'react';

export default function Home() {
  const [buttonId, setButtonId] = useState(1); // 버튼의 초기 id 값 1

  const handleClick = async () => {
    const res = await fetch('/api/button', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: buttonId }),
    });
    const data = await res.json(); //응답 바디를 JSON 형식으로 파싱
    console.log(data);
    setButtonId(data.id); // 버튼 id state값 업데이트
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}