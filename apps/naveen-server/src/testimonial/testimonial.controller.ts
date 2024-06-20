import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TestimonialService } from "./testimonial.service";
import { TestimonialControllerBase } from "./base/testimonial.controller.base";

@swagger.ApiTags("testimonials")
@common.Controller("testimonials")
export class TestimonialController extends TestimonialControllerBase {
  constructor(
    protected readonly service: TestimonialService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
