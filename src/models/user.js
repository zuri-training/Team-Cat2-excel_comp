const mongoose = require('mongoose');
const { isEmail } = require('validator')

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: [true, 'First name is required'],
            minlength: 3
        },
        lastName: {
            type: String,
            required: [true, 'Last name is required']
        },
        email: {
            type: String,
            required: [true, 'Please enter an email' ],
            unique: true,
            lowercase: true,
            validate: [isEmail, 'Please enter a valid email']
        },
        password: {
            type: String,
            minlength: [6, 'Minimum password length is 6 characters'],
            required: [true, 'Please enter a password']
        },
    },
    {
        timestamps: true
    },
);

userSchema.post('save', function(doc, next) {
    console.log('new user was created and saved', doc);
    next();
});

userSchema.pre('save', function (next) {
    console.log('user about to be created and saved', this);
    next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;