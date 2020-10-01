import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() { }

  @Get()
  getHello(): string {
    return `
    <h1 style="font-size:300%;">Hi! this is an API for interview with J E N O S I Z E</h1>
    <p style="font-size:160%;">Google Place API <a href="jenosize?keyword=jenosize" target="_blank">Click!</a></p>
    <p style="font-size:160%;">Game 24 <a href="jenosize/game24/1234" target="_blank">Click!</a></p>
    <footer>
      <p>Author: Wathunyu Yala<br>
      <a href="mailto:wathunyu.y@gmail.com">wathunyu.y@gmail.com</a></p>
    </footer>
    `
  }
}
