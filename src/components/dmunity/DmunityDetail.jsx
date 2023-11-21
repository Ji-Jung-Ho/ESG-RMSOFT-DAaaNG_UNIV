import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useParams } from 'react-router-dom';
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
  const [dmunityData, setDmunityData] = useState([]);
  const {dmunityNo} = useParams()

  useEffect(() => {
    axios({
      url: `http://localhost:8080/dmunity/${dmunityNo}`,
      method: 'GET'
    })
      // 성공
      .then((res) => {
        setDmunityData(res.data)
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

  //조건에 따라 수정,삭제 버튼 렌더링
  const manager = true;

  //댓글 목록
  const [comment, setComment] = useState([]);

  //댓글 작성 버튼 제출시 작동하는 함수(데이터 전송X 프론트엔드에서만 가능)
  const handleSubmit = (e) => {
    e.preventDefault();
    setComment((current) => {
      const newList = [...current]
      newList.push({
        img: '../img/dsta/dstaMainData3.jpg',
        userid: "모카",
        text: inputValue,
        date: "11.20"
      });
      return newList;
    })
    setInputValue("");
  }

  return (
    <div id='DmunityDetail'>
      < div id='container' >
        <div className='title'>
          <img src="./img/dmunity/dmunity.png" alt="" />
          <Link to='/dmunity'><h2>댕뮤니티</h2></Link>
        </div>
              <div className="content">
                <div className='pots-title'>
                  <img src={getCategoryImage(dmunityData.dmunityCategory)} alt='' />
                  <h2>{dmunityData.dmunityTitle}</h2>
                  <div className="profile-box">
                    <img src="./img/dmunity/프로필사진-작성자.png" alt="" />
                    <span>{dmunityData.userid}</span>
                  </div>
                </div>
                <div className='info-box'>
                  <span className="view"><img src='../img/dmunity/watch.png' alt='view' /> <p>{dmunityData.dmunityHit}</p></span>
                  <span className="likes"><img src='../img/dmunity/heart.png' alt='likes' /> <p>{dmunityData.dmunityLike}</p></span>
                  <span className='comments'><img src='../img/dmunity/comments.png' alt='comments' /> <p>{dmunityData.dmunityComments}</p></span>
                </div>
                <div className="text-area">
                  <div>{dmunityData.dmunityText}</div>
                </div>
              </div>
          <div className='like_comment_count'>
            <img src='./img/dmunity/heart_click.png' alt='' />
            <p>좋아요 {dmunityData.dmunityLike}개</p>
            <p>댓글 {dmunityData.dmunityComments + comment.length}개</p>
          </div>
          <div className='comment_box'>
            {/**임시 댓글  */}
            <ul>
              <li className='comment_list'>
                <div className='profile_box'>
                  <img src='../img/dsta/dstaMainData1.jpg'></img>
                  <div className='userid'>댕댕쓰</div>
                </div>
                <div className='comment_text'>
                  <div className='comment_detail'>
                    <div>잘부탁드립니당</div>
                    <div className='date'>11.17</div>
                  </div>
                  <div className='reply'>답글달기</div>
                </div>
              </li>
              <li className='comment_list'>
                <div className='profile_box'>
                  <img src='../img/dsta/dstaMainData2.jpg'></img>
                  <div className='userid'>꾸미</div>
                </div>
                <div className='comment_text'>
                  <div className='comment_detail'>
                    <div>나이스</div>
                    <div className='date'>11.18</div>
                  </div>
                  <div className='reply'>답글달기</div>
                </div>
              </li>
              {/**작성한 댓글 리스트 보여주는 기능 */}
              {comment.map((item, index) => {
                return (
                  <li className='comment_list' key={index}>
                    <div className='profile_box'>
                      <img src={item.img}></img>
                      <div className='userid'>{item.userid}</div>
                    </div>
                    <div className='comment_text'>
                      <div className='comment_detail'>
                        <div>{item.text}</div>
                        <div className='date'>{item.date}</div>
                      </div>
                      <div className='reply'>답글달기  삭제</div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <form className='comment_form' onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="댓글 달기..."
            />
            <button type='submit'>작성</button>
          </form>

          <div className='button_box'>
            <Link to='/dmunity'><button className='list'>목록</button></Link>
            {manager && (
              <div className='edit-delete-btn'>
                <Link to='/dmunity-edit'><button className='edit-btn'><span>수정</span></button></Link>
                <button className='delete-btn'><span>삭제</span></button>
              </div>
            )}

          </div>
        </div>
      </div >
  );
};
