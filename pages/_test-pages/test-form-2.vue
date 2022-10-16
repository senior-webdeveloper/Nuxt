// FormCostSavingsEvaluation2

<template>
  <div>


    <div class="mb-10">
      <div class="relative p-4 text-center md:w-3/4 md:mx-auto sm:px-6 sm:py-8">
        <h1>Cost Savings Evaluation Worksheet</h1>
      </div>
      <div class="relative py-4 bg-blueGray-100 lg:w-3/4 md:mx-auto sm:p-6">
        <div class="container mx-auto sm:px-4">
          <!-- <UiAppForm :formInput="formInput"  /> -->

          <div>
           
            <form  class="mt-10">
              <div>
               

                <div class="hidden sm:block" aria-hidden="true">
                  <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                  </div>
                </div>
                <h5>CURRENT PROCESS VS NSK</h5>
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
                          <div class="grid grid-cols-6 gap-6">
                            <div class="grid col-span-6 gap-6 md:col-span-3">
                              <h6 class="uppercase">CURRENT PROCESS</h6>
                              <UiAppFormField
                     
                                type="text"
                                label="SPINDLE TYPE (MACHINE TOOL OR CURRENT SPINDLE WITH MAX SPEED) *"
                                :required="true"
                              />
                              <UiAppFormField 
                      
                                type="text"
                                label="CUTTING TOOL BRAND"
                                :required="true"
                              />
                              <UiAppFormField
                     
                                type="text"
                                label="CUTTING TOOL DIAMETER AND TYPE (EX: .008 Drill)"
                                :required="true"
                              />

                              <UiAppFormField
                       
                                type="text"
                                label="COATING (IF ANY)"
                              />
                            </div>
                            <div class="grid col-span-6 gap-6 border-l-2 md:col-span-3">
                            <div class="px-2">
                              <h6 class="uppercase">FUTURE PROCESS</h6>
                              <UiAppFormField
                    
                                type="text"
                                label="NSK SPINDLE MODEL OR PART NUMBER *"
                                :required="true"
                              />
                              <UiAppFormField
                       
                                type="text"
                                label="CUTTING TOOL BRAND"
                                :required="true"
                              />
                              <UiAppFormField
                  
                                type="text"
                                label="CUTTING TOOL DIAMETER AND TYPE (EX: .008 Drill)"
                                :required="true"
                              />
                              <UiAppFormField
                         
                                type="text"
                                label="COATING (IF ANY)"
                              />
                            </div>
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
                        <h3>OPERATING PARAMETERS</h3>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="grid col-span-6 gap-6 md:col-span-3">
                              <h6 class="uppercase">current process</h6>
                              <UiAppFormFieldExtended
                           
                                type="text"
                                label="LENGTH OF CUT (INCHES)"
                                :required="true"
                              >
                                <template v-slot:left-symbol>
                                <div class="anything"></div>
                                  </template>
                                  <template v-slot:right-symbol>
                                    INCH
                                  </template>
                              </UiAppFormFieldExtended>

                              <UiAppFormFieldExtended
                       
                                type="number"
                                label="SPINDLE SPEED (RPM)"
                                :required="true"
                              >
                                <template v-slot:left-symbol>
                                <div class="anything"></div>
                                  </template>
                                  <template v-slot:right-symbol>
                                    RPM
                                  </template>
                              </UiAppFormFieldExtended>

                              <UiAppFormFieldExtended
               
                                type="text"
                                label="FEED (IPR)"
                                :required="true"
                              >
                                <template v-slot:left-symbol>
                                <div class="anything"></div>
                                  </template>
                                  <template v-slot:right-symbol>
                                    IPR
                                  </template>
                              </UiAppFormFieldExtended>

                              <UiAppFormField
                    
                                type="text"
                                label="PARTS PER TOOL"
                                :required="true"
                              />

                              <UiAppFormField
                         
                                type="text"
                                label="PIECES FOR EACH REGRIND  (IF APPLICABLE)"
                                :required="true"
                              />
                            </div>
                            <div class="grid col-span-6 gap-6 md:col-span-3">
                              <h6 class="uppercase">nsk</h6>
                              <UiAppFormFieldExtended
              
                                type="text"
                                label="LENGTH OF CUT (INCHES)"
                                :required="true"
                              >
                                <template v-slot:left-symbol>
                                <div class="anything"></div>
                                  </template>
                                  <template v-slot:right-symbol>
                                    INCH
                                  </template>
                              </UiAppFormFieldExtended>

                              <UiAppFormFieldExtended
                       
                                type="text"
                                label="SPINDLE SPEED (RPM)"
                                :required="true"
                              >
                                <template v-slot:left-symbol>
                                <div class="anything"></div>
                                  </template>
                                  <template v-slot:right-symbol>
                                    RPM
                                  </template>
                              </UiAppFormFieldExtended>

                              <UiAppFormFieldExtended
                        
                                type="text"
                                label="FEED (IPR)"
                                :required="true"
                              >
                                <template v-slot:left-symbol>
                                <div class="anything"></div>
                                  </template>
                                  <template v-slot:right-symbol>
                                    IPR
                                  </template>
                              </UiAppFormFieldExtended>

                              <UiAppFormField
                            
                                type="text"
                                label="PARTS PER TOOL"
                                :required="true"
                              />

                              <UiAppFormField
                     
                                type="text"
                                label="PIECES FOR EACH REGRIND (IF APPLICABLE)"
                                :required="true"
                              />
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
                              <UiAppFormFieldExtended
                          
                                type="text"
                                label="MACHINE BURDEN RATE ($ PER HOUR)"
                                :required="true"
                              >
                              </UiAppFormFIeldExtended>
                            </div>
                            <div class="grid col-span-6 gap-6 md:col-span-3">
                              <h6 class="uppercase">nsk</h6>
                              <UiAppFormFieldExtended
                            
                                type="text"
                                label="MACHINE BURDEN RATE ($ PER HOUR)"
                                :required="true"
                              >
                              </UiAppFormFIeldExtended>
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
                          <div class="grid grid-cols-6 gap-6">
                            <div class="grid col-span-6 gap-6 md:col-span-3 md:mt-2">
                              <h6 class="uppercase">current process</h6>
                              <UiAppFormFieldExtended class="mt-20"
                        
                                type="text"
                                label="COST OF CUTTING TOOL"
                                :required="true"
                              >
                              </UiAppFormFIeldExtended>
                              <UiAppFormField
                          
                                type="text"
                                label="NUMBER OF RECONDITIONINGS PER TOOL"
                                :required="true"
                              />
                              <UiAppFormFieldExtended
                        
                                type="text"
                                label="REGRIND COST PER TOOL"
                              >
                              </UiAppFormFIeldExtended>
                              <UiAppFormField
                        
                                type="text"
                                label="NUMBER OF TOOLS PER HOLDER"
                                :required="true"
                              />
                              <UiAppFormFieldExtended
                                
                                type="text"
                                label="TOOL CHANGE TIME (MINUTES)"
                                :required="true"
                              >
                                <template v-slot:left-symbol>
                                <div class="anything"></div>
                                  </template>
                                  <template v-slot:right-symbol>
                                    MINS
                                  </template>
                              </UiAppFormFieldExtended>
                            </div>

                            <div class="grid col-span-6 gap-6 md:col-span-3">
                              <h6 class="uppercase">nsk</h6>
                              <UiAppFormFieldExtended
                    
                                type="text"
                                label="COST OF SPINDLE INVESTMENT"
                                :required="true"
                              >
                              </UiAppFormFIeldExtended>
                              <UiAppFormFieldExtended
                           
                                type="text"
                                label="COST OF CUTTING TOOL"
                                :required="true"
                              >
                              </UiAppFormFIeldExtended>
                              <UiAppFormField
                           
                                type="text"
                                label="NUMBER OF RECONDITIONINGS PER TOOL"
                                :required="true"
                              />
                              <UiAppFormFieldExtended
                  
                                type="text"
                                label="REGRIND COST PER TOOL"
                              >
                              </UiAppFormFIeldExtended>
                              <UiAppFormField
                          
                                type="text"
                                label="NUMBER OF TOOLS PER HOLDER"
                                :required="true"
                              />
                              <UiAppFormFieldExtended
                      
                                type="text"
                                label="TOOL CHANGE TIME (MINUTES)"
                                :required="true"
                              >
                                <template v-slot:left-symbol>
                                <div class="anything"></div>
                                  </template>
                                  <template v-slot:right-symbol>
                                    MINS
                                  </template>
                              </UiAppFormFieldExtended>
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
                        <h3></h3>
                      </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <div class="overflow-hidden shadow">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6">
                              <UiAppFormField
                        
                                type="text"
                                label="AVERAGE NUMBER PARTS RUN PER YEAR"
                                :required="true"
                              />
                            </div>
                            <div class="col-span-6">
                              <div class="relative flex items-center">
                                <input
                                  type="checkbox"
                                  id="isRequestingDemo"
                                  name="isRequestingDemo"
                                  class="checkbox"
                      
                                />
                                <label for="isRequestingDemo" class="block ml-3 text-sm font-medium text-blueGray-700">I'd like to request a demonstration
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                          <UiAppFormSubmit
                            className="primary"
                            label="Submit"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p class="mt-4">Tool life tripled with speed increase.  Burr being produced at 8.000 RPM was eliminated, saving ABC a hand deburring operation on 5,000,000 parts per year.</p>
                </div>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


