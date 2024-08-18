import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

passport.use(new GoogleStrategy({
    clientID: process.env.GoogleAuth_client_id, // Replace with your Google Client ID
    clientSecret: process.env.GoogleAuth_client_secret, // Replace with your Google Client Secret
    callbackURL: '/auth/google/callback'
},
    async (accessToken, refreshToken, profile, done) => {
        try {
            //console.log(profile);
            // Check if the user already exists in the database
            let user = await prisma.user.findUnique({
                where: {

                    Email: profile.emails[0].value
                    // { Phone: profile.phoneNumbers ? profile.phoneNumbers[0].value : '' }

                }
                //where: { googleId: profile.id }
            });

            if (!user) {
                // If the user doesn't exist, create a new user in the database
                user = await prisma.user.create({
                    data: {
                        FirstName: profile.name?.givenName || '', // Google Profile first name
                        LastName: profile.name?.familyName || '', // Google Profile last name
                        Email: profile.emails[0].value, // Google Profile email
                        Phone: profile.phoneNumbers ? profile.phoneNumbers[0].value : '', // Assuming the phone number exists
                        Password: '', // Leave password empty as it may not be relevant for OAuth users
                    }
                });
            }

            done(null, user);
        } catch (error) {
            done(error, false);
        }
    }));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: id }
        });
        done(null, user);
    } catch (error) {
        done(error, false);
    }
});
