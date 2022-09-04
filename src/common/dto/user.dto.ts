import { ApiProperty } from '@nestjs/swagger';
import { JoinRequestDto } from 'src/users/dto/join.request.dto';

// 이름을 Dto로 만들면 좋은게 validation 라이브러리 붙여서 body 받음과 동시에 validation도 가능
// 런타임에도 존재하는 클래스라서 가능 => 그런걸 안하면 interface랑 큰 차이가 없음
// 상속을 통해 중복 제거
export class UserDto extends JoinRequestDto {
  @ApiProperty({
    required: true,
    example: 1,
    description: '아이디',
  })
  id: number;
}
