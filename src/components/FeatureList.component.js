import React, { useReducer, useEffect } from "react";

import { getFeaturesList } from "../services/data.service";
import { ColumnHeading, SingleFeature } from ".";
import SortParams from "../consts/sort-params.const.json";

const ACTIONS = {
  FETCH_DATA: "fetch-data",
  RESET_SORT_DIRECTION: "reset-sort-direction",
  REVERSE_SORT_DIRECTION: "reverse-sort-direction",
  SET_SORT_PARAM: "set-sort-param",
  SORT_FEATURES: "sort-features"
};

const initialState = {
  features: [],
  sortAsc: false,
  sortParam: null
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FETCH_DATA: {
      return {
        ...state,
        features: action.payload.features
      };
    }
    case ACTIONS.RESET_SORT_DIRECTION: {
      return {
        ...state,
        sortAsc: true
      };
    }
    case ACTIONS.REVERSE_SORT_DIRECTION: {
      return {
        ...state,
        sortAsc: !state.sortAsc
      };
    }
    case ACTIONS.SET_SORT_PARAM: {
      return {
        ...state,
        sortParam: action.payload.sortParam
      };
    }
    case ACTIONS.SORT_FEATURES: {
      const { features, sortAsc, sortParam } = state;

      return {
        ...state,
        features: [
          ...features.sort((a, b) => {
            if (a.properties[sortParam] < b.properties[sortParam])
              return sortAsc === true ? -1 : 1;
            if (a.properties[sortParam] > b.properties[sortParam])
              return sortAsc === true ? 1 : -1;
            return 0;
          })
        ]
      };
    }
  }
}

function FeatureList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { sortAsc, sortParam, features } = state;

  useEffect(async () => {
    const features = await getFeaturesList();
    dispatch({ type: ACTIONS.FETCH_DATA, payload: { features } });
  }, []);

  function handleSortClick(param) {
    const { sortParam } = state;

    if (sortParam === param) {
      dispatch({ type: ACTIONS.REVERSE_SORT_DIRECTION });
    } else {
      dispatch({ type: ACTIONS.RESET_SORT_DIRECTION });
      dispatch({ type: ACTIONS.SET_SORT_PARAM, payload: { sortParam: param } });
    }

    dispatch({ type: ACTIONS.SORT_FEATURES });
  }

  return (
    <table className="features-list">
      <thead>
        <tr>
          <th
            className="feature-list-title"
            onClick={() => handleSortClick(SortParams.TITLE)}
          >
            <ColumnHeading
              label="Title"
              isUsedForSorting={sortParam === SortParams.TITLE}
              isSortAscending={sortAsc}
            />
          </th>
          <th
            className="feature-list-magnitude"
            onClick={() => handleSortClick(SortParams.MAGNITUDE)}
          >
            <ColumnHeading
              label="Magnitude"
              isUsedForSorting={sortParam === SortParams.MAGNITUDE}
              isSortAscending={sortAsc}
            />
          </th>
          <th
            className="feature-list-time"
            onClick={() => handleSortClick(SortParams.TIME)}
          >
            <ColumnHeading
              label="Time"
              isUsedForSorting={sortParam === SortParams.TIME}
              isSortAscending={sortAsc}
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {features.length > 0 &&
          features.map((feature) => <SingleFeature key={feature.id} feature={feature} />)}
      </tbody>
    </table>
  );
}

export default FeatureList;
