import React from 'react';

const User = ({id, name, username, email}) => {
    return (
        <div>
            <p>id: {id}, {name} -- {username} -- {email}</p>
        </div>
    );
};

export default User;