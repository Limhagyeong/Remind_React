import { useState, useMemo, useCallback, useRef } from 'react';

/** 기능
 * 1. 저장공간
 *    useState => 값을 유지하고있지만 변경 시마다 리렌더링이 발생 O
 *             => 성능저하
 *    useRef => 값을 유지하고있지만 변경 시마다 리렌더링이 발생 X
 *           => UI 업데이트 필요 없는 값에 사용 : 리렌더링이 되어야 변경된 값으로 업데이트 되기때문
 *           => ex) 불필요한 API 호출 방지 (같은 검색어 재검색을 한다던가 등) => 기존 검색어를 저장해놓는 변수로서의 기능으로 사용
 *                  스크롤제어 => 페이지 상단 이동, 최신 메시지를 자동으로 보여주기..
 *
 * 2. DOM 요소 선택
 *    자바스크립트는 document.getElementById()로 가져옴
 *    useRef 사용하면
 *    1) const inputE1 = useRef(null); => 참조객체 만들기
 *    2) ref={inputE1} => 특정 태그에 참조값 부여
 *    3) inputE1.current.focus(); => 접근
 */

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
