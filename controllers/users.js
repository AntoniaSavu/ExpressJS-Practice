import { v4 as uuidv4 } from 'uuid';
let users = [
    
];
export const createUser = (req, res) => {
   
    const user = req.body;
 
    users.push({ ...user, id: uuidv4() });
    res.send(`user with the name ${user.firstName} was just added!`);
};

export const patchUser = (req, res) => {
    const id = req.params.id;
    const { firstName, lastName, age } = req.body;
    let userToBeUpdated = users.find((user) => user.id === id);
    if (firstName) {
        userToBeUpdated.firstName = firstName;
    }
    if (lastName) {
        userToBeUpdated.lastName = lastName;
    }
    if (age) {
        userToBeUpdated.age = age;
    }
    res.send("ok!");

};
export const getUser = (req, res) => {
    const id = req.params.id;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
};

export const deleteUser = (req, res) => {
    const id = req.params.id;
    users = users.filter((user) => user.id !== id);
    res.send('user deleted');

};
export const getUsers = (req, res) => {

    res.send(users);
    
};