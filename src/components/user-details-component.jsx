const UserDetails = ({ user }) => {
  if (!user) {
    return <p>No user data.</p>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>
        Address: {user.address.street}, {user.address.zipcode},{' '}
        {user.address.city}
      </p>
    </div>
  );
};

export default UserDetails;
