import express from "express";
import aws from "aws-sdk";
import sgMail from "@sendgrid/mail";
import { formatDate } from "../../../utils/formatDate";
import { htmlToBuffer } from "../../../utils/htmlToBuffer";

const app = express();
// CD (JE on 20210520): DO spaces config (aws compatible)
const space = new aws.S3({
  endpoint: process.env.DIGITAL_OCEAN_SPACES_ENDPOINT,
  useAccelerateEndpoint: false,
  credentials: new aws.Credentials(
    process.env.DIGITAL_OCEAN_SPACES_KEY,
    process.env.DIGITAL_OCEAN_SPACES_SECRET
  ),
});
const bucket = process.env.DIGITAL_OCEAN_SPACES_NAME;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// CD (JE on 20210517): helpers functions
const toEmail = ({ text: email }) => ({ email });

function formatNumber(number) {
  if (isNaN(number)) return "-";
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(
    number
  );
}

function formatNumberThreeDecimals(number) {
  if (isNaN(number)) return "-";
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 3 }).format(
    number
  );
}

function formatNumberFourDecimals(number) {
  if (isNaN(number)) return "-";
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 4 }).format(
    number
  );
}

function formatNumberFiveDecimals(number) {
  if (isNaN(number)) return "-";
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 5 }).format(
    number
  );
}

