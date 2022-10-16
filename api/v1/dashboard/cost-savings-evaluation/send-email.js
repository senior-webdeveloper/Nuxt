const express = require("express");
const sgMail = require("@sendgrid/mail");

const app = express();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(express.json());

// CD (JE on 20210514): helper functions
const toEmail = ({ text: email }) => ({ email });

const htmlFor = data => `
  <p>Status updated to ${data.status}</p>
  <p>Form: Cost Savings Analysis </p>
  <dl>
  <div>
      <dt>
        Form ID
      </dt>
      <dd>
        ${data.formId}
      </dd>
    </div>
    <div>
      <dt>
        Test Description / Goal
      </dt>
      <dd>
        ${data.testDescription}
      </dd>
    </div>

    <div>
      <dt>
        NSK America Respresentative / IMR
      </dt>
      <dd>
        ${data.nskAmericaRepresentative}
      </dd>
    </div>

    <div>
      <dt>
        Company Name
      </dt>
      <dd>
        ${data.companyName}
      </dd>
    </div>

    <div>
      <dt>
        First name
      </dt>
      <dd>
        ${data.firstName}
      </dd>
    </div>

    <div>
      <dt>
        Last name
      </dt>
      <dd>
        ${data.lastName}
      </dd>
    </div>

    <div>
      <dt>
        Email
      </dt>
      <dd>
        ${data.email}
      </dd>
    </div>

    <div>
      <dt>
        Supporting distributor
      </dt>
      <dd>
        ${data.supportingDistributor}
      </dd>
    </div>

    <div>
      <dt>
        Distributor sales person
      </dt>
      <dd>
        ${data.distributorSalesperson}
      </dd>
    </div>

    <div>
      <dt>
        Part name/#
      </dt>
      <dd>
        ${data.partNameNumber}
      </dd>
    </div>

    <div>
      <dt>
        Machine
      </dt>
      <dd>
        ${data.machine}
      </dd>
    </div>

    <div>
      <dt>
        Material
      </dt>
      <dd>
        ${data.material}
      </dd>
    </div>

    <div>
      <dt>
        Hardness
      </dt>
      <dd>
        ${data.hardness}
      </dd>
    </div>
    <div>
      <dt>
        Surf Condition
      </dt>
      <dd>
        ${data.surfCond}
      </dd>
    </div>

    <h3>Current Process</h3>
    <hr />
    <h6>Tooling Description</h6>
    <div>
      <dt>
        Cutting Tool Brand
      </dt>
      <dd>
        ${data.currentProcess.toolingDescription.manufacturer}
      </dd>
    </div>
    <div>
      <dt>
        Spindle Type
      </dt>
      <dd>
        ${data.currentProcess.toolingDescription.spindleType}
      </dd>
    </div>

    <div>
      <dt>
        Cutting Tool Diameter and Type
      </dt>
      <dd>
        ${data.currentProcess.toolingDescription.cuttingToolDiameterType}
      </dd>
    </div>
    <div>
      <dt>
        Coating
      </dt>
      <dd>
        ${data.currentProcess.toolingDescription.coating}
      </dd>
    </div>
    <h6>Operating Parameters</h6>
    <div>
      <dt>
        Length of Cut
      </dt>
      <dd>
        ${data.currentProcess.operatingParameters.lengthOfCut}
      </dd>
    </div>
    <div>
      <dt>
        Spindle Speed
      </dt>
      <dd>
        ${data.currentProcess.operatingParameters.spindleSpeed}
      </dd>
    </div>
    <div>
      <dt>
        Feed
      </dt>
      <dd>
        ${data.currentProcess.operatingParameters.feed}
      </dd>
    </div>
    <div>
      <dt>
        In cut time
      </dt>
      <dd>
        ${data.currentProcess.operatingParameters.inCutTime}
      </dd>
    </div>
    <div>
      <dt>
        Parts per tool
      </dt>
      <dd>
        ${data.currentProcess.operatingParameters.partsPerTool}
      </dd>
    </div>

    <div>
      <dt>
        Total pieces per new tool
      </dt>
      <dd>
        ${data.currentProcess.operatingParameters.totalPiecesPerNewTool}
      </dd>
    </div>

    <div>
      <dt>
        Pieces for each regrind
      </dt>
      <dd>
        ${data.currentProcess.operatingParameters.piecesForEachRegrind}
      </dd>
    </div>
    <h6>Machine Burden</h6>
    <div>
      <dt>
        Burden Rate
      </dt>
      <dd>
        $ ${data.currentProcess.machineBurden.machineBurdenRate}
      </dd>
    </div>
    <div>
      <dt>
        Cost per workpiece
      </dt>
      <dd>
        $ ${data.currentProcess.machineBurden.machineCostPerWorkpiece}
      </dd>
    </div>
    <h6>Machine Cost Analysis</h6>
    <div>
      <dt>
        Cutting tool cost
      </dt>
      <dd>
        $ ${data.currentProcess.machineCostAnalysis.cuttingToolCost}
      </dd>
    </div>
    <div>
      <dt>
        Number of reconditioning per tool
      </dt>
      <dd>
        ${data.currentProcess.machineCostAnalysis.numberReconditioningPerTool}
      </dd>
    </div>
    <div>
      <dt>
        Regrind cost per tool
      </dt>
      <dd>
        $ ${data.currentProcess.machineCostAnalysis.regrindCostPerTool}
      </dd>
    </div>
    <div>
      <dt>
        Cost per piece on regrind
      </dt>
      <dd>
        $ ${data.currentProcess.machineCostAnalysis.costPerPieceOnRegrind}
      </dd>
    </div>
    <div>
      <dt>
        Number of tools per holder
      </dt>
      <dd>
        ${data.currentProcess.machineCostAnalysis.numberOfToolsPerHolder}
      </dd>
    </div>
    <div>
      <dt>
        Cost of use per tool
      </dt>
      <dd>
        $ ${data.currentProcess.machineCostAnalysis.costOfUsePerTool}
      </dd>
    </div>
    <div>
      <dt>
        Tool change time
      </dt>
      <dd>
        ${data.currentProcess.machineCostAnalysis.toolChangeTime}
      </dd>
    </div>

    <div>
      <dt>
        Tool change cost
      </dt>
      <dd>
        $ ${data.currentProcess.machineCostAnalysis.toolChangeCost}
      </dd>
    </div>

    <div>
      <dt>
        Tooling cost per use
      </dt>
      <dd>
        $ ${data.currentProcess.machineCostAnalysis.toolingCostPerUse}
      </dd>
    </div>

    <div>
      <dt>
        Estimated Tool Consumption
      </dt>
      <dd>
        $ ${data.currentProcess.machineCostAnalysis.estimatedToolConsumption}
      </dd>
    </div>

    <div>
      <dt>
        Tooling cost per piece
      </dt>
      <dd>
        $ ${data.currentProcess.machineCostAnalysis.toolingCostPerPiece}
      </dd>
    </div>
    <hr />
    <div>
      <dt>
        Grand Total Machining Cost per Piece
      </dt>
      <dd>
        $ ${data.currentProcess.machineCostAnalysis.grandTotalMachiningCostPerPiece}
      </dd>
    </div>
    <h3>NSK Process</h3>
    <hr />
    <h6>Tooling Description</h6>
    <div>
      <dt>
        Cutting Tool Brand
      </dt>
      <dd>
        ${data.nsk.toolingDescription.manufacturer}
      </dd>
    </div>
    <div>
      <dt>
        Cutting Tool Diameter and Type
      </dt>
      <dd>
        ${data.nsk.toolingDescription.cuttingToolDiameterType}
      </dd>
    </div>
    <div>
      <dt>
        Coating
      </dt>
      <dd>
        ${data.nsk.toolingDescription.coating}
      </dd>
    </div>
    <h6>Operating Parameters</h6>
    <div>
      <dt>
        Length of Cut
      </dt>
      <dd>
        ${data.nsk.operatingParameters.lengthOfCut}
      </dd>
    </div>
    <div>
      <dt>
        Spindle Speed
      </dt>
      <dd>
        ${data.nsk.operatingParameters.spindleSpeed}
      </dd>
    </div>
    <div>
      <dt>
        Feed
      </dt>
      <dd>
        ${data.nsk.operatingParameters.feed}
      </dd>
    </div>
    <div>
      <dt>
        In cut time
      </dt>
      <dd>
        ${data.nsk.operatingParameters.inCutTime}
      </dd>
    </div>
    <div>
      <dt>
        Parts per tool
      </dt>
      <dd>
        ${data.nsk.operatingParameters.partsPerTool}
      </dd>
    </div>

    <div>
      <dt>
        Total pieces per new tool
      </dt>
      <dd>
        ${data.nsk.operatingParameters.totalPiecesPerNewTool}
      </dd>
    </div>

    <div>
      <dt>
        Pieces for each regrind
      </dt>
      <dd>
        ${data.nsk.operatingParameters.piecesForEachRegrind}
      </dd>
    </div>
    <h6>Machine Burden</h6>
    <div>
      <dt>
        Burden Rate
      </dt>
      <dd>
        $ ${data.nsk.machineBurden.machineBurdenRate}
      </dd>
    </div>
    <div>
      <dt>
        Cost per workpiece
      </dt>
      <dd>
        $ ${data.nsk.machineBurden.machineCostPerWorkpiece}
      </dd>
    </div>
    <h6>Machine Cost Analysis</h6>
    <div>
      <dt>
        Spindle Investment Cost
      </dt>
      <dd>
        $ ${data.nsk.machineCostAnalysis.spindleInvestmentCost}
      </dd>
    </div>
    <div>
      <dt>
        Cutting tool cost
      </dt>
      <dd>
        $ ${data.nsk.machineCostAnalysis.cuttingToolCost}
      </dd>
    </div>
    <div>
      <dt>
        Number of reconditioning per tool
      </dt>
      <dd>
        $ ${data.nsk.machineCostAnalysis.numberReconditioningPerTool}
      </dd>
    </div>
    <div>
      <dt>
        Regrind cost per tool
      </dt>
      <dd>
        $ ${data.nsk.machineCostAnalysis.regrindCostPerTool}
      </dd>
    </div>
    <div>
      <dt>
        Cost per piece on regrind
      </dt>
      <dd>
        $ ${data.nsk.machineCostAnalysis.costPerPieceOnRegrind}
      </dd>
    </div>
    <div>
      <dt>
        Number of tools per holder
      </dt>
      <dd>
        ${data.nsk.machineCostAnalysis.numberOfToolsPerHolder}
      </dd>
    </div>
    <div>
      <dt>
        Cost of use per tool
      </dt>
      <dd>
        $ ${data.nsk.machineCostAnalysis.costOfUsePerTool}
      </dd>
    </div>
    <div>
      <dt>
        Tool change time
      </dt>
      <dd>
        ${data.nsk.machineCostAnalysis.toolChangeTime}
      </dd>
    </div>

    <div>
      <dt>
        Tool change cost
      </dt>
      <dd>
        $ ${data.nsk.machineCostAnalysis.toolChangeCost}
      </dd>
    </div>

    <div>
      <dt>
        Tooling cost per use
      </dt>
      <dd>
        $ ${data.nsk.machineCostAnalysis.toolingCostPerUse}
      </dd>
    </div>

    <div>
      <dt>
        Estimated Tool Consumption
      </dt>
      <dd>
        $ ${data.nsk.machineCostAnalysis.estimatedToolConsumption}
      </dd>
    </div>

    <div>
      <dt>
        Tooling cost per piece
      </dt>
      <dd>
        $ ${data.nsk.machineCostAnalysis.toolingCostPerPiece}
      </dd>
    </div>
    <hr />
    <div>
      <dt>
        Grand Total Machining Cost per Piece
      </dt>
      <dd>
        $ ${data.nsk.machineCostAnalysis.grandTotalMachiningCostPerPiece}
      </dd>
    </div>
    <hr />
    <div>
      <dt>
        Savings per part
      </dt>
      <dd>
        $ ${data.savingsPerPart}
      </dd>
    </div>
    <div>
      <dt>
        Average number parts run per year
      </dt>
      <dd>
        ${data.averageNumberPartsRunPerYear}
      </dd>
    </div>
    <div>
      <dt>
        Capital investment per piece cost
      </dt>
      <dd>
        $ ${data.capitalInvestmentPerPieceCost}
      </dd>
    </div>
    <div>
      <dt>
        Potential savings per year 1
      </dt>
      <dd>
        $ ${data.potentialSavingsPerYearDuringCapitalPayback}
      </dd>
    </div>
    <div>
      <dt>
        Potential savings per year 2
      </dt>
      <dd>
        $ ${data.potentialSavingsPerYearAfterCapitalPayback}
      </dd>
    </div>
    <div>
      <dt>
        Potential tooling savings per year
      </dt>
      <dd>
        $ ${data.potentialToolingSavingsPerYear}
      </dd>
    </div>
    <div>
      <dt>
        Potential machine capacity gained (Hours per Year)
      </dt>
      <dd>
        ${data.potentialMachineCapacityGained}
      </dd>
    </div>
    <div>
      <dt>
        Approximate time for capital payback (Months)
      </dt>
      <dd>
        ${data.approximateTimeForCapitalPayback}
      </dd>
    </div>
    <div>
      <dt>
        I'd like to request a demonstration
      </dt>
      <dd>
        ${data.demonstrationRequest ? 'YES' : 'NO' }
      </dd>
    </div>
    <div>
      <dt>
        What is your primary market served?
      </dt>
      <dd>
        ${data.primaryMarket}
      </dd>
    </div>
  </dl>
`;

app.post("/cost-savings-evaluation", async (req, res) => {
  const cost_savings_evaluation = req.body.cost_savings_evaluation;
  const initial_status = req.body.initial_status;
  const form_notification = req.body.form_notification;


  // CD (JE on 20210511): to nsk cc and bcc
  const ccToNSK = form_notification.toNsk.cc.map(toEmail);
  const bccToNSK = form_notification.toNsk.bcc.map(toEmail);

  // CD (JE on 20210511): to nsk email config
  const emailToNSK = {
    personalizations: [
      {
        to: [{ email: form_notification.toNsk.to }],
        bcc: ccToNSK,
        cc: bccToNSK,
        subject: `Status update for Cost Savings Analysis - ${initial_status} (to NSK)`
      }
    ],
    from: form_notification.toNsk.from, // Change to your verified sender
    html: htmlFor(cost_savings_evaluation)
  };

  try {
    /* CD (JE on 20210513): comment one out of them you can figure it
    out which is which since its descriptive */
    await sgMail.send(emailToNSK);
    res.status(200).json({ message: "Email sent!" });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Oops... something went wrong " + error });
  }
});

module.exports = {
  path: "/api/v1/dashboard/send-email",
  handler: app
};
