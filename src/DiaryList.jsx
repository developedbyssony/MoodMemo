import DiaryItem from './DiaryItem';

const DiaryList = ({ onEdit, onRemove, diaryList}) => {
    console.log(diaryList);
    return (
    <div className="DiaryList">
        <h2>순간 리스트</h2>
        <h4>{diaryList.length}개의 순간이 있습니다.</h4>
        <div>
            {diaryList.map((li) => (
                <DiaryItem key={li.id} {...li} onRemove={onRemove} onEdit={onEdit} /> 
                // diarylist는 ondelete를 사용하지는 않지만 
                // diaryitem에게 props를 내려주기 위해서 부모의 ondelete를 전달받고
                // props를 diaryitem에게 드릴링함
            ))}
        </div>
    </div>
    );
};

DiaryList.defaultProps = {
    diaryList:[],
};

export default DiaryList;

/*
        </div>
        <div key={li.id}>
            <div>작성자 : {li.author}</div> 
            <div>날짜(ms) : {li.created_date}</div>       
            <div>내용 : {li.content}</div>
            <div>오늘 어땠어요? : {li.emotion}</div>   
        </div>
    </div>
*/