import React from 'react';

export default function RequirePersoanlInfomationModalComponent({ isRequiredModalCloseFn }) {

  const requiredModalCloseFn = (e) => {
    e.preventDefault();
    isRequiredModalCloseFn();
  }

  return (
    <div id='require'>
      <div className="wrap">
        <div className="container">
          <h1>개인정보 수집·이용 동의(필수)</h1>
          <div className="content">
            <strong className='main-title'>개인정보처리방침</strong>
            'DAaang'(이하 '회사')가 운영하는 ‘DAaang UNIV’은 개인정보보호법 제30조 의거 이용자의 개인정보보호와 권익을 보호하고 관련된 고충 및 애로사항을 신속하게 처리하기 위해 아래의 개인정보처리방침을 제정·운영하고 있습니다.<br/>
회사는 관계법령에서 규정하고 있는 책임과 의무를 준수하고 실천하기 위해 최선의 노력을 하고 있습니다<br/>
시행일 : 2021-05-01

            <strong className='main-title'>제1조 [개인정보 수집이용 및 보유기간 안내]</strong>
            회사는 아래와 같이 제공하는 서비스에 따라 개인정보의 수집목적, 항목, 보유 및 이용기간을 달리하여 서비스제공을 위하여 필요한 최소한의 개인정보를 수집하고 있습니다.
            <strong className='main-title'>회원가입 및 서비스 이용</strong>
            수집목적필수항목선택항목보유·이용기간회원가입 및 이용자 식별이메일,닉네임,비밀번호,신체스펙(키/몸무게),이름,휴대전화번호,생년월일,성별프로필사진수집일로부터 회원탈퇴 까지본인확인이름,통신사,성별,암호화된 이용자 확인값(CI),생년월일,중복가입확인정보(DI),휴대전화번호,내/외국인 여부 수집일로부터 회원탈퇴 까지게시글 및 댓글 관리닉네임,프로필사진 수집일로부터 회원탈퇴 까지계정 정보 찾기 및 재설정이메일,휴대전화번호 수집일로부터 회원탈퇴 까지신고하기이름,닉네임,신고내용 수집일로부터 회원탈퇴 까지서비스관련 각종 고지 안내이름,이메일,휴대전화번호,단말기ID 수집일로부터 회원탈퇴 까지
            <strong className='main-title'>마케팅</strong>
            수집목적필수항목보유·이용기간이벤트 안내이메일,휴대전화번호,닉네임수집일로부터 동의철회 까지
            <strong className='main-title'>기타</strong>
            &gt; <br/>

회사는 만 14세 미만 아동에게 당사의 서비스를 제공하지 않으며 이와 관련한 개인정보를 수집하지 않습니다.<br/>

&gt;<br/>

회사가 처리하는 회원정보의 목적과 항목이 변경될 경우에는 관련법령에 따라 사전에 동의를 요청합니다.<br/>

&gt;<br/>

회사는 주민등록번호 처리를 원칙적으로 금지하며 업무 수행 중 법률, 대통령령, 국회규칙, 대법원규칙,

헌법재판소규칙, 중앙선거관리위원회 규칙 및 감사원규칙에서 구체적으로 주민등록번호의 처리를 요구할 경우에만 처리하고 있습니다.<br/>

&gt;<br/>

회사는 다음의 방식으로 개인정보를 수집하며 수집 전 사전동의를 획득합니다.<br/>

-

서비스 이용 과정에서 이용자가 개인정보를 직접 입력하는 방식<br/>

-

박람회, 세미나, 행사진행 등 오프라인에서 서면으로 개인정보를 수집하는 방식<br/>

-

서비스를 이용하는 과정에 쿠키, 접속로그 등 자동으로 생성 및 수집되는 방식
<strong className='main-title'>2조</strong>
<strong className='main-title'>개인정보자동수집 장치의 설치와 운영거부에 관한 사항</strong>
회사는 서비스 이용과정에서 이용자로부터 다음과 같은 정보들이 자동으로 생성/수집되고 다음의 목적으로 이용될 수 있습니다.
<strong className='main-title'>• 개인정보 자동수집정보 사용목적</strong>
&gt; <br/>

관련법규의 준수

회사는 관련법규의 준수를 위해 이용자의 접속기록(로그인)기록을 보관할 의무가 있습니다.<br/>

&gt;<br/>

서비스 품질향상 및 상품 개발

방문일시,서비스 이용기록,접속IP정보,쿠키, 항목을 수집하며 제공받은 날로부터 계약 종료 까지간 보유이용되며 보유기간 경과후 즉시 삭제됩니다
<strong className='main-title'>• 개인정보 자동수집안내 및 거부방법</strong>
&gt; <br/>

아래의 분석도구를 활용하여 이용자의 주요행동(행태정보)를 수집 및 분석합니다. 수집된 정보로 개인을 알아볼 가능성은 낮습니다.<br/>

수탁사명 : Google Analytics<br/>


쿠키의 설치∙운영 및 거부 방법 : 아래 방법을 통해 쿠키 저장을 거부 할 수 있습니다. <br/>

<p>[web] <br/></p>

 

- Internet Explorer 웹 브라우저의 경우 : 웹브라우저 상단의 도구&gt;인터넷 옵션&gt;개인정보 메뉴의 옵션 설정

- Microsoft Edge 웹 브라우저의 경우 : 웹브라우저 상단 메뉴 &gt; 설정 &gt; 고급 설정 보기 &gt; 쿠키 메뉴의 옵션 설정

- Chrome 웹브라우저의 경우 : 웹브라우저 상단 메뉴 &gt; 설정 &gt; 고급 &gt; 콘텐츠 설정 &gt; 쿠키 메뉴의 옵션 설정

- Chrome 모바일의 경우 : 크롬 App &gt; 오른쪽상단 더보기 &gt; 방문 기록 인터넷 사용 기록 삭제 &gt; 기간선택 &gt; 쿠키 및 사이트 데이터'와 '캐시된 이미지 또는 파일' 옆의 체크박스를 선택 &gt; 인터넷 사용기록 삭제

- Safari 모바일의 경우 : Safari App &gt; 방문기록 및 웹사이트 데이터 지우기 &gt; 확인

- Naver 모바일의 경우 : Naver App &gt; 설정 &gt; 캐시삭제 + 인터넷 사용 기록 &gt; 쿠키삭제 <br/>

<p>[App] <br/></p>

- 안드로이드 폰의 경우 : 휴대폰 설정 &gt; 앱 관리 &gt; 스스므(SSM) &gt; 저장소 &gt; 사용자데이터 / 캐시 &gt; 데이터 지우기
- 아이폰의 경우 : 설정 &gt; 앱 관리 &gt; 스스므(SSM) &gt; 저장소 &gt; 데이터 지우기 <br/>

<strong className='main-title'>3조</strong>

 
<strong className='main-title'>개인정보의 보유·이용기간 및 파기</strong> <br/>

회사는 수집한 개인정보는 이용자로부터 개인정보 수집 시에 동의 받은 개인정보 보유·이용기간 내 또는 관련법령에 따른 개인정보 보유·이용기간 내 처리하고 해당 목적이 달성 및 보유이용기간이 경과할 시에는 지체없이 해당 개인정보를 복구 또는 재생할 수 없는 방법으로 파기합니다.

<strong className='main-title'>• 이용자정보</strong>

 

A.
이용자가 서비스 회원을 탈퇴할 경우 회사는 이용자의 모든 개인정보를 삭제합니다. <br/>

B.
1년이상 서비스에 접속하지 않은 이용자의 개인정보를 보호하기 위하여 회사는 1년이 도래하기 30일 전까지 개인정보가 파기되는 사실, 기간 만료일 및 파기되는 개인정보의 항목을 통보하고 휴면계정으로 전환합니다. 휴면으로 전환된 계정은 12개월후 삭제됩니다. <br/>

C.

단, 관계 법령에서 개인정보를 보존해야할 필요가 있는 경우 해당 법률의 규정에 따릅니다. <br/>

<strong className='main-title'>• 관련법령에 따른 의무 보유기간</strong>
보유 목적근거 법령보유 기간접속에 관한 기록보존통신비밀보호법3개월
<strong className='main-title'>4조</strong>

<strong className='main-title'>개인정보 처리 위탁</strong>
회사는 원활한 개인정보 업무처리를 위하여 일부 개인정보처리업무를 위탁하고 있으며 위탁 계약 체결 시 관련법령에 따라 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다. 위탁업무의 내용이나 수탁자가 추가, 변경될 경우에는 지체 없이 관련 법령에 따른 사전 동의 안내 또는 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.

<strong className='main-title'>• 개인정보처리 위탁업무 및 수탁사 안내</strong>

수탁자위탁업무연락처<br/>
Amazon Web Service데이터보관 및 전산시스템 운용·관리aws-korea-privacy@amazon.comGoogle Analytics<br/>서비스 품질향상 및 상품 개발googlekrsupport@google.comGoogle(firebase)<br/>광고성 정보 발송googlekrsupport@google.com &lt;googlekrsupport@google.com&gt;<br/>주식회사 다날본인확인031-697-1004Google(firebase)<br/>서비스관련 각종 고지 안내googlekrsupport@google.com
<strong className='main-title'>5조</strong>
<strong className='main-title'>개인정보의 제3자 제공</strong>
회사는 정보주체의 개인정보를 ‘제1조 개인정보 수집이용 및 보유기간 안내’에서 명시한 범위 내에서만 처리하며, 이용자의 별도 사전동의, 관련법령의 특별한 요구가 발생하는 경우에만 개인정보를 제3자에게 제공합니다. <br/>

<strong className='main-title'>• 사전동의를 받은 제3자 제공안내</strong>

 

제공받는 자제공목적제공항목보유 및 이용기간체험 브랜드의 회사명체험단 신청 및 운영이름,우편번호,휴대전화번호,주소,제공받은 날로 부터 체험단 종료 까지 <br/>

<strong className='main-title'>• 관련법령에 근거한 사전동의 없는 제3자 제공안내</strong>
A.

통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우 <br/>

B.

관계법령에 의하여 국가기관으로부터 요구받은 경우<br/>

C.

범죄에 대한 수사상의 목적이 있거나, 정보통신 윤리위원회의 요청이 있는 경우<br/>

D.

기타 관계법령에서 정한 절차에 따른 요청이 있는 경우<br/>
<strong className='main-title'>6조</strong>
<strong className='main-title'>개인정보의 국외이전</strong>
회사는 개인정보를 국외의 다른 사업자에게 제공하지 않습니다. 다만, 정보통신서비스의 제공에 관한 계약 이행 및 이용자 편의 증진 등을 위하여 다음과 같이 개인정보 처리 업무를 국외에 전송하고 있습니다.

<strong className='main-title'>• 국외이전 개인정보안내</strong>

목적항목일시 및 방법보유기간업체 및 국가연락처서비스 품질향상 및 상품 개발방문일시,서비스 이용기록,접속IP정보,쿠키서비스 제공시 암호화된 네트워크를 통해 전송계약 종료 중 먼저 도달한 날 또는 제공받은 날로 부터 계약 종료 까지Google Analytics / 미국googlekrsupport@google.com<br/>광고성 정보 발송이메일,휴대전화번호,닉네임서비스 제공시 암호화된 네트워크를 통해 전송계약 종료 중 먼저 도달한 날 또는 제공받은 날로 부터 동의철회 까지Google(firebase) / 미국googlekrsupport@google.com googlekrsupport@google.com<br/>서비스관련 각종 고지 안내이름,이메일,휴대전화번호,단말기ID서비스 제공시 암호화된 네트워크를 통해 전송계약 종료 중 먼저 도달한 날 또는 제공받은 날로 부터 회원탈퇴 까지Google(firebase) / 미국googlekrsupport@google.com
<strong className='main-title'>7조</strong>

 

<strong className='main-title'>개인정보의 안전성 확보조치</strong>

 

 

회사는 이용자의 개인정보를 안전하게 관리하여 개인정보가 분실, 도난, 유출, 변조 또는 훼손되지 않도록 최선을 다하고 있으며 필요한 기술적, 관리적 및 물리적 조치를 하고 있습니다.

<strong className='main-title'>• 개인정보 취급 직원의 최소화 및 교육</strong>

 

개인정보를 취급하는 직원을 최소화하고, 주기적인 개인정보 보호 교육을 실시하여 개인정보를 관리하는 대책을 시행하고 있습니다.

<strong className='main-title'>• 내부관리계획의 수립 및 시행</strong>

 

개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.

<strong className='main-title'>• 접속기록의 보관 및 위변조 방지</strong>

 

개인정보 침해사고 발생 시 대응이 용이하도록 개인정보처리시스템에 접속한 기록(웹 로그, 요약정보 등)을 최소 1년 이상 보관, 관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 보안기능을 사용하고 있습니다.

<strong className='main-title'>• 개인정보의 암호화</strong>

 

이용자의 개인정보는 암호화 되어 저장 및 관리되고 있습니다.

<strong className='main-title'>• 해킹 등에 대비한 기술적 대책</strong>

 

회사는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 합니다. 또한 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.

<strong className='main-title'>• 개인정보에 대한 접근통제 제한</strong>


개인정보를 처리하는 개인정보처리시스템에 대한 접근권한의 부여, 변경, 말소를 통하여 개인정보에 대한 접근통제를 위한 조치를 하고 있습니다.
<strong className='main-title'>8조</strong>

 

<strong className='main-title'>이용자 및 법정대리인의 권리와 그 행사 방법</strong>

 

 

회사는 이용자(또는 법정대리인)의 개인정보 권리를 보호하기 위해 아래와 같이 행사 방법을 마련하고 있습니다.

<strong className='main-title'>• 이용자의 권리 및 행사방법</strong>

 

A.

열람/수정 : 마이페이지 &gt; 설정하기 <br/>

B.

회원탈퇴 : 마이페이지 &gt; 설정하기 &gt; 회원탈퇴하기 <br/>

C.

그 밖에 서면, 전자우편 등을 통하여 개인정보의 처리 정지 및 삭제를 요구할 수 있습니다.<br/>

D.

회사는 개인정보의 오류 등에 대한 정정 또는 삭제를 요청한 경우에는 정정 또는 삭제를 완료하기 전까지 당해 개인정보를 이용하거나 제공하지 않습니다.<br/>

E.

개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 당해 개인정보의 삭제를 요구할 수 없습니다.<br/>

F.

회사는 이용자 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인인지를 확인합니다.<br/>

<strong className='main-title'>• 법정대리인의 권리 및 행사방법</strong>

 

A.

이용자의 법정대리인이나 위임을 받은 자 등 대리인이 이용자의 권리(열람, 정정, 처리정지, 삭제)를 행사하는 경우 개인정보보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출해야 합니다. <br/>

B.

회사는 이용자 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 정당한 대리인인지를 확인합니다. <br/>
<strong className='main-title'>9조</strong>

 

<strong className='main-title'>개인정보보호 책임자 및 이용자 권익침해에 대한 구제방법</strong>

 

 

회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보보호책임자를 지정하고 있습니다.

 

 

<strong className='main-title'>개인정보보호 책임자</strong>

 

• 성명 : 박성국 <br/>

• 직책 : 대표이사<br/>

• 연락처 : yoonbal830@gmail.com<br/>

<strong className='main-title'>• 개인정보보호 책임자의 역할</strong>

 

이용자는 서비스를 이용하면서 발생한 모든 개인정보보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보보호책임자에게 문의하실 수 있습니다. 회사는 이용자의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.

 

<strong className='main-title'>• 권익침해관련 도움받을수 있는 기관</strong>

 

이용자의 권익침해 관련 자세한 도움이 필요하시면 아래 기관에 문의하여 주시기 바랍니다.<br/>

 

 

A.

개인정보 침해신고센터 (한국인터넷진흥원 운영)<br/>

 

- 소관업무 : 개인정보 침해사실 신고, 상담 신청<br/>

- 홈페이지 : privacy.kisa.or.kr<br/>

- 전화 : (국번없이) 118<br/>

- 주소 : (58324) 전남 나주시 진흥길 9(빛가람동 301-2) 3층 개인정보침해신고센터<br/>

B.

개인정보 분쟁조정위원회<br/>

 

- 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)<br/>

- 홈페이지 : www.kopico.go.kr<br/>

- 전화 : (국번없이) 1833-6972<br/>

- 주소 : (03171) 서울특별시 종로구 세종대로 209 정부서울청사 4층<br/>

C.

대검찰청 사이버범죄수사단<br/>

 

- 전화 : 02-3480-3573<br/>

- 홈페이지 : www.spo.go.kr<br/>

D.

경찰청 사이버안전국

 

- 전화 : 182

- 홈페이지 : cyberbureau.police.go.kr
<strong className='main-title'>10조</strong>

 

<strong className='main-title'>개인정보처리방침 변경에 관한 사항</strong>
개인정보처리방침은 시행일로부터 적용되며, 관련법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 지체없이 홈페이지 통하여 고지할 것입니다.
          </div>
          <div className="button-box">
            <button type='button' onClick={requiredModalCloseFn}>
              <span>확인</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};