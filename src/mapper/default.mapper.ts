import { ClassConstructor, plainToClass } from 'class-transformer';

import { AbstractMapper } from './abstract.mapper';

export class DefaultMapper<E, D> implements AbstractMapper<E, D> {
  constructor(
    private readonly enityClass: ClassConstructor<E>,
    private readonly dtoClass: ClassConstructor<D>,
  ) {
    this.toDto = this.toDto.bind(this);
    this.toEntity = this.toEntity.bind(this);
  }

  toDto(entity: E): D {
    return plainToClass(this.dtoClass, entity);
  }

  toEntity(dto: D): E {
    return plainToClass(this.enityClass, dto);
  }
}
