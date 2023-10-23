import expressAsyncHandler from 'express-async-handler';
import Income from '../../models/Income.js';

//create new income 

const createIncomeCtrl = expressAsyncHandler(async (req, res, next) => {
    const{title, description, amount, type} = req?.body;
    try {
        const newIncome = new Income({
            title,
            description,
            amount,
            type,
            user: req.user._id
        });
        await newIncome.save();
        res.status(201).json({message: 'Income created successfully'});
    } catch (error) {
        next(error);
    }

});
export default createIncomeCtrl;

