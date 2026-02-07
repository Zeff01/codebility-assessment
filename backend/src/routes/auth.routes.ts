import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User, RegisterInput, LoginInput, UserResponse } from '../types';
import { validateEmail, validatePassword, validateRequired } from '../utils/validation';
import { createUser, findUserByEmail } from '../utils/database';

const router = Router();

router.post('/register', async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, name }: RegisterInput = req.body;

    const requiredError = validateRequired({ email, password, name });
    if (requiredError) {
      res.status(400).json({ error: requiredError });
      return;
    }

    if (!validateEmail(email)) {
      res.status(400).json({ error: 'Invalid email format' });
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      res.status(400).json({ error: passwordError });
      return;
    }

    const existingUser = findUserByEmail(email);
    if (existingUser) {
      res.status(409).json({ error: 'Email already registered' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: User = {
      id: Date.now().toString(),
      email,
      password: hashedPassword,
      name,
      createdAt: new Date()
    };

    createUser(newUser);

    const userResponse: UserResponse = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      createdAt: newUser.createdAt
    };

    res.status(201).json({ user: userResponse });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

router.post('/login', async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password }: LoginInput = req.body;

    const requiredError = validateRequired({ email, password });
    if (requiredError) {
      res.status(400).json({ error: requiredError });
      return;
    }

    const user = findUserByEmail(email);
    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const userResponse: UserResponse = {
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: user.createdAt
    };

    const token = jwt.sign(userResponse, process.env.JWT_SECRET!, {
      expiresIn: '24h'
    });

    res.json({ token, user: userResponse });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

export default router;
