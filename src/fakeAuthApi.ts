/**
 * Backend for DB
 */
const Users = [
  {
    username: 'pranshu',
    password: 'dobhal',
  },
  {
    username: 'lavanya',
    password: 'sengar',
  },
];

/**
 * Function to find user in DB
 */
const findUserByUsername = (username: string) => {
  return Users.find((user) => user.username === username);
};

export const fakeAuthApi = (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const user = findUserByUsername(username);
      
      if (user?.password === password) {
        resolve({ success: true, status: 200, token: 'abcd' });
      }
      reject({ success: false, status: 401 });
    }, 3000);
  });
};
