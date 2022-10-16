// FormCostSavingsEvaluation2

<template>
  <div>
    <UiAppNotification
      :show="notification.show"
      :title="notification.title"
      :content="notification.content"
      @close="notification.show = false"
    />

    <div class="mb-10">
      <div class="relative p-4 text-center md:w-3/4 md:mx-auto sm:px-6 sm:py-8">
        <h1>Cost Savings Analysis Worksheet</h1>
      </div>
      <div class="relative py-4 bg-blueGray-100 md:mx-auto sm:p-6" :class="{ 'w-full': attached, 'lg:w-3/4': !attached }">
        <div class="container mx-auto sm:px-4">
          <!-- <UiAppForm :formInput="formInput"  /> -->

          <div>
            <UiAppPanel v-model="wizard.step" :steps="attached ? [] : wizard.steps" />
            <div class="w-full mt-10">
              <template v-if="wizard.step === 1">
                <form @submit.prevent="saveUser">
                  <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                      <div class="px-4 sm:px-0">
                        <h3>User Information</h3>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-4">
                              <UiAppFormField
                                v-model="user.firstName"
                                type="text"
                                label="First Name *"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6 sm:col-span-4">
                              <UiAppFormField
                                v-model="user.lastName"
                                type="text"
                                label="Last Name *"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6 sm:col-span-4">
                              <UiAppFormField
                                v-model="user.email"
                                type="text"
                                label="Email *"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6 text-right">
                              <UiAppFormSubmit
                                className="tertiary"
                                label="Proceed"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </template>
            </div>
            <form @submit.prevent="formSubmit" class="mt-10">
              <template v-if="wizard.step === 2">
                <div class="md:grid md:grid-cols-3 md:gap-6">
                  <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                      <h3>TEST INFORMATION</h3>
                    </div>
                  </div>
                  <div class="mt-5 md:mt-0 md:col-span-2">
                    <div class="overflow-hidden shadow">
                      <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6 sm:col-span-4">
                            <UiAppFormField
                              v-model="form.testDescription"
                              type="text"
                              label="Test Description / Goal *"
                              :required="true"
                            />
                          </div> 
                          <div class="col-span-6 sm:col-span-4">
                            <UiAppFormField
                              v-model="form.nskAmericaRepresentative"
                              type="text"
                              label="NSK America Representative / IMR"
                              :required="false"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <UiAppFormField
                              v-model="form.companyName"
                              type="text"
                              label="Company Name *"
                              :required="true"
                            />
                          </div>
                          <!--CD (CT on 20211230) Remove this as per client
                          <div class="col-span-6 sm:col-span-4">
                            <UiAppFormField
                              v-model="form.preparedFor"
                              type="text"
                              label="PREPARED FOR: *"
                              :required="true"
                            />
                          </div>-->
                          <div class="col-span-6 sm:col-span-4">
                            <UiAppFormField
                              v-model="user.firstName"
                              type="text"
                              label="First Name *"
                              isPreview
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <UiAppFormField
                              v-model="user.lastName"
                              type="text"
                              label="Last Name *"
                              isPreview
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <UiAppFormField
                              v-model="user.email"
                              type="email"
                              label="Email *"
                              isPreview
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <UiAppFormField
                              v-model="form.supportingDistributor"
                              type="text"
                              label="Supporting Distributor"
                              :required="false"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <UiAppFormField
                              v-model="form.distributorSalesperson"
                              type="text"
                              label="Distributor Salesperson"
                              :required="false"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <UiAppFormField
                              v-model="form.partNameNumber"
                              type="text"
                              label="Part Name/# *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <UiAppFormField
                              v-model="form.machine"
                              type="text"
                              label="Machine *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <UiAppFormField
                              v-model="form.material"
                              type="text"
                              label="Material"
                              :required="false"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <UiAppFormField
                              v-model="form.hardness"
                              type="text"
                              label="Hardness"
                              :required="false"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <UiAppFormField
                              v-model="form.surfCond"
                              type="text"
                              label="Surf Cond."
                              :required="false"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="hidden sm:block" aria-hidden="true">
                  <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                  </div>
                </div>
                <h3>CURRENT PROCESS VS NSK</h3>
                <div class="hidden sm:block" aria-hidden="true">
                  <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                  </div>
                </div>

                <div class="mt-10 sm:mt-0">
                  <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                      <div class="px-4 sm:px-0">
                        <h3>TOOLING DESCRIPTION</h3>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid items-end grid-cols-2 gap-6">
                              <h6 class="uppercase">CURRENT PROCESS</h6>
                              <h6 class="uppercase">FUTURE PROCESS</h6>
                              <UiAppFormField
                                v-model="form.currentProcess.toolingDescription.spindleType"
                                type="text"
                                label="Spindle Type (Machine Tool or Current Spindle with Max Speed) *"
                                :required="true"
                              />
                              <div class="flex-shrink-0 justify-self-center">
                                <UiLogoNskB class="w-20 h-20" />
                              </div>
                              <UiAppFormField 
                                v-model="form.currentProcess.toolingDescription.manufacturer"
                                type="text"
                                label="Cutting Tool Brand"
                                :required="false"
                              />
                              <UiAppFormField
                                v-model="form.nsk.toolingDescription.manufacturer"
                                type="text"
                                label="Cutting Tool Brand"
                                :required="false"
                              />
                              <UiAppFormField
                                v-model="form.currentProcess.toolingDescription.cuttingToolDiameterType"
                                type="text"
                                label="Cutting Tool Diameter and Type (ex: 0.008 Drill) *"
                                :required="true"
                              />
                              <UiAppFormField
                                v-model="form.nsk.toolingDescription.cuttingToolDiameterType"
                                type="text"
                                label="Cutting Tool Diameter and Type (ex: 0.008 Drill) *"
                                :required="true"
                              />
                              <UiAppFormField
                                v-model="form.currentProcess.toolingDescription.coating"
                                type="text"
                                label="Coating (if any)"
                                :required="false"
                              />
                              <UiAppFormField
                                v-model="form.nsk.toolingDescription.coating"
                                type="text"
                                label="Coating (if any)"
                                :required="false"
                              />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="hidden sm:block" aria-hidden="true">
                  <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                  </div>
                </div>

                <div class="mt-10 sm:mt-0">
                  <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                      <div class="px-4 sm:px-0">
                        <h3>OPERATING PARAMETERS</h3>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="grid col-span-6 gap-6 md:col-span-3">
                              <h6 class="uppercase">current process</h6>
                              
                              <label class="block text-sm font-medium text-blueGray-700">
                                Length of Cut (inches) *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm"  
                                  separator=","
                                  required
                                  :precision="3" 
                                  v-model="form.currentProcess.operatingParameters.lengthOfCut">
                                </vue-numeric>
                              </label>

                              <label class="block text-sm font-medium text-blueGray-700">
                                Spindle Speed (rpm) *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm"  
                                  separator=","
                                  required 
                                  v-model="form.currentProcess.operatingParameters.spindleSpeed">
                                </vue-numeric>
                              </label>

                              <label class="block text-sm font-medium text-blueGray-700">
                                Feed (ipr) *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm"  
                                  separator=","
                                  required 
                                  :precision="5"
                                  v-model="form.currentProcess.operatingParameters.feed">
                                </vue-numeric>
                              </label>

                              <label class="block text-sm font-medium text-blueGray-700">
                                Parts per Tool *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm"  
                                  separator=","
                                  required 
                                  v-model="form.currentProcess.operatingParameters.partsPerTool">
                                </vue-numeric>
                              </label>

                              <label class="block text-sm font-medium text-blueGray-700">
                                Pieces for each Regrind (if applicable, default value is 1)
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm"  
                                  separator=","
                                  v-model="form.currentProcess.operatingParameters.piecesForEachRegrind"
                                  placeholder="1"
                                  :empty-value="1">
                                </vue-numeric>
                              </label>

                            </div>
                            <div class="grid col-span-6 gap-6 md:col-span-3">
                              <h6 class="uppercase">FUTURE PROCESS</h6>

                              <label class="block text-sm font-medium text-blueGray-700">
                                Length of Cut (inches) *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm"  
                                  separator=","
                                  required 
                                 :precision="3"
                                  v-model="form.nsk.operatingParameters.lengthOfCut">
                                </vue-numeric>
                              </label>

                              <label class="block text-sm font-medium text-blueGray-700">
                                Spindle Speed (rpm) *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm"  
                                  separator=","
                                  required 
                                  v-model="form.nsk.operatingParameters.spindleSpeed">
                                </vue-numeric>
                              </label>

                              <label class="block text-sm font-medium text-blueGray-700">
                                Feed (ipr) *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm"  
                                  separator=","
                                  required 
                                 :precision="5"
                                  v-model="form.nsk.operatingParameters.feed">
                                </vue-numeric>
                              </label>

                              <label class="block text-sm font-medium text-blueGray-700">
                                Estimated Parts per Tool *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm"  
                                  separator=","
                                  required 
                                  v-model="form.nsk.operatingParameters.partsPerTool">
                                </vue-numeric>
                              </label>

                              <label class="block text-sm font-medium text-blueGray-700">
                                Pieces for each Regrind (if applicable, default value is 1)
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm"  
                                  separator=","
                                  v-model="form.nsk.operatingParameters.piecesForEachRegrind"
                                  placeholder="1"
                                  :empty-value="1">
                                </vue-numeric>
                              </label>
                        
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="hidden sm:block" aria-hidden="true">
                  <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                  </div>
                </div>

                <div class="mt-10 sm:mt-0">
                  <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                      <div class="px-4 sm:px-0">
                        <h3>MACHINE BURDEN</h3>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="grid col-span-6 gap-6 md:col-span-3">
                              <h6 class="uppercase">current process</h6>
                              <label class="block text-sm font-medium text-blueGray-700">
                                Machine Burden Rate ($ per hour) *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                  currency="$" 
                                  separator=","
                                  required 
                                 :precision="2"
                                  v-model="form.currentProcess.machineBurden.machineBurdenRate"
                                  placeholder="$">
                                </vue-numeric>
                              </label>
                            </div>
                            <div class="grid col-span-6 gap-6 md:col-span-3">
                              <h6 class="uppercase">nsk</h6>
                              <label class="block text-sm font-medium text-blueGray-700">
                                Machine Burden Rate ($ per hour) *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                  currency="$" 
                                  separator=","
                                  required 
                                 :precision="2"
                                  v-model="form.nsk.machineBurden.machineBurdenRate"
                                  placeholder="$">
                                </vue-numeric>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="hidden sm:block" aria-hidden="true">
                  <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                  </div>
                </div>

                <div class="mt-10 sm:mt-0">
                  <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                      <div class="px-4 sm:px-0">
                        <h3>MACHINING COST ANALYSIS</h3>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid grid-cols-2 gap-6">
                              <h6 class="uppercase">current process</h6>
                              <h6 class="uppercase">FUTURE PROCESS</h6>
                              <div></div>
                              <label class="block text-sm font-medium text-blueGray-700">
                                Cost of Nakanishi Spindle System Investment *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                  currency="$" 
                                  separator=","
                                  required 
                                  v-model="form.nsk.machineCostAnalysis.spindleInvestmentCost"
                                  placeholder="$">
                                </vue-numeric>
                              </label>
                              <label class="block text-sm font-medium text-blueGray-700">
                                Cost of Cutting Tool *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                  currency="$" 
                                  separator=","
                                  required 
                                 :precision="2"
                                  v-model="form.currentProcess.machineCostAnalysis.cuttingToolCost"
                                  placeholder="$">
                                </vue-numeric>
                              </label>
                              <label class="block text-sm font-medium text-blueGray-700">
                                Cost of Cutting Tool *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                  currency="$" 
                                  separator=","
                                  required 
                                 :precision="2"
                                  v-model="form.nsk.machineCostAnalysis.cuttingToolCost"
                                  placeholder="$">
                                </vue-numeric>
                              </label>

                              <label class="block text-sm font-medium text-blueGray-700">
                                Number of Reconditionings per Tool (default value is 1) *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                  separator=","
                                  required 
                                  v-model="form.currentProcess.machineCostAnalysis.numberReconditioningPerTool"
                                  placeholder="1"
                                  :empty-value="1">
                                </vue-numeric>
                              </label>

                              <label class="block text-sm font-medium text-blueGray-700">
                                Number of Reconditionings per Tool (default value is 1) *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                  separator=","
                                  required 
                                  v-model="form.nsk.machineCostAnalysis.numberReconditioningPerTool"
                                  placeholder="1"
                                  :empty-value="1">
                                </vue-numeric>
                              </label>

                              <label class="block text-sm font-medium text-blueGray-700">
                                Regrind Cost per Tool
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                  currency="$" 
                                  separator=","
                                 :precision="2"
                                  v-model="form.currentProcess.machineCostAnalysis.regrindCostPerTool"
                                  placeholder="$">
                                </vue-numeric>
                              </label>
                              <label class="block text-sm font-medium text-blueGray-700">
                                Regrind Cost per Tool
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                  currency="$" 
                                  separator=","
                                 :precision="2"
                                  v-model="form.nsk.machineCostAnalysis.regrindCostPerTool"
                                  placeholder="$">
                                </vue-numeric>
                              </label>
                              <label class="block text-sm font-medium text-blueGray-700">
                                Number of Tools per Holder (default value is 1) *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                  separator=","
                                  required
                                 :precision="2"
                                  v-model="form.currentProcess.machineCostAnalysis.numberOfToolsPerHolder"
                                  placeholder="1"
                                  :empty-value="1">
                                </vue-numeric>
                              </label>
                              <label class="block text-sm font-medium text-blueGray-700">
                                Number of Tools per Holder (default value is 1) *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                  separator=","
                                  required
                                 :precision="2"
                                  v-model="form.nsk.machineCostAnalysis.numberOfToolsPerHolder"
                                  placeholder="1"
                                  :empty-value="1">
                                </vue-numeric>
                              </label>
                              <label class="block text-sm font-medium text-blueGray-700">
                                Tool Change Time (mins)*
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                  separator=","
                                  required
                                 :precision="2"
                                  v-model="form.currentProcess.machineCostAnalysis.toolChangeTime">
                                </vue-numeric>
                              </label>
                              <label class="block text-sm font-medium text-blueGray-700">
                                Tool Change Time (mins)*
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                  separator=","
                                  required
                                 :precision="2"
                                  v-model="form.nsk.machineCostAnalysis.toolChangeTime">
                                </vue-numeric>
                              </label>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="hidden sm:block" aria-hidden="true">
                  <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                  </div>
                </div>

                <div class="mt-10 sm:mt-0">
                  <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                      <div class="px-4 sm:px-0">
                        <h3>QUANTITY</h3>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6">
                              <label class="block text-sm font-medium text-blueGray-700">
                                Average Number Parts Run per Year *
                                <vue-numeric 
                                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm" 
                                  separator=","
                                  v-model="form.averageNumberPartsRunPerYear">
                                </vue-numeric>
                              </label>
                            </div>

                            <div class="col-span-6">
                              <div class="relative flex items-center">
                                <input
                                  type="checkbox"
                                  id="isRequestingDemo"
                                  name="isRequestingDemo"
                                  class="checkbox"
                                  v-model="form.demonstrationRequest"
                                />
                                <label for="isRequestingDemo" class="block ml-3 text-sm font-medium text-blueGray-700">I'd like to request a demonstration.
                                </label>
                              </div>
                            </div>
                            <div class="col-span-6">
                              <UiAppFormField
                                v-model="form.label"
                                type="text"
                                label="What would you like to call this Cost Savings Analysis? *"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6">
                              <UiAppFormField
                                v-model="form.primaryMarket"
                                type="text"
                                label="What is your primary market served? *"
                                :required="true"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                          <UiAppFormSubmit
                            v-if="attached"
                            @click.prevent="$emit('back')"
                            className="primary"
                            label="Back"
                          />
                          <UiAppFormSubmit
                            className="primary"
                            label="Submit"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
              <!-- CD (JE on 20210526): this section here inside template would not be rendered -->
              <!-- <template v-if="false">
                <div class="md:grid md:grid-cols-3 md:gap-6">
                  <div class="md:col-span-3">
                    <div class="overflow-hidden shadow">
                      <div class="px-4 py-5 bg-white sm:p-6">
                        <dl ref="pdf" class="space-y-8 sm:space-y-0">
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Description
                            </dt>
                            <dd class="details-dd">
                              {{ form.testDescription }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              NSK America Respresentative
                            </dt>
                            <dd class="details-dd">
                              {{ form.nskAmericaRepresentative }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Company Name
                            </dt>
                            <dd class="details-dd">
                              {{ form.companyName }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              First name
                            </dt>
                            <dd class="details-dd">
                              {{ form.firstName }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Last name
                            </dt>
                            <dd class="details-dd">
                              {{ form.lastName }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Email
                            </dt>
                            <dd class="details-dd">
                              {{ form.email }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Supporting distributor
                            </dt>
                            <dd class="details-dd">
                              {{ form.supportingDistributor }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Distributor sales person
                            </dt>
                            <dd class="details-dd">
                              {{ form.distributorSalesperson }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Part name/#
                            </dt>
                            <dd class="details-dd">
                              {{ form.partNameNumber }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Machine
                            </dt>
                            <dd class="details-dd">
                              {{ form.machine }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Material
                            </dt>
                            <dd class="details-dd">
                              {{ form.material }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Hardness
                            </dt>
                            <dd class="details-dd">
                              {{ form.hardness }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Surf Condition
                            </dt>
                            <dd class="details-dd">
                              {{ form.surfCond }}
                            </dd>
                          </div>

                          <h3>Current Process vs NSK</h3>
                          <hr />
                          <h6>Tooling Description</h6>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Manufacturer
                            </dt>
                            <dd class="details-dd">
                              {{
                                form.currentProcess.toolingDescription
                                  .manufacturer
                              }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Spindle Type
                            </dt>
                            <dd class="details-dd">
                              {{
                                form.currentProcess.toolingDescription
                                  .spindleType
                              }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Cutting Tool Diameter and Type
                            </dt>
                            <dd class="details-dd">
                              {{
                                form.currentProcess.toolingDescription
                                  .cuttingToolDiameterType
                              }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Coating
                            </dt>
                            <dd class="details-dd">
                              {{
                                form.currentProcess.toolingDescription.coating
                              }}
                            </dd>
                          </div>
                          <h6>Operating Parameters</h6>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Length of Cut
                            </dt>
                            <dd class="details-dd">
                              {{
                                form.currentProcess.operatingParameters
                                  .lengthOfCut
                              }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Spindle Speed
                            </dt>
                            <dd class="details-dd">
                              {{
                                form.currentProcess.operatingParameters
                                  .spindleSpeed
                              }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Feed
                            </dt>
                            <dd class="details-dd">
                              {{ form.currentProcess.operatingParameters.feed }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              In cut time
                            </dt>
                            <dd class="details-dd">
                              {{
                                form.currentProcess.operatingParameters
                                  .inCutTime
                              }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Parts per tool
                            </dt>
                            <dd class="details-dd">
                              {{
                                form.currentProcess.operatingParameters
                                  .partsPerTool
                              }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Total pieces per new tool
                            </dt>
                            <dd class="details-dd">
                              {{
                                form.currentProcess.operatingParameters
                                  .totalPiecesPerNewTool
                              }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Pieces for each regrind
                            </dt>
                            <dd class="details-dd">
                              {{
                                form.currentProcess.operatingParameters
                                  .piecesForEachRegrind
                              }}
                            </dd>
                          </div>
                          <h6>Machine Burden</h6>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Burden Rate
                            </dt>
                            <dd class="details-dd">
                              $ {{
                                form.currentProcess.machineBurden
                                  .machineBurdenRate
                              }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Cost per workpiece
                            </dt>
                            <dd class="details-dd">
                              $ {{
                                form.currentProcess.machineBurden
                                  .machineCostPerWorkpiece
                              }}
                            </dd>
                          </div>
                          <h6>Machine Cost Analysis</h6>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Cutting tool cost
                            </dt>
                            <dd class="details-dd">
                              $ {{
                                form.currentProcess.machineCostAnalysis
                                  .cuttingToolCost
                              }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Number of reconditioning per tool
                            </dt>
                            <dd class="details-dd">
                              {{
                                form.currentProcess.machineCostAnalysis
                                  .numberReconditioningPerTool
                              }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Regrind cost per tool
                            </dt>
                            <dd class="details-dd">
                              $ {{
                                form.currentProcess.machineCostAnalysis
                                  .regrindCostPerTool
                              }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Cost per piece on regrind
                            </dt>
                            <dd class="details-dd">
                              $ {{
                                form.currentProcess.machineCostAnalysis
                                  .costPerPieceOnRegrind
                              }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Number of tools per holder
                            </dt>
                            <dd class="details-dd">
                              {{
                                form.currentProcess.machineCostAnalysis
                                  .numberOfToolsPerHolder
                              }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              cost of use per tool
                            </dt>
                            <dd class="details-dd">
                              $ {{
                                form.currentProcess.machineCostAnalysis
                                  .costOfUsePerTool
                              }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Tool change time
                            </dt>
                            <dd class="details-dd">
                              {{
                                form.currentProcess.machineCostAnalysis
                                  .toolChangeTime
                              }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Tool change cost
                            </dt>
                            <dd class="details-dd">
                              $ {{
                                form.currentProcess.machineCostAnalysis
                                  .toolChangeCost
                              }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Tooling cost per use
                            </dt>
                            <dd class="details-dd">
                              $ {{
                                form.currentProcess.machineCostAnalysis
                                  .toolingCostPerUse
                              }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Estimated Tool Consumption
                            </dt>
                            <dd class="details-dd">
                              $ {{
                                form.currentProcess.machineCostAnalysis
                                  .estimatedToolConsumption
                              }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Tooling cost per piece
                            </dt>
                            <dd class="details-dd">
                              $ {{
                                form.currentProcess.machineCostAnalysis
                                  .toolingCostPerPiece
                              }}
                            </dd>
                          </div>
                          <hr />
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Grand Total Machining Cost per Piece
                            </dt>
                            <dd class="details-dd">
                              $ {{
                                form.currentProcess
                                  .grandTotalMachiningCostPerPiece
                              }}
                            </dd>
                          </div>
                          <h3>NSK Process</h3>
                          <hr />
                          <h6>Tooling Description</h6>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Cutting Tool Brand
                            </dt>
                            <dd class="details-dd">
                              {{ form.nsk.toolingDescription.manufacturer }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Cutting Tool Diameter and Type
                            </dt>
                            <dd class="details-dd">
                              {{
                                form.nsk.toolingDescription
                                  .cuttingToolDiameterType
                              }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Coating
                            </dt>
                            <dd class="details-dd">
                              {{ form.nsk.toolingDescription.coating }}
                            </dd>
                          </div>
                          <h6>Operating Parameters</h6>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Length of Cut
                            </dt>
                            <dd class="details-dd">
                              {{ form.nsk.operatingParameters.lengthOfCut }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Spindle Speed
                            </dt>
                            <dd class="details-dd">
                              {{ form.nsk.operatingParameters.spindleSpeed }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Feed
                            </dt>
                            <dd class="details-dd">
                              {{ form.nsk.operatingParameters.feed }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              In cut time
                            </dt>
                            <dd class="details-dd">
                              {{ form.nsk.operatingParameters.inCutTime }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Parts per tool
                            </dt>
                            <dd class="details-dd">
                              {{ form.nsk.operatingParameters.partsPerTool }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Total pieces per new tool
                            </dt>
                            <dd class="details-dd">
                              {{
                                form.nsk.operatingParameters
                                  .totalPiecesPerNewTool
                              }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Pieces for each regrind
                            </dt>
                            <dd class="details-dd">
                              {{
                                form.nsk.operatingParameters
                                  .piecesForEachRegrind
                              }}
                            </dd>
                          </div>
                          <h6>Machine Burden</h6>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Burden Rate
                            </dt>
                            <dd class="details-dd">
                              $ {{ form.nsk.machineBurden.machineBurdenRate }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Cost per workpiece
                            </dt>
                            <dd class="details-dd">
                              $ {{
                                form.nsk.machineBurden.machineCostPerWorkpiece
                              }}
                            </dd>
                          </div>
                          <h6>Machine Cost Analysis</h6>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Spindle Investment Cost
                            </dt>
                            <dd class="details-dd">
                              $ {{
                                form.nsk.machineCostAnalysis
                                  .spindleInvestmentCost
                              }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Cutting tool cost
                            </dt>
                            <dd class="details-dd">
                              $ {{ form.nsk.machineCostAnalysis.cuttingToolCost }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Number of reconditioning per tool
                            </dt>
                            <dd class="details-dd">
                              {{
                                form.nsk.machineCostAnalysis
                                  .numberReconditioningPerTool
                              }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Regrind cost per tool
                            </dt>
                            <dd class="details-dd">
                              $ {{
                                form.nsk.machineCostAnalysis.regrindCostPerTool
                              }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Cost per piece on regrind
                            </dt>
                            <dd class="details-dd">
                              $ {{
                                form.nsk.machineCostAnalysis
                                  .costPerPieceOnRegrind
                              }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Number of tools per holder
                            </dt>
                            <dd class="details-dd">
                              {{
                                form.nsk.machineCostAnalysis
                                  .numberOfToolsPerHolder
                              }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Cost of use per tool
                            </dt>
                            <dd class="details-dd">
                              $ {{
                                form.nsk.machineCostAnalysis.costOfUsePerTool
                              }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Tool change time
                            </dt>
                            <dd class="details-dd">
                              {{ form.nsk.machineCostAnalysis.toolChangeTime }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Tool change cost
                            </dt>
                            <dd class="details-dd">
                              $ {{ form.nsk.machineCostAnalysis.toolChangeCost }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Tooling cost per use
                            </dt>
                            <dd class="details-dd">
                              $ {{
                                form.nsk.machineCostAnalysis.toolingCostPerUse
                              }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Estimated Tool Consumption
                            </dt>
                            <dd class="details-dd">
                              $ {{
                                form.nsk.machineCostAnalysis
                                  .estimatedToolConsumption
                              }}
                            </dd>
                          </div>

                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Tooling cost per piece
                            </dt>
                            <dd class="details-dd">
                              $ {{
                                form.nsk.machineCostAnalysis.toolingCostPerPiece
                              }}
                            </dd>
                          </div>
                          <hr />
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Grand Total Machining Cost per Piece
                            </dt>
                            <dd class="details-dd">
                              $ {{ form.nsk.grandTotalMachiningCostPerPiece }}
                            </dd>
                          </div>
                          <hr />
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Savings per part
                            </dt>
                            <dd class="details-dd">
                              $ {{ form.savingsPerPart }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Average number parts run per year
                            </dt>
                            <dd class="details-dd">
                              {{ form.averageNumberPartsRunPerYear }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Capital investment per piece cost
                            </dt>
                            <dd class="details-dd">
                              $ {{ form.capitalInvestmentPerPieceCost }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Potential savings per year 1
                            </dt>
                            <dd class="details-dd">
                              $ {{
                                form.potentialSavingsPerYearDuringCapitalPayback
                              }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Potential savings per year 2
                            </dt>
                            <dd class="details-dd">
                              $ {{
                                form.potentialSavingsPerYearAfterCapitalPayback
                              }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Potential tooling savings per year
                            </dt>
                            <dd class="details-dd">
                              $ {{ form.potentialToolingSavingsPerYear }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Potential machine capacity gained (Hours per Year)
                            </dt>
                            <dd class="details-dd">
                              {{ form.potentialMachineCapacityGained }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              Approximate time for capital payback (Months)
                            </dt>
                            <dd class="details-dd">
                              {{ form.approximateTimeForCapitalPayback }}
                            </dd>
                          </div>
                          <div class="sm:flex sm:py-5">
                            <dt class="details-dt">
                              I'd like to request a demonstration
                            </dt>
                            <dd class="details-dd">
                              {{ form.demonstrationRequest }}
                            </dd>
                          </div>
                        </dl>
                      </div>
                      <div class="px-4 py-5 text-right bg-white sm:px-6">>
                        <UiAppFormSubmit className="primary" label="Submit" />
                      </div>
                    </div>
                  </div>
                </div>
              </template> -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  INSERT_ONE_COST_SAVINGS_EVALUATION,
  FETCH_FORM_NOTIFICATION,
  INSERT_ONE_USER_AS_GUEST,
  FETCH_ONE_USER,
  UPDATE_ONE_USER
} from "~/graphql/cost-savings-evaluation";
import { UPDATE_ONE_COST_SAVINGS_EVALUATION, FETCH_COST_SAVINGS_EVALUATIONS_MIN } from '~/graphql/dashboard/cost-savings-evaluation';
import VueNumeric from 'vue-numeric'

export default {
  components: {VueNumeric},
  props: ["attached"],
  created(){
    if(this.attached) {
      this.wizard.step = 2
      this.user = {
        _id: null,
        firstName: this.$store.state.auth.user.given_name || 'First Name',
        lastName: this.$store.state.auth.user.family_name || 'Last Name',
        email: this.$store.state.auth.user.email
      }
      this.saveUser()
    }
  },
  data: () => ({
    // CD (JE on 20210508): Wizard form data
    wizard: {
      toggle: true,
      step: 1,
      steps: [
        {
          step: 1,
          title: "User Details"
        },
        {
          step: 2,
          title: "Cost Saving Analysis"
        }
      ]
    },
    notification: {
      show: false,
      title: "Title",
      content: "Content"
    },
    // CD (JE on 20210526): the guest user data
    user: {
      _id: null,
      firstName: '',
      lastName: '',
      email: '',
    },
    form: {
      primaryMarket: "",
      label: null,
      demonstrationRequest: false,
      testDescription: "",
      nskAmericaRepresentative: "",
      companyName: "",
      owner: { link: '' }, // this should be the id of the guest user, graphql would automatically populate this
      supportingDistributor: "",
      distributorSalesperson: "",
      partNameNumber: "",
      machine: "",
      material: "",
      hardness: "",
      surfCond: "",
      currentProcess: {
        toolingDescription: {
          manufacturer: "",
          spindleType: "",
          cuttingToolDiameterType: "",
          coating: ""
        },
        operatingParameters: {
          lengthOfCut: "",
          spindleSpeed: "",
          feed: "",
          inCutTime: "",
          partsPerTool: "",
          totalPiecesPerNewTool: "",
          piecesForEachRegrind: ""
        },
        machineBurden: {
          machineBurdenRate: "",
          machineCostPerWorkpiece: ""
        },
        machineCostAnalysis: {
          cuttingToolCost: "",
          numberReconditioningPerTool: "",
          regrindCostPerTool: "",
          costPerPieceOnRegrind: "",
          numberOfToolsPerHolder: "",
          costOfUsePerTool: "",
          toolChangeTime: "",
          toolChangeCost: "",
          toolingCostPerUse: "",
          estimatedToolConsumption: "",
          toolingCostPerPiece: ""
        },
        grandTotalMachiningCostPerPiece: ""
      },
      nsk: {
        toolingDescription: {
          manufacturer: "",
          spindleType: "",
          cuttingToolDiameterType: "",
          coating: ""
        },
        operatingParameters: {
          lengthOfCut: "",
          spindleSpeed: "",
          feed: "",
          inCutTime: "",
          partsPerTool: "",
          totalPiecesPerNewTool: "",
          piecesForEachRegrind: ""
        },
        machineBurden: {
          machineBurdenRate: "",
          machineCostPerWorkpiece: ""
        },
        machineCostAnalysis: {
          spindleInvestmentCost: "",
          cuttingToolCost: "",
          numberReconditioningPerTool: "",
          regrindCostPerTool: "",
          costPerPieceOnRegrind: "",
          numberOfToolsPerHolder: "",
          costOfUsePerTool: "",
          toolChangeTime: "",
          toolChangeCost: "",
          toolingCostPerUse: "",
          estimatedToolConsumption: "",
          toolingCostPerPiece: ""
        },
        grandTotalMachiningCostPerPiece: ""
      },
      savingsPerPart: "",
      averageNumberPartsRunPerYear: "",
      capitalInvestmentPerPieceCost: "",
      potentialSavingsPerYearDuringCapitalPayback: "",
      potentialSavingsPerYearAfterCapitalPayback: "",
      potentialToolingSavingsPerYear: "",
      potentialMachineCapacityGained: "",
      approximateTimeForCapitalPayback: "",
      updatedAt: new Date(),
      createdAt: new Date(),
      status: "Pending"
    }
  }),
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
    // CD (JE on 20210519): toFixed without rounding off
    // https://stackoverflow.com/questions/4187146/truncate-number-to-two-decimal-places-without-rounding#answer-11818658
    toFixed(num, fixed) {
        // const re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
        // return num.toString().match(re)[0];
        return num
    },
    // CD (JE on 20210515): on form submit handlerf
    async formSubmit() {
      if (this.wizard.toggle) {
        console.log('step 1')
        // this.wizard.step = this.wizard.step === 1 ? 2 : 1;
        this.wizard.toggle = false;
        // CD (JE on 20210518): calculate on preview ----- CT on 20210806: THis comment is from the other dev, he didn't update mostly likely this comment when this new version of the form was created.
        // In the first version of this form, step 2 is showing a Preview of the filled in fields + it shows the results of the other fields in the DB that needs to be calculated 
        if (this.wizard.step === 2) {
            console.log('step 2')
          this.calculate();
        }
      }

      const mutation = INSERT_ONE_COST_SAVINGS_EVALUATION;
      this.form.owner.link = this.user._id
    
      const variables = {
        data: this.form
      };

      try {
        //Validate unique label
        const query = FETCH_COST_SAVINGS_EVALUATIONS_MIN;
        const { data } = await this.$apollo.query({ query });
        const labels = data.cost_savings_evaluations.map(cse => cse.label)
        if(labels.some(label => {return label === this.form.label})){
          this.notification = {
            show: true,
            title: "Error",
            content: "Label already exists"
          };
          return
        }

        let response = await this.$apollo.mutate({ mutation, variables });
        const cost_savings_evaluation_id = response.data.insertOneCost_savings_evaluation._id
        if (response.data.insertOneCost_savings_evaluation) {

          // CD (JE on 20210513): send email notification to nsk and user
          const query = FETCH_FORM_NOTIFICATION;
          const variables = {
            query: {
              name: "Cost Savings Evaluation"
            }
          };
          response = await this.$apollo.query({ variables, query });
          if (response.data.form_notification) {
            const name = `${this.user.firstName
              .split(" ")
              .join("-")}-${this.user.lastName.split(" ").join("-")}`;
            const filename = `cost-savings-evaluation-${name}-${Date.now()}.pdf`;

            // CD (JE on 20210513): create pdf based on preview of form
            response = await this.$axios.$post(
              "/api/v1/send-email/cost-savings-evaluation",
              {
                filename,
                form_notification: response.data.form_notification,
                cost_savings_evaluation: this.form,
                owner: this.user,
                attached: this.attached
              }
            );

                // CD (JE on 20210521): add pdf location and filename to entry
                const mutation = UPDATE_ONE_COST_SAVINGS_EVALUATION
                const variables = {
                  query: {
                    _id: cost_savings_evaluation_id
                  },
                  set: { pdf: {
                    filename: response.Key,
                    location: response.Location
                  } }
                }
                await this.$apollo.mutate({ mutation, variables })

                // CD (JE on 20210515): show toast notifaction
                this.notification = {
                  show: true,
                  title: "Sent!",
                  content: "Your form has been submitted and you should receive an email confirmation shortly"
                };

                if(this.attached) {
                  console.log("returning")
                  this.$emit('saveCse', {...this.form, id: cost_savings_evaluation_id, pdf: {filename: response.Key, location: response.Location}})
                  return
                }

                // CD (JE on 20210520): wait for 800 ms before redirect to another page on success
                setTimeout(() => {
                  this.$router.push(
                    "/support/cost-savings-evaluation-results/" + cost_savings_evaluation_id
                  );
                }, 500);
          }
        }
      } catch (error) {
        // CD (JE on 20210515): show toast notifaction when something error happen
        this.notification = {
          show: true,
          title: "Error",
          content: error.message || "Internal Server Error"
        };
      }
    },
    // CD (JE on 20210515): on back/next button click handler
    toggle() {
      this.wizard.toggle = true;
    },
    confirmModal() {
      this.modal = false;

      // CD (JE on 20210515): reset form and guest user
      this.user = {
        _id: '',
        firstName: "",
        lastName: "",
        email: "",
      }

      // CD (JE on 20210515): reset form
      this.form = {
        primaryMarket: "",
        testDescription: "",
        nskAmericaRepresentative: "",
        companyName: "",
        supportingDistributor: "",
        distributorSalesperson: "",
        partNameNumber: "",
        machine: "",
        material: "",
        hardness: "",
        surfCond: "",
        currentProcess: {
          toolingDescription: {
            manufacturer: "",
            spindleType: "",
            cuttingToolDiameterType: "",
            coating: ""
          },
          operatingParameters: {
            lengthOfCut: "",
            spindleSpeed: "",
            feed: "",
            inCutTime: "",
            partsPerTool: "",
            totalPiecesPerNewTool: "",
            piecesForEachRegrind: ""
          },
          machineBurden: {
            machineBurdenRate: "",
            machineCostPerWorkpiece: ""
          },
          machineCostAnalysis: {
            cuttingToolCost: "",
            numberReconditioningPerTool: "",
            regrindCostPerTool: "",
            costPerPieceOnRegrind: "",
            numberOfToolsPerHolder: "",
            costOfUsePerTool: "",
            toolChangeTime: "",
            toolChangeCost: "",
            toolingCostPerUse: "",
            estimatedToolConsumption: "",
            toolingCostPerPiece: ""
          },
          grandTotalMachiningCostPerPiece: ""
        },
        nsk: {
          toolingDescription: {
            manufacturer: "",
            spindleType: "",
            cuttingToolDiameterType: "",
            coating: ""
          },
          operatingParameters: {
            lengthOfCut: "",
            spindleSpeed: "",
            feed: "",
            inCutTime: "",
            partsPerTool: "",
            totalPiecesPerNewTool: "",
            piecesForEachRegrind: ""
          },
          machineBurden: {
            machineBurdenRate: "",
            machineCostPerWorkpiece: ""
          },
          machineCostAnalysis: {
            spindleInvestmentCost: "",
            cuttingToolCost: "",
            numberReconditioningPerTool: "",
            regrindCostPerTool: "",
            costPerPieceOnRegrind: "",
            numberOfToolsPerHolder: "",
            costOfUsePerTool: "",
            toolChangeTime: "",
            toolChangeCost: "",
            toolingCostPerUse: "",
            estimatedToolConsumption: "",
            toolingCostPerPiece: ""
          },
          grandTotalMachiningCostPerPiece: ""
        },
        savingsPerPart: "",
        averageNumberPartsRunPerYear: "",
        capitalInvestmentPerPieceCost: "",
        potentialSavingsPerYearDuringCapitalPayback: "",
        potentialSavingsPerYearAfterCapitalPayback: "",
        potentialToolingSavingsPerYear: "",
        potentialMachineCapacityGained: "",
        approximateTimeForCapitalPayback: "",
        updatedAt: new Date(),
        createdAt: new Date(),
        status: "Pending"
      };

            // CD (JE on 20210515): reset form and back to first step
      this.wizard.step = 1;
    },
    async saveUser() {
      try {
        // check if user exist
        const response = await this.$apollo.query({ query: FETCH_ONE_USER, variables: {
          query: { email: this.user.email, role: 'guest' }
        } })

        if(response.data.user) {
          console.log('User exist')
          // update user with updated firstName and lastName
          const { user: savedUser } = response.data
          const { data: { updateOneUser: updatedUser } } = await this.$apollo.mutate({mutation: UPDATE_ONE_USER, variables: {
            query: { _id: savedUser._id },
            set: { firstName: this.user.firstName, lastName: this.user.lastName, updatedAt: new Date() }
          }})
          this.user = updatedUser
        } else {
          console.log('New user')
          // otherwise create new user
          const { _id, ...user } = this.user
          const { data: { insertOneUser: insertedUser } } = await this.$apollo.mutate({mutation: INSERT_ONE_USER_AS_GUEST, variables: {
            data: { ...user, role: 'guest', createdAt: new Date(), updatedAt: new Date() }
          }})
          this.user = insertedUser
        }
        // CD (JE on 20210526): move to form 2
        this.wizard.step = 2
      } catch(err) {
        this.notification = {
          show: true,
          title: 'Error',
          content: err.message || 'Error while saving user'
        }
      }
    }
  }
};
</script>

