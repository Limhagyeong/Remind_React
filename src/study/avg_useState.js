import { useState } from 'react';

/** getAvg()의 불필요한 호출이 일어남
 *  => 평균값을 업데이트할 필요가 없는 경우에도 getAvg를 호출하게됨
 */

const getAvg = (nums) => {
  console.log('평균값 계산 중');
  if (nums.length === 0) return 0;
  const sum = nums.reduce((a, b) => a + b);
  console.log(sum / nums.length);
  return sum / nums.length;
};

function AvgUseState() {
  const [list, setList] = useState([]);
  const [num, setNum] = useState('');

  const onChange = (e) => {
    setNum(e.target.value);
  };

  const onInsert = () => {
    const nextList = list.concat(parseInt(num));
    setList(nextList);
    setNum('');
  };

  return (
    <div>
      <input value={num} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <p>평균값: </p>
        {getAvg(list)}
      </div>
    </div>
  );
}

export default AvgUseState;
