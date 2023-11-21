import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

function getCategoryImage(category) {       //카테고리 별 아이콘 설정
  switch (category) {
    case '1':
      return '../img/dmunity/eat.png';
    case '2':
      return '../img/dmunity/sick.png';
    case '3':
      return '../img/dmunity/play.png';
    case '4':
      return '../img/dmunity/how.png';
    case '5':
      return '../img/dmunity/etc.png';
    default:
      return '../img/dmunity/notification.png';
  }
}

export default function DmunityDetail() {
  const [post, setPost] = useState([]);
  const {dmunityNo} = useParams()

  useEffect(() => {
    axios({
      url: `http://localhost:8080/dmunity/${dmunityNo}`,
      method: 'GET'
    })
      // 성공
      .then((res) => {
        setPost(res.datas)
        console.log(res.data)
      })
      // 에러
      .catch((err) => {
        console.log(`AXIOS 실패!${err}`);
      });
  }, []);

  const [inputValue, setInputValue] = useState(''); //입력 값 관리

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div id='DmunityDetail'>
      < div id='box' >
        <div className='boxbox'>
          <div className='row1'>
            <h2 className='logo'>댕뮤니티</h2>
          </div>
            {
              post && post.map((item,idx) => {
                return (
                  <div>
                    <div className='row2'>
                      <img src = {getCategoryImage(item.dmunityCategory)}/>
                      <h2 className='title'>{item.dmunityTitle}</h2>
                    </div>
                    <div className='row3'>
                      <div className="info">
                        <span className="view"><img src='../img/dmunity/watch.png' alt='view' /> <p>{item.dmunityHit}</p></span>
                        <span className="likes"><img src='../img/dmunity/heart.png' alt='likes' /> <p>{item.dmunityLike}</p></span>
                        <span className='comments'><img src='../img/dmunity/comments.png' alt='comments' /> <p>32</p></span>
                      </div>
                    </div>
                    <div className='row4'>{item.dmunityText}</div>
                    <div className='row5'><img src='../img/dmunity/heart_click.png' /><p>좋아요</p>
                    </div>
                  </div>);})}
            <p>댓글 15개</p>
          <div className='row6'>

          </div>
          <div className='row7'>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="댓글 달기..."
            />
            <button>작성</button>
          </div>
          <div className='row8'>
            <button className='list'>목록</button>
            <div>
              <button className='edit'>수정</button>
              <button className='delete'>삭제</button>
            </div>
          </div>
        </div>
      </div >
    </div>
  );
};
