import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({
    example: 'sibu2005@naver.com',
    description: '이메일',
    required: true,
  })
  public email: string;
  @ApiProperty({
    example: 'sibu2005',
    description: '닉네임',
    required: true,
  })
  public nickname: string;
  @ApiProperty({
    example: 'hihi123!',
    description: '패스워드',
    required: true,
  })
  public password: string;
}
