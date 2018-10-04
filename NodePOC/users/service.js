const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const User = db.User;

module.exports = {
  create,
  login
};

async function create(userParam){
  if(await User.findOne({username:userParam.username})) {
    throw `Username ${userParam.username} is already taken`
  }else{
  const user = new User(userParam);


  user.password = bcrypt.hashSync(userParam.password, 10);
  user.status=1;

  await user.save();}
}
