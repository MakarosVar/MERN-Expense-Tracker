import mongoose from 'mongoose';

const DBurl= "mongodb+srv://makisV:ZCCWaOjBkQobnlCO@expense-tracker.q94ddrr.mongodb.net/?retryWrites=true&w=majority"

const DBconnection = async () => {

    try {
        await mongoose.connect(DBurl, {
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (error) {
        console.log(error);
    }

}