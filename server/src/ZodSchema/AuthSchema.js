import zod from 'Zod'

const SignInSchema = zod.object({
    Email: zod.string().email('Invalid email address'),
    Password: zod.string().min(6, 'Password should be at least 6 characters long'),
});

const SignUpSchema = zod.object({
    FirstName: zod.string().min(1, 'First Name is required'),
    LastName: zod.string().min(1, 'Last Name is required'),
    Phone: zod.string().length(10, 'invalid Phone NUmber'),
    Email: zod.string().email('Invalid email address'),
    Password: zod.string().min(6, 'Password should be at least 6 characters long'),
});

export { SignInSchema, SignUpSchema }