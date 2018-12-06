/** Model for the user */

/** Initialise mongoose and bcrypt*/
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema; 

let UserSchema = new Schema({
    // Auth
    createdAt: { type: Date },
    updatedAt: { type: Date },
    email: { type: String, required: true },
    password: { type: String, select: false },

    name: String,
    company: String,
    position: String,
    // TODO: skillsID change to skills, put object in array later.
    skillId: [{type: Schema.Types.ObjectId, ref: 'Skill'}]
    
    
})

// Must use function here! ES6 => functions do not bind this!
UserSchema.pre("save", function(next) {
  // SET createdAt AND updatedAt
  const now = new Date();
  this.updatedAt = now;
  if (!this.createdAt) {
    this.createdAt = now;
  }

  // ENCRYPT PASSWORD
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash;
      next();
    });
  });
});

// Need to use function to enable this.password to work.
UserSchema.methods.comparePassword = function(password, done) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    done(err, isMatch);
  });
};

/** Generating the model for User*/
let User = mongoose.model('User', UserSchema);

/** Exporting User to be used in routes */
module.exports = User;


