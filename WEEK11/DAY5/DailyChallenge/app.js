const express = require('express');
const bcrypt = require('bcrypt');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const usersFile = 'users.json';

app.post('/register', async (req, res) => {
    try {
        const { name, lastName, email, username, password } = req.body;

        const usersData = JSON.parse(await fs.readFile(usersFile));
        if (usersData.some(user => user.username === username)) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = { name, lastName, email, username, password: hashedPassword };
        usersData.push(newUser);
        await fs.writeFile(usersFile, JSON.stringify(usersData, null, 2));

        res.status(201).json({ message: 'Hello, your account is now created!' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const usersData = JSON.parse(await fs.readFile(usersFile));
        const user = usersData.find(user => user.username === username);

        if (!user) {
            return res.status(404).json({ message: 'Username is not registered' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        res.status(200).json({ message: `Hi ${username}, welcome back again!` });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/users', async (req, res) => {
    try {
        const usersData = JSON.parse(await fs.readFile(usersFile));
        res.status(200).json(usersData);
    } catch (error) {
        console.error('Error getting users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const usersData = JSON.parse(await fs.readFile(usersFile));
        const user = usersData.find(user => user.id === req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Error getting user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, lastName, email } = req.body;

        const usersData = JSON.parse(await fs.readFile(usersFile));
        const index = usersData.findIndex(user => user.id === id);

        if (index === -1) {
            return res.status(404).json({ message: 'User not found' });
        }

        usersData[index] = { ...usersData[index], name, lastName, email };
        await fs.writeFile(usersFile, JSON.stringify(usersData, null, 2));

        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
