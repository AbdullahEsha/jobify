declare global {
  namespace Express {
    interface Request {
      user?: TUser;
    }
  }
}

export type TUser = {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role?: "admin" | "superadmin" | "user";
  updatedAt?: Date;
  createdAt?: Date;
};

// type for user save method
export type TUserAdd = {
  save(): TUserAdd | PromiseLike<TUserAdd>;
  name: string;
  email: string;
  password: string;
  role?: "admin" | "superadmin" | "user";
};
