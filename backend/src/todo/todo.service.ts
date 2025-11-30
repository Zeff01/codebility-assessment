import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto) {
    const exist = await this.todoRepository.findOneBy({ title: createTodoDto.title });
    if (exist) {
      throw new ConflictException('Todo with this title already exists');
    }
    return this.todoRepository.save(createTodoDto);
  }

  findAll() {
    return this.todoRepository.find();
  }

  async findOne(id: number) {
    const value = await this.todoRepository.findOneBy({ id: id });

    if(!value) {
      throw new NotFoundException('Todo not found');
    }

    return value;
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const value = await this.findOne(id);
    const todo = this.todoRepository.merge(value, updateTodoDto);

    return this.todoRepository.save(todo);
  }

  async remove(id: number) {
    const value = await this.findOne(id);

    return this.todoRepository.remove(value);
    
  }
}
