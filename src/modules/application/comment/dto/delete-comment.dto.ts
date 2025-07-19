import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteCommentDto {
  @IsNotEmpty()
  @IsString()
  commentId: string;

  @IsNotEmpty()
  @IsString()
  authorId: string;
}
