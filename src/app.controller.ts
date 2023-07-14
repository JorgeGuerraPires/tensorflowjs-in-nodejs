import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as tf from "@tensorflow/tfjs";


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    console.log("TensorFlow.js in Node.js", tf.version.tfjs);
    return this.appService.getHello();
  }
}
