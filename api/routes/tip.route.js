import express from 'express';
import { getAllTips, tipCalculator } from '../controllers/tip.controller.js';
import { body, query, validationResult } from 'express-validator';

const router = express.Router();

router.post(
    '/tip/calculate',
    [
        body('place').isString().withMessage('Place must be a string'),
        body('totalAmount').isFloat({ min: 0 }).withMessage('Total amount must be a positive number'),
        body('tipPercentage').isFloat({ min: 0, max: 100 }).withMessage('Tip percentage must be between 0 and 100'),
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        tipCalculator(req, res, next);
    }
);

router.get(
    '/tip',
    [
        query('startDate').isString().matches(/^\d{2}-\d{2}-\d{4}$/).withMessage('Start date must be in dd-mm-yyyy format'),
        query('endDate').isString().matches(/^\d{2}-\d{2}-\d{4}$/).withMessage('End date must be in dd-mm-yyyy format'),
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        getAllTips(req, res, next);
    }
);

export default router;
