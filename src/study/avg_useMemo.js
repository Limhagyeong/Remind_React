import { useState, useMemo } from 'react';

/** useMemo 사용 목적
 *
 *  캐시 느낌으로 컴포넌트의 성능최적화와 상태관리를 위해 사용
 *  => 특정 로직이 불필요하게 반복되지 않도록 제어
 *
 * 렌더링 시점과 의존성 변경을 기준으로 계산 로직을 실행하고 값이 변경되지 않으면 캐싱된 값 제공
 * => const avg = useMemo(() => getAvg(list), [list]);
 *                                            =======> 의존성 배열
 *
 */

/**  getAvg()의 불필요한 호출 제어
 *
 * useMemo를 사용하여 list 값이 변했을 때만 getAvg 호출
 * => list 외 다른 상태 변화 시에는 getAvg 호출되지 않고 이전의 list값을 가지고있음 (리렌더링은 일어남)
 *    onClick={onInsert} 트리거에 의해 실제 list값이 변했을때만 계산 로직 수행
 *
 */

/**
 * useMemo / useEffect
 * 공통점 : 의존성 배열을 사용 상태변화 감지하고 동작 수행
 * useEffect : 사이드 이펙트를 처리하기위한 목적으로 사용
 *             => 렌더링 외부에서 발생하는 작업을 처리하는 데 사용 (API 호출, 이벤트 리스너 설정, 타이머 설정 등)
 * useMemo : 계산 로직의 최적화하기 위한 목적으로 사용
 *             => CPU 집약적인 계산이나 큰 데이터 구조를 처리할 때 계산 결과를 재사용하여 불필요한 계산을 피함
 */

const getAvg = (nums) => {
  console.log('평균값 계산 중');
  if (nums.length === 0) return 0;
  const sum = nums.reduce((a, b) => a + b);
  console.log(sum / nums.length);
  return sum / nums.length;
};

function AvgUseMemo() {
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

export default AvgUseMemo;
