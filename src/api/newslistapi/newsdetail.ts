export default async function newsdetail(props: { id: number }) {
  const response = await fetch(`https://api.finfellows.co.kr/policy-info/${props.id}`);
  const datas = await response.json();
  return datas;
}