const createHtmlFor = (data, hostname, owner) => `<html DOCTYPE!>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="${hostname}/css/pdf-v2.css" rel="stylesheet" />
    </head>

    <body class="cd-pdfs">

    <div class="pdf-logo">
      <img style="width:150px;" src="https://nsk-cdn.cinnamondigital.app/pdf/nsk-logo.jpg" />
    </div>

    <div style="margin-top: 50px;">
      <h1 style="">Cost Savings Analysis Result</h1>
      <table class="csa" style="width: 100%">
        <colgroup>
          <col span="1" style="width: 50%;">
          <col span="1" style="width: 50%;">
        </colgroup>
        <tr>
            <div>
                <td><strong>Submission Label </strong></td>
                <td><span>${data.label}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Test Description / Goal: </strong></td>
                <td><span>${data.testDescription}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>NSK America Representative / IMR:</strong></td>
                <td><span>${data.nskAmericaRepresentative}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Company Name:</strong></td>
                <td><span>${data.companyName}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Company Name:</strong></td>
                <td><span>${data.companyName}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>First Name:</strong></td>
                <td><span>${owner.firstName}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Last Name:</strong></td>
                <td><span>${owner.lastName}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Email:</strong></td>
                <td><span>${owner.email}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Supporting Distributor:</strong></td>
                <td><span>${data.supportingDistributor}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Distributor Sales Person:</strong></td>
                <td><span>${data.distributorSalesperson}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Part Name/#:</strong></td>
                <td><span>${data.partNameNumber}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Machine:</strong></td>
                <td><span>${data.machine}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Material:</strong></td>
                <td><span>${data.material}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Hardness:</strong></td>
                <td><span>${data.hardness}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Surf Cond:</strong></td>
                <td><span>${data.surfCond}</span></td>
            </div>
        </tr>
        
    </table>


    <h2>Tooling Description</h2>
    <table class="csa" style="width: 100%">
      <colgroup>
        <col span="1" style="width: 40%;">
        <col span="1" style="width: 30%;">
        <col span="1" style="width: 30%;">
      </colgroup>
        <tr>
            <th></th>
            <th>Current Process</th>
            <th>Future Process</th>
        </tr>
        <tr>
            <div>
                <td><strong>Spindle Type (machine tool or current spindle with max speed):</strong></td>
                <td><span>${
                  data.currentProcess.toolingDescription.spindleType
                }</span></td>
                <td><span>-</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Cutting Tool Brand:</strong></td>
                <td><span>${
                  data.currentProcess.toolingDescription.manufacturer
                }</span></td>
                <td><span>${
                  data.nsk.toolingDescription.manufacturer
                }</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Cutting Tool Diameter and Type:</strong></td>
                <td><span>${
                  data.currentProcess.toolingDescription.cuttingToolDiameterType
                }</span></td>
                <td><span>${
                  data.nsk.toolingDescription.cuttingToolDiameterType
                }</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Coating:</strong></td>
                <td><span>${
                  data.currentProcess.toolingDescription.coating
                }</span></td>
                <td><span>${data.nsk.toolingDescription.coating}</span></td>
            </div>
        </tr>
      </table>

      <h2>Operating Parameters</h2>
      <table class="csa" style="width: 100%">
        <colgroup>
          <col span="1" style="width: 40%;">
          <col span="1" style="width: 30%;">
          <col span="1" style="width: 30%;">
        </colgroup>
        <tr>
          <th></th>
          <th>Current Process</th>
          <th>Future Process</th>
        </tr>
        <tr>
            <div>
                <td><strong>Length of Cut</strong></td>
                <td><span>${formatNumberThreeDecimals(
                  data.currentProcess.operatingParameters.lengthOfCut)
                }</span></td>
                <td><span>${formatNumberThreeDecimals(
                  data.nsk.operatingParameters.lengthOfCut)
                }</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Spindle Speed:</strong></td>
                <td><span>${formatNumber(
                  data.currentProcess.operatingParameters.spindleSpeed
                )}</span></td>
                <td><span>${formatNumber(
                  data.nsk.operatingParameters.spindleSpeed
                )}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Feed:</strong></td>
                <td><span>${formatNumberFiveDecimals(
                  data.currentProcess.operatingParameters.feed)
                }</span></td>
                <td><span>${formatNumberFiveDecimals(data.nsk.operatingParameters.feed)}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>In Cut Time:</strong></td>
                <td><span>${formatNumberFourDecimals(
                  data.currentProcess.operatingParameters.inCutTime
                )}</span></td>
                <td><span>${formatNumberFourDecimals(
                  data.nsk.operatingParameters.inCutTime
                )}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Parts Per Tool:</strong></td>
                <td><span>${formatNumber(
                  data.currentProcess.operatingParameters.partsPerTool
                )}</span></td>
                <td><span>${formatNumber(
                  data.nsk.operatingParameters.partsPerTool
                )}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Total Pieces per new Tool:</strong></td>
                <td><span>${formatNumber(
                  data.currentProcess.operatingParameters.totalPiecesPerNewTool
                )}</span></td>
                <td><span>${formatNumber(
                  data.nsk.operatingParameters.totalPiecesPerNewTool
                )}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Pieces for each Regrind:</strong></td>
                <td><span>${
                  data.currentProcess.operatingParameters.piecesForEachRegrind
                }</span></td>
                <td><span>${
                  data.nsk.operatingParameters.piecesForEachRegrind
                }</span></td>
            </div>
        </tr>
      </table>


      <h2>Machine Burden</h2>
      <table class="csa" style="width: 100%">
        <colgroup>
          <col span="1" style="width: 40%;">
          <col span="1" style="width: 30%;">
          <col span="1" style="width: 30%;">
        </colgroup>
        <tr>
          <th></th>
          <th>Current Process</th>
          <th>Future Process</th>
        </tr>
        <tr>
            <div>
                <td><strong>Burden Rate:</strong></td>
                <td><span>$ ${
                  data.currentProcess.machineBurden.machineBurdenRate
                }</span></td>
                <td><span>$ ${
                  data.nsk.machineBurden.machineBurdenRate
                }</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Cost per Workpiece: $</strong></td>
                <td><span>${formatNumberFourDecimals(
                  data.currentProcess.machineBurden.machineCostPerWorkpiece
                )}</span></td>
                <td><span>${formatNumberFourDecimals(
                  data.nsk.machineBurden.machineCostPerWorkpiece
                )}</span></td>
            </div>
        </tr>
      </table>

      
      <h2>Machine Cost Analysis</h2>
      <table class="csa" style="width: 100%">
        <colgroup>
          <col span="1" style="width: 40%;">
          <col span="1" style="width: 30%;">
          <col span="1" style="width: 30%;">
        </colgroup>
        <tr>
          <th></th>
          <th>Current Process</th>
          <th>Future Process</th>
        </tr>
        <tr>
            <div>
                <td><strong>Spindle Investment Cost: $</strong></td>
                <td><span>-</span></td>
                <td><span>${
                  data.nsk.machineCostAnalysis.spindleInvestmentCost
                }</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Cutting Tool Cost: $</strong></td>
                <td><span>${
                  data.currentProcess.machineCostAnalysis.cuttingToolCost
                }</span></td>
                <td><span>${
                  data.nsk.machineCostAnalysis.cuttingToolCost
                }</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Number of Reconditioning per Tool:</strong></td>
                <td><span>${
                  data.currentProcess.machineCostAnalysis
                    .numberReconditioningPerTool
                }</span></td>
                <td><span>${
                  data.nsk.machineCostAnalysis.numberReconditioningPerTool
                }</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Regrind Cost per Tool: $</strong></td>
                <td><span>${
                  data.currentProcess.machineCostAnalysis.regrindCostPerTool
                }</span></td>
                <td><span>${
                  data.nsk.machineCostAnalysis.regrindCostPerTool
                }</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Cost per piece on Regrind: $</strong></td>
                <td><span>${formatNumber(
                  data.currentProcess.machineCostAnalysis.costPerPieceOnRegrind
                )}</span></td>
                <td><span>${formatNumber(
                  data.nsk.machineCostAnalysis.costPerPieceOnRegrind
                )}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Number of Tools per Holder:</strong></td>
                <td><span>${
                  data.currentProcess.machineCostAnalysis.numberOfToolsPerHolder
                }</span></td>
                <td><span>${
                  data.nsk.machineCostAnalysis.numberOfToolsPerHolder
                }</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Cost of use per Tool: $</strong></td>
                <td><span>${
                  data.currentProcess.machineCostAnalysis.costOfUsePerTool
                }</span></td>
                <td><span>${
                  data.nsk.machineCostAnalysis.costOfUsePerTool
                }</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Tool change Time:</strong></td>
                <td><span>${
                  data.currentProcess.machineCostAnalysis.toolChangeTime
                }</span></td>
                <td><span>${
                  data.nsk.machineCostAnalysis.toolChangeTime
                }</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Tool change Cost: $</strong></td>
                <td><span>${
                  data.currentProcess.machineCostAnalysis.toolChangeCost
                }</span></td>
                <td><span>${
                  data.nsk.machineCostAnalysis.toolChangeCost
                }</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Tooling Cost per Use: $</strong></td>
                <td><span>${
                  data.currentProcess.machineCostAnalysis.toolingCostPerUse
                }</span></td>
                <td><span>${
                  data.nsk.machineCostAnalysis.toolingCostPerUse
                }</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Estimated Tool Consumption: $</strong></td>
                <td><span>${formatNumberFourDecimals(
                  data.currentProcess.machineCostAnalysis
                    .estimatedToolConsumption
                )}</span></td>
                <td><span>${formatNumberFourDecimals(
                  data.nsk.machineCostAnalysis.estimatedToolConsumption
                )}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Tooling Cost per Piece: $</strong></td>
                <td><span>${formatNumber(
                  data.currentProcess.machineCostAnalysis.toolingCostPerPiece
                )}</span></td>
                <td><span>${formatNumber(
                  data.nsk.machineCostAnalysis.toolingCostPerPiece
                )}</span></td>
            </div>
        </tr>    
    </table>
 

    <h2>Summary</h2>
    <table class="csa" style="width: 100%">
      <colgroup>
        <col span="1" style="width: 50%;">
        <col span="1" style="width: 50%;">
      </colgroup>
        <tr>
            <div>
                <td><strong>Grand Total Machining Cost per Piece:</strong></td>
                <td><span>$ ${formatNumberFourDecimals(
                  data.nsk.grandTotalMachiningCostPerPiece
                )}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Savings per Part:</strong></td>
                <td><span>$ ${data.savingsPerPart}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Average Number of Parts Run per Year:</strong></td>
                <td><span>${formatNumber(
                  data.averageNumberPartsRunPerYear
                )}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Capital Investment per Piece Cost: $</strong></td>
                <td><span>${data.capitalInvestmentPerPieceCost}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Potential Savings per Year During Capital Payback:</strong></td>
                <td><span>$ ${formatNumber(
                  data.potentialSavingsPerYearDuringCapitalPayback
                )}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Potential Savings per Year After Capital Payback:</strong></td>
                <td><span>$ ${formatNumber(
                  data.potentialSavingsPerYearAfterCapitalPayback
                )}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Potential Tooling Savings per Year:</strong></td>
                <td><span>$ ${formatNumber(
                  data.potentialToolingSavingsPerYear
                )}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Potential Machine Capacity Gained:</strong></td>
                <td><span>${formatNumber(
                  data.potentialMachineCapacityGained
                )}</span></td>
            </div>
        </tr>
        <tr>
            <div>
                <td><strong>Approximate Time for Capital Payback:</strong></td>
                <td><span>${formatNumber(
                  data.approximateTimeForCapitalPayback
                )}</span></td>
            </div>
        </tr>
        
    </table>


    <h2></h2>
    <table class="csa" style="width: 100%">
      <colgroup>
        <col span="1" style="width: 50%;">
        <col span="1" style="width: 50%;">
      </colgroup>
            <tr>
                <div>
                    <td><strong>I'd like to request a demonstration:</strong></td>
                    <td><span>${
                      data.demonstrationRequest ? "YES" : "NO"
                    }</span></td>
                </div>
            </tr>
            <tr>
                <div>
                    <td><strong>What is your primary market served?:</strong></td>
                    <td><span>${data.primaryMarket}</span></td>
                </div>
            </tr>
            <tr>
                <div>
                    <td><strong>Status:</strong></td>
                    <td><span>${data.status}</span></td>
                </div>
            </tr>
            <tr>
                <div>
                    <td><strong>Created At:</strong></td>
                    <td><span>${formatDate(
                      new Date(data.createdAt)
                    )}</span></td>
                </div>
            </tr>
            <tr>
                <div>
                    <td><strong>Updated At:</strong></td>
                    <td><span>${formatDate(
                      new Date(data.updatedAt)
                    )}</span></td>
                </div>
            </tr>  
        </table>
      </div>
      <br/>
      <div>
        <p class="pdf-legal">
          The Cost Savings Analysis tool is used for estimation purposes only. Actual cost savings can be further reviewed with an NSK America Corporation representative.
        </p>
      </div>
    </body>
`;

app.use(express.json());
app.post("/cost-savings-evaluation", async (req, res) => {
  try {
    // CD (JE on 20210524): get hostname dynamically
    const isDev = req.hostname.includes("localhost");
    const hostname = `${req.secure ? "https://" : "http://"}${
      isDev ? req.headers.host : req.hostname
    }`;

    const form_notification = req.body.form_notification;
    const cost_savings_evaluation = req.body.cost_savings_evaluation;
    const filename = req.body.filename;
    const owner = req.body.owner;

    // CD (JE on 20210517): to nsk cc and bcc
    const ccToNSK = form_notification.toNsk.cc.map(toEmail);
    const bccToNSK = form_notification.toNsk.bcc.map(toEmail);

    // CD (JE on 20210522): generate buffer from html markup
    const buffer = await htmlToBuffer(
      createHtmlFor(cost_savings_evaluation, hostname, owner)
    );

    // CD (JE on 20210517): to nsk email config
    const emailToNSK = {
      personalizations: [
        {
          to: [{ email: form_notification.toNsk.to }],
          bcc: ccToNSK,
          cc: bccToNSK,
          subject: form_notification.toNsk.emailContent.subject,
        },
      ],
      from: form_notification.toNsk.from, // Change to your verified sender
      text: form_notification.toNsk.emailContent.body,
      attachments: [
        {
          filename,
          content: buffer.toString("base64"),
          type: "application/pdf",
          disposition: "attachment",
          content_id: filename,
        },
      ],
    };

    // CD (JE on 20210517): upload parameters
    const uploadParams = {
      Bucket: bucket,
      Body: buffer,
      ACL: "public-read",
      Key: `form-data/${filename}`,
    };
    /* CD (JE on 20210517): send email */
    if (!req.body.attached) await sgMail.send(emailToNSK);
    // CD (JE on 20210517): upload attachment to DO Spaces
    const uploaded = await space.upload(uploadParams).promise();
    res.status(200).json(uploaded);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "Oops... something went wrong " + error });
  }
});

export default {
  path: "/api/v1/send-email",
  handler: app,
};
