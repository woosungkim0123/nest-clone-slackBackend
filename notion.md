# nest

## express vs nest

1. 모듈끼리 import, export가 명확 => 서버 구조 파악 용이

2. dependencies injection, inversion of control, aspect/oriented Programming 등에 소홀해지기 쉬움(node 개발자)

3. express에서는 미들웨어가 모든 것을 담당, nest는 미들웨어들이 기능들로 다 분리

하나의 미들웨어가 여러개 역할을 할 수 있는 것이 아니라 하나의 개념들이 한가지 역할만 함 => 무슨 일을 하는지 한 눈에 들어옴

## 특징

nest는 기본적으로 내부에 express를 사용중

## 참고

mysql 패키지 같은건 db가 아니라 db를 연결하는 드라이버

## 시작

```
npm i -g @nestjs/cli

// 프로젝트 생성
nest new a-nest(폴더이름)
```

```
"esModuleInterop": true, // import * as React from 'react' => import React from 'react'
```

### 핫리로딩 => 공식문서 참고

### 서비스 분리 이유 (비지니스 로직의 분리)

#### 1. 테스트할 때 편함(독립적)

express 테스트 코드 작성시 req, res, next 3가지 모두 mocking 해줘야함(가짜객체)

nest에서는 mocking해줄필요가 없음. => 하나의 함수 그 자체로써 테스트하면 됨

#### 2. 요청과 응답 X

컨트롤러는 req, res에 대해 알아야하지만 서비스단에서는 req, res는 없는게 좋음, 순수하게 해야하는 동작만 결과값만 컨트롤러로 돌려주게

#### 3. 코드 재사용

예시로 한명의 유저를 찾는 동작 app전체에 걸쳐 많이 발생함. 서비스로 분리해두면 라우터 같은데서 한명의 유저찾는 코드가 중복되지않고 서비스에서 중복이 제거가됨

### return 처리

res.json(user) 대신 return user로 처리가능 (테스트 시 편함)

### .env

express와 nest의 큰 차이는 모듈
.env.development, .env.production 등 사용 가능
express dotenv를 사용하려면 => nest의 모듈로 만들어서 다시 연결
그냥 미리 dotenv 모듈로 감싸놓은 패키지를 사용
