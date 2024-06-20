import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TestimonialModuleBase } from "./base/testimonial.module.base";
import { TestimonialService } from "./testimonial.service";
import { TestimonialController } from "./testimonial.controller";
import { TestimonialResolver } from "./testimonial.resolver";

@Module({
  imports: [TestimonialModuleBase, forwardRef(() => AuthModule)],
  controllers: [TestimonialController],
  providers: [TestimonialService, TestimonialResolver],
  exports: [TestimonialService],
})
export class TestimonialModule {}
