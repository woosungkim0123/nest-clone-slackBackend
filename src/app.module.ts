import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const getEnv = async () => {
  // async 함수로 만들 수 있음(비동기)
  // const response = await axios.get('/비밀키요청')
  // return response.data
  return {
    SECRET1: 'cotewoosungfirest1',
  };
};

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [getEnv] })],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}

/*
다른 모듈은 imports에 넣어주기만 하면되는데 가끔가다 forRoot forFeature, register 등이 있는데 거기 안에 설정을  필요한경우
forRoot

config조차도 서비스로 빼기 => isglobal ture
환경변수 외부객체 => nest와 상관없음
그것마저도 nest랑 엮어서 nest가 통째로 관리할 수 있게끔

그리고 test할때 의존성 주입할 때 자유자재로 원하는 환경변수 값을 넣을 수가 있음

.env 의 경우 폴더에 바로 넣기보다는 보통 .env aws 저장소나 구글 클라우드 플랫폼 보안 관리자 
이런것에서 불러와서 환경변수로 만드는 작업을 하게됨

config => 비동기 (외부에 요청을 보내서 데이터를 가져와서 내 config로 만듬)


*/
