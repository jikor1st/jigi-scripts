import { IconBaseProps } from '@/baseComponents';
export const RESUME = {
  introduce: {
    header: {
      id: 'introduce',
      title: '자기소개',
    },
    category: [
      {
        title: '인터랙션',
        text: '저는 인터랙션을 사랑해서 프론트엔드 개발자가 되었습니다. 다양한 인터랙션을 구현할 때 저는 희열을 느낍니다. 이 희열감이 저의 꾸준함의 원동력이 되어줍니다.',
      },

      {
        title: '디자인',
        text: '저의 꿈이었던 디자인을 좋아해서 직접 디자인하고 UI/UX를 고려하여 개발하는 것을 좋아합니다.',
      },

      {
        title: 'TMI',
        text: '평소에는 대부분 시간을 개발에 관련된 공부와 작업을 하며 보냅니다. 작업은 저의 취미 생활이기도 하지만 제가 제일 좋아하는 취미는 혼자 코인노래방 가기를 가장 좋아합니다. 하루의 끝에 노래를 부르면 하루의 마무리를 맺는 느낌이 다음 날 저를 다시 움직이게 해줍니다.',
      },
    ],
  },
  technology: {
    header: {
      id: 'technology',
      title: '기술',
    },
    inform:
      '기술을 습득하고 익히는 것에는 끝이 없다고 생각합니다. 꾸준하게 공부하고 상황에 맞는 필요한 기술을 공부하고 있습니다.',
    category: [
      {
        title: 'HTML/CSS',
        items: [
          '시멘틱 태그들을 사용하고 웹 표준을 준수하며 마크업을 할 수 있습니다.',
          'styled-components 와 emotion과 같은 CSS in Js 라이브러리에도 익숙합니다.',
        ],
      },
      {
        title: 'Javascript',
        items: [
          'VanilaJs에 익숙하고 ES5 부터의 문법을 사용할 수 있습니다.',
          'DOM API를 사용해서 다양한 인터랙션을 구현하고 시도할 수 있습니다.',
          'Canvas API의 2D를 사용해서 다양한 기능을 만들어볼 수 있습니다.',
          'Promise, async, await를 사용한 비동기 작업에 어려움이 없습니다.',
        ],
      },
      {
        title: 'Typescript',
        items: [
          '타입스크립트로 React 및 Next js 프로젝트를 진행 할 수 있습니다.',
          '제네릭과 유니언 타입을 활용할 수 있습니다.',
          'Record, Partial 과 같은 유틸리티 타입과 타입스크립트를 계속해서 공부중에 있습니다.',
        ],
      },
      {
        title: 'React',
        items: [
          '초기 구축 단계부터 폴더 구조를 신경쓰며 앱을 개발하는데 익숙합니다.',
          'hook을 적극 활용하여 상태와 기능을 직관성있게 관리 및 구현 할 수 있습니다.',
          'Redux 와 Recoil 라이브러리를 사용해서 전역 상태 관리를 할 수 있습니다.',
          'Styled-component 와 emotion를 사용해서 공통 테마 및 스타일을 작성 할 수 있습니다.',
          'useMemo, memo, useCallback을 사용해서 컴포넌트 렌더링 성능 최적화가 가능합니다.',
        ],
      },
      {
        title: 'Next Js',
        items: [
          'Next Js의 SSR과 CSR의 차이점을 이해하고 있습니다.',
          'Next Js의 Pages 폴더내의 Routes를 구성할 수 있습니다.',
          'getServerSideProps와 getStaticProps의 차이점을 이해하고 사용할 수 있습니다.',
          '사이드 프로젝트를 진행하며 익숙하게 사용할 수 있도록 숙달중입니다.',
        ],
      },
    ],
  },
  experience: {
    header: {
      id: 'experience',
      title: '경험',
    },
    category: [
      {
        title: 'Pref',
        inform:
          '프론트엔드 팀에서 서비스를 구축하고 개발하며 다양한 프로젝트의 기능과 기술을 지원하는 업무도 맡았습니다.',
        subTitle: '프론트엔드 팀',
        date: ['2021.09', '2022.06'],
        items: [
          {
            title: '로지핏',
            href: 'https://logifit.co.kr',
            inform:
              '간편하게 배차 가능한 기업 맞춤 화물 운송 서비스를 구축부터 배포까지 프론트엔드 개발을 단독으로 진행하여 제작하였습니다. 첫 리엑트를 사용하여 제작한 서비스이며 처음 시도해보는 여러 기능들이 많았지만 차근차근 해결해 나가 많은 것을 배울 수 있었던 값진 프로젝트이고  신경 쓰지 못했던 부분도 많아 아쉬움이 남습니다. 클라이언트와 원만한 소통을 하고 개선할 수 있는 부분이 있으면 제시하여 프로젝트의 방향을 좋게 이끌어 갔던 경험도 있습니다.',
            items: [
              '자동 로그인 기능, OAuth ( 카카오, 네이버, 애플 ) 회원가입 및 로그인',
              '카카오 지도 API를 통해 장소 선택 및 커스텀 마크 생성',
              'TMap와 카카오 지도 API를 통해 지도 상에 예상 시간, 거리 및 경로 표시',
              '현재 날짜 기준으로 13일 까지 선택 및 표시되는 달력 개발',
              '운송 화물과 무게를 통한 차량 추천 기능',
              '가로 슬라이더, 앱 슬라이더 기능 개발',
              'React Native 웹뷰로 빌드된 앱 구글 플레이 콘솔을 통해 배포',
              'Payple 결제 연동으로 카드 간편 결제 기능',
              '날짜에 따른 거래명세서 엑셀 파일 다운로드',
              '공공 API 사업자등록정보 진위확인',
              '반응형 웹',
            ],
            skillTagList: [
              'React',
              'React Router Dom V5',
              'Styled Components',
              'Redux',
              'Redux Actions',
              'React html parser',
              'Kakao Map API',
              'Payple API',
            ],
          },
          {
            title: '병원 모니터링 서비스 (비공개)',
            inform:
              '병원 내에서 간호사와 의사가 실시간으로 환자를 확인할 수 있는 모니터링 서비스 제작에 참여하였습니다. 외부 백엔드 개발자와 소통하며 구축부터 시작해서 퇴사 전까지 1차 개발 요청 사항까지를 목표로 개발하였습니다. 주로 공통으로 사용되는 모듈과 환자의 상태를 확인하는 화면의 기능을 개발하였습니다',
            items: [
              '다른분이 작업한 웹 소켓 모듈을 활용해서 등록된 환자들의 바이탈을 실시간 체크할 수 있는 기능 개발',
              '자바스크립트 캐싱 및 버전을 관리할 수 있도록 버전 컨트롤 기능 구현 및 동적 스크립트 생성',
              '페이지네이션, 모달, 바이탈 그래프, 사진위에 그림을 그리고 지울 수 있는 화이트보드 캔버스 등과 같은 공통적으로 사용될 기능 모듈로 개발',
              '모듈에 각각의 인스턴스를 생성하여 관리할 수 있는 class 적극 활용',
            ],
            skillTagList: [
              'jQuery',
              'd3 js',
              'fullcalendar',
              'moment',
              'sock js',
              'stomp js',
              'swiper',
              'Prettier',
            ],
          },
          {
            title: '기술 지원',
            inform:
              '개인적인 프로젝트 외에도 여러 프로젝트의 어려운 부분을 도와주며 기능을 개발하였습니다.',
            detailItems: [
              {
                title: 'Warp mastering',
                items: [
                  'AI 오디오 마스터링 서비스에서 다국어 지원 기능을 개발하였습니다.',
                ],
              },
              {
                title: '모종 관리 및 연구 프로그램',
                items: [
                  '모종의 종류별 위치와 방향을 마우스로 드래그하여 표시하고 저장하여 관리할 수 있는 기능을 개발하였습니다.',
                ],
              },
              {
                title: '채용 서비스',
                items: [
                  '채용 아이템을 카드로 좌 우 슬라이드를 하여 저장하고 삭제할 수 있는 인터랙션 기능을 구현하였습니다.',
                ],
              },
              {
                title: '건축 자제 경매 서비스',
                items: [
                  '모바일에서 원형으로 돌아가는 네이버 그린닷과 유사한 네비게이션 인터랙션 기능을 구현하였습니다.',
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'Inspot',
        subTitle: '크리에이티브 그룹 UX팀',
        date: ['2021.03', '2021.09'],
        inform:
          'UX팀에서 웹 접근성과 웹 표준을 준수하여 웹 페이지나 랜딩 페이지를 제작하고 유지보수를 하는 업무를 맡았습니다.',
        items: [
          {
            title: 'KIC',
            href: 'https://kic.re.kr/international',
            inform:
              '형사정책연구원 외국어 사이트 유지보수를 맡고 웹 접근성 인증을 평가 받고 통과하였습니다.',
            items: [
              '웹 접근성 인증 및 마크 적용',
              '영문 및 중국어 다국어 지원',
              '반응형 웹',
              '주기적인 뉴스레터 제작 및 발행',
            ],
            skillTagList: ['JSP', 'jQuery', 'Slick'],
          },
          {
            title: '현대바이오랜드',
            href: 'http://www.hyundaibioland.co.kr/main',
            inform:
              '현대 바이오랜드의 비전, 비즈니스, 경쟁력 그리고 기업의 가치를 보여주는 웹사이트 페이지 제작 및 유지보수를 진행하였습니다.',
            items: ['웹 표준 준수', '영문 및 중국어 다국어 지원', '반응형 웹'],
            skillTagList: ['JSP', 'jQuery', 'Slick'],
          },
          {
            title: '금호건설 웹진 리뉴얼',
            href: 'https://webzine.kumhoenc.com/webzine/202109/00_main/main.asp',
            inform:
              '금호 어울림 웹진 사이트 리뉴얼 페이지 제작을 맡아 진행하였습니다. 메인 페이지와 여러 콘텐츠, 이벤트 페이지를 작업하였습니다.',
            items: ['웹 표준', '반응형 웹'],
            skillTagList: ['ASP', 'jQuery', 'Swiper', 'Bootstrap'],
          },
          {
            title: 'LG 트윈스 웹/앱',
            href: 'https://www.lgtwins.com',
            inform:
              'LG 트윈스 웹과 리뉴얼 된 앱 유지보수 및 신규 페이지를 제작하였습니다.',
            items: [
              '적응형 웹',
              '이벤트 기간에 맞춘 페이지 유지보수 및 신규 페이지 제작',
            ],
            skillTagList: ['JSP', 'jQuery', 'Swiper'],
          },
          {
            title: 'Feel the rhythm of Korea 2 캠페인 랜딩',
            href: 'http://english.visitkorea.or.kr/enu/2021viral/main.html',
            inform:
              '2021년 9월 한국 관광공사 홍보영상 Feel the rhythm of Korea 시즌 2 광고 캠페인 랜딩 마이크로 사이트를 제작하였습니다.',
            items: [
              '반응형 웹',
              '디테일 페이지에서 메인 페이지로 돌아가도 스크롤 유지',
              '영상을 불러오는 시간을 고려하여 불러오기 전까지 썸네일 이미지 노출',
            ],
            skillTagList: ['jQuery', 'Youtube API'],
          },
          {
            title: '배틀그라운드 Esports',
            href: 'https://www.pubgesports.com',
            inform:
              '배틀그라운드의 PGI.S 경기 일정을 확인할 수 있는 페이지를 저의 프로젝트 중 처음으로 API로 서버 통신을 하여 화면에 보여주는 기능들을 작업하였습니다.',
            items: [
              '페이지네이션 및 팀 및 선수 상세 페이지에서 뒤로가기하여도 페이지 및 스크롤 위치 유지',
              'UTC 시간 계산을 통해 항상 한국 시간을 기준으로 여러 나라에서도 시차에 상관 없이 경기 라이브 시간 맞춰 경기 표시',
              '국가별 경기 스케쥴에 맞춰 제공',
              '여러 나라 다국어 지원',
            ],
            skillTagList: ['JSP', 'jQuery'],
          },
        ],
      },
      {
        title: '계원예술대학교',
        subTitle: '디지털미디어 디자인 전공',
        date: ['2019.03', '2021.02'],
        inform:
          '디자인 뿐만 아니라 디지털미디어에 관련된 기획, HTML, CSS도 배웠으며 2학년때엔 웹을 만드는것에 관심이 가고 적성에 맞아 프로그래밍을 세부전공으로 선택해 자바스크립트, Unity C#을 배웠으며 각 분야를 이해하고 협력하여 결과물을 제작하였습니다. 자유로운 표현으로 프로젝트를 진행할 수 있어 좋아하는 인터랙션을 주로 다룰 수 있어서 재밌는 작업을 했었습니다.',
        items: [
          {
            title: '기역',
            href: 'https://jigiyeok.web.app/jigiyeok/',
            inform:
              '학생 때 나의 특이한 이름 기역의 아이덴티티가 부각될 수 있도록 화려한 인터랙션을 적용시켜 웹 포트폴리오 사이트를 제작하였습니다.',
            items: [
              '세부적인 인터랙션 및 글자가 그려지는 인터랙션 집중',
              '풀 페이지',
              '내부에 연결 된 개인 포트폴리오 사이트들은 대부분 내려간 상태',
            ],
            skillTagList: ['VanilaJs'],
          },
          {
            title: 'MomenTrip',
            href: 'http://digital-media.kr/degreeshow/2020/website/momentrip/index.html',
            inform:
              '졸업 작품 팀의 팀장 직을 맡으며 스크롤을 통해 직접 여행하는듯하게 서비스를 체험해볼 수 있는 프로모션 사이트를 제작하였습니다. 이목을 끌 수 있는 페이지의 구성과 인터랙션으로 좋은 성적을 내어 졸업 작품 최우수 작품으로 선정된 값진 경험도 하였습니다.',
            items: [
              '가로 스크롤 인터랙션',
              'left, top, right, bottom 속성을 통한 DOM 포지션 변경에서 transform 으로 바꿔 리플로우 개선',
              '기획 및 웹 디자인',
            ],
            skillTagList: ['VanilaJs'],
          },
        ],
      },
      {
        title: '한국IT전문학교',
        subTitle: '비쥬얼 웹디자인 전공',
        date: ['2015.03', '2015.12'],
        inform:
          '웹 디자인을 전공하여 포스터를 만들거나 일러스트를 만들었으며 웹 디자인과 HTML, CSS로 마크업하여 웹 페이지를 만드는 것을 배웠습니다. 디자인을 더욱 전문적으로 배우고 싶어 자퇴 후 계원예술대학교에 입학하게 되었습니다. 다른 분야지만 프론트엔드 개발자가 되기까지 첫 단추가 되었던 시점입니다.',
      },
      {
        title: '개인',
        items: [
          {
            title: '파충류 분양 서비스',
            href: 'https://develop.grother.net/product/list',
            inform:
              '풀스택 / 프론트엔드 / 백엔드 개발자, 기획자, 디자이너들로 구성되어 파충류에 관련된 서비스를 개발하는 사이드 프로젝트를 진행하고 있습니다. 이 과정에서 서로 기획적으로도 UI/UX 적으로도 고민하고 개선해야할 부분과 개발 방향성에 대해서도 끊임없이 토론하며 더 나은 방법을 생각하며 개발에 참여하고 있습니다. 처음 접해보는 기술들을 공부하며 프로젝트를 진행하고 MVP로 아이디어에 최소 핵심 기능을 우선 순위로 두어 프로젝트의 단계별 성장을 목표로 개발하고 있습니다. 첨부된 링크는 프로토타입으로 기능이 구현되어 있지 않습니다.',
            items: [
              '디자이너와 함께 디자인 시스템을 고안하고 개발에 적용',
              'Next Js 프레임워크를 사용하여 초기부터 구축',
              '처음 접해보는 라이브러리와 기술을 프로젝트에 적용해보면서 습득',
              'SEO를 대비한 SSR',
              '코드 개선을 위한 Pull Request 코드 리뷰 및 리팩토링',
            ],
            skillTagList: [
              'NextJs',
              'MUI',
              'React Query',
              'Recoil',
              'Axios',
              'Typescript',
              'Prettier',
              'Swiper',
            ],
          },
          {
            title: '개인 블로그 썸네일 생성기',
            href: 'https://jigi-btg.web.app',
            inform:
              '블로그의 글을 쓰다가 썸네일 이미지를 제작하는것이 번거로워서 간편하게 만들 수 있는 툴이 있으면 좋겠다는 생각에서 부터 시작하여 캔버스를 사용하여 간단한 웹을 만들었습니다. 기획부터 디자인까지 직접 진행하며 간단한 기능을 구현하였고, 이후에는 추가적인 기능들을  점차 붙여나갈 계획으로 제작하고 있습니다.',
            items: [
              '디자인 시스템 구성 및 UI 제작 및 개발',
              'HTML5 캔버스를 활용한 텍스트 제어',
              '캔버스 이미지 변환 및 저장',
              'Lazy를 활용한 Lazy Loading 및 코드 스플리팅',
              'utterances를 통한 피드백을 위한 댓글 기능',
              '반응형 웹',
              'Chrome, Safari, Firefox 지원 염두',
              'Firebase Hosting 배포',
            ],
            skillTagList: [
              'React',
              'Typescript',
              'Emotion',
              'React Router Dom V6',
              'Vanila Canvas',
              'Prettier',
              'React Lazy',
              'Firebase',
            ],
          },
          {
            title: '블로그',
            href: 'https://jikor1st.tistory.com',
            inform:
              '꾸준하게 공부하고 탐구하는것을 좋아합니다. 그 과정 속에서 저에 대해서 깨달았던 점은 시간이 조금 지나게되면 공부한 내용도 알게 모르게 점차 잊게 된다는 것이였습니다. 시간이 지나서 잊어버리는 기술들을 다시 봐도 바로 이해할 수 있도록 공부를 한 내용들을 블로그에 정리하고 있습니다.',
          },
        ],
      },
    ],
  },
  contact: {
    header: {
      id: 'contact',
      title: '연락 및 운영',
    },
    category: [
      {
        title: '깃허브',
        type: 'link',
        icon: 'GitHub',
        href: 'https://jikor1st.tistory.com',
      },
      {
        title: '블로그',
        type: 'link',
        href: 'https://jikor1st.tistory.com',
      },
      { title: '이메일', type: 'email', href: 'jikor1st@naver.com' },
    ] as ContactCategory[],
  },
};

interface ContactCategory {
  title: string;
  type: string;
  icon?: IconBaseProps['icon'];
  href: string;
}

// interface Subject {
//   title: string;
//   items: string[];
//   href: string;
//   inform: string;
//   skillTagList: string[];
// }
