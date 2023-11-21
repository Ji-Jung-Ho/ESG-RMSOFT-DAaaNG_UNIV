import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function getCategoryImage(category) {       //카테고리 별 아이콘 설정
  switch (category) {
    case '먹어요':
      return '../img/dmunity/eat.png';
    case '아파요':
      return '../img/dmunity/sick.png';
    case '놀아요':
      return '../img/dmunity/play.png';
    case '어때요':
      return '../img/dmunity/how.png';
    case '기타':
      return '../img/dmunity/etc.png';
    default:
      return '../img/dmunity/notification.png';
  }
}

export default function DmunityMainPage() {

  const [dData, setDData] = useState([]);

  useEffect(() => {
    axios({
      url: 'http://localhost:8080/dmunity/all',
      method: 'GET'
    })
      // 성공
      .then((res) => {
        setDData(res.data)
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

  function strCut(str) {
    if (str.length > 45) {
      return str.substr(0, 45) + '...'
    }
    return str
  }

  return (
    <div id="dmunity">
      <div className='categoryContainer'>
        <div className='row1'>
          <img src='../img/dmunity/dmunity.png' alt='dmunity' /><h2> 커뮤니티</h2>
        </div>
        <div className='row2'>
          <span><button type='buuton'><img src={'../img/dmunity/eat.png'} alt="" /></button><a href='#!'>먹어요</a></span>
          <span><button type='buuton'><img src={'../img/dmunity/sick.png'} alt="" /></button><a href='#!'>아파요</a></span>
          <span><button type='buuton'><img src={'../img/dmunity/play.png'} alt="" /></button><a href='#!'>놀아요</a></span>
          <span><button type='buuton'><img src={'../img/dmunity/how.png'} alt="" /></button><a href='#!'>어때요</a></span>
          <span><button type='buuton'><img src={'../img/dmunity/etc.png'} alt="" /></button><a href='#!'>기타</a></span>
        </div>
      </div>
      <div id='postsboard'>
        <div className='row1'>
          <img src='../img/dmunity/posts.png' alt='posts' /><h2> posts</h2>
          <div className='sorting'>최신순</div>
        </div>
        <div className='row2'>
          {
            dData && dData.map((item, idx) => {
              return (
                <div id="post">
                  <div className='postLeft'>
                    <img className="category" src={getCategoryImage(item.dmunityCategory)} alt='' />
                  </div>
                  <div className='postMiddle'>
                    <Link to={`/dmunity-detail/${item.dmunityNo}`}>
                      <div className="title">{strCut(item.dmunityTitle)}</div>
                      <div className="contents">{strCut(item.dmunityText)}</div>
                      <div className="info">
                        <span className="view"><img src='../img/dmunity/watch.png' alt='view' /> <p>{item.dmunityHit}</p></span>
                        <span className="likes"><img src='../img/dmunity/heart.png' alt='likes' /> <p>{item.dmunityLike}</p></span>
                        <span className='comments'><img src='../img/dmunity/comments.png' alt='comments' /> <p>12</p></span>
                      </div>
                    </Link>
                  </div>
                  <div className='postRight'>
                    <div className="date">{item.dmunityDate.substr(0,10)}</div>
                    <div className='userid'>{item.userid}</div>
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className='row3'>
          <nav className='pagination'>
            <a href='#'>&laquo;</a>
            <a href='#'>&lt;</a>
            <a href='#'>1</a>
            <a href='#'>2</a>
            <a href='#'>3</a>
            <a href='#'>4</a>
            <a href='#'>5</a>
            <a href='#'>6</a>
            <a href='#'>7</a>
            <a href='#'>&gt;</a>
            <a href='#'>&raquo;</a>
          </nav>
          <div className='searchBox'>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="검색"
            />
            <span>검색</span>
          </div>
        </div>
      </div>
    </div >
  );
}
