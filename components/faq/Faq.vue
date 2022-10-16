<template>

  <div>
    <h1>
          Frequently asked questions
    </h1>
    <div>
      <UiAppTabs
        v-model="selected"
        :tabs="[ 'General Questions', 'Air Line Kit Questions', 'Collets Questions', 'Electric Systems Questions' ]"
        :withViewOption="false"
        @changeViewOption="changeViewOption"
      >
        <!-- {{ viewOption }}
        <h1>{{ selected }}</h1> -->
        <div v-if="selected == 0">
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                What is the difference between an NSK High Speed Spindle and a Spindle Speeder? 
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
                An NSK High Speed Spindle is an integrated motor/spindle that does not use machine spindle rotation. Spindle Speeders are driven by the machine spindle with gears to increase or decrease tool rpm.
              </p>
            </template>
          </UiAppAccordion>
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                What is the advantage of an integral motor/spindle?
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
                NSK High Speed Spindles have no gears. Gears generate heat, vibration and thermal growth which are all deterrents of high speed spindles.
              </p>
            </template>
          </UiAppAccordion>
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                What is the conversion from Watts to Horsepower? 
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
                1 Watt = .00134 Horsepower ex. 350 Watts = .469 H.P
              </p>
            </template>
          </UiAppAccordion>
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                What is the correct procedure to maintain spindle accuracy under normal operating conditions?  
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
                Any time a tool or collet is being replaced, it is recommended to remove the collet and collet cap, then clean them as well as the spindle taper with an alcohol swab to remove any cutting debris. This will help maintain spindle accuracy and improve longevity.
              </p>
            </template>
          </UiAppAccordion>
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                Does NSK America sell directly to our end-users?   
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
                No. All sales are made through NSK’s authorized distributors. An NSK Manufacturers Representative can put you in contact with your local distributor.
              </p>
            </template>
          </UiAppAccordion>
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                How can I obtain a current NSK America product catalog?    
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
                Send your request to info@nskamericacorp.com with your information and we will send you a copy via mail.
              </p>
            </template>
          </UiAppAccordion>
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                What is the procedure to send my machine spindles or hand-tools in for repair?     
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
                It is always best to send your equipment through your local distributor. NSK America service will provide you with a no charge written estimate within 7 days. Repairs will begin as soon as we receive your approval.
              </p>
            </template>
          </UiAppAccordion>
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                Does NSK sell used, demo or refurbished spindles or hand- tools?      
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
                No. All NSK America product sold is new product with full factory warranty.
              </p>
            </template>
          </UiAppAccordion>
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                What is the warranty on an NSK Spindle or Hand-Tool?      
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
                All NSK products are warrantied for 6 months from manufacturer’s defects.
              </p>
            </template>
          </UiAppAccordion>
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                Can I return a purchase?      
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
                <ul class="list-disc list-inside">
                  <li>No return goods can be accepted without prior approval of our office.</li>
                  <li>Within 30 days from date of our shipment.</li>
                  <li>No return will be accepted for factory order products.</li>
                  <li>Product returned must be unused and in new and sellable condition by our sole determination, or the return will be rejected.</li>
                  <li>Returned to us with prepaid shipping cost by the purchaser.</li>
                  <li>Restocking charge of 15% of the invoiced price or $20.00 whichever is greater will be charged.</li>
                </ul>
              </p>
            </template>
          </UiAppAccordion>
          <!-- <div v-if="viewOption == 'grid'">
            if first tab is selected grid
          </div>
          <div v-if="viewOption == 'list'">
            if first tab is selected list
          </div> -->
        </div>

        <div v-if="selected == 1">
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                Why do I need an NSK Air Line Kit?       
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
              NSK Air Line Kits atomize, providing an oil vapor to the spindle and motor, providing lubrication, cooling and purging of the spindle and motor.
              </p>
            </template>
          </UiAppAccordion>
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                Is the type of oil used important to my NSK Air Motor or Air Hand Tool?        
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
              Yes. The viscosity and composition of the Superla 9 Oil is ideal for atomization.
              </p>
            </template>
          </UiAppAccordion>
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                Is the type of oil used important to my NSK Air Motor or Air Hand Tool?        
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
              Although motor speed can be reduced by lowering the air pressure, it is not possible to know what the actual speed is, and power will also be lost exponentially by reducing air pressure.
              </p>
            </template>
          </UiAppAccordion>
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                What are draw backs of using standard drip feed Filter, Regulator, Lubricators?         
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
                The possibility of either too much oil or insufficient oil will cause excess bearing friction and heat, as well as premature motor vane wear.
              </p>
            </template>
          </UiAppAccordion>
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                Why does the RPM of my air motor fluctuate?          
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
                Too much oil will flood the motor and spindle bearings. Once the bearings clear themselves of the oil, the RPM will increase. More oil again will cause the rpm to decrease, causing the RPM to constantly fluctuate.
              </p>
            </template>
          </UiAppAccordion>
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                Is the hose length critical to the performance of my Air Motor?         
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
                The length of the input side of the air hose is not important. But, the exhaust hose length must be kept to the factory provide length in order to correctly provide the removal of back pressure.
              </p>
            </template>
          </UiAppAccordion>
          <div v-if="viewOption == 'grid'">
            if second tab is selected grid
          </div>
          <div v-if="viewOption == 'list'">
            if second tab is selected list
          </div>
        </div>

        <div v-if="selected == 2">
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                What is the maximum clamping range of NSK Collets?        
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
                NSK Collets have a maximum collapse distance of .004” (100um). The tool shank O.D. should never be larger than the collet I.D. Either scenario will cause a lack of collet/spindle accuracy.
              </p>
            </template>
          </UiAppAccordion>
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                What is the difference between a standard NSK Collet and a “AA” Collet?         
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
                Our standard collet accuracy is within 5um TIR. An “AA” Collet has a TIR of within 2um.
              </p>
            </template>
          </UiAppAccordion>
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                What is the collet size range of NSK collets?         
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
                Depending on the style of collet, our collets range from .5mm to 6.35mm in .1mm increments.
              </p>
            </template>
          </UiAppAccordion> 
          <div v-if="viewOption == 'grid'">
            if second tab is selected grid
          </div>
          <div v-if="viewOption == 'list'">
            if second tab is selected list
          </div>
        </div>

        <div v-if="selected == 3">
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                Why does an electric spindle require air?        
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
                A small amount of Dry Air is required to provide cooling and purging for the motor and spindle.
              </p>
            </template>
          </UiAppAccordion>
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                Why should I consider and Electric System over a Pneumatic System?         
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
                The versatility of an Electric System far outweighs that of a Pneumatic System. It is a closed loop system that will put more power to the motor to maintain RPM and torque; it is variable speed to meet the demands of more applications and offers more power and speed. Pneumatic motors are fixed speed, require lubrication and are lower rpm.
              </p>
            </template>
          </UiAppAccordion>
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                Can I run more than one spindle at a time (simultaneously) using a Control Unit and a Selector Unit?         
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
                No. Only one motor can run at any given time. A separate control unit will be required to run a second spindle simultaneously.
              </p>
            </template>
          </UiAppAccordion>
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                Is it safe to run an Electric Motor and Spindle in wet conditions using machining coolants and oils?         
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
                Yes. All NSK motors have an IP-57 Rating. Coolants should however be directed at the cutting tool, not directly on the motor/spindle.
              </p>
            </template>
          </UiAppAccordion>
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                What is the purpose of a Reducer?          
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
                When an application requires a lower RPM than a high speed spindle can supply, and still provide torque and power. A Reducer is used. As an example, a 1:4 Reducer will only provide 25% of the motor speed (maximum motor speed 30,000rpm), but 4 times the torque. This allows the ability to use larger tools at lower speeds.
              </p>
            </template>
          </UiAppAccordion>
          <UiAppAccordion>
            <template v-slot:header>
              <span class="font-medium text-gray-900">
                Can my machine control communicate with the NSK Control Unit.         
              </span>
            </template>
            <template v-slot:content>
              <p class="text-base text-gray-500">
                Yes. The NSK control has a 25 Pin din Connection for many several +24V analog Input and Output functions to communicate with the CNC control.
              </p>
            </template>
          </UiAppAccordion>
          <div v-if="viewOption == 'grid'">
            if second tab is selected grid
          </div>
          <div v-if="viewOption == 'list'">
            if second tab is selected list
          </div>
        </div>
      </UiAppTabs>
    </div>
  </div>
</template>


<script>
export default {
  props: ["options", "products"],
  watch: {
    // whenever question changes, this function will run
    selected: function(newSelected, oldSelected) {
      console.log(this.selected);
    }
  },
  data() {
    return {
      selected: 0,
      tabs: this.options,
      viewOption: "grid",
    };
  },
  methods: {
    redirect(url) {
      this.$router.push({ path: url });
    },
    changeViewOption(value) {
      this.viewOption = value;
    }
  }
};
</script>