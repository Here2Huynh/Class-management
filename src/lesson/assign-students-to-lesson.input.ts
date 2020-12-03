import { InputType, Field, ID } from '@nestjs/graphql/dist';
import { IsUUID } from 'class-validator';

@InputType()
export class AssignStudentsToLessonInput {
  @IsUUID()
  @Field((type) => ID)
  lessonId: string;

  @IsUUID('4', { each: true })
  @Field((type) => [ID])
  studentIds: string[];
}
