<template>
  <div>
    <h1>Results of Cost Savings Analysis</h1>

    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-3">
        <div class="overflow-hidden shadow">
          <div class="px-4 py-5 bg-white sm:p-6">
            <dl ref="pdf" class="space-y-8 sm:space-y-0">
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Submission Label
                </dt>
                <dd class="details-dd">
                  {{ value.label }}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Description
                </dt>
                <dd class="details-dd">
                  {{ value.testDescription }}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  NSK America Respresentative / IMR
                </dt>
                <dd class="details-dd">
                  {{ value.nskAmericaRepresentative }}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Company Name
                </dt>
                <dd class="details-dd">
                  {{ value.companyName }}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  First Name
                </dt>
                <dd class="details-dd">
                  {{ value.owner.firstName }}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Last Name
                </dt>
                <dd class="details-dd">
                  {{ value.owner.lastName }}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Email
                </dt>
                <dd class="details-dd">
                  {{ value.owner.email }}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Supporting distributor
                </dt>
                <dd class="details-dd">
                  {{ value.supportingDistributor }}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Distributor sales person
                </dt>
                <dd class="details-dd">
                  {{ value.distributorSalesperson }}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Part name/#
                </dt>
                <dd class="details-dd">
                  {{ value.partNameNumber }}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Machine
                </dt>
                <dd class="details-dd">
                  {{ value.machine }}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Material
                </dt>
                <dd class="details-dd">
                  {{ value.material }}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Hardness
                </dt>
                <dd class="details-dd">
                  {{ value.hardness }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Surf Condition
                </dt>
                <dd class="details-dd">
                  {{ value.surfCond }}
                </dd>
              </div>

              <h3>Current Process</h3>
              <hr />
              <h6>Tooling Description</h6>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Spindle Type
                </dt>
                <dd class="details-dd">
                  {{ value.currentProcess.toolingDescription.spindleType }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Cutting Tool Brand
                </dt>
                <dd class="details-dd">
                  {{ value.currentProcess.toolingDescription.manufacturer }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Cutting Tool Diameter and Type
                </dt>
                <dd class="details-dd">
                  {{ value.currentProcess.toolingDescription.cuttingToolDiameterType }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Coating
                </dt>
                <dd class="details-dd">
                  {{ value.currentProcess.toolingDescription.coating }}
                </dd>
              </div>
              <h6>Operating Parameters</h6>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Length of Cut
                </dt>
                <dd class="details-dd">
                  {{ (value.currentProcess.operatingParameters.lengthOfCut) | formatNumberThreeDecimals }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Spindle Speed
                </dt>
                <dd class="details-dd">
                  {{ value.currentProcess.operatingParameters.spindleSpeed | formatNumber }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Feed
                </dt>
                <dd class="details-dd">
                  {{ (value.currentProcess.operatingParameters.feed) | formatNumberFiveDecimals }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  In cut time
                </dt>
                <dd class="details-dd">
                  {{ (value.currentProcess.operatingParameters.inCutTime) | formatNumberFourDecimals }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Parts per tool
                </dt>
                <dd class="details-dd">
                  {{ value.currentProcess.operatingParameters.partsPerTool | formatNumber }}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Total pieces per new tool
                </dt>
                <dd class="details-dd">
                  {{ (value.currentProcess.operatingParameters.totalPiecesPerNewTool) | formatNumber }}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Pieces for each regrind
                </dt>
                <dd class="details-dd">
                  {{ (value.currentProcess.operatingParameters.piecesForEachRegrind) }}
                </dd>
              </div>
              <h6>Machine Burden</h6>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Burden Rate
                </dt>
                <dd class="details-dd">
                  $ {{ (value.currentProcess.machineBurden.machineBurdenRate) }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Cost per workpiece
                </dt>
                <dd class="details-dd">
                  $ {{ (value.currentProcess.machineBurden.machineCostPerWorkpiece) | formatNumberFourDecimals }}
                </dd>
              </div>
              <h6>Machine Cost Analysis</h6>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Cutting tool cost
                </dt>
                <dd class="details-dd">
                  $ {{ (value.currentProcess.machineCostAnalysis.cuttingToolCost) }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Number of reconditioning per tool
                </dt>
                <dd class="details-dd">
                  {{ (value.currentProcess.machineCostAnalysis.numberReconditioningPerTool) }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Regrind cost per tool
                </dt>
                <dd class="details-dd">
                  $ {{ (value.currentProcess.machineCostAnalysis.regrindCostPerTool) }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Cost per piece on regrind
                </dt>
                <dd class="details-dd">
                  $ {{ (value.currentProcess.machineCostAnalysis.costPerPieceOnRegrind) | formatNumber}}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Number of tools per holder
                </dt>
                <dd class="details-dd">
                  {{ (value.currentProcess.machineCostAnalysis.numberOfToolsPerHolder) }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Cost of use per tool
                </dt>
                <dd class="details-dd">
                  $ {{ (value.currentProcess.machineCostAnalysis.costOfUsePerTool) }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Tool change time
                </dt>
                <dd class="details-dd">
                  {{ (value.currentProcess.machineCostAnalysis.toolChangeTime) }}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Tool change cost
                </dt>
                <dd class="details-dd">
                  $ {{ (value.currentProcess.machineCostAnalysis.toolChangeCost) }}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Tooling cost per use
                </dt>
                <dd class="details-dd">
                  $ {{ (value.currentProcess.machineCostAnalysis.toolingCostPerUse) }}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Estimated Tool Consumption
                </dt>
                <dd class="details-dd">
                  $ {{ (value.currentProcess.machineCostAnalysis.estimatedToolConsumption) | formatNumberFourDecimals }}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Tooling cost per piece
                </dt>
                <dd class="details-dd">
                  $ {{ (value.currentProcess.machineCostAnalysis.toolingCostPerPiece) | formatNumber }}
                </dd>
              </div>
              <hr />
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Grand Total Machining Cost per Piece
                </dt>
                <dd class="details-dd">
                  $ {{ (value.currentProcess.grandTotalMachiningCostPerPiece) | formatNumberFourDecimals }}
                </dd>
              </div>
              <h3>Future Process</h3>
              <hr />
              <h6>Tooling Description</h6>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Cutting Tool Brand
                </dt>
                <dd class="details-dd">
                  {{ value.nsk.toolingDescription.manufacturer }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Cutting Tool Diameter and Type
                </dt>
                <dd class="details-dd">
                  {{ value.nsk.toolingDescription.cuttingToolDiameterType }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Coating
                </dt>
                <dd class="details-dd">
                  {{ value.nsk.toolingDescription.coating }}
                </dd>
              </div>
              <h6>Operating Parameters</h6>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Length of Cut
                </dt>
                <dd class="details-dd">
                  {{ value.nsk.operatingParameters.lengthOfCut | formatNumberThreeDecimals }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Spindle Speed
                </dt>
                <dd class="details-dd">
                  {{ (value.nsk.operatingParameters.spindleSpeed) | formatNumber}}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Feed
                </dt>
                <dd class="details-dd">
                  {{ (value.nsk.operatingParameters.feed) | formatNumberFiveDecimals }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  In cut time
                </dt>
                <dd class="details-dd">
                  {{ (value.nsk.operatingParameters.inCutTime) | formatNumberFourDecimals }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Parts per tool
                </dt>
                <dd class="details-dd">
                  {{ (value.nsk.operatingParameters.partsPerTool) | formatNumber}}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Total pieces per new tool
                </dt>
                <dd class="details-dd">
                  {{ (value.nsk.operatingParameters.totalPiecesPerNewTool) | formatNumber}}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Pieces for each regrind
                </dt>
                <dd class="details-dd">
                  {{ (value.nsk.operatingParameters.piecesForEachRegrind) }}
                </dd>
              </div>
              <h6>Machine Burden</h6>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Burden Rate
                </dt>
                <dd class="details-dd">
                  $ {{ (value.nsk.machineBurden.machineBurdenRate) }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Cost per workpiece
                </dt>
                <dd class="details-dd">
                  $ {{ (value.nsk.machineBurden.machineCostPerWorkpiece) | formatNumberFourDecimals }}
                </dd>
              </div>
              <h6>Machine Cost Analysis</h6>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Spindle Investment Cost
                </dt>
                <dd class="details-dd">
                  $ {{ (value.nsk.machineCostAnalysis.spindleInvestmentCost) }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Cutting tool cost
                </dt>
                <dd class="details-dd">
                  $ {{ (value.nsk.machineCostAnalysis.cuttingToolCost) }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Number of reconditioning per tool
                </dt>
                <dd class="details-dd">
                  {{ (value.nsk.machineCostAnalysis.numberReconditioningPerTool) }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Regrind cost per tool
                </dt>
                <dd class="details-dd">
                  $ {{ (value.nsk.machineCostAnalysis.regrindCostPerTool) }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Cost per piece on regrind
                </dt>
                <dd class="details-dd">
                  $ {{ (value.nsk.machineCostAnalysis.costPerPieceOnRegrind) | formatNumber}}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Number of tools per holder
                </dt>
                <dd class="details-dd">
                  $ {{ (value.nsk.machineCostAnalysis.numberOfToolsPerHolder) }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Cost of use per tool
                </dt>
                <dd class="details-dd">
                  $ {{ (value.nsk.machineCostAnalysis.costOfUsePerTool) }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Tool change time
                </dt>
                <dd class="details-dd">
                  {{ (value.nsk.machineCostAnalysis.toolChangeTime) }}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Tool change cost
                </dt>
                <dd class="details-dd">
                  $ {{ (value.nsk.machineCostAnalysis.toolChangeCost) }}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Tooling cost per use
                </dt>
                <dd class="details-dd">
                  $ {{ (value.nsk.machineCostAnalysis.toolingCostPerUse) }}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Estimated Tool Consumption
                </dt>
                <dd class="details-dd">
                  $ {{ (value.nsk.machineCostAnalysis.estimatedToolConsumption) | formatNumberFourDecimals }}
                </dd>
              </div>

              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Tooling cost per piece
                </dt>
                <dd class="details-dd">
                  $ {{ (value.nsk.machineCostAnalysis.toolingCostPerPiece) | formatNumber }}
                </dd>
              </div>
              <hr />
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Grand Total Machining Cost per Piece
                </dt>
                <dd class="details-dd">
                  $ {{ (value.nsk.grandTotalMachiningCostPerPiece) | formatNumberFourDecimals }}
                </dd>
              </div>
              <hr />
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Savings per part
                </dt>
                <dd class="details-dd">
                  $ {{ (value.savingsPerPart) | formatNumber }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Average number parts run per year
                </dt>
                <dd class="details-dd">
                  {{ (value.averageNumberPartsRunPerYear) | formatNumber}}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Capital investment per piece cost
                </dt>
                <dd class="details-dd">
                  $ {{ (value.capitalInvestmentPerPieceCost) }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Potential savings per year 1
                </dt>
                <dd class="details-dd">
                  $ {{ (value.potentialSavingsPerYearDuringCapitalPayback) | formatNumber}}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Potential savings per year 2
                </dt>
                <dd class="details-dd">
                  $ {{ (value.potentialSavingsPerYearAfterCapitalPayback) | formatNumber}}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Potential tooling savings per year
                </dt>
                <dd class="details-dd">
                  $ {{ (value.potentialToolingSavingsPerYear) | formatNumber}}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Potential machine capacity gained (Hours per Year)
                </dt>
                <dd class="details-dd">
                  {{ (value.potentialMachineCapacityGained) | formatNumber}}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  Approximate time for capital payback (Months)
                </dt>
                <dd class="details-dd">
                  {{ (value.approximateTimeForCapitalPayback) | formatNumber}}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  I'd like to request a demonstration
                </dt>
                <dd class="details-dd">
                  {{ value.demonstrationRequest ? 'YES' : 'NO' }}
                </dd>
              </div>
              <div class="sm:flex sm:py-5">
                <dt class="details-dt">
                  What is your primary market served?
                </dt>
                <dd class="details-dd">
                  {{value.primaryMarket}}
                </dd>
              </div>
            </dl>
          </div>
        
        </div>
      </div>
    </div>
           
  </div>
</template>

<script>
export default {
  props: ['value'],
  //methods: {
    // (string) {
    //  const num = Number(string)
    //  const precision = Math.pow(10, 4)
    //  return Math.ceil(num * precision) / precision
    //}
  //}
  filters: {
    formatNumber(number){
      if(isNaN(number)) return '-'
      return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(number)
    },
    formatNumberThreeDecimals(number){
      if(isNaN(number)) return '-'
      return new Intl.NumberFormat('en-US', { maximumFractionDigits: 3 }).format(number)
    },
    formatNumberFourDecimals(number){
      if(isNaN(number)) return '-'
      return new Intl.NumberFormat('en-US', { maximumFractionDigits: 4 }).format(number)
    },
    formatNumberFiveDecimals(number){
      if(isNaN(number)) return '-'
      return new Intl.NumberFormat('en-US', { maximumFractionDigits: 5 }).format(number)
    }
  }
}
</script>
