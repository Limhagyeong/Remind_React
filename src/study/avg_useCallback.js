import { useState, useMemo, useCallback } from 'react';

// 리렌더링 시 함수 재호출 하는 것이 아닌 재사용 (성능 최적화를 위해 사용)

const getAvg = (nums) => {
  console.log('평균값 계산 중');
  if (nums.length === 0) return 0;
  const sum = nums.reduce((a, b) => a + b);
  console.log(sum / nums.length);
  return sum / nums.length;
};

function AvgUseCallback() {
  const [list, setList] = useState([]);
  const [num, setNum] = useState('');

  const onChange = useCallback((e) => {
    setNum(e.target.value);
  }, []); // => 컴포넌트가 처음 렌더링 될 때만 생성

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(num));
    setList(nextList);
    setNum('');
  }, [num, list]); // num 혹은 list가 바뀌었을 때만 생성

  const avg = useMemo(() => getAvg(list), [list]);

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
        {avg}
      </div>
    </div>
  );
}

export default AvgUseCallback;
