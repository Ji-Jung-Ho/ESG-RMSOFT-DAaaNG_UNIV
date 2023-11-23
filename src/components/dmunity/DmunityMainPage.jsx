import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function getCategoryImage(category) {       //카테고리 별 아이콘 설정
  switch (category) {
    case 1:
      return '../img/dmunity/eat.png';
    case 2:
      return '../img/dmunity/sick.png';
    case 3:
      return '../img/dmunity/play.png';
    case 4:
      return '../img/dmunity/how.png';
    case 5:
      return '../img/dmunity/etc.png';
    default:
      return '../img/dmunity/notification.png';
  }
}

export default function DmunityMainPage() {

  const [isEatToggle, setIsEatToggle] = useState(false);
  const [isSickToggle, setIsSickToggle] = useState(false);
  const [isPlayToggle, setIsPlayToggle] = useState(false);
  const [isHowToggle, setIsHowToggle] = useState(false);
  const [isEtcToggle, setIsEtcToggle] = useState(false);
  const [categoryNo, setCategoryNo] = useState(0);

  const onClickEatToggle = () => {
    setIsEatToggle(!isEatToggle);
    setIsSickToggle(false)
    setIsHowToggle(false)
    setIsPlayToggle(false)
    setIsEtcToggle(false)
    setCategoryNo(isEatToggle?0:1)
    setPageCount(1);
  };

  const onClickSickToggle = () => {
    setIsSickToggle(!isSickToggle);
    setIsEatToggle(false)
    setIsHowToggle(false)
    setIsPlayToggle(false)
    setIsEtcToggle(false)
    setCategoryNo(isSickToggle?0:2)
    setPageCount(1);
  };

  const onClickPlayToggle = () => {
    setIsPlayToggle(!isPlayToggle);
    setIsSickToggle(false)
    setIsHowToggle(false)
    setIsEatToggle(false)
    setIsEtcToggle(false)
    setCategoryNo(isPlayToggle?0:3)
    setPageCount(1);
  };

  const onClickHowToggle = () => {
    setIsHowToggle(!isHowToggle);
    setIsSickToggle(false)
    setIsEatToggle(false)
    setIsPlayToggle(false)
    setIsEtcToggle(false)
    setCategoryNo(isHowToggle?0:4)
    setPageCount(1);
  };

  const onClickEtcToggle = () => {
    setIsEtcToggle(!isEtcToggle);
    setIsSickToggle(false)
    setIsHowToggle(false)
    setIsPlayToggle(false)
    setIsEatToggle(false)
    setCategoryNo(isEtcToggle?0:5)
    setPageCount(1);
  };

  const [dmunityData,setDmunityData] = useState([]);  //DB
  const [inputValue, setInputValue] = useState(''); //입력 값 관리
  const [pageCount, setPageCount] = useState(1);  //현재 페이지
  const [totalPage, setTotalPage] = useState(''); //총 페이지 수
  
  // const onClickSortingHit = () => {

  // } 인기순 최신순 필터만 만들면 끝남

  useEffect(() => {
    axios({
      url: 'http://localhost:8080/dmunity/dmunityMainPage',
      method: 'GET',
      params: {
        page: pageCount,
        category: categoryNo
      }
    })
      // 성공
      .then((res) => {
        setDmunityData(res.data)
        console.log(categoryNo)
      })
      // 에러
      .catch((err) => {
        console.log(`AXIOS 실패!${err}`);
      });
    axios({
      url: "http://localhost:8080/dmunity/totalPageCount",
      method: 'GET',
      params:{
        category: categoryNo
      }

    })
      // 성공
      .then((res) => {
        setTotalPage(res.data)
        console.log(res.data)
      })
      // 에러
      .catch((err) => {
        console.log(`AXIOS 실패!${err}`);
      });
  }, [pageCount, categoryNo]);

  useEffect(() => {
    axios({
      url: "http://localhost:8080/dmunity/totalPageCount",
      method: 'GET'
    })
      // 성공
      .then((res) => {
        setTotalPage(res.data)
        console.log(res.data)
      })
      // 에러
      .catch((err) => {
        console.log(`AXIOS 실패!${err}`);
      });
      }, [pageCount]);

  const handleInputChange = (e) => {  //검색창 입력값
    setInputValue(e.target.value);
  }

  function strCut(str) {              //제목 글자 수 45에서 자르기
    if (str.length > 45) {
      return str.substr(0, 45) + '...'
    }
    return str
  }

  const handleClickPage = (page) => {     //페이지네이션 클릭
    setPageCount(page);
  };


  return (
    <div id="dmunity">
      <div className='categoryContainer'>
        <div className='row1'>
          <img src='./img/dmunity/dmunity.png' alt='dmunity' /><h2>community</h2>
        </div>
        <div className='row2'>
          <button type='buuton' onClick={onClickEatToggle}>{isEatToggle ? <img src='./img/dmunity/eat_onclick.png' alt="" /> : <img src='./img/dmunity/eat.png' alt="" />}<span>먹어요</span></button>
          <button type='buuton' onClick={onClickSickToggle}>{isSickToggle ? <img src='./img/dmunity/sick_onclick.png' alt="" /> : <img src='./img/dmunity/sick.png' alt='' />}<span>아파요</span></button>
          <button type='buuton' onClick={onClickPlayToggle}>{isPlayToggle ? <img src='./img/dmunity/play_onclick.png' alt="" /> : <img src='./img/dmunity/play.png' alt='' />}<span>놀아요</span></button>
          <button type='buuton' onClick={onClickHowToggle}> {isHowToggle ? <img src='./img/dmunity/how_onclick.png' alt="" /> : <img src='./img/dmunity/how.png' alt='' />}<span>어때요</span></button>
          <button type='buuton' onClick={onClickEtcToggle}> {isEtcToggle ? <img src='./img/dmunity/etc_onclick.png' alt="" /> : <img src='./img/dmunity/etc.png' alt='' />}<span>기타</span></button>
        </div>
      </div>
      <div id='postsboard'>
        <div className='row1'>
          <img src='../img/dmunity/posts.png' alt='posts' /><h2>posts</h2>
          <div className='sorting' >최신순</div>
        </div>
        <div className='row2'>
              {
              dmunityData.map((post, idx) => (
                <div key={idx} id="post">
                  <div className='postLeft'>
                    <img className="category" src={getCategoryImage(post.dmunityCategory)} alt='' />
                  </div>
                  <div className='postMiddle'>
                    <Link to={`/dmunity/${post.dmunityNo}`}>
                      <div className="title">{strCut(post.dmunityTitle)}</div>
                      <div className="contents">{strCut(post.dmunityText)}</div>
                      <div className="info">
                        <span className="view"><img src='../img/dmunity/watch.png' alt='view' /> <p>{post.dmunityHit}</p></span>
                        <span className="likes"><img src='../img/dmunity/heart.png' alt='likes' /> <p>{post.dmunityLike}</p></span>
                        <span className='comments'><img src='../img/dmunity/comments.png' alt='comments' /> <p>{post.dmunityComments}</p></span>
                      </div>
                    </Link>
                  </div>
                  <div className='postRight'>
                    <div className="date">{post.dmunityDate.substr(0,10)}</div>
                    <div className='userid'>{post.userid}</div>
                  </div>
                </div>
                  ))
              }
        </div>
        <div className='row3'>
          {/* 댕뮤니티 페이징 */}
          <div className='dmunitymain_pagebox'>
            {/* 이전페이지 버튼 */}
            <button onClick={() => handleClickPage(pageCount - 1)} disabled={pageCount === 1}>
              &lt;
            </button>
            {totalPage && Array.from({length: totalPage}, (_, index) => (
              <button
                key={index}
                onClick={() => handleClickPage(index + 1)}
                style={{ color: pageCount === index + 1 ? '#AB8B61' : '#EEE1D7' }}
              >
                {index + 1}
              </button>
            ))}
            {/* 다음페이지 버튼 */}
            < button onClick={() => handleClickPage(pageCount + 1)} disabled={pageCount >= totalPage}>
              &gt;
            </button>
          </div>
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
