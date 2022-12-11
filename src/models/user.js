const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const UserSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        // userName: {
        //     type: String,
        //     required: true,
        //     unique: true
        // },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        confirmPassword: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

UserSchema.plugin(passportLocalMongoose);
const user = mongoose.model('User', UserSchema);

module.exports = user;