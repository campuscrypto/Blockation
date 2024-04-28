const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy=require('passport-local').Strategy;
const passport = require("passport");
const {GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET}=require('../backend/config/constant_var')

const User=require('../backend/models/localUser')
const bcrypt=require('bcryptjs')
const googleUser=require('../backend/models/googleUser')

//GOOGlE Strategy

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
   async function (accessToken, refreshToken, profile, done) {
     
      const user=await googleUser.findOne({email:profile._json.email});
      if(user){
        done(null, profile);
      }
      else{
       const newuserGoogle=await new googleUser({
        googleID:profile.id,
        name:profile.displayName,
        email:profile._json.email
      })
      await newuserGoogle.save()
      done(null, profile);
    }
    }
  )
);

//Local Strategy
passport.use(
  new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    // Match user
    User.findOne({
      email: email
    }).then(user => {
      if (!user) {
        return done(null, false, { message: 'That email is not registered' });
      }

      // Match password
      bcrypt.compare(password, user.password).then(match => {
        if(match) {
            return done(null, user, { message: 'Logged in succesfully' })
        }
        return done(null, false, { message: 'Wrong username or password' })
    }).catch(err => {
        return done(null, false, { message: 'Something went wrong' })
    })
    });
  })
);


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
