import { useState, useMemo, useCallback, useRef } from 'react';

const getAvg = (nums) => {
  console.log('평균값 계산 중');
  if (nums.length === 0) return 0;
  const sum = nums.reduce((a, b) => a + b);
  console.log(sum / nums.length);
  return sum / nums.length;
};

function AvgUseRef() {
  const [list, setList] = useState([]);
  const [num, setNum] = useState('');
  const inputE1 = useRef(null);

  const onChange = useCallback((e) => {
    setNum(e.target.value);
  }, []); // => 컴포넌트가 처음 렌더링 될 때만 생성

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(num));
    setList(nextList);
    setNum('');
    inputE1.current.focus();
  }, [num, list]); // num 혹은 list가 바뀌었을 때만 생성

  const avg = useMemo(() => getAvg(list), [list]);

  return (
    <div>
      <input value={num} onChange={onChange} ref={inputE1} />
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

export default AvgUseRef;
