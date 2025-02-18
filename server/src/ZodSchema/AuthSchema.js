import { z } from 'zod'; // Correct import statement

const SignInSchema = z.object({
    Email: z.string().email('Invalid email address'),
    Password: z.string().min(6, 'Password should be at least 6 characters long'),
});

const SignUpSchema = z.object({
    FirstName: z.string().min(1, 'First Name is required'),
    LastName: z.string().min(1, 'Last Name is required'),
    Phone: z.string().length(10, 'invalid Phone NUmber'),
    Email: z.string().email('Invalid email address'),
    Password: z.string().min(6, 'Password should be at least 6 characters long'),
});

export { SignInSchema, SignUpSchema };