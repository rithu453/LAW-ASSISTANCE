import React from 'react';
import './CardF.css';
import { Link } from 'react-router-dom';


const LawcardsF = () => {
    return (
        <div className="lawcards-container">
            <div className="lawcards">
                <div className="lawcards-details">
                    <p className="text-title">Family Law</p>
                    <p className="text-body">
                        The law deals with legal matters concerning familial relationships and domestic issues. It covers areas such as marriage, divorce, child custody and support, adoption and domestic violence.
                    </p>
                </div>
                <Link to="/familycard" className="lawcards-button">More Info</Link>
            </div>

            <div className="lawcards">
                <div className="lawcards-details">
                    <p className="text-title">Employment Law</p>
                    <p className="text-body">
                        Employment law encompasses the legal rights and obligations that govern the relationship between employers and employees. It covers various aspects of the employment relationship, including hiring, wages, working hours, benefits, workplace safety, discrimination, harassment and termination.
                    </p>
                </div>
                <Link to="/employmentcard" className="lawcards-button">More Info</Link>
            </div>

            <div className="lawcards">
                <div className="lawcards-details">
                    <p className="text-title">Property Law</p>
                    <p className="text-body">
                        Property law addresses issues such as ownership rights, contracts, leases, boundaries, landlord-tenant relationships, property disputes, and regulations regarding property transactions.
                    </p>
                </div>
                <Link to="/propertycard" className="lawcards-button">More Info</Link>
            </div>

            <div className="lawcards">
                <div className="lawcards-details">
                    <p className="text-title">Labour Law</p>
                    <p className="text-body">
                        Labour law governs the rights, obligations, and relationships between employers, employees, and labor organizations in the workplace. It regulates various aspects of the employment relationship to ensure fair treatment, protect workers' rights, and promote social justice.
                    </p>
                </div>
                <Link to="/labourcard" className="lawcards-button">More Info</Link>
            </div>

            <div className="lawcards">
                <div className="lawcards-details">
                    <p className="text-title">Traffic Law</p>
                    <p className="text-body">
                        Traffic laws include rules regarding speed limits, traffic signals, road signs, safe driving practices, drunk driving, seat belt usage, pedestrian safety, and parking regulations.
                    </p>
                </div>
                <Link to="/trafficcard" className="lawcards-button">More Info</Link>
            </div>

            <div className="lawcards">
                <div className="lawcards-details">
                    <p className="text-title">Voting Rights</p>
                    <p className="text-body">
                        Voting rights grant eligible citizens the power to choose their representatives and shape their government through participation in democratic processes.
                    </p>
                </div>
                <Link to="/votingcard" className="lawcards-button">More Info</Link>
            </div>
        </div>
    );
};

export default LawcardsF;
