import { useState, useRef } from "react";

const DiaryEditor = ({ onCreate }) => {
    const authorInput = useRef(); // 반환값 상수에 담아줌
    const contentInput = useRef();

    const [state, setState] = useState({
        author:"",
        content: "",
        emotion: 1,
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };  

    const handleSubmit = () => {
        if(state.author.length < 1) {
            authorInput.current.focus(); // authorInput.current.focus -> authorInput 태그의 focus 기능
            alert('제목은 1자 이상 입력해주세요.');
            return;
        }

        if(state.content.length < 5) {
            contentInput.current.focus();
            alert('본문은 5자 이상 입력해주세요.');
            return;
        }

        onCreate(state.author, state.content, state.emotion); // 1) app의 onCreate 함수로 전달
        alert('저장 성공');
        setState({
            author:"",
            content:"",
            emotion:1,
        });
    };

    /*
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    */

    return (
    <div className="DiaryEditor">
        <h2>이게 뭐라고ㅎㅎㅎㅎ</h2>
        <div>
            <input 
            ref={authorInput}
            name="author"
            value={state.author}
            onChange={handleChangeState}
            />
        </div>
    <div>
        <textarea
            ref={contentInput}
            name="content" 
            value={state.content} 
            onChange={handleChangeState}
            />
    </div>
    <div>
        <select 
            name='emotion'
            value={state.emotion} 
            onChange={handleChangeState} 
        >    
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select>
    </div>
    <div>
        <button onClick={handleSubmit}>저장하기</button>
    </div>
    </div>
    );
};

export default DiaryEditor;
