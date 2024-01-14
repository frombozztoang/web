const fetchNewsListData = async () => {
  try {
    const response = await fetch('https://api.finfellows.co.kr/api/learn/edu?page=0&size=100&sort=string');
    const data = await response.json();
    const NewsListData = data.data.content;
    return NewsListData;
  } catch (error) {
    console.error('정책 데이터를 가져오는 중 오류가 발생했습니다:', error);
    return [];
  }
};

export default fetchNewsListData;
