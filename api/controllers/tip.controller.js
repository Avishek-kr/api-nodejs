import moment from "moment";
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

function formatDate(inputDate) {
    const [day, month, year] = inputDate.split('-');
    return `${year}-${month}-${day}`;
}

export const getAllTips = async (req, res, next) => {
    const { startDate, endDate } = req.query;

    // Check if both startDate and endDate are provided
    if (!startDate || !endDate) {
        return res.status(400).json({ message: 'Missing startDate or endDate query parameters.' });
    }

    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);

    try {
        const matchedTips = await TipCalculatorSchema.find({
            createdAt: {
                $gte: new Date(formattedStartDate),
                $lte: new Date(formattedEndDate)
            }
        });

        const formattedTips = matchedTips.map(tip => ({
            place: tip.place,
            totalAmount: tip.totalAmount,
            tipAmount: tip.tipAmount
        }));

        res.status(200).json(formattedTips);
    } catch (error) {
        console.error('Error fetching tips:', error);
        next(error);
    }
};