import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserDto } from 'src/common/dto/user.dto';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@ApiTags('USER')
@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @ApiResponse({ type: UserDto })
  @ApiOperation({ summary: '내정보조회 ' })
  @Get()
  getUsers(@Req() req) {
    return req.user;
  }

  @ApiOperation({ summary: '회원가입 ' })
  @Post()
  postUsers(@Body() data: JoinRequestDto) {
    this.usersService.postUsers(data.email, data.nickname, data.password);
  }
  @ApiOkResponse({
    description: '성공',
    type: UserDto,
  })
  @ApiOperation({ summary: '로그인 ' })
  @Post('login')
  login() {}

  @ApiOperation({ summary: '로그아웃 ' })
  @Post('logout')
  logout(@Req() req, @Res() res) {
    req.logOut();
    res.clearCokkie('connect.sid', { httpOnly: true });
    res.send('ok');
  }
}
