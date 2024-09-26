import './LabourCard.css';

const LabourCard = () => {
    return ( 
        <div className="labourContainer">
            <h1 className="labourTitle">Labour Law</h1>
            <h3 className="labourSubtitle">Types:</h3>
            <p className="labourText">
                a. Employment Standards: Regulations governing minimum wage, hours of work, overtime 
                pay, and other basic working conditions.
            </p>
            <p className="labourText">
                b. Health and Safety Laws: Ensuring workplaces provide a safe environment for employees,
                including regulations on hazardous materials, equipment safety, and accident prevention.
            </p>
            <p className="labourText">
                c. Discrimination and Equal Opportunity Laws: Prohibiting discrimination based on factors 
                like race, gender, age, or disability in hiring, promotion, and treatment at work.
            </p>
            <p className="labourText">
                d. Labor Relations Laws: Covering collective bargaining, unionization, strikes, and other 
                aspects of the relationship between employers and labor organizations.
            </p>
            <p className="labourText">
                e. Unemployment Insurance Laws: Providing benefits to workers who lose their jobs through 
                no fault of their own, typically funded through employer contributions.
            </p>
            <p className="labourText">
                f. Workers' Compensation Laws: Requiring employers to provide insurance coverage for 
                employees injured or disabled on the job, including medical care and compensation for lost wages.
            </p>
        </div>
    );
}

export default LabourCard;