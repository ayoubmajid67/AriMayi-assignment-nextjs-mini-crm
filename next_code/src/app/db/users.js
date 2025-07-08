let users = [
    {
        id: '1',
        username: 'Test User',
        email: 'test@arimayi.com',
        password: 'password'
    }
];


export const findUserByEmail = (email) => {
    return users.find(user => user.email === email);
};


export const addUser = (userData) => {
    const newUser = {
        id: crypto.randomUUID(), 
        ...userData
    };
    users.push(newUser);
    return newUser;
};


export const getUsers = () => {
    return users;
};

export const deleteUser = (id) => {
    const initialLength = users.length;
    users = users.filter(user => user.id !== id);
    return users.length < initialLength; // true if a user was deleted
};


export const updateUser = (id, updatedData) => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) return null;

    users[userIndex] = {
        ...users[userIndex],
        ...updatedData,
        id: users[userIndex].id 
    };
    return users[userIndex];
};
