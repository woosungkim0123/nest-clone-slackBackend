import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  // 서비스를 분리하는 이유?
  // 비지니스 로직의 분리 (실제 동작)
  // 트랜잭션이 뭐지?
  /*


    1. 테스트할때 편리해짐(독립적)
    express 테스트 코드 작성시 req, res, next 3가지 모두 mocking 해줘야함(가짜객체) 
    nest에서는 mocking해줄필요가 없음. => 하나의 함수 그 자체로써 테스트하면 됨

    2. 요청과 응답에 대해서는 모름
    => 서비스단에서는 req, res는 없는게 좋음, 순수하게 해야하는 동작만 결과값만 컨트롤러로 돌려주는

    컨트롤러는 req, res에 대해 알아야함
    
    express에서는 하나의 미들웨어 적는다고 했을때
    위에 요청받는 부분이 있고 요청을 조작, 비지니스 로직, 응답
    한번에 적는 경우가 많았는데
    비지니스 로직만 서비스로 분리를 한 것,
    
    3. 코드 재사용
    
    예 : 한명의 유저를 찾는 동작 app전체에 걸쳐 많이 발생함.
    서비스로 분리해두면 라우터 같은데서 한명의 유저찾는 코드가 중복되지않고 서비스에서 중복이 제거가됨
    
    
    RES.JSON 대신 return user로 처리가능 
    res => 테스트할 때 mocking 해줘야함
  */
  constructor(private configService: ConfigService) {}
  getUser(): string {
    return this.configService.get('SECRET1');
  }
  postUser(): string {
    return 'Test!!';
  }
}
