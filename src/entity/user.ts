import { Entity } from "@/entity/entity";
import { UserType } from "@/enum/user-type";
import { EntityType } from "@/types/entity-type";
import { OptionalType } from "@/types/optional-type";

type Constructor = OptionalType<EntityType<User>, 'id' | 'createdAt'>;

export class User extends Entity {
  type: UserType;
  username?: string;

  constructor(props: Constructor){
    super();
    Object.assign(this, props);
  }

  /**
   * @param [daysToExpire=3] - Number to sum for expiry that user
   * @returns - Final date to expiry visitors    
   */
  expireAt(daysToExpire: number = 3): Date | undefined {
    const expireDate = this.createdAt;
    expireDate.setDate(expireDate.getDate() + daysToExpire);
    return expireDate;
  }
}
