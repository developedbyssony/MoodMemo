import React, {useEffect, useState} from 'react';

const Lifecycle = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [isVisivle, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);

    const UnmountTest = () => {

        useEffect(() => {
            console.log("mount!");
            return () => {
                // unmount 시점에 실행되게 됨
                console.log("unmount!");
            };
        },[]);

        return <div>Unmount Testing Component</div>
    }

    useEffect(()=> {
        console.log("mount!");
    },[]);

    useEffect(()=> {
        console.log("update!");
    });

    useEffect(()=>{
        console.log(`count is update : ${count}`);
    }, [count]);

    useEffect(()=> {
        console.log(`text is update : ${text}`);
    }, [text]);

    useEffect(()=> {
        console.log(`text is update : ${text}`);
        if(count > 5) {
            alert("count가 5를 넘었습니다. 따라서 1로 초기화합니다.");
            setCount(1);
        }
    }, [count]);

    // useEffect의 디펜던시 밸류를 잘 활용하면
    // 특정 값이 변화하는 순간을 감지하여
    // 콜백함수를 실행시키게 바꿀 수가 있습니다.

    return (
    <div style={{padding: 20}}>
        <div>
            {count}
            <button onClick={() => setCount(count+1)}>+</button>
        </div>
        <div>
           <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div>
            <button onClick={toggle}>ON/OFF</button>
            {isVisible && <UnmountTest />} // 단락회로평가
        </div>
    </div>
    );
};

export default Lifecycle;