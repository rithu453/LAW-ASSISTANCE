import React from 'react';
import './VotingCard.css';

const VotingCard = () => {
    return ( 
        <div className="voteContainer">
            <h1 className="voteTitle">Voting Rights</h1>
            <h3 className="voteSubtitle">Types:</h3>
            <p className="voteText">
                a. Universal Suffrage: Universal suffrage is the principle that all adult citizens, regardless of race, gender, ethnicity, religion, or socioeconomic status, have the right to vote in elections. This principle ensures that the government represents the interests of the entire population.
            </p>
            <p className="voteText">
                b. Citizenship: In most countries, only citizens have the right to vote in national elections. Non-citizens, including permanent residents or immigrants, are generally not allowed to vote in national elections but may be eligible to vote in local or municipal elections in some jurisdictions.
            </p>
            <p className="voteText">
                c. Registration of Voters: The Election Commission of India (ECI) is responsible for the registration of voters and the conduct of elections in the country. Eligible citizens must register themselves as voters in order to exercise their right to vote. The registration process involves the preparation of electoral rolls, which list eligible voters in each constituency.
            </p>
            <p className="voteText">
                d. Polling Stations: Polling stations are set up in each constituency to facilitate voting on election day. The location of polling stations is determined by the ECI, and voters are assigned to a specific polling station based on their residential address. Polling stations are equipped with electronic voting machines (EVMs) or, in some cases, ballot boxes for casting votes.
            </p>
            <p className="voteText">
                e. Legal Right: All citizens above 18 are eligible to vote, and it’s their responsibility to utilize their vote for a better government.
            </p>
        </div>
    );
}

export default VotingCard;
