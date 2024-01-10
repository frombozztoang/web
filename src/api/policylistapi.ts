fetch('http://api.finfellows.co.kr/policy-info?searchKeyword=wjada&page=0&size=1&sort=string', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => {
    // 정책 리스트를 처리하는 코드 작성
    console.log(data); // 가져온 데이터를 콘솔에 출력하는 예시
  })
  .catch((error) => {
    // 오류 처리하는 코드 작성
    console.error(error); // 오류 메시지를 콘솔에 출력하는 예시
  });
