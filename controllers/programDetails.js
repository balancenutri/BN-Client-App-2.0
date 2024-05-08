import express from "express";
import md5 from "md5";
import { mysqlConnection } from "../db.js";
import { updateRecordMultipleWhere,createUserFCMToken } from "../common/query.js";

// Login endpoint
export const programDetails = async (req, res) => {
    try {
        const skip_assessment = true; 
        const programs_data = []; 

        const response_data = {
            status: true,
            message: 'programs_details',
            last_visited_screen: 'program-details',
            skip_assessment: skip_assessment,
            data: programs_data
        };

        return res.status(200).json(response_data);
    } catch (error) {
        console.error('Error in programDetails:', error);
        return res.status(500).json({ status: false, message: 'Internal server error' });
    }
};


