import gql from "graphql-tag";

export const INSERT_ONE_COST_SAVINGS_EVALUATION = gql`
  mutation($data: Cost_savings_evaluationInsertInput!) {
    insertOneCost_savings_evaluation(data: $data) {
      _id
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

export const FETCH_ONE_COST_SAVINGS_EVALUATION = gql`
  query($query: Cost_savings_evaluationQueryInput) {
    cost_savings_evaluation(query: $query) {
      _id
      label
      primaryMarket
      createdAt
      demonstrationRequest
      updatedAt
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

export const INSERT_ONE_USER_AS_GUEST = gql`
  mutation($data: UserInsertInput!) {
    insertOneUser(data: $data) {
      _id
      firstName
      lastName
      email
    }
  }
`

export const FETCH_ONE_USER = gql`
  query($query: UserQueryInput!) {
    user(query: $query) {
      _id
      firstName
      lastName
      email
    }
  }
`

export const FETCH_ALL_USER = gql`
  query {
    users(limit: 10000) {
      _id
      firstName
      lastName
      email
    }
  }
`

export const UPDATE_ONE_USER = gql`
  mutation(
    $query: UserQueryInput,
    $set: UserUpdateInput!
  ) {
    updateOneUser(query: $query, set: $set) {
      _id
      firstName
      lastName
      email
    }
  }
`
