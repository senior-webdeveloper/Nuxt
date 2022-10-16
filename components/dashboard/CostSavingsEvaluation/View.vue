<template>
  <div>
    <UiAppModal
      :show="modal"
      @close="modal = false"
      @confirm="deleteCostSavingsEvaluation"
      title="Are you sure you want to delete this item?"
      content="Items deleted cannot be recovered."
    />

    <main class="relative flex-1 overflow-y-auto focus:outline-none" tabindex="-1">
      <div class="py-4">
        <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
          <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
            <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
              <div>
                <h1>Cost Savings Analysis</h1>
                <p>#102</p>
              </div>
              <div class="flex mt-4 space-x-3 md:mt-0">
                <UiAppBadge
                  :className="statusColor(cost_savings_evaluation.status)"
                  :label="cost_savings_evaluation.status"
                />
              </div>
            </div>

            <div>
              <!-- Main Details-->
              <div class="divide-y divide-gray-200">
                <div class="py-5">
                  <dl class="space-y-8 sm:space-y-0">
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Test Description / Goal
                      </dt>
                      <dd class="details-dd">
                        {{ cost_savings_evaluation.testDescription }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Label
                      </dt>
                      <dd class="details-dd">
                        {{ cost_savings_evaluation.label }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        NSK America Respresentative / IMR
                      </dt>
                      <dd class="details-dd">
                        {{ cost_savings_evaluation.nskAmericaRepresentative }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Company Name
                      </dt>
                      <dd class="details-dd">
                        {{ cost_savings_evaluation.companyName }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        First name
                      </dt>
                      <dd class="details-dd">
                        {{ cost_savings_evaluation.owner.firstName }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Last name
                      </dt>
                      <dd class="details-dd">
                        {{ cost_savings_evaluation.owner.lastName }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Email
                      </dt>
                      <dd class="details-dd">
                        {{ cost_savings_evaluation.owner.email }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Supporting distributor
                      </dt>
                      <dd class="details-dd">
                        {{ cost_savings_evaluation.supportingDistributor }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Distributor sales person
                      </dt>
                      <dd class="details-dd">
                        {{ cost_savings_evaluation.distributorSalesperson }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Part name number
                      </dt>
                      <dd class="details-dd">
                        {{ cost_savings_evaluation.partNameNumber }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Machine
                      </dt>
                      <dd class="details-dd">
                        {{ cost_savings_evaluation.machine }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Material
                      </dt>
                      <dd class="details-dd">
                        {{ cost_savings_evaluation.material }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Hardness
                      </dt>
                      <dd class="details-dd">
                        {{ cost_savings_evaluation.hardness }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Surf Condition
                      </dt>
                      <dd class="details-dd">
                        {{ cost_savings_evaluation.surfCond }}
                      </dd>
                    </div>

                    <h3>Current Process vs NSK</h3>
                    <hr />
                    <h6>Tooling Description</h6>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Cutting Tool Brand
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.currentProcess
                            .toolingDescription.manufacturer
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Spindle Type
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.currentProcess
                            .toolingDescription.spindleType
                        }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Cutting Tool Diameter and Type
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.currentProcess
                            .toolingDescription.cuttingToolDiameterType
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Coating
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.currentProcess
                            .toolingDescription.coating
                        }}
                      </dd>
                    </div>
                    <h6>Operating Parameters</h6>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Length of Cut
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.currentProcess
                            .operatingParameters.lengthOfCut
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Spindle Speed
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.currentProcess
                            .operatingParameters.spindleSpeed
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Feed
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.currentProcess
                            .operatingParameters.feed
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        In cut time
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.currentProcess
                            .operatingParameters.inCutTime | formatNumberFourDecimals
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Parts per tool
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.currentProcess
                            .operatingParameters.partsPerTool
                        }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Total pieces per new tool
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.currentProcess
                            .operatingParameters.totalPiecesPerNewTool
                        }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Pieces for each regrind
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.currentProcess
                            .operatingParameters.piecesForEachRegrind
                        }}
                      </dd>
                    </div>
                    <h6>Machine Burden</h6>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Burden Rate
                      </dt>
                      <dd class="details-dd">
                        $ {{
                          cost_savings_evaluation.currentProcess.machineBurden
                            .machineBurdenRate
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Cost per workpiece
                      </dt>
                      <dd class="details-dd">
                        $ {{
                          (cost_savings_evaluation.currentProcess.machineBurden
                            .machineCostPerWorkpiece) | formatNumberFourDecimals
                        }}
                      </dd>
                    </div>
                    <h6>Machine Cost Analysis</h6>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Cutting tool cost
                      </dt>
                      <dd class="details-dd">
                        $ {{
                          cost_savings_evaluation.currentProcess
                            .machineCostAnalysis.cuttingToolCost
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Number of reconditioning per tool
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.currentProcess
                            .machineCostAnalysis.numberReconditioningPerTool
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Regrind cost per tool
                      </dt>
                      <dd class="details-dd">
                        $ {{
                          cost_savings_evaluation.currentProcess
                            .machineCostAnalysis.regrindCostPerTool
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Cost per piece on regrind
                      </dt>
                      <dd class="details-dd">
                        $ {{
                          cost_savings_evaluation.currentProcess
                            .machineCostAnalysis.costPerPieceOnRegrind | formatNumber
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Number of tools per holder
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.currentProcess
                            .machineCostAnalysis.numberOfToolsPerHolder
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Cost of use per tool
                      </dt>
                      <dd class="details-dd">
                        $ {{
                          cost_savings_evaluation.currentProcess
                            .machineCostAnalysis.costOfUsePerTool
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Tool change time
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.currentProcess
                            .machineCostAnalysis.toolChangeTime
                        }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Tool change cost
                      </dt>
                      <dd class="details-dd">
                        $ {{
                          cost_savings_evaluation.currentProcess
                            .machineCostAnalysis.toolChangeCost
                        }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Tooling cost per use
                      </dt>
                      <dd class="details-dd">
                        $ {{
                          cost_savings_evaluation.currentProcess
                            .machineCostAnalysis.toolingCostPerUse
                        }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Estimated Tool Consumption
                      </dt>
                      <dd class="details-dd">
                         $ {{
                          (cost_savings_evaluation.currentProcess
                            .machineCostAnalysis.estimatedToolConsumption) | formatNumberFourDecimals
                        }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Tooling cost per piece
                      </dt>
                      <dd class="details-dd">
                        $ {{
                          (cost_savings_evaluation.currentProcess
                            .machineCostAnalysis.toolingCostPerPiece) | formatNumber
                        }}
                      </dd>
                    </div>
                    <hr />
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Grand Total Machining Cost per Piece
                      </dt>
                      <dd class="details-dd">
                        $ {{ cost_savings_evaluation.currentProcess.grandTotalMachiningCostPerPiece | formatNumberFourDecimals}}
                      </dd>
                    </div>
                    <h3>NSK Process</h3>
                    <hr />
                    <h6>Tooling Description</h6>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Manufacturer
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.nsk.toolingDescription
                            .manufacturer
                        }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Cutting Tool Diameter and Type
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.nsk.toolingDescription
                            .cuttingToolDiameterType
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Coating
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.nsk.toolingDescription.coating
                        }}
                      </dd>
                    </div>
                    <h6>Operating Parameters</h6>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Length of Cut
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.nsk.operatingParameters
                            .lengthOfCut
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Spindle Speed
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.nsk.operatingParameters
                            .spindleSpeed
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Feed
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.nsk.operatingParameters.feed
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        In cut time
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.nsk.operatingParameters
                            .inCutTime | formatNumberFourDecimals
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Parts per tool
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.nsk.operatingParameters
                            .partsPerTool
                        }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Total pieces per new tool
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.nsk.operatingParameters
                            .totalPiecesPerNewTool
                        }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Pieces for each regrind
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.nsk.operatingParameters
                            .piecesForEachRegrind
                        }}
                      </dd>
                    </div>
                    <h6>Machine Burden</h6>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Burden Rate
                      </dt>
                      <dd class="details-dd">
                        $ {{
                          cost_savings_evaluation.nsk.machineBurden
                            .machineBurdenRate
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Cost per workpiece
                      </dt>
                      <dd class="details-dd">
                        $ {{
                          (cost_savings_evaluation.nsk.machineBurden
                            .machineCostPerWorkpiece) | formatNumberFourDecimals
                        }}
                      </dd>
                    </div>
                    <h6>Machine Cost Analysis</h6>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Spindle Investment Cost
                      </dt>
                      <dd class="details-dd">
                        $ {{
                          cost_savings_evaluation.nsk.machineCostAnalysis
                            .spindleInvestmentCost
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Cutting tool cost
                      </dt>
                      <dd class="details-dd">
                        $ {{
                          cost_savings_evaluation.nsk.machineCostAnalysis
                            .cuttingToolCost
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Number of reconditioning per tool
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.nsk.machineCostAnalysis
                            .numberReconditioningPerTool
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Regrind cost per tool
                      </dt>
                      <dd class="details-dd">
                        $ {{
                          cost_savings_evaluation.nsk.machineCostAnalysis
                            .regrindCostPerTool
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Cost per piece on regrind
                      </dt>
                      <dd class="details-dd">
                        $ {{
                          cost_savings_evaluation.nsk.machineCostAnalysis
                            .costPerPieceOnRegrind | formatNumber
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Number of tools per holder
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.nsk.machineCostAnalysis
                            .numberOfToolsPerHolder
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Cost of use per tool
                      </dt>
                      <dd class="details-dd">
                        $ {{
                          cost_savings_evaluation.nsk.machineCostAnalysis
                            .costOfUsePerTool
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Tool change time
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.nsk.machineCostAnalysis
                            .toolChangeTime
                        }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Tool change cost
                      </dt>
                      <dd class="details-dd">
                        $ {{
                          cost_savings_evaluation.nsk.machineCostAnalysis
                            .toolChangeCost
                        }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Tooling cost per use
                      </dt>
                      <dd class="details-dd">
                        $ {{
                          cost_savings_evaluation.nsk.machineCostAnalysis
                            .toolingCostPerUse
                        }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Estimated Tool Consumption
                      </dt>
                      <dd class="details-dd">
                        $ {{
                          (cost_savings_evaluation.nsk.machineCostAnalysis
                            .estimatedToolConsumption) | formatNumberFourDecimals
                        }}
                      </dd>
                    </div>

                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Tooling cost per piece
                      </dt>
                      <dd class="details-dd">
                        $ {{
                          (cost_savings_evaluation.nsk.machineCostAnalysis
                            .toolingCostPerPiece) | formatNumber
                        }}
                      </dd>
                    </div>
                    <hr />
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Grand Total Machining Cost per Piece
                      </dt>
                      <dd class="details-dd">
                        $ {{ (cost_savings_evaluation.nsk.grandTotalMachiningCostPerPiece) | formatNumberFourDecimals}}
                      </dd>
                    </div>
                    <hr />
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Savings per part
                      </dt>
                      <dd class="details-dd">
                        $ {{ (cost_savings_evaluation.savingsPerPart) | formatNumber}}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Average number parts run per year
                      </dt>
                      <dd class="details-dd">
                        {{ cost_savings_evaluation.averageNumberPartsRunPerYear }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Capital investment per piece cost
                      </dt>
                      <dd class="details-dd">
                        $ {{
                          cost_savings_evaluation.capitalInvestmentPerPieceCost
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Potential savings per year 1
                      </dt>
                      <dd class="details-dd">
                        $ {{ (cost_savings_evaluation.potentialSavingsPerYearDuringCapitalPayback) | formatNumber}}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Potential savings per year 2
                      </dt>
                      <dd class="details-dd">
                        $ {{ (cost_savings_evaluation.potentialSavingsPerYearAfterCapitalPayback) | formatNumber}}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Potential tooling savings per year
                      </dt>
                      <dd class="details-dd">
                        $ {{
                          (cost_savings_evaluation.potentialToolingSavingsPerYear) | formatNumber
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Potential machine capacity gained (Hours per Year)
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.potentialMachineCapacityGained
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Approximate time for capital payback (Months)
                      </dt>
                      <dd class="details-dd">
                        {{
                          (cost_savings_evaluation.approximateTimeForCapitalPayback) | formatNumber
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-5">
                      <dt class="details-dt">
                        I'd like to request a demonstration
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.demonstrationRequest ? 'YES' : 'NO'
                        }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-5">
                      <dt class="details-dt">
                        What is your primary market served?
                      </dt>
                      <dd class="details-dd">
                        {{
                          cost_savings_evaluation.primaryMarket
                        }}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <aside class="xl:block xl:pl-8">
            <h2 class="sr-only">Status and Submission Details</h2>
            <div>
              <div class="py-6 mt-6 space-y-5 border-t border-gray-200 lg:mt-0 lg:border-none">
                <div class="space-y-6">
                  <h2>Status</h2>
                  <!-- CD (EV on 20210329): form for status dropdown and submit button using AppForm-->
                  <!-- <UiAppForm :formInput="formInput" :onSubmit="onSubmit" /> -->
                  <!-- <form @submit.prevent="formSubmit"> -->
                    <div>
                      <!-- <UiAppFormSelect
                        :options="options"
                        v-model="form.status"
                        label="Status"
                        :required="true"
                      /> -->
                      {{form.status}}
                    </div>
                    <div class="mt-3">
                      <UiAppFormSubmit className="primary-full" label="Save" />
                    </div>
                                        <div class="mt-3">
                        <UiAppButton className="primary-full" label="Edit" @click="showSliderViewEdit(cost_savings_evaluation)" />
                      </div>
                      
                      <div class="mt-3">
                        <UiAppButton className="primary-full" label="Download PDF" @click="download(cost_savings_evaluation.pdf)" />
                      </div>

                  <!-- </form> -->
                </div>
              </div>
              <div class="py-6 mt-6 space-y-5 border-t border-gray-200">
                <!--<div class="flex items-center space-x-2">
                  <UiIconUser2 class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated by {{cost_savings_evaluation.updatedBy}}</span>
                </div>-->
                <div class="flex items-center space-x-2">
                  <UiIconCalendar class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Created on <time datetime="2020-12-02">{{cost_savings_evaluation.createdAt|formatDate}}</time></span>
                </div>
                <div class="flex items-center space-x-2">
                  <UiIconRefresh class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated on <time datetime="2020-12-02">{{cost_savings_evaluation.updatedAt|formatDate}}</time></span>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <!-- CD (CT on 20210412): Delete button-->
              <UiAppButton
                className="secondary-full"
                @click="modal = true"
                label="DELETE"
              />
            </div>
            <div class="flex flex-col items-center">
              <h3 class="py-5">Other form submissions</h3>
             <div class="cursor-pointer" v-for="(evaluation, index) in filtered_evaluations" :key="index" @click="openEvaluation(evaluation)">{{evaluation.createdAt|formatDate}}-{{evaluation.label}}</div>

            </div>
          </aside>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
/* CD (EV on 20210329): Import query for delete and update technical question*/
import {
  DELETE_ONE_COST_SAVINGS_EVALUATION,
  UPDATE_ONE_COST_SAVINGS_EVALUATION,
  FETCH_FORM_NOTIFICATION
} from "~/graphql/dashboard/cost-savings-evaluation";
export default {
  computed: mapGetters({
    /* CD (EV on 20210329): get the selected technical question (to be updated or deleted)*/
    cost_savings_evaluation:
      "dashboard/cost-savings-evaluation/costSavingsEvaluation",
     cost_savings_evaluations :
     "dashboard/cost-savings-evaluation/costSavingsEvaluations",
  }),
  
  data() {
    return {
      modal: false,
      form: {
        status: ""
      },
      options: [
        { label: "Pending", value: "Pending" },
        { label: "Done", value: "Done" }
      ],
      // CD (EV on 20210427): email sending state
      email: {
        submitting: false,
        isSubmitted: false,
        error: false
      },
      filtered_evaluations: []
    };
  },
  created() {
    this.form.status = this.cost_savings_evaluation.status;

    console.log(this.cost_savings_evaluation)
  },

  methods: {
      showSliderViewEdit(costSavingsEvaluation) {
      /* CD (EV on 20210329): Show Slider*/
      this.$store.dispatch("dashboard/cost-savings-evaluation/showSliderViewEdit");
      /* CD (EV on 20210329): Get the viewed technical question*/
      this.$store.dispatch(
        "dashboard/cost-savings-evaluation/getCostSavingsEvaluation",
        costSavingsEvaluation
      );
    },
    
    async formSubmit() {
      /* CD (EV on 20210429): Get the updated status*/
      // const status = this.selectedStatus;
      /* CD (EV on 20210429): Get _id of the technical question*/
      const _id = this.cost_savings_evaluation._id;
      this.form.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
      /* CD (EV on 20210429): Declare variable for query and set (query what data to update [_id] ) (set what field to update [status])*/
      const variables = {
        /* CD (EV on 20210429): _id of technical question to be updated*/
        query: {
          _id: _id
        },
        /* CD (EV on 20210429): field of technical question want to update*/
        set: this.form
      };

      /* CD (EV on 20210429): Declare mutation*/
      const mutation = UPDATE_ONE_COST_SAVINGS_EVALUATION;
      /* CD (EV on 20210429): Update the technical question*/
      const mutatate = await this.$apollo.mutate({ mutation, variables });

      /* CD (EV on 20210429): If update is success*/
      if (mutatate.data.updateOneCost_savings_evaluation) {
        // CD (JE on 20210517): send email notification for status if change
        if (
          this.cost_savings_evaluation.status !==
          mutatate.data.updateOneCost_savings_evaluation.status
        ) {
          const query = FETCH_FORM_NOTIFICATION;
          const variables = {
            query: {
              name: "Cost Savings Analysis"
            }
          };
          const form_notification = await this.$apollo.query({query, variables});
          await this.$axios.$post(
            "/api/v1/dashboard/send-email/cost-savings-evaluation",
            {
              initial_status: this.cost_savings_evaluation.status,
              cost_savings_evaluation: {
                ...this.cost_savings_evaluation,
                ...mutatate.data.updateOneCost_savings_evaluation
              },
              form_notification: form_notification.data.form_notification
            }
          );
        }

        /* CD (EV on 20210429): update the selected technical question*/
        console.log(mutatate.data.updateOneCost_savings_evaluation)
        this.$store.dispatch(
          "dashboard/cost-savings-evaluation/updateCostSavingsEvaluation",
          mutatate.data.updateOneCost_savings_evaluation
        );
        /* CD (EV on 20210429): close the slider*/
        this.$store.dispatch("dashboard/cost-savings-evaluation/hideSlider");
        /* CD (EV on 20210429): Show notification of success update*/
        this.$store.dispatch(
          "dashboard/cost-savings-evaluation/showNotificationUpdate",
          {
            title: "Updated Successfully",
            type: "success",
            content: "",
            show: true
          }
        );
      }
    },
    async deleteCostSavingsEvaluation() {
      /* CD (EV on 20210429): Get _id of the technical question*/
      const _id = this.cost_savings_evaluation._id;
      const variables = {
        /* CD (EV on 20210429): _id of technical question to be deleted*/
        query: {
          _id: _id
        }
      };
      /* CD (EV on 20210429): Declare mutation*/
      const mutation = DELETE_ONE_COST_SAVINGS_EVALUATION;
      /* CD (EV on 20210429): Delete the technical question*/
      const mutatate = await this.$apollo.mutate({ mutation, variables });
      /* CD (EV on 20210429): If delete is success*/
      if (mutatate.data.deleteOneCost_savings_evaluation) {
        /* CD (EV on 20210429): Remove the selected technical question from technical questions (will also reflect on table)*/
        this.$store.dispatch(
          "dashboard/cost-savings-evaluation/deleteCostSavingsEvaluation"
        );
        /* CD (EV on 20210429): Hide slider*/
        this.$store.dispatch("dashboard/cost-savings-evaluation/hideSlider");
        /* CD (EV on 20210429): Show notification of success delete*/
        this.$store.dispatch(
          "dashboard/cost-savings-evaluation/showNotificationUpdate",
          {
            title: "Success",
            type: "success",
            content: "Deleted",
            show: true
          }
        );
        this.modal = false;
      }
    },
    download(pdf) {
      const link = document.createElement('a')
      link.download = pdf.filename
      link.href=pdf.location
      link.click()
    },
    statusColor(status) {
      /* CD (EV on 20210429): Update color of status column (Using AppBadge)*/
      return status === "Pending" ? "red" : "green";
    }
  },
  filters: {
    formatDate(date) {
      return new Date(date).toLocaleString()
    },
    formatNumberFourDecimals(number){
      if(isNaN(number)) return '-'
      return new Intl.NumberFormat('en-US', { maximumFractionDigits: 4 }).format(number)
    }
  }
};
</script>
