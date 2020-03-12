import React from "react";

interface IUser {
  name: string;
  email: string;
}

interface Props {
  user: IUser;
}

/**
 *  Com uso da Interface no próprio Component User React.FC<Props>
 * utilizar normalmente a propridade Children
 */
const User: React.FC<Props> = ({ user }: Props) => {
  return (
    <div>
      <strong>Nome: </strong>
      {user.name} <br />
      <strong>Email: </strong>
      {user.email} <br /> <br />
    </div>
  );
};

export default User;
