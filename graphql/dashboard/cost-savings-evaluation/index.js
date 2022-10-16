import gql from "graphql-tag";

export const FETCH_COST_SAVINGS_EVALUATIONS = gql`
  query($query: Cost_savings_evaluationQueryInput) {
    cost_savings_evaluations(query: $query) {
      _id
      label
      primaryMarket
      demonstrationRequest
      createdAt
      updatedAt
      updatedBy
      status
      savingsPerPart
      averageNumberPartsRunPerYear
      capitalInvestmentPerPieceCost
      potentialSavingsPerYearDuringCapitalPayback
      potentialSavingsPerYearAfterCapitalPayback
      potentialToolingSavingsPerYear
      potentialMachineCapacityGained
      approximateTimeForCapitalPayback
      testDescription
      nskAmericaRepresentative
      companyName
      preparedFor
      owner {
        firstName
        lastName
        email
      }
      supportingDistributor
      distributorSalesperson
      createdAt
      partNameNumber
      machine
      material
      hardness
      surfCond
      pdf {
        location
        filename
      }
      nsk {
        toolingDescription {
          manufacturer
          spindleType
          cuttingToolDiameterType
          coating
        }
        operatingParameters {
          lengthOfCut
          spindleSpeed
          feed
          inCutTime
          partsPerTool
          totalPiecesPerNewTool
          piecesForEachRegrind
        }
        machineBurden {
          machineBurdenRate
          machineCostPerWorkpiece
        }
        machineCostAnalysis {
          spindleInvestmentCost
          cuttingToolCost
          numberReconditioningPerTool
          regrindCostPerTool
          costPerPieceOnRegrind
          numberOfToolsPerHolder
          costOfUsePerTool
          toolChangeTime
          toolChangeCost
          toolingCostPerUse
          estimatedToolConsumption
          toolingCostPerPiece
        }
        grandTotalMachiningCostPerPiece
      }
      currentProcess {
        toolingDescription {
          manufacturer
          spindleType
          cuttingToolDiameterType
          coating
        }
        operatingParameters {
          lengthOfCut
          spindleSpeed
          feed
          inCutTime
          partsPerTool
          totalPiecesPerNewTool
          piecesForEachRegrind
        }
        machineBurden {
          machineBurdenRate
          machineCostPerWorkpiece
        }
        machineCostAnalysis {
          cuttingToolCost
          numberReconditioningPerTool
          regrindCostPerTool
          costPerPieceOnRegrind
          numberOfToolsPerHolder
          costOfUsePerTool
          toolChangeTime
          toolChangeCost
          toolingCostPerUse
          estimatedToolConsumption
          toolingCostPerPiece
        }
        grandTotalMachiningCostPerPiece
      }
    }
  }
`;

export const FETCH_COST_SAVINGS_EVALUATIONS_MIN = gql`
  query($query: Cost_savings_evaluationQueryInput) {
    cost_savings_evaluations(query: $query) {
      _id
      label
      owner {
        email
      }
    }
  }
`;

export const DELETE_ONE_COST_SAVINGS_EVALUATION = gql`
  mutation($query: Cost_savings_evaluationQueryInput!) {
    deleteOneCost_savings_evaluation(query: $query) {
      _id
    }
  }
`;

export const UPDATE_ONE_COST_SAVINGS_EVALUATION = gql`
  mutation(
    $query: Cost_savings_evaluationQueryInput
    $set: Cost_savings_evaluationUpdateInput!
  ) {
    updateOneCost_savings_evaluation(query: $query, set: $set) {
      status
      updatedAt
      updatedBy
      currentProcess {
        toolingDescription {
          manufacturer
          spindleType
          cuttingToolDiameterType
          coating
        }
        operatingParameters {
          lengthOfCut
          spindleSpeed
          feed
          inCutTime
          partsPerTool
          totalPiecesPerNewTool
          piecesForEachRegrind
        }
        machineBurden {
          machineBurdenRate
          machineCostPerWorkpiece
          
        }
        machineCostAnalysis {
          
          cuttingToolCost
          numberReconditioningPerTool
          regrindCostPerTool
          costPerPieceOnRegrind
          numberOfToolsPerHolder
          costOfUsePerTool
          toolChangeTime
          toolChangeCost
          toolingCostPerUse
          estimatedToolConsumption
          toolingCostPerPiece
        }
        grandTotalMachiningCostPerPiece
      }
      nsk {
        toolingDescription {
          manufacturer
          spindleType
          cuttingToolDiameterType
          coating
        }
        operatingParameters {
          lengthOfCut
          spindleSpeed
          feed
          inCutTime
          partsPerTool
          totalPiecesPerNewTool
          piecesForEachRegrind
        }
        machineBurden {
          machineBurdenRate
          machineCostPerWorkpiece
        }
        machineCostAnalysis {
          spindleInvestmentCost
          cuttingToolCost
          numberReconditioningPerTool
          regrindCostPerTool
          costPerPieceOnRegrind
          numberOfToolsPerHolder
          costOfUsePerTool
          toolChangeTime
          toolChangeCost
          toolingCostPerUse
          estimatedToolConsumption
          toolingCostPerPiece
        }
        grandTotalMachiningCostPerPiece
      }
    }
  }
`;


export const FETCH_FORM_NOTIFICATION = gql`
  query($query: Form_notificationQueryInput) {
    form_notification(query: $query) {
      name
      toNsk {
        bcc {
          text
        }
        cc {
          text
        }
        emailContent {
          body
          subject
        }
        to
        from
      }
    }
  }
`;

