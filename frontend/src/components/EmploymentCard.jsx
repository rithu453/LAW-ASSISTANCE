import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmploymentCard.css';

const EmploymentCard = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="empContainer">
      <h1 className="empTitle">Employment Law</h1>
      <h3 className="empSubtitle">Types:</h3>
      <div className="empText" onClick={() => handleNavigation('/wage-and-hour-laws')}>
        a. Wage and Hour Laws: These laws regulate minimum wage rates, overtime
        pay, record-keeping requirements, and meal and rest breaks. They aim to
        ensure fair compensation for employees for the work they perform.
      </div>
      <div className="empText" onClick={() => handleNavigation('/anti-discrimination-laws')}>
        b. Anti-Discrimination Laws: These laws prohibit discrimination in
        hiring, promotion, termination, compensation, and other employment
        practices based on protected characteristics such as race, color,
        religion, sex, national origin, age, disability, or genetic information.
      </div>
      <div className="empText" onClick={() => handleNavigation('/family-medical-leave-laws')}>
        c. Family and Medical Leave Laws: These laws provide eligible employees
        with job-protected leave for certain family or medical reasons, such as
        the birth or adoption of a child, caring for a family member with a
        serious health condition, or the employee's own serious health
        condition. The Family and Medical Leave Act (FMLA) is a prominent
        example.
      </div>
      <div className="empText" onClick={() => handleNavigation('/https://labour.gov.in/sites/default/files/theworkmenact19231.pdf')}>
        d. Workers' Compensation Laws: These laws provide benefits to employees
        who suffer work-related injuries or illnesses. They typically cover
        medical expenses, lost wages, and rehabilitation costs, and they
        generally require employers to carry workers' compensation insurance.
      </div>
      <div className="empText" onClick={() => handleNavigation('/contract')}>
        e. Employment Contracts: These govern the terms and conditions of
        employment, including job duties, compensation, benefits, termination
        procedures, and dispute resolution mechanisms. They can be written,
        oral, or implied.
      </div>
    </div>
  );
};

export default EmploymentCard;
