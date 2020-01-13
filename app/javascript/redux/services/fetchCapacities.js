import {
  fetchDataBegin,
  fetchDataSuccess,
  fetchDataError
} from "../actions/RoundsActions";
import flowRate from "../../components/utils/Bottleneck/FlowRate";
import defineInitialRange from "../../components/utils/Bottleneck/defineInitialRange";
import expectedCapacities from "../../components/utils/Bottleneck/ExpectedCapacities";

const URL_RANGE_LIST = `${process.env.APP_URL}/api/variable-ranges`;

function fetchCapacities() {
  return dispatch => {
    dispatch(fetchDataBegin());
    fetch(URL_RANGE_LIST)
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          throw response.error;
        }

        const editedResponse = defineInitialRange(response.data);
        const { Demand, DemandReduced, ...capacitiesStation } = editedResponse;
        const initialFlowRate = flowRate(Demand, capacitiesStation);
        const expectedMachinesAssigned = expectedCapacities(
          Demand,
          capacitiesStation
        );

        return dispatch(
          fetchDataSuccess(
            editedResponse,
            initialFlowRate,
            expectedMachinesAssigned
          )
        );
      })
      .catch(error => {
        dispatch(fetchDataError(error));
      });
  };
}

export default fetchCapacities;
