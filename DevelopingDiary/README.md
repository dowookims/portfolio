# 프로젝트 일지

## 19년 6월  

### 2019.06.25 프로젝트 빌딩 시작
  * 왼쪽, 오른쪽 화면 분할 및 메인 메뉴 왼쪽에 구성
  * 메뉴는 `profile`, `github`, `project`, `study story`, `TIL`로 구성
  * 메인 메뉴(왼쪽) 클릭시 메인 콘텐츠 영역에 사이드 메뉴 표시. 여기에 들어갈 콘텐츠 고민 중.

### 2019.06.26 프로필 페이지 거의 다 완성  
  
  functional component로 제작을 하면서 삽질을 많이함.  
  부모 component에서 자식 component로 줄 때 `props`전달에서 뻘짓을 많이 했는데, `<ProfileCard message={message} />`라고 주고 자식 컴포넌트에서 받아서 쓸 때,
  ```js
  /* Example
  const message = {
    year: 2019,
    content: ["nice", "to", "meet"]
  }
  */

  const ProfileCard = (props) =>(
    <div>
    { props.content.map((text, idx) => (
      <p key={idx}>text</p>
    ))}
    </div>
  )
  ```
  이렇게 사용하다 보니 엄청난 에러를 겪게 되는데... 안될리가 없는데 왜 안되지 하면서 props를 console에 찍어본 결과... 아뿔싸... props객체 내에 message라는 key로 내가 보내려던 객체가 들어가 있었다. 이거 수정하려고 시간을 많이 날려먹었다.  

  그리고 transition과 animation을 쓰기위해 `keyframe`을 한번 넣어보려고 했는데 내가 원하는 효과가 생각보다 잘 나타나지 않아서 고생에 고생을 하다가 시간 날때 다시 한번 도전해 보기로 했다. 그리고 styled-component을 사용해서 css를 한 파일에 다 처리하려고 하다 보니 코드 길이가 너무 늘어나서 분할하여 작업을 진행하고 있다.

  오늘 조금 더 작성하면 `Profile`은 어느정도 정리 될 것 같다.  

  
### 2019.06.27 CSS는 어려워

 Profile이 어느정도 구성이 되었을 때, 이제 transition이나 animation으로 효과를 넣어서 페이지를 꾸미면 괜찮겠다는 생각이 들었다.  

 이전부터 쓰고 싶었던 keyframes를 animation을 통해 구현하고, React hook에 있는 `useState`로 조건부 렌더링 및 조건적으로 `className`을 추가해서 작업하는데, 컴포넌트의 상태에 따라서 이 속성들을 어떻게 `styled-components`에게 전달하고, 이를 활용해서 동적으로 css 색상, 크기, 애니메이션을 조절 할 수 있을까 생각해보니 머리가 펑 터져버렸다.

또 꽤나 고민하다가 넘어간 부분으로, 이전에 속성값에 `transform`을 쓰고, 특정 조건을 만족하여 클래스 이름이 추가 될 때, 전에 있던 css 속성을 지우고 다시 작업을 어떻게 해야 할지 고민을 했었는데... 지금 다시 생각해보니 `removeClassName`과 비슷한 자바스크립트 함수를 활용해서 하면 될 거 같다는 생각이 들었다.

 그리고 className으로 속성을 추가하게 됬을 때 이 추가된 className을 기반으로 새로운 속성을 넣기 위해 `scss`를 사용했는데, styled-component에서는 어떤 부분을 활용해서 할 수 있을지 공식 문서를 참조해 봐야겠다.

 덴마에서 세가지 기술을 섞은 콤비네이션을 쓰는 퀑이 하이퍼 퀑이라던데 프로그래밍도 그런 느낌이다. 뭔가를 배우고 이를 융합해서 사용하려고 하면 복잡도가 지수 승으로 증가하는 느낌이다. 

 아, 그리고 로그인 기능을 추가 하기 위해 modal을 만들고 있고, modal에서 x클릭 시 모달을 닫는 기능을 구현 할 때 상태를 관리하는 문제 때문에 리덕스를 구현 하고 있는 중이다. 그래서 `store`디렉토리에서 리덕스 관련 로직을 구성하던 도중 `component`에 로직과 관련된 내용들을 정리해서 이 부분을 다시 리팩토링 해야 한다. 이런!  

> TIL : `keyframes` `animation` `transition` `transform` `grid` `window.scrollY` `node.offsetTop` 


### 2019.06.28 Modal 만들기

로그인 버튼을 클릭시 Modal 이 열려야 하는데, 나중에 회원가입시에도 Modal에서 나타내려고 하면 어떻게 해야 할까? 그리고, modal로 로그인을 눌렀을 때 `react-router`로 url을 변경을 해줘야 할지, 아니면 그냥 현재 창에서 모달로만 보여줘야 할지.  

Modal 을 작업하다보니 같은 component를 만들고 이를 상속해서 각각의 다른 attrs를 갖는 components를 작성했어야 했는데 이부분에 대해서 styled-components에 있는 `.attrs`을 사용해 작업해 보았다. 여기서 궁금한 점은 React Component에서 특정 속성을 주었을 때, 이에 맞는 조건부 렌더링으로 속성이 변할 수 있을지 테스트 해보는 것인데 소스코드에 의존성이 더해지다 보니 함부로 무언가를 건드려서 테스팅하기가 조금 씩 복잡해지고 있다. 조만간 곧 테스팅을 배워서 간단한 것들을 조작 할 수 있지 않을까 싶다.

