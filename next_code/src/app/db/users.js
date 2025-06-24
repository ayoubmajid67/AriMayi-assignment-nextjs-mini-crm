// In-memory user store (simulates a database)
let users = [
    // Pre-populate with a test user for login
    {
        id: '1',
        username: 'Test User',
        email: 'test@arimayi.com',
        // In a real app, NEVER store plain text passwords. Always hash them.
        password: 'password123' 
    }
];

// Function to find a user by email
export const findUserByEmail = (email) => {
    return users.find(user => user.email === email);
};

// Function to add a new user
export const addUser = (userData) => {
    const newUser = {
        id: (users.length + 1).toString(),
        ...userData
    };
    users.push(newUser);
    return newUser;
};

// Function to get all users (for potential admin features)
export const getUsers = () => {
    return users;
};

// Function to delete a user by ID
export const deleteUser = (id) => {
    users = users.filter(user => user.id !== id);
    return true;
};