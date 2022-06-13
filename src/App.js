import './App.css';
import { useState, useRef } from "react";
/*import { BrowserRouter, Routes } from "react-router-dom";*/
import DiaryEditor from './DiaryEditor.jsx';
import DiaryList from './DiaryList';

/*
const dummyList = [
  {
    id:1,
    author:"",
    content:"",
    emotion:1,
    created_date: new Date().getTime(),
  },
  {
    id:2,
    author:"",
    content:"",
    emotion:1,
    created_date: new Date().getTime(),
  },
  {
    id:3,
    author:"",
    content:"",
    emotion:1,
    created_date: new Date().getTime(),
  }
]
*/

function App() {
  
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author,content,emotion) => { // 2) DiaryEditor에서 파라미터 전달받음
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current
    }
    dataId.current += 1;
    setData([newItem,...data]); // 새로운 아이템에 기존 데이터를 이어붙인 형태로 setState
  };

  const onRemove = (targetId) => { // 1) 매개 변수로 targetID 전달받음
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    console.log(newDiaryList);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) => 
      it.id === targetId ? {...it, content:newContent} : it
      )
    );
  };

  return (
    <div className="App">
    <DiaryEditor onCreate={onCreate}/>
    <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data}/>
    </div>
  );
};

export default App;