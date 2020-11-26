import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql/dist';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
})
export class AppModule {}
