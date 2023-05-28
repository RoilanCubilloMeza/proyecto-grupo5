
export type Usuario = {
name: string;
password: string;
id:string
email:string
};
export interface User {
    id: string;
    name: string;
    email: string;
    role: "admin" | "client";
    password: string;
  }

