const fetchPolicyData = async () => {
  try {
    const response = await fetch('https://api.finfellows.co.kr/policy-info?page=0&size=100&sort=string');
    const data = await response.json();
    const policyData = data.data.content;
    return policyData;
  } catch (error) {
    console.error('정책 데이터를 가져오는 중 오류가 발생했습니다:', error);
    return [];
  }
};

export default fetchPolicyData;
