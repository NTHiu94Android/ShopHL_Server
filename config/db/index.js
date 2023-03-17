const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
async function connect() {
    mongoose.connect('mongodb+srv://ngochuongtr1975:amcc@123@cluster0.fslarjw.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
        .catch(err => console.log('>>>>>>>>> DB Error: ', err));
}
 
module.exports = { connect };