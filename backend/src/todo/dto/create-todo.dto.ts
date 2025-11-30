import { IsNotEmpty, MinLength, IsOptional, IsBoolean, MaxLength } from 'class-validator';

export class CreateTodoDto {
    @IsNotEmpty({ message: 'Title is required' })
    @MinLength(3, { message: 'Title must be at least 3 characters' })
    @MaxLength(50, { message: 'Title limit reached, max 50 characters' })
    title: string;

    // default false
    @IsOptional()
    @IsBoolean({ message: 'Completed must be a boolean' })
    completed?: boolean;
}
