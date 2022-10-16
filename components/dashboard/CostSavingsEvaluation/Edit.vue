<template>
    <div>
        
      <UiAppModal :show="modal" @close="modal = false" @confirm="deleteCostSavingsEvaluation"
        title="Are you sure you want to delete this item?" content="Items deleted cannot be recovered." />
  
      <main class="relative flex-1 overflow-y-auto focus:outline-none" tabindex="-1">
        <form @submit.prevent="formSubmit">
          <div class="py-4">
            <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
              <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
                <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                  <div>
                    <h1>Cost Savings Analysis</h1>                    
                    <p>#{{cost_savings_evaluation._id}}</p>
                  </div>
                  <div class="flex mt-4 space-x-3 md:mt-0">
                    <UiAppBadge :className="statusColor(cost_savings_evaluation.status)"
                      :label="cost_savings_evaluation.status" />
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
  
                            <UiAppFormField type="text" :required="false" v-model="form.currentProcess
                            .toolingDescription.manufacturer" />
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Spindle Type
                          </dt>
                          <dd class="details-dd">
  
  
                            <UiAppFormField type="text" :required="false" v-model="form.currentProcess
                            .toolingDescription.spindleType" />
                          </dd>
                        </div>
  
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Cutting Tool Diameter and Type
                          </dt>
                          <dd class="details-dd">
  
  
                            <UiAppFormField type="text" :required="false" v-model="form.currentProcess
                            .toolingDescription.cuttingToolDiameterType" />
                          </dd>
  
                        </div>
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Coating
                          </dt>
                          <dd class="details-dd">
  
                            <UiAppFormField type="text" :required="false" v-model="form.currentProcess
                                .toolingDescription.coating
                            " />
                          </dd>
                        </div>
                        <h6>Operating Parameters</h6>
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Length of Cut
                          </dt>
                          <dd class="details-dd">
                            <!-- {{
                            cost_savings_evaluation.currentProcess
                              .operatingParameters.lengthOfCut
                          }} -->
                            <UiAppFormField type="text" :required="false" v-model="form.currentProcess
                                .operatingParameters.lengthOfCut
                            " />
  
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Spindle Speed
                          </dt>
                          <dd class="details-dd">
                            <!-- {{
                            cost_savings_evaluation.currentProcess
                              .operatingParameters.spindleSpeed
                          }} -->
                            <UiAppFormField type="text" :required="false" v-model="
                              form.currentProcess
                                .operatingParameters.spindleSpeed
                            " />
  
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Feed
                          </dt>
                          <dd class="details-dd">
                            <!-- {{
                            cost_savings_evaluation.currentProcess
                              .operatingParameters.feed
                          }} -->
                            <UiAppFormField type="text" :required="false" v-model="
                             form.currentProcess
                                .operatingParameters.feed
                            " />
  
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            In cut time
                          </dt>
                          <dd class="details-dd">
                            {{form.currentProcess
                                .operatingParameters.inCutTime}}
                            <!-- <UiAppFormField type="text" :required="false" v-model="
                             form.currentProcess
                                .operatingParameters.inCutTime
                            " /> -->
  
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Parts per tool
                          </dt>
                          <dd class="details-dd">
  
                            <UiAppFormField type="text" :required="false" v-model="
                             form.currentProcess
                                .operatingParameters.partsPerTool
                            " />
                          </dd>
                        </div>
  
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Total pieces per new tool
                          </dt>
                          <dd class="details-dd">
                              {{form.currentProcess
                                .operatingParameters.totalPiecesPerNewTool}}
                            <!-- <UiAppFormField type="text" :required="false" v-model="
                            form.currentProcess
                                .operatingParameters.totalPiecesPerNewTool
                            " /> -->
                          </dd>
                        </div>
  
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Pieces for each regrind
                          </dt>
                          <dd class="details-dd">
                            <!-- {{
                            cost_savings_evaluation.currentProcess
                              .operatingParameters.piecesForEachRegrind
                          }} -->
  
  
                            <UiAppFormField type="text" :required="false" v-model="
                            form.currentProcess
                                .operatingParameters.piecesForEachRegrind
                            " />
  
  
                          </dd>
                        </div>
                        <h6>Machine Burden</h6>
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Burden Rate
                          </dt>
                          <dd class="details-dd">
                            <!-- $ {{
                            cost_savings_evaluation.currentProcess.machineBurden
                              .machineBurdenRate
                          }} -->
  
                            <UiAppFormField type="text" :required="false" v-model="
                            form.currentProcess.machineBurden
                                .machineBurdenRate
                            " />
  
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
  
  
                            <!-- <UiAppFormField type="text" :required="false" v-model="
                            form.currentProcess.machineBurden
                                .machineCostPerWorkpiece
                            " /> -->
                          </dd>
                        </div>
                        <h6>Machine Cost Analysis</h6>
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Cutting tool cost
                          </dt>
                          <dd class="details-dd">
                            <!-- $ {{
                            cost_savings_evaluation.currentProcess
                              .machineCostAnalysis.cuttingToolCost
                          }} -->
  
                            <UiAppFormField type="text" :required="false" v-model="
                            form.currentProcess
                                .machineCostAnalysis.cuttingToolCost
                            " />
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Number of reconditioning per tool
                          </dt>
                          <dd class="details-dd">
                            <!-- {{
                            cost_savings_evaluation.currentProcess
                              .machineCostAnalysis.numberReconditioningPerTool
                          }} -->
  
  
                            <UiAppFormField type="text" :required="false" v-model="
                            form.currentProcess
                                .machineCostAnalysis.numberReconditioningPerTool
                            " />
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Regrind cost per tool
                          </dt>
                          <dd class="details-dd">
                            <!-- $ {{
                            cost_savings_evaluation.currentProcess
                              .machineCostAnalysis.regrindCostPerTool
                          }} -->
  
                            <UiAppFormField type="text" :required="false" v-model="
                            form.currentProcess
                                .machineCostAnalysis.regrindCostPerTool
                            " />
  
  
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
  
  <!-- 
  
                            <UiAppFormField type="text" :required="false" v-model="
                            form.currentProcess
                                .machineCostAnalysis.costPerPieceOnRegrind
                            " /> -->
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Number of tools per holder
                          </dt>
                          <dd class="details-dd">
                            <!-- {{
                            cost_savings_evaluation.currentProcess
                              .machineCostAnalysis.numberOfToolsPerHolder
                          }} -->
  
  
                            <UiAppFormField type="text" :required="false" v-model="
                            form.currentProcess
                                .machineCostAnalysis.numberOfToolsPerHolder
                            " />
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
  
  
                            <!-- <UiAppFormField type="text" :required="false" v-model="
                            form.currentProcess
                                .machineCostAnalysis.costOfUsePerTool
                            " /> -->
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Tool change time
                          </dt>
                          <dd class="details-dd">
                            <!-- {{
                            cost_savings_evaluation.currentProcess
                              .machineCostAnalysis.toolChangeTime
                          }} -->
  
                            <UiAppFormField type="text" :required="false" v-model="
                            form.currentProcess
                                .machineCostAnalysis.toolChangeTime
                            " />
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
  
                            <!-- <UiAppFormField type="text" :required="false" v-model="
                            form.currentProcess
                                .machineCostAnalysis.toolChangeCost
                            " /> -->
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
  <!-- 
                            <UiAppFormField type="text" :required="false" v-model="
                            form.currentProcess
                                .machineCostAnalysis.toolingCostPerUse
                            " /> -->
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
  
  <!-- 
                            <UiAppFormField type="text" :required="false" v-model="
                            form.currentProcess
                                .machineCostAnalysis.estimatedToolConsumption
                            " /> -->
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
  <!-- 
                            <UiAppFormField type="text" :required="false" v-model="
                            form.currentProcess
                                .machineCostAnalysis.toolingCostPerPiece
                            " /> -->
                          </dd>
                        </div>
                        <hr />
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Grand Total Machining Cost per Piece
                          </dt>
                          <dd class="details-dd">
                            $ {{ cost_savings_evaluation.currentProcess.grandTotalMachiningCostPerPiece | formatNumberFourDecimals}}
  
  
                            <!-- <UiAppFormField type="text" :required="false" v-model="
                            form.currentProcess.grandTotalMachiningCostPerPiece
                            " /> -->
                          </dd>
                        </div>
                        <h3>NSK Process</h3>
                        <hr />
                        <h6>Tooling Description</h6>
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">form
                            Manufacturer
                          </dt>
                          <dd class="details-dd">
                            <!-- {{
                            cost_savings_evaluation.nsk.toolingDescription
                            .manufacturer
                            }} -->
                                                    <UiAppFormField type="text" :required="false" v-model="
                            form.nsk.toolingDescription
                            .manufacturer
                            " />
                          </dd>
                        </div>
  
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Cutting Tool Diameter and Type
                          </dt>
                          <dd class="details-dd">
                            <!-- {{
                            cost_savings_evaluation.nsk.toolingDescription
                            .cuttingToolDiameterType
                            }} -->
  
                          <UiAppFormField type="text" :required="false" v-model="
                            form.nsk.toolingDescription
                            .cuttingToolDiameterType
                            " />
                          </dd>
  
  
                        </div>
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Coating
                          </dt>
                          <dd class="details-dd">
                            <!-- {{
                            cost_savings_evaluation.nsk.toolingDescription.coating
                            }} -->
  
  <UiAppFormField type="text" :required="false" v-model="
                            form.nsk.toolingDescription.coating
                            " />
  
                            
                          </dd>
                        </div>
                        <h6>Operating Parameters</h6>
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Length of Cut
                          </dt>
                          <dd class="details-dd">
                            <!-- {{
                            cost_savings_evaluation.nsk.operatingParameters
                            .lengthOfCut
                            }} -->
  
  <UiAppFormField type="text" :required="false" v-model="
                            form.nsk.operatingParameters
                            .lengthOfCut
                            " />
  
  
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Spindle Speed
                          </dt>
                          <dd class="details-dd">
                            <!-- {{
                            cost_savings_evaluation.nsk.operatingParameters
                            .spindleSpeed
                            }}
   -->
  
  <UiAppFormField type="text" :required="false" v-model="
                            form.nsk.operatingParameters
                            .spindleSpeed
                            " />
  
                            
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Feed
                          </dt>
                          <dd class="details-dd">
                            <!-- {{
                            cost_savings_evaluation.nsk.operatingParameters.feed
                            }} -->
  
                          <UiAppFormField type="text" :required="false" v-model="
                            form.nsk.operatingParameters.feed
                            " />
  
                            
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
                            <!-- {{
                            cost_savings_evaluation.nsk.operatingParameters
                            .partsPerTool
                            }} -->
  
  
                          <UiAppFormField type="text" :required="false" v-model="
                            form.nsk.operatingParameters
                            .partsPerTool
                            " />
  
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
                            <!-- {{
                            cost_savings_evaluation.nsk.operatingParameters
                            .piecesForEachRegrind
                            }} -->
  
                             <UiAppFormField type="text" :required="false" v-model="
                            form.nsk.operatingParameters
                            .piecesForEachRegrind
                            " />
                          </dd>
                        </div>
                        <h6>Machine Burden</h6>
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Burden Rate
                          </dt>
                          <dd class="details-dd">
                            <!-- $ {{
                            cost_savings_evaluation.nsk.machineBurden
                            .machineBurdenRate
                            }} -->
  
                          <UiAppFormField type="text" :required="false" v-model="
                            form.nsk.machineBurden
                            .machineBurdenRate
                            " />
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
                            <!-- $ {{
                            cost_savings_evaluation.nsk.machineCostAnalysis
                            .spindleInvestmentCost
                            }} -->
  
                          <UiAppFormField type="text" :required="false" v-model="
                            form.nsk.machineCostAnalysis
                            .spindleInvestmentCost
                            " />
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Cutting tool cost
                          </dt>
                          <dd class="details-dd">
                            <!-- $ {{
                            cost_savings_evaluation.nsk.machineCostAnalysis
                            .cuttingToolCost
                            }} -->
  
  
                          <UiAppFormField type="text" :required="false" v-model="
                            form.nsk.machineCostAnalysis
                            .cuttingToolCost
                            " />
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Number of reconditioning per tool
                          </dt>
                          <dd class="details-dd">
                            <!-- {{
                            cost_savings_evaluation.nsk.machineCostAnalysis
                            .numberReconditioningPerTool
                            }} -->
  
                          <UiAppFormField type="text" :required="false" v-model="
                            form.nsk.machineCostAnalysis
                            .numberReconditioningPerTool
                            " />
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-1">
                          <dt class="details-dt">
                            Regrind cost per tool
                          </dt>
                          <dd class="details-dd">
                            <!-- $ {{
                            cost_savings_evaluation.nsk.machineCostAnalysis
                            .regrindCostPerTool
                            }} -->
  
  
                          <UiAppFormField type="text" :required="false" v-model="
                            form.nsk.machineCostAnalysis
                            .regrindCostPerTool
                            " />
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
                            <!-- {{
                            cost_savings_evaluation.nsk.machineCostAnalysis
                            .numberOfToolsPerHolder
                            }} -->
  
  
                          <UiAppFormField type="text" :required="false" v-model="
                            form.nsk.machineCostAnalysis
                            .numberOfToolsPerHolder
                            " />
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
                            <!-- {{
                            cost_savings_evaluation.nsk.machineCostAnalysis
                            .toolChangeTime
                            }} -->
  
  
  
                          <UiAppFormField type="text" :required="false" v-model="
                            form.nsk.machineCostAnalysis
                            .toolChangeTime
                            " />
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
                            $ {{ (cost_savings_evaluation.nsk.grandTotalMachiningCostPerPiece) |
                            formatNumberFourDecimals}}
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
  
                      <div>
                        <UiAppFormSelect :options="options" v-model="form.status" label="Status" :required="true" />
                      </div>
                      <div class="mt-3">
                        <UiAppFormSubmit className="primary-full" label="Save" />
                      </div>


  
  
                    </div>
                  </div>
                  <div class="py-6 mt-6 space-y-5 border-t border-gray-200">
                    <!--<div class="flex items-center space-x-2">
                    <UiIconUser2 class="flex-shrink-0 w-6 h-6 text-gray-400" />
                    <span class="text-sm font-medium text-gray-900">Updated by {{cost_savings_evaluation.updatedBy}}</span>
                  </div>-->
                    <div class="flex items-center space-x-2">
                      <UiIconCalendar class="flex-shrink-0 w-6 h-6 text-gray-400" />
                      <span class="text-sm font-medium text-gray-900">Created on <time
                          datetime="2020-12-02">{{cost_savings_evaluation.createdAt|formatDate}}</time></span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <UiIconRefresh class="flex-shrink-0 w-6 h-6 text-gray-400" />
                      <span class="text-sm font-medium text-gray-900">Updated on <time
                          datetime="2020-12-02">{{cost_savings_evaluation.updatedAt|formatDate}}</time></span>
                    </div>
                  </div>
                </div>
                <div class="mt-6">
                  <!-- CD (CT on 20210412): Delete button-->
                  <UiAppButton className="secondary-full" @click="modal = true" label="DELETE" />
                </div>
                <!--<div class="mt-6">-->
                <!-- CD (CT on 20210413): Cancel button-->
                <!--<UiAppButton className="tertiary" @click="$store.dispatch('dashboard/cost-savings-evaluation/hideSlider')" label="Cancel" />
              </div>-->
              </aside>
            </div>
          </div>
        </form>
      </main>
    </div>
  </template>
  
  <script>
  import { mapGetters } from "vuex";
  /* CD (EV on 20210329): Import query for delete and update technical question*/
  import {
    DELETE_ONE_COST_SAVINGS_EVALUATION,
    UPDATE_ONE_COST_SAVINGS_EVALUATION,
    FETCH_FORM_NOTIFICATION,
    FETCH_COST_SAVINGS_EVALUATIONS
  } from "~/graphql/dashboard/cost-savings-evaluation";
  
  
  export default {
    computed: mapGetters({
      /* CD (EV on 20210329): get the selected technical question (to be updated or deleted)*/
      cost_savings_evaluation:
        "dashboard/cost-savings-evaluation/costSavingsEvaluation"
    }),
    data() {
      return {
        modal: false,
        form: {}
        ,
  
        options: [
          { label: "Pending", value: "Pending" },
          { label: "Done", value: "Done" }
        ],
        // CD (EV on 20210427): email sending state
        email: {
          submitting: false,
          isSubmitted: false,
          error: false
        }
      };
    },
    created() {
      this.form = JSON.parse(JSON.stringify(this.cost_savings_evaluation))
      console.log(this.form)
      // this.form.status = this.cost_savings_evaluation.status;
      // this.form.currentProcess.toolingDescription.manufacturer = this.cost_savings_evaluation.currentProcess.toolingDescription.manufacturer ;
      // this.form.currentProcess
      //                       .toolingDescription.manufacturer = this.cost_savings_evaluation.currentProcess
      //                       .toolingDescription.manufacturer
    },
  
    methods: {
      calculateInCutTime(field) {
      if (!this.form[field].operatingParameters.feed) {
        this.form[field].operatingParameters.inCutTime = "-";
        return;
      }
      this.form[field].operatingParameters.inCutTime =
        Number(this.form[field].operatingParameters.lengthOfCut) /
        Number(this.form[field].operatingParameters.feed) /
        Number(this.form[field].operatingParameters.spindleSpeed);

      if (
        isNaN(this.form[field].operatingParameters.inCutTime) ||
        !this.form[field].operatingParameters.inCutTime
      ) {
        this.form[field].operatingParameters.inCutTime = "-";
      } else {
        this.form[field].operatingParameters.inCutTime = Number(
          this.toFixed(this.form[field].operatingParameters.inCutTime, 5)
        );
      }
    },
    calculateTotalPiecesForNewTool(field) {
      this.form[field].operatingParameters.totalPiecesPerNewTool =
        Number(this.form[field].operatingParameters.partsPerTool) *
        Number(
          this.form[field].machineCostAnalysis.numberReconditioningPerTool
        );

      if (
        isNaN(this.form[field].operatingParameters.totalPiecesPerNewTool) ||
        !this.form[field].operatingParameters.totalPiecesPerNewTool
      ) {
        this.form[field].operatingParameters.totalPiecesPerNewTool = "-";
      } else {
        this.form[field].operatingParameters.totalPiecesPerNewTool = Number(
          this.toFixed(this.form[field].operatingParameters.totalPiecesPerNewTool, 5)
        );
      }
    },
    calculateMachineCostPerWorkpiece(field) {
      this.form[field].machineBurden.machineCostPerWorkpiece =
        (Number(this.form[field].machineBurden.machineBurdenRate) / 60) *
        Number(this.form[field].operatingParameters.inCutTime);

      if (
        !this.form[field].machineBurden.machineCostPerWorkpiece ||
        isNaN(this.form[field].machineBurden.machineCostPerWorkpiece)
      ) {
        this.form[field].machineBurden.machineCostPerWorkpiece = "-";
      } else {
        this.form[field].machineBurden.machineCostPerWorkpiece = Number(
          this.toFixed(this.form[field].machineBurden.machineCostPerWorkpiece, 5)
        );
      }
    },
    calculateCostPerPieceRegrind(field) {
      if (!this.form[field].machineCostAnalysis.regrindCostPerTool) {
        this.form[field].machineCostAnalysis.costPerPieceOnRegrind = "-";
        return;
      }

      this.form[field].machineCostAnalysis.costPerPieceOnRegrind =
        (Number(this.form[field].machineCostAnalysis.regrindCostPerTool) *
          Number(
            this.form[field].machineCostAnalysis.numberReconditioningPerTool
          )) /
        (Number(this.form[field].operatingParameters.piecesForEachRegrind) *
          Number(
            this.form[field].machineCostAnalysis.numberReconditioningPerTool
          ));

      if (
        isNaN(this.form[field].machineCostAnalysis.costPerPieceOnRegrind) ||
        !this.form[field].machineCostAnalysis.costPerPieceOnRegrind
      ) {
        this.form[field].machineCostAnalysis.costPerPieceOnRegrind = "-";
      } else {
        this.form[field].machineCostAnalysis.costPerPieceOnRegrind = Number(
          this.toFixed(this.form[field].machineCostAnalysis.costPerPieceOnRegrind, 5)
        );
      }
    },
    calculateCostOfUsePerTool(field) {
      if (!this.form[field].machineCostAnalysis.numberReconditioningPerTool) {
        this.form[field].machineCostAnalysis.costOfUsePerTool = "-";
        return;
      }
      this.form[field].machineCostAnalysis.costOfUsePerTool =
        (Number(this.form[field].machineCostAnalysis.cuttingToolCost) /
          Number(
            this.form[field].machineCostAnalysis.numberReconditioningPerTool
          )) *
        Number(this.form[field].machineCostAnalysis.numberOfToolsPerHolder);
        
      if (
        isNaN(this.form[field].machineCostAnalysis.costOfUsePerTool) ||
        !this.form[field].machineCostAnalysis.costOfUsePerTool
      ) {
        this.form[field].machineCostAnalysis.costOfUsePerTool = "-";
      } else {
        this.form[field].machineCostAnalysis.costOfUsePerTool = Number(
          this.toFixed(this.form[field].machineCostAnalysis.costOfUsePerTool, 5)
        );
      }
      console.log(this.form[field].machineCostAnalysis.costOfUsePerTool);
    },
    calculateToolCostChange(field) {
      this.form[field].machineCostAnalysis.toolChangeCost =
        (Number(this.form[field].machineBurden.machineBurdenRate) / 60) *
        Number(this.form[field].machineCostAnalysis.toolChangeTime);

      if (
        isNaN(this.form[field].machineCostAnalysis.toolChangeCost) ||
        !this.form[field].machineCostAnalysis.toolChangeCost
      ) {
        this.form[field].machineCostAnalysis.toolChangeCost = "-";
      } else {
        this.form[field].machineCostAnalysis.toolChangeCost = Number(
          this.toFixed(this.form[field].machineCostAnalysis.toolChangeCost, 5)
        );
      }
    },
    calculateToolingCostPerUse(field) {
      if (!this.form[field].machineCostAnalysis.numberReconditioningPerTool) {
        this.form[field].machineCostAnalysis.toolingCostPerUse = "-";
        return;
      }

      this.form[field].machineCostAnalysis.toolingCostPerUse =
        (Number(this.form[field].machineCostAnalysis.cuttingToolCost) +
          Number(this.form[field].machineCostAnalysis.toolChangeCost) *
            Number(
              this.form[field].machineCostAnalysis.numberReconditioningPerTool
            ) +
          Number(this.form[field].machineCostAnalysis.regrindCostPerTool) *
            Number(
              this.form[field].machineCostAnalysis.numberReconditioningPerTool
            )) /
        Number(
          this.form[field].machineCostAnalysis.numberReconditioningPerTool
        );

      if (
        isNaN(this.form[field].machineCostAnalysis.toolingCostPerUse) ||
        !this.form[field].machineCostAnalysis.toolingCostPerUse
      ) {
        this.form[field].machineCostAnalysis.toolingCostPerUse = "-";
      } else {
        this.form[field].machineCostAnalysis.toolingCostPerUse = Number(
          this.toFixed(this.form[field].machineCostAnalysis.toolingCostPerUse, 5)
        );
      }
    },
    calculateEstimatedToolConsumption(field) {
      if (!this.form[field].operatingParameters.totalPiecesPerNewTool) {
        this.form[field].machineCostAnalysis.estimatedToolConsumption = "-";
        return;
      }

      this.form[field].machineCostAnalysis.estimatedToolConsumption =
        (Number(this.form.averageNumberPartsRunPerYear) /
          Number(this.form[field].operatingParameters.totalPiecesPerNewTool)) *
        Number(this.form[field].machineCostAnalysis.numberOfToolsPerHolder);

      if (
        isNaN(this.form[field].machineCostAnalysis.estimatedToolConsumption) ||
        !this.form[field].machineCostAnalysis.estimatedToolConsumption
      ) {
        this.form[field].machineCostAnalysis.estimatedToolConsumption = "-";
      } else {
        this.form[field].machineCostAnalysis.estimatedToolConsumption = Number(
          this.form[field].machineCostAnalysis.estimatedToolConsumption.toFixed(
            5
          )
        );
      }
    },
    calculateToolingCostPerPiece(field) {
      if (!this.form[field].operatingParameters.totalPiecesPerNewTool) {
        this.form[field].machineCostAnalysis.toolingCostPerPiece = "-";
        return;
      }

      this.form[field].machineCostAnalysis.toolingCostPerPiece =
        (Number(this.form[field].machineCostAnalysis.cuttingToolCost) *
          Number(this.form[field].machineCostAnalysis.numberOfToolsPerHolder)) /
        (Number(this.form[field].operatingParameters.totalPiecesPerNewTool) +
          Number(this.form[field].operatingParameters.piecesForEachRegrind) *
            Number(
              this.form[field].machineCostAnalysis.numberReconditioningPerTool
            ));
      if (
        isNaN(this.form[field].machineCostAnalysis.toolingCostPerPiece) ||
        !this.form[field].machineCostAnalysis.toolingCostPerPiece
      ) {
        this.form[field].machineCostAnalysis.toolingCostPerPiece = "-";
      } else {
        this.form[field].machineCostAnalysis.toolingCostPerPiece = Number(
          this.toFixed(this.form[field].machineCostAnalysis.toolingCostPerPiece, 5)
        );
      }
    },
    calculateGrandTotalMachiningCostPerPiece(field) {

      console.log(field, this.form[field].machineCostAnalysis.toolingCostPerPiece)
      if (!this.form[field].machineCostAnalysis.toolingCostPerPiece) {
        this.form[field].grandTotalMachiningCostPerPiece = "-";
        return;
      }

      this.form[field].grandTotalMachiningCostPerPiece =
      Number(this.form[field].machineBurden.machineCostPerWorkpiece) +
      Number(this.form[field].machineCostAnalysis.toolingCostPerPiece) +
      (Number(this.form[field].machineCostAnalysis.toolChangeCost) /
      Number(this.form[field].operatingParameters.totalPiecesPerNewTool) *
      Number(this.form[field].machineCostAnalysis.numberReconditioningPerTool))

      if (
        isNaN(this.form[field].grandTotalMachiningCostPerPiece) ||
        !this.form[field].grandTotalMachiningCostPerPiece
      ) {
        this.form[field].grandTotalMachiningCostPerPiece = "-";
      } else {
        this.form[field].grandTotalMachiningCostPerPiece = Number(
          this.toFixed(this.form[field].grandTotalMachiningCostPerPiece, 5)
        );
      }
    },
    calculateSavingsPerPart() {
      this.form.savingsPerPart =
        Number(this.form.currentProcess.grandTotalMachiningCostPerPiece) -
        Number(this.form.nsk.grandTotalMachiningCostPerPiece);

      if (isNaN(this.form.savingsPerPart)) {
        this.form.savingsPerPart = "-";
      } else {
        this.form.savingsPerPart = Number(this.toFixed(this.form.savingsPerPart, 5))
      }
    },
    calculateCapitalInvestmentPerPieceCost() {
      if (!this.form.averageNumberPartsRunPerYear) {
        this.form.capitalInvestmentPerPieceCost = "-";
        return;
      }

      this.form.capitalInvestmentPerPieceCost =
        Number(this.form.nsk.machineCostAnalysis.spindleInvestmentCost) /
        Number(this.form.averageNumberPartsRunPerYear);

      if (isNaN(this.form.capitalInvestmentPerPieceCost)) {
        this.form.capitalInvestmentPerPieceCost = "-";
      } else {
        this.form.capitalInvestmentPerPieceCost = Number(
          this.toFixed(this.form.capitalInvestmentPerPieceCost, 5)
        );
      }
    },
    calculatePotentialSavingsPerYearDuringCapitalPayback() {
      this.form.potentialSavingsPerYearDuringCapitalPayback =
        (Number(this.form.savingsPerPart) -
          Number(this.form.capitalInvestmentPerPieceCost)) *
        Number(this.form.averageNumberPartsRunPerYear);

      if (isNaN(this.form.potentialSavingsPerYearDuringCapitalPayback)) {
        this.form.potentialSavingsPerYearDuringCapitalPayback = "-";
      } else {
        this.form.potentialSavingsPerYearDuringCapitalPayback = Number(
          this.toFixed(this.form.potentialSavingsPerYearDuringCapitalPayback, 5)
        );
      }
    },
    calculatePotentialSavingsPerYearAfterCapitalPayback() {
      this.form.potentialSavingsPerYearAfterCapitalPayback =
        Number(this.form.savingsPerPart) *
        Number(this.form.averageNumberPartsRunPerYear);

      if (isNaN(this.form.potentialSavingsPerYearAfterCapitalPayback)) {
        this.form.potentialSavingsPerYearAfterCapitalPayback = "-";
      } else {
        this.form.potentialSavingsPerYearAfterCapitalPayback = Number(
          this.toFixed(this.form.potentialSavingsPerYearAfterCapitalPayback, 5)
        );
      }
    },
    calculatePotentialToolingSavingsPerYear() {
      if (!this.form.currentProcess.operatingParameters.totalPiecesPerNewTool) {
        this.form.potentialToolingSavingsPerYear = "-";
        return;
      }
      this.form.potentialToolingSavingsPerYear =
        ((Number(this.form.currentProcess.machineCostAnalysis.cuttingToolCost) *
          Number(
            this.form.currentProcess.machineCostAnalysis.numberOfToolsPerHolder
          )) /
          Number(
            this.form.currentProcess.operatingParameters.totalPiecesPerNewTool
          ) -
          (Number(this.form.nsk.machineCostAnalysis.cuttingToolCost) *
            Number(this.form.nsk.machineCostAnalysis.numberOfToolsPerHolder)) /
            Number(this.form.nsk.operatingParameters.totalPiecesPerNewTool)) *
        this.form.averageNumberPartsRunPerYear;
      if (isNaN(this.form.potentialToolingSavingsPerYear)) {
        this.form.potentialToolingSavingsPerYear = "-";
      } else {
        this.form.potentialToolingSavingsPerYear = Number(
          this.toFixed(this.form.potentialToolingSavingsPerYear, 5)
        );
      }
    },
    calculatePotentialMachineCapacityGained() {
      if (!this.form.currentProcess.operatingParameters.totalPiecesPerNewTool) {
        this.form.potentialMachineCapacityGained = "-";
        return;
      }

      this.form.potentialMachineCapacityGained =
        (((Number(
          this.form.currentProcess.machineCostAnalysis
            .numberReconditioningPerTool
        ) *
          Number(this.form.currentProcess.machineCostAnalysis.toolChangeTime)) /
          (Number(
            this.form.currentProcess.operatingParameters.totalPiecesPerNewTool
          ) +
            Number(
              this.form.currentProcess.operatingParameters.piecesForEachRegrind
            ) *
              Number(
                this.form.currentProcess.machineCostAnalysis
                  .numberReconditioningPerTool
              )) -
          (Number(
            this.form.nsk.machineCostAnalysis.numberReconditioningPerTool
          ) *
            Number(this.form.nsk.machineCostAnalysis.toolChangeTime)) /
            (Number(this.form.nsk.operatingParameters.totalPiecesPerNewTool) +
              Number(this.form.nsk.operatingParameters.piecesForEachRegrind) *
                Number(
                  this.form.nsk.machineCostAnalysis.numberReconditioningPerTool
                )) +
          (Number(this.form.currentProcess.operatingParameters.inCutTime) -
            Number(this.form.nsk.operatingParameters.inCutTime))) *
          Number(this.form.averageNumberPartsRunPerYear)) /
        60;
      if (isNaN(this.form.potentialMachineCapacityGained)) {
        this.form.potentialMachineCapacityGained = "-";
      } else {
        this.form.potentialMachineCapacityGained = Number(
          this.toFixed(this.form.potentialMachineCapacityGained, 5)
        );
      }
    },
    calculateApproximateTimeForCapitalPayback() {
      if (!this.form.savingsPerPart) {
        this.form.approximateTimeForCapitalPayback = "-";
        return;
      }

      this.form.approximateTimeForCapitalPayback =
        Number(this.form.nsk.machineCostAnalysis.spindleInvestmentCost) /
        Number(this.form.savingsPerPart) /
        (Number(this.form.averageNumberPartsRunPerYear) / 12);

      if (isNaN(this.form.approximateTimeForCapitalPayback)) {
        this.form.approximateTimeForCapitalPayback = "-";
      } else {
        this.form.approximateTimeForCapitalPayback = Number(
          this.toFixed(this.form.approximateTimeForCapitalPayback, 5)
        );
      }
    },
    calculate() {
      console.log("calculating")
      this.calculateInCutTime("currentProcess");
      this.calculateInCutTime("nsk");
      this.calculateTotalPiecesForNewTool("currentProcess");
      this.calculateTotalPiecesForNewTool("nsk");
      this.calculateMachineCostPerWorkpiece("currentProcess");
      this.calculateMachineCostPerWorkpiece("nsk");
      this.calculateCostPerPieceRegrind("currentProcess");
      this.calculateCostPerPieceRegrind("nsk");
      this.calculateCostOfUsePerTool("currentProcess");
      this.calculateCostOfUsePerTool("nsk");
      this.calculateToolCostChange("currentProcess");
      this.calculateToolCostChange("nsk");
      this.calculateToolingCostPerUse("currentProcess");
      this.calculateToolingCostPerUse("nsk");
      this.calculateEstimatedToolConsumption("currentProcess");
      this.calculateEstimatedToolConsumption("nsk");
      this.calculateToolingCostPerPiece("currentProcess");
      this.calculateToolingCostPerPiece("nsk");
      this.calculateGrandTotalMachiningCostPerPiece("currentProcess");
      this.calculateGrandTotalMachiningCostPerPiece("nsk");
      this.calculateSavingsPerPart();
      this.calculateCapitalInvestmentPerPieceCost();
      this.calculatePotentialSavingsPerYearDuringCapitalPayback();
      this.calculatePotentialSavingsPerYearAfterCapitalPayback();
      this.calculatePotentialToolingSavingsPerYear();
      this.calculatePotentialMachineCapacityGained();
      this.calculateApproximateTimeForCapitalPayback();
    },
    toFixed(num, fixed) {
        // const re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
        // return num.toString().match(re)[0];
        return num
    },

      async formSubmit() {
        /* CD (EV on 20210429): Get the updated status*/
        // const status = this.selectedStatus;
        /* CD (EV on 20210429): Get _id of the technical question*/
        const _id = this.cost_savings_evaluation._id;
        this.form.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
        this.calculate();
        /* CD (EV on 20210429): Declare variable for query and set (query what data to update [_id] ) (set what field to update [status])*/
        const variables = {
          /* CD (EV on 20210429): _id of technical question to be updated*/
          query: {
            _id: _id
          },
          
          /* CD (EV on 20210429): field of technical question want to update*/
          
          set: {
            status:this.form.status,
            
            updatedBy:this.$auth.user.given_name + ' ' + this.$auth.user.family_name,

            updatedAt: new Date(),
            
            currentProcess: {
              
              machineBurden: {
                machineBurdenRate: this.form.currentProcess.machineBurden.machineBurdenRate              
              },
              machineCostAnalysis: {                           
                
                // numberOfToolsPerHolder: this.form.currentProcess.machineCostAnalysis.numberOfToolsPerHolder,
                
                
                // toolChangeTime: this.form.currentProcess.machineCostAnalysis.toolChangeCost,
                
                cuttingToolCost: this.form.currentProcess.machineCostAnalysis.cuttingToolCost,
                numberReconditioningPerTool: this.form.currentProcess.machineCostAnalysis.numberReconditioningPerTool,
                regrindCostPerTool: this.form.currentProcess.machineCostAnalysis.regrindCostPerTool,
                costPerPieceOnRegrind: this.form.currentProcess.machineCostAnalysis.costPerPieceOnRegrind,
                numberOfToolsPerHolder: this.form.currentProcess.machineCostAnalysis.numberOfToolsPerHolder,
                costOfUsePerTool: this.form.currentProcess.machineCostAnalysis.costOfUsePerTool,
                toolChangeTime: this.form.currentProcess.machineCostAnalysis.toolChangeTime,
                toolChangeCost: this.form.currentProcess.machineCostAnalysis.toolChangeCost,
                toolingCostPerUse: this.form.currentProcess.machineCostAnalysis.toolingCostPerUse,
                estimatedToolConsumption: this.form.currentProcess.machineCostAnalysis.estimatedToolConsumption,
                toolingCostPerPiece: this.form.currentProcess.machineCostAnalysis.toolingCostPerPiece
                
              },
              operatingParameters: {
                feed: this.form.currentProcess.operatingParameters.feed,              
                lengthOfCut: this.form.currentProcess.operatingParameters.lengthOfCut,
                partsPerTool: this.form.currentProcess.operatingParameters.partsPerTool,
                piecesForEachRegrind: this.form.currentProcess.operatingParameters.piecesForEachRegrind,
                spindleSpeed: this.form.currentProcess.operatingParameters.spindleSpeed              
              },
              toolingDescription: {
                coating: this.form.currentProcess.toolingDescription.coating,
                cuttingToolDiameterType: this.form.currentProcess.toolingDescription.cuttingToolDiameterType,
                manufacturer: this.form.currentProcess.toolingDescription.manufacturer,
                spindleType: this.form.currentProcess.toolingDescription.spindleType
              }
           },
            nsk: {
              toolingDescription: {
                manufacturer:this.form.nsk.toolingDescription
                            .manufacturer,
                spindleType:this.form.nsk.toolingDescription.spindleType,
                cuttingToolDiameterType:this.form.nsk.toolingDescription.cuttingToolDiameterType,
                coating:this.form.nsk.toolingDescription.coating
              },
              operatingParameters: {
                lengthOfCut: this.form.nsk.operatingParameters.lengthOfCut,
                spindleSpeed: this.form.nsk.operatingParameters.spindleSpeed,
                feed: this.form.nsk.operatingParameters.feed,
                inCutTime: this.form.nsk.operatingParameters.inCutTime,
                partsPerTool: this.form.nsk.operatingParameters.partsPerTool,
                totalPiecesPerNewTool: this.form.nsk.operatingParameters.totalPiecesPerNewTool,
                piecesForEachRegrind: this.form.nsk.operatingParameters.piecesForEachRegrind
              },
              machineBurden: {
                machineBurdenRate: this.form.nsk.machineBurden.machineBurdenRate
                
              },
              machineCostAnalysis: {
                spindleInvestmentCost: this.form.nsk.machineCostAnalysis.spindleInvestmentCost,                
                cuttingToolCost: this.form.nsk.machineCostAnalysis.cuttingToolCost,
                numberReconditioningPerTool: this.form.nsk.machineCostAnalysis.numberReconditioningPerTool,
                regrindCostPerTool: this.form.nsk.machineCostAnalysis.regrindCostPerTool,
                costPerPieceOnRegrind: this.form.nsk.machineCostAnalysis.costPerPieceOnRegrind,
                numberOfToolsPerHolder: this.form.nsk.machineCostAnalysis.numberOfToolsPerHolder,
                costOfUsePerTool: this.form.nsk.machineCostAnalysis.costOfUsePerTool,
                toolChangeTime: this.form.nsk.machineCostAnalysis.toolChangeTime,
                toolChangeCost: this.form.nsk.machineCostAnalysis.toolChangeCost,
                toolingCostPerUse: this.form.nsk.machineCostAnalysis.toolingCostPerUse,
                estimatedToolConsumption: this.form.nsk.machineCostAnalysis.estimatedToolConsumption,
                toolingCostPerPiece: this.form.nsk.machineCostAnalysis.toolingCostPerPiece
              },
              
            }
          }
        };
        
        console.log(this.form)
        /* CD (EV on 20210429): Declare mutation*/
        const mutation = UPDATE_ONE_COST_SAVINGS_EVALUATION;
        /* CD (EV on 20210429): Update the technical question*/
        const mutatate = await this.$apollo.mutate({ mutation, variables });
        console.log('debug 6')
        /* CD (EV on 20210429): If update is success*/




        
    

        const owner = this.cost_savings_evaluation.owner;


        const name = `${this.cost_savings_evaluation.owner.firstName
            .split(" ")
            .join("-")}-${this.cost_savings_evaluation.owner.lastName.split(" ").join("-")}`;
        const filename = `cost-savings-evaluation-${name}-${Date.now()}.pdf`;
        
        var response = await this.$axios.$post(
              "/api/v1/cost-savings-evaluation/create-pdf",
              {
                filename,                
                cost_savings_evaluation: this.form,
                owner: this.cost_savings_evaluation.owner                
              }
            );
        

        
        if (mutatate.data.updateOneCost_savings_evaluation) {
            
            console.log('debug 5')
          // CD (JE on 20210517): send email notification for status if change
          if (true
            // this.cost_savings_evaluation.status !==
            // mutatate.data.updateOneCost_savings_evaluation.status
          ) {
            

            const mutation = UPDATE_ONE_COST_SAVINGS_EVALUATION
                const variables = {
                  query: {
                    _id: this.cost_savings_evaluation._id
                  },
                  set: { pdf: {
                    filename: response.Key,
                    location: response.Location
                  } }
                }
                await this.$apollo.mutate({ mutation, variables })
                console.log('debug 3')

              }

            
            
          }
           
              

            
            
          
  
          /* CD (EV on 20210429): update the selected technical question*/
          console.log(mutatate.data.updateOneCost_savings_evaluation)
          this.$store.dispatch(
            "dashboard/cost-savings-evaluation/updateCostSavingsEvaluation",
            mutatate.data.updateOneCost_savings_evaluation
          );
          /* CD (EV on 20210429): close the slider*/
          // this.$store.dispatch("dashboard/cost-savings-evaluation/hideSlider");

          
          const query = FETCH_COST_SAVINGS_EVALUATIONS;

          
          const { data } = await this.$apollo.query({ query });
          this.$store.dispatch(
            "dashboard/cost-savings-evaluation/getCostSavingsEvaluations",
            data.cost_savings_evaluations);

          
          
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

          this.$nuxt.refresh()
          
          
          
        
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
      statusColor(status) {
        /* CD (EV on 20210429): Update color of status column (Using AppBadge)*/
        return status === "Pending" ? "red" : "green";
      }
    ,
    filters: {
      formatDate(date) {
        return new Date(date).toLocaleString()
      },
      formatNumberFourDecimals(number) {
        if (isNaN(number)) return '-'
        return new Intl.NumberFormat('en-US', { maximumFractionDigits: 4 }).format(number)
      },
      
    }
  }
}
  </script>
  