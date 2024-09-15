import UserModel from "./user.model.js";
import jwt from 'jsonwebtoken'
export default class UserController {
    // Handle user registration

    registration(req, res) {
        const { name, email, password } = req.body;
        UserModel.add(name, email, password);
        res.status(200).send('user is been added sucessfully')
    }

    // Handle user login and issue JWT


    login(req, res) {
        const { email, password } = req.body;
        let result = UserModel.confirmLogin(email, password);
        if (result) {
            // Generate a JWT with 1-hour expiration

            const token = jwt.sign({ UserId: result.id, email: result.email }, 'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz', {
                expiresIn: '1h'
            });
            return res.status(200).send(token)
        } else {
            res.status(400).send('incorrect credentials')
        }
    }
}