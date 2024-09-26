import './TrafficCard.css';

const TrafficCard = () => {
    const handleNavigation = (url) => {
        window.location.href = url;
    }

    return ( 
        <div className="trafficContainer">
            <h1 className="trafficTitle">Traffic Law</h1>
            <h3 className="trafficSubtitle">Types:</h3>
            <p className="trafficText">
                a. Traffic Control: These laws govern traffic signs, signals, and road markings that regulate the flow of vehicles and pedestrians at intersections, crosswalks, and other traffic control points. Examples include laws 
                regarding stop signs, traffic lights, yield signs, lane markings, and pedestrian signals.
                <button onClick={() => handleNavigation('https://morth.nic.in/sites/default/files/road_safety_books.pdf')}>go</button>
            </p>
            <p className="trafficText">
                b. Vehicle Registration and Licensing: These laws require vehicle owners to register their vehicles with the appropriate authorities and obtain license plates and registration documents. They also
                govern the issuance of driver's licenses, learner's permits, and vehicle identification numbers.
                <button onClick={() => handleNavigation('https://www.transport.telangana.gov.in/html/registration.html')}>go</button>
            </p>
            <p className="trafficText">
                c. Traffic Violations and Penalties: These laws establish penalties for various traffic violations,
                such as speeding, reckless driving, running red lights, improper lane changes.
                <button onClick={() => handleNavigation('https://echallan.tspolice.gov.in/publicview/')}>go</button>
            </p>
            <p className="trafficText">
                d. Licensing Requirements: These laws specify the eligibility criteria and requirements for obtaining a driver's license, including age restrictions,
                residency requirements, and completion of driver education courses or training programs.
                <button onClick={() => handleNavigation('https://example.com/licensing-requirements')}>go</button>
            </p>
            <p className="trafficText">
                e. Speed Limits: Laws regulating the maximum speed allowed on different types of roads.
                <button onClick={() => handleNavigation('https://en.wikipedia.org/wiki/Speed_limits_in_India')}>go</button>
            </p>
        </div>
    );
}

export default TrafficCard;
