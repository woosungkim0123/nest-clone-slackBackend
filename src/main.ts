import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`listening on port ${port}`);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();

/*
express와 nest의 큰 차이는 모듈
express dotenv => nest의 모듈로 만들어서 다시 연결
그럴빠엔 그냥 미리 dotenv 모듈로 감싸놓은 패키지를 사용 

*/
