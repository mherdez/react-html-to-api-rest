import Card from './Card';

const UsersList = ({ users, cambiarActivo }) => {
  return (
    <>
      {users.map((user) => {
        console.log(user);
        const { name, login, picture, activo } = user;
        return (
          <Card
            key={login.uuid}
            id={login.uuid}
            name={`${name.first} ${name.last}`}
            photo={picture.large}
            activo={activo}
            cambiarActivo={cambiarActivo}
          />
        );
      })}
    </>
  );
};

export default UsersList;
