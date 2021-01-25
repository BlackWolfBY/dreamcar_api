export interface AbstractMapper<E, D> {
  toDto(entity: E): D;

  toEntity(dto: D): E;
}
