
import { User } from '@/entity/user';
import { UserType } from '@/enum/user-type';
import { describe, test, expect } from 'vitest';

describe('User', () => {
  test('should create a ADMIN user', () => {
    const sut = new User({
      type: UserType.ADMIN,
    });

    expect(sut.id).toBeDefined();
    expect(sut.id).toBeTypeOf('string');
    expect(sut.type).toBe(UserType.ADMIN);
    expect(sut.createdAt).toBeDefined();
    expect(sut.createdAt).toBeInstanceOf(Date);
  });

  test('should construct an user that exists', () => {
    const createdAt : Date = new Date();
    const expireAt = new Date(createdAt);


    const sut = new User({
      id:'local-id',
      type: UserType.ADMIN,
      createdAt: createdAt,
    });

    expireAt.setDate(expireAt.getDate() + 10);

    expect(sut.id).toBe('local-id');
    expect(sut.type).toBe(UserType.ADMIN);
    expect(sut.createdAt).toEqual(createdAt);
    expect(sut.expireAt(10)).toEqual(expireAt);
  })
});