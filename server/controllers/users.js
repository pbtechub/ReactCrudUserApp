let users = [];
import { v4 as uuidv4 } from 'uuid';

export const getUser = (req, res) => res.send(users)

export const createUser = (req, res) => {
    console.log('User posted from client side..');
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    console.log(users);
    res.send(`user with name ${user.firstName} successfully added to database`)}

    export const foundUser = (req, res) => {
        const {id} =  req.params;
        const foundUser = users.find((user) => user.id === id)
        res.send(foundUser)}

    export const deleteUser = (req, res) => {
        const {id} =  req.params;
        users = users.filter((user) => user.id !== id)
        res.send(`user deleted with id ${id} successfully`)}

    export const updateUser =  (req, res) => {
        const {id} =  req.params;
        const user = users.find((user) => user.id === id)
        const { firstName, lastName, phone, email, city} = req.body;
        console.log(req.body);
        
        if(firstName) user.firstName = firstName;
        if(lastName) user.lastName = lastName;
        if(phone) user.phone = phone;
        if(email) user.email = email;
        if(city) user.city = city;
    
        res.send(`user with id ${id} successfully updated`)}