import React from 'react';

export default function SelectPersoanlInfomationModalComponent({ isSelectModalCloseFn }) {

  const selectModalCloseFn = (e) => {
    e.preventDefault();
    isSelectModalCloseFn();
  }

  return (
    <div id='select'>
      <div className="wrap">
        <div className="container">
          <h1>개인정보 수집·이용 동의(선택)</h1>
          <div className="content">
            <p className='sub-title'>
            <strong className='main-title'>[마케팅 수신동의]</strong>
            <strong className='main-title'>1. 개인정보의 수집, 이용 목적</strong>
- 각종 뉴스레터 발송, 브랜드 소개, 맞춤형 서비스 권유 등

<strong className='main-title'>2. 수집하는 개인정보의 항목</strong>
- 성명(한글), 생년월일, 전화번호, 이메일, 휴대전화

<strong className='main-title'>3. 개인정보의 보유 및 이용 기간</strong> : 회원 탈퇴 시까지(개인회원 : 2년 단위 재동의, 기업회원 : 5년 단위 재동의)

단, 법률이 정하는 바에 따라 탈퇴 후에도 일정기간 보유할 수 있습니다.

<strong className='main-title'>4. 개인정보 마케팅 활용 동의 거부일 경우에도 회원 가입 제한은 없으나 마케팅 활용 서비스 안내 및 참여에 제한이 있을 수 있습니다.</strong>

<strong className='main-title'>5. 유튜브 및 SNS등 2차 활용에 활용될 수 있습니다.</strong>

 

회사는 별도의 동의를 받거나 법률에 특별할 규정이 있는 경우를 제외하면 제3자에게 회원님의 개인정보를 제공하지 않으며, 상기 안내해드린 개인정보 수집 동의 법위를 초과하여 회원의 개인정보를 활용하지 않습니다.
            </p>
          </div>
          <div className="button-box">
            <button type='button' onClick={selectModalCloseFn}><span>확인</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};
