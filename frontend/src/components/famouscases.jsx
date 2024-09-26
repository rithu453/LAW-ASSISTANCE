import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

const cases = [
  "Kesavananda Bharati v. State of Kerala",
  "Maneka Gandhi v. Union of India",
  "Vishaka v. State of Rajasthan",
  "S.R. Bommai v. Union of India",
  "ADM Jabalpur v. Shivkant Shukla",
  "Shayara Bano v. Union of India",
  "Justice K.S. Puttaswamy (Retd.) v. Union of India",
  "Aruna Shanbaug v. Union of India",
  "Shreya Singhal v. Union of India",
  "Laxmi v. Union of India",
  "Bhopal Gas Tragedy Case (Union Carbide Corporation v. Union of India)",
  "State of Tamil Nadu v. Suhas Katti",
  "Nirbhaya Case (Mukesh & Anr v. State for NCT of Delhi & Ors)",
  "MC Mehta v. Union of India",
  "Indra Sawhney v. Union of India",
  "Naz Foundation v. Government of NCT of Delhi",
  "Keshav Singh v. State of Rajasthan",
  "Narmada Bachao Andolan v. Union of India",
  "S. R. Bommai v. Union of India",
  "State of West Bengal v. Committee for Protection of Democratic Rights",
  "State of Haryana v. Raj Kumar",
  "Bachan Singh v. State of Punjab",
  "Vishaka v. State of Rajasthan",
  "R.C. Cooper v. Union of India",
  "State of Uttar Pradesh v. Rajesh Gautam",
  "People's Union for Civil Liberties v. Union of India",
  "Gian Kaur v. State of Punjab",
  "Javed v. State of Haryana",
  "M. C. Mehta v. Union of India",
  "Golak Nath v. State of Punjab",
  "K. K. Verma v. Union of India",
  "S.R. Bommai v. Union of India",
  "L. Chandra Kumar v. Union of India",
  "S.P. Gupta v. Union of India",
  "Gaurav v. Union of India",
  "Ranjit Singh v. State of Punjab",
  "A.K. Gopalan v. State of Madras",
  "H.R. Khan v. Union of India",
  "State of Rajasthan v. Union of India",
  "Maneka Gandhi v. Union of India",
  "M.A. Rauf v. Union of India",
  "D.K. Basu v. State of West Bengal",
  "Keshavananda Bharati v. State of Kerala",
  "Vineet Narain v. Union of India",
];

const CourtCases = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {cases.map((courtCase, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {courtCase}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CourtCases;
