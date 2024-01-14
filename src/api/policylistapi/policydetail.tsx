const fetchPolicyDetail = async (policyInfoId: number) => {
  try {
    const response = await fetch(`https://api.finfellows.co.kr/policy-detail/${policyInfoId}`);
    const data = await response.json();
    // 정책 상세 데이터 처리 로직 작성
  } catch (error) {
    console.error('정책 상세 데이터를 가져오는 중 오류가 발생했습니다:', error);
  }
};
export default fetchPolicyDetail;
