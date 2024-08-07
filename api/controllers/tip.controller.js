import TipCalculatorSchema from "../models/tip.model.js";

export const tipCalculator = async (req, res, next) => {
    const { place, totalAmount, tipAmount } = req.body;
    const tip = totalAmount * (tipAmount/100);
    try {      
        const newUser = new TipCalculatorSchema({ place, totalAmount, tipAmount });
        await newUser.save();
        res.status(201).json({ tip, message: 'Amount Submitted successfully' });
    } catch (error) {
        next(error);
    }
};

export const getAllTips = async (req, res, next) => {
    try {
        const tips = await TipCalculatorSchema.find(); 

        const formattedTips = tips.map(tip => ({
            place: tip.place,
            totalAmount: tip.totalAmount,
            tipAmount: tip.tipAmount
        }));

        res.status(200).json(formattedTips);
    } catch (error) {
        next(error);
    }
};