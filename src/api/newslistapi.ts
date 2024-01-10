async function fetchData() {
  const response = await fetch('http://api.finfellows.co.kr/api/learn/news', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  // 데이터를 사용하는 코드
}

fetchData();
