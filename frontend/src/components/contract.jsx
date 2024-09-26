// src/pages/EmploymentContracts.js
import React from 'react';
import './contract.css'; // Import the CSS file for styling

const EmploymentContracts = () => {
    return (
        <div className="employmentContractsContainer">
            <h1 className="employmentContractsTitle">Employment Contracts</h1>
            <p className="employmentContractsText">
                Employment contracts are legal agreements between an employer and an employee that outline the terms and conditions of employment. These contracts establish the rights and responsibilities of both parties and can be written, oral, or implied.
            </p>
            <h2 className="employmentContractsSubtitle">Key Components of Employment Contracts:</h2>
            <ul className="employmentContractsList">
                <li><strong>Job Duties:</strong> Specifies the employee's job responsibilities and expectations.</li>
                <li><strong>Compensation:</strong> Details the salary, wages, bonuses, and any other forms of compensation.</li>
                <li><strong>Benefits:</strong> Outlines the benefits provided, such as health insurance, retirement plans, and paid time off.</li>
                <li><strong>Termination Procedures:</strong> Describes the process and conditions under which either party can terminate the employment relationship.</li>
                <li><strong>Dispute Resolution:</strong> Provides mechanisms for resolving disputes or disagreements that may arise during the employment period.</li>
            </ul>
            <p className="employmentContractsText">
                Employment contracts are crucial for establishing clear expectations and protecting the rights of both employers and employees. It is important for both parties to carefully review and understand the terms before signing the contract.
            </p>
        </div>
    );
};

export default EmploymentContracts;
