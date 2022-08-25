import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('abc')
export class AppController {
  constructor(private readonly appService: AppService) {}
  // GET /abc/hello
  @Get('hello') // 데코레이터 어노테이션 ( 이런걸 Ioc(제어의 역전) = Inversion of Control, 저희가 코드를 연결하는게 아니라 네스트가 저희 코드를 찾아서 연결 )
  getHello(): string {
    return this.appService.getHello();
  }
  // 데코레이터(공식 명칭 데코레이터)도 함수를 @해서 특별하게 사용할 수 있게 한것
  // 밑에 예시로 postHello함수에 기능을 추가해주는 함수
  // class도 데코레이터로 기능을 추가해준것 매개변수에도 데코레이터를 적어줄 수 있음
  // 다만 모듈(app.module)을 직접 구성해줘야한다는 점에서 spring보다 IOC가 약함
  // GET /abc/hi
  @Get('test')
  getTest(): string {
    return this.appService.getTest();
  }
}
