import mongoose from "mongoose";

const TipCalculator = new mongoose.Schema({
    place: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    tipAmount: {
        type: Number,
    }
    }, {timestamps: true}
);

const TipCalculatorSchema = mongoose.model('tipcalculator', TipCalculator);

export default TipCalculatorSchema;