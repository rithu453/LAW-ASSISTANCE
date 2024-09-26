import React from 'react';
import './FamilyCard.css';

const Familycards = () => {
  return (
    <div className="famContainer">
      <h1 className="famTitle">Family Law</h1>
      <h3 className="famSubtitle">Types:</h3>
      <div className="famCard">
        <p>
          a. Marriage and Divorce: Family law governs the formation and
          dissolution of marriages. It includes regulations for marriage
          licenses, prenuptial agreements, annulments, legal separations, and
          divorce proceedings.
        </p>
      </div>
      <div className="famCard">
        <p>
          b. Child Custody and Support: This area addresses matters related to
          the care, custody, and financial support of children. It determines
          custody arrangements, visitation rights, and child support payments,
          ensuring the welfare of children in separated or divorced families.
        </p>
      </div>
      <div className="famCard">
        <p>
          c. Adoption: Family law regulates the process of adopting a child,
          including eligibility criteria, legal procedures, and parental
          rights. It aims to provide stable and loving homes for children in
          need of adoption.
        </p>
      </div>
      <div className="famCard">
        <p>
          d. Property and Inheritance Rights: Family law governs the division
          of marital property upon divorce or separation. It also determines
          inheritance rights and succession laws, ensuring fair distribution
          of assets and wealth among family members.
        </p>
      </div>
      <div className="famCard">
        <p>
          e. Guardianship and Conservatorship: Family law governs the
          appointment of guardians and conservators for individuals who are
          unable to make decisions for themselves due to age, disability, or
          incapacity. It ensures that vulnerable family members receive proper
          care and protection.
        </p>
      </div>
    </div>
  );
};

export default Familycards;