> TIL: `styled-components attrs`, `boiler-plate(생각보다 엄청나다..!)`

### 2019.06.29 express로 backend 구성하기.

express 로 백엔드 단을 구성해서 프로젝트를 진행하는 건 또 처음이라 생각보다 많은 삽질을 하고 있습니다. 디렉토리 구조부터 시작해서 어떻게 하나하나 짜줘야 할지 고민이 됩니다.  
이럴때면 django로 로직을 구현하던게 생각이나네요. 장고로 구현하면 금방 금방 될텐데. 물론 장고로 mongodb와 연동해서 작업을 해본적은 없지만 그래도 더 자주 쓰던거다 보니 익숙하지 않을까 싶습니다.  


장고의 MTV를 다시 MVC로 생각해서 작업을 해보면 Model, View, Controller가 있습니다.  

이를 파일 구조를 나눠서 생각해보면 맨처음 기본 셋팅을 해주는 `index.js(app.js)`가 위치하고, 각 특성마다 디렉토리 구조를 나눠서 `Model` 을 담당하는 `model` 과 `controller`를 담당하는 `routes`가 있는데, `routes`에서 해당 route에 요청이 왔을 때 어떤 로직과 아키텍처로 구현을 해야하는지, 장고의 경우 `fat models`을 추구했는데 express에서 best practice는 뭔지 한참 생각을 해봤고, 그 결과로는  
아직 설계도 제대로 안된 채 빌드를 하고 있기 때문에 best practice는 일단 돌아가는 코드다. 라는 생각이 들었습니다.

그래서 일단은 구현을 하고 이후 새로운 기능을 추가하기전 이 부분을 다시금 고려해봐야 할 것 같습니다.

셋팅도 셋팅이고 ORM을 다시 익숙해지고, model 과 관련된 부분을 어떤 로직과 메서드들을 사용해야 할지, 특히 static 함수와 method 함수의 활용과 JWT를 연동하여 작업하는 것을 인터넷과 공식문서를 찾아가며 정리하고 있습니다. 생각보다 이 과정이 다시금 복잡하다는 것을 느낍니다.

> TIL: `mongoose` `express` `dotenv` `express architecture`

### 2019.06.30 express와 mongoose, jwt로 로그인 구현하기

로그인 하는 로직은 단순하다면 단순하지만, 복잡하면 상당히 복잡해 진다. 이럴때, 장고에서 쓰던 라이브러리들이 그립기는 하지만 일단은, 그래도 구현해 보기 위해 `velopert`님의 블로그 글을 참조하여 작업을 진행하였다.  
아직 express가 익숙하지 않아 혼자 무언가를 진행한다는 것은 벅차기 때문에 공식문서와 인터넷에 있는 구조들을 바탕으로 작업을 진행하고 있는데, 얼추 흐름은 알겠지만 관련 라이브러리의 사용과 왜 이렇게 쓰이고, 파라미터들이 이렇게 들어가는지는 아직도 복잡하다.

지금은 로그인 기능을 아주 간단하게 구현했지만, 추후에 validator와 에러처리, 사용자에게 무엇이 잘못 입력되었는지를 알려주는(이름 중복 또는 아이디 중복) 것들을 추가 할 예정이며, passport library를 통해 oauth 구현도 해보고 싶다. 그 전에 중요한건 내가 작성한 코드들을 다시 분석하고, 리팩토링해서 더 깔끔한 구조로 만들어 보고 싶다.

### 2019.07.01 Redux를 활용한 로그인 인증 및 Vue  

오늘부터 SSAFY에서 vue로 프로젝트를 진행하게 되었다. 리액트를 해도 되지만, 컨설턴트님과 이야기 해봤을 때 다른 사람들과 협업 할 시, 다른 사람들은 리액트를 모르는데 하는건 힘들거 같다는 이야기를 듣고 바로 Vue문서를 열었다.

오늘은 `Vue` `Vue Router` `Vuex` `Vuetify`에 대해 문서를 읽어봤다. 확실히 리액트를 하기도 했기에 익숙한 개념들이라 리액트랑 비교하며, 비슷한 개념과 문법을 정리해 나갔다. 확실히 뷰가 러닝커브가 낮다는걸 다시금 알게 되었다.
오늘 제일 시간을 많이 쓴게,  Vue의 아키텍처를 이해하는 거였는데, 특히 `Vuetify`에서 template name을 독특하게 쓰고, 이에 대한 명세가 자세히 나오지 않아서 꽤나 헤맸었다. `vuetify`만 아니면 아마 `vuex`를 통해 상태관리 하는것에 시간을 많이 쓰지 않았을까 싶다.

이번주 주어진 과제로 개인 블로그를 만드는, 그 중에서도 `view`를 담당하는 부분을 작성하는 것이기 때문에 주어진 명세에 대한 것을 90% 구현하였다. 나머지 디자인적 요소와 컨텐츠는 내일 추가할 예정이고, 아마 내일은 리액트 프로젝트를 더 진행하거나 다른 친구들 vue 하는 걸 도와줄 것 같다.

`vuetify`를 하면서 생각보다 customizing 해야 할 부분이 많았는데 그 중에서 브라우저의 x 축의 길이에 따른 width, font-size 변화를 하는 것을 드디어 하게됬는데, 생각보다 어렵지 않았다. 그냥 `@mediaquery`를 쓰기만 하면 됬었던 거라 뭐가 그렇게 어렵길래 두려워 했는지... 참

> TIL: `vue` `vuetify` `vuex` `vue-router` `media-query`
