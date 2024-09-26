import React from 'react';
import './PropertyCard.css';

const PropertyCard = () => {
    return ( 
    
        <div className="propertyContainer ">
            <h1 className="propertyTitle">Property Law</h1>
            <h3 className="propertySubtitle">Types:</h3>
            <p className="propertyText">
                a. Real Property Law: Concerns ownership, use, and transfer of land and permanent structures.
            </p>
            <p className="propertyText">
                b. Personal Property Law: Regulates ownership, possession, and transfer of movable
                items like vehicles, furniture, and money.
            </p>
            <p className="propertyText">
                c. Intellectual Property Law: Governs rights to intangible assets such as patents,
                copyrights, trademarks, and trade secrets.
            </p>
            <p className="propertyText">
                d. Landlord-Tenant Law: Addresses the rights and duties of landlords and tenants in
                rental agreements for residential or commercial properties.
            </p>
            <p className="propertyText">
                e. Eminent Domain Law: Deals with government's power to acquire private property for
                public use, with compensation to the owner.
            </p>
            <p className="propertyText">
                f. Adverse Possession Law: Defines conditions under which someone can acquire ownership of
                land by occupying it openly and continuously for a specified period.
            </p>
        </div>
    );
}

export default PropertyCard;
