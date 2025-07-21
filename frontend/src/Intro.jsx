import React from 'react';
import './Introduction.css';

const Introduction = () => {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <h1>Purpose of the ICSPS Maturity Assessment Tool</h1>
        <p>
          The <strong>Immunization Supply Chain and Forecasting and Supply Planning (ICSPS) Maturity Assessment Tool</strong> 
          is designed to help countries assess their vaccine forecasting and supply planning (FSP) maturity level. To be effective, 
          immunization forecasting and supply planning must be <strong>proactive rather than reactive</strong>.
        </p>
        <p>
          This tool evaluates a country’s maturity level by examining key characteristics across several critical components. 
          These collectively strengthen the country’s capacity for effective forecasting and supply planning, through collaboration 
          among all relevant stakeholders.
        </p>

        <p>The tool assesses maturity in the following <strong>six domains</strong>:</p>
        <ul>
          <li>FSP Policies, Commitment, and Political Will</li>
          <li>Data</li>
          <li>Analysis</li>
          <li>Forecasting and Supply Planning Activities</li>
          <li>Funding and Adjustments of Forecasts and Supply Plans</li>
          <li>Gender, Equity, and Social Inclusion (GESI)</li>
        </ul>

        <p>The tool categorizes countries into three stages of maturity:</p>
        <ul>
          <li>Ad-hoc forecasting and supply planning</li>
          <li>Reactive forecasting and supply planning</li>
          <li>Proactive forecasting and supply planning (ideal state)</li>
        </ul>

        <h2>About GESI Integration</h2>
        <p>
          The tool also considers <strong>Gender, Equity, and Social Inclusion (GESI)</strong>. This refers to the intentional 
          consideration of how different groups—such as women, men, adolescents, people with disabilities, and those in remote 
          or underserved areas—experience access to health services, including immunization.
        </p>

        <ul>
          <li>Promoting use of disaggregated data (e.g., by sex, age, geography)</li>
          <li>Supporting coordination with GESI experts</li>
          <li>Ensuring diverse representation in FSP teams</li>
        </ul>

        <p>This approach ensures that <strong>no population is left behind</strong>, while aligning FSP with broader equity goals.</p>

        <h2>Instructions</h2>
        <p>
          The tool will be completed by country EPI teams participating in the ICSPS initiative. For each of the questions, please 
          select the answer that best describes the status in the country, particularly the EPI Team, the National Logistics Working 
          Group for Immunization, or any other task force/body responsible for vaccine supply and demand planning.
        </p>
        <p>
          If you have any key comments, please provide them at the bottom of each section. The assessment will be completed 
          quarterly and will guide improvement planning.
        </p>

        <div className="logos">
          <img src="/images/jsi.jpg" alt="JSI" />
         <img src="/images/ihl.png" alt="InSupply" />
        <img src="/images/vr.png" alt="VillageReach" />
        <img src="/images/chai.jpg" alt="CHAI" />
        <img src="/images/wi-her.png" alt="Wither" />
    </div>
    </div>
    </div>
  );
};

export default Introduction;
