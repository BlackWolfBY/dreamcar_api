import { ClassConstructor, plainToClass } from 'class-transformer';

import { AbstractMapper } from './abstract.mapper';

export class DefaultMapper<E, D> implements AbstractMapper<E, D> {
  constructor(
    protected readonly enityClass: ClassConstructor<E>,
    protected readonly dtoClass: ClassConstructor<D>,
  ) {
    this.toDto = this.toDto.bind(this);
    this.toEntity = this.toEntity.bind(this);
  }

  toDto(entity: E): D {
    return plainToClass(this.dtoClass, entity, {
      excludeExtraneousValues: true,
    });
  }

  toEntity(dto: D): E {
    return plainToClass(this.enityClass, dto);
  }
}
