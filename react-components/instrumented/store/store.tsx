function cov_e7vyf152w() {
  var path = "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\store\\store.tsx";
  var hash = "7dce3435adfb4e724ebcd038de3d51843b21983f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\store\\store.tsx",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 21
        },
        end: {
          line: 15,
          column: 2
        }
      },
      "1": {
        start: {
          line: 14,
          column: 40
        },
        end: {
          line: 14,
          column: 89
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 14
          },
          end: {
            line: 14,
            column: 15
          }
        },
        loc: {
          start: {
            line: 14,
            column: 40
          },
          end: {
            line: 14,
            column: 89
          }
        },
        line: 14
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7dce3435adfb4e724ebcd038de3d51843b21983f"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_e7vyf152w = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_e7vyf152w();
import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../slices/formCardSlice';
import { rickApi } from '../slices/apiSlice';
import searchTextReducer from '../slices/searchTextSlice';
import searchResultsReducer from '../slices/searchResultsSlice';
export const store = (cov_e7vyf152w().s[0]++, configureStore({
  reducer: {
    formCards: formReducer,
    searchText: searchTextReducer,
    searchResults: searchResultsReducer,
    [rickApi.reducerPath]: rickApi.reducer
  },
  middleware: getDefaultMiddleware => {
    cov_e7vyf152w().f[0]++;
    cov_e7vyf152w().s[1]++;
    return getDefaultMiddleware().concat(rickApi.middleware);
  }
}));
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfZTd2eWYxNTJ3IiwiYWN0dWFsQ292ZXJhZ2UiLCJjb25maWd1cmVTdG9yZSIsImZvcm1SZWR1Y2VyIiwicmlja0FwaSIsInNlYXJjaFRleHRSZWR1Y2VyIiwic2VhcmNoUmVzdWx0c1JlZHVjZXIiLCJzdG9yZSIsInMiLCJyZWR1Y2VyIiwiZm9ybUNhcmRzIiwic2VhcmNoVGV4dCIsInNlYXJjaFJlc3VsdHMiLCJyZWR1Y2VyUGF0aCIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsImYiLCJjb25jYXQiLCJSb290U3RhdGUiLCJSZXR1cm5UeXBlIiwiZ2V0U3RhdGUiLCJBcHBEaXNwYXRjaCIsImRpc3BhdGNoIl0sInNvdXJjZXMiOlsic3RvcmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCBmb3JtUmVkdWNlciBmcm9tICcuLi9zbGljZXMvZm9ybUNhcmRTbGljZSc7XHJcbmltcG9ydCB7IHJpY2tBcGkgfSBmcm9tICcuLi9zbGljZXMvYXBpU2xpY2UnO1xyXG5pbXBvcnQgc2VhcmNoVGV4dFJlZHVjZXIgZnJvbSAnLi4vc2xpY2VzL3NlYXJjaFRleHRTbGljZSc7XHJcbmltcG9ydCBzZWFyY2hSZXN1bHRzUmVkdWNlciBmcm9tICcuLi9zbGljZXMvc2VhcmNoUmVzdWx0c1NsaWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiB7XHJcbiAgICBmb3JtQ2FyZHM6IGZvcm1SZWR1Y2VyLFxyXG4gICAgc2VhcmNoVGV4dDogc2VhcmNoVGV4dFJlZHVjZXIsXHJcbiAgICBzZWFyY2hSZXN1bHRzOiBzZWFyY2hSZXN1bHRzUmVkdWNlcixcclxuICAgIFtyaWNrQXBpLnJlZHVjZXJQYXRoXTogcmlja0FwaS5yZWR1Y2VyLFxyXG4gIH0sXHJcbiAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PiBnZXREZWZhdWx0TWlkZGxld2FyZSgpLmNvbmNhdChyaWNrQXBpLm1pZGRsZXdhcmUpLFxyXG59KTtcclxuXHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPjtcclxuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2g7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGFBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGFBQUE7QUFmWixTQUFTRSxjQUFjLFFBQVEsa0JBQWtCO0FBQ2pELE9BQU9DLFdBQVcsTUFBTSx5QkFBeUI7QUFDakQsU0FBU0MsT0FBTyxRQUFRLG9CQUFvQjtBQUM1QyxPQUFPQyxpQkFBaUIsTUFBTSwyQkFBMkI7QUFDekQsT0FBT0Msb0JBQW9CLE1BQU0sOEJBQThCO0FBRS9ELE9BQU8sTUFBTUMsS0FBSyxJQUFBUCxhQUFBLEdBQUFRLENBQUEsT0FBR04sY0FBYyxDQUFDO0VBQ2xDTyxPQUFPLEVBQUU7SUFDUEMsU0FBUyxFQUFFUCxXQUFXO0lBQ3RCUSxVQUFVLEVBQUVOLGlCQUFpQjtJQUM3Qk8sYUFBYSxFQUFFTixvQkFBb0I7SUFDbkMsQ0FBQ0YsT0FBTyxDQUFDUyxXQUFXLEdBQUdULE9BQU8sQ0FBQ0s7RUFDakMsQ0FBQztFQUNESyxVQUFVLEVBQUdDLG9CQUFvQixJQUFLO0lBQUFmLGFBQUEsR0FBQWdCLENBQUE7SUFBQWhCLGFBQUEsR0FBQVEsQ0FBQTtJQUFBLE9BQUFPLG9CQUFvQixFQUFFLENBQUNFLE1BQU0sQ0FBQ2IsT0FBTyxDQUFDVSxVQUFVLENBQUM7RUFBRDtBQUN4RixDQUFDLENBQUM7QUFFRixPQUFPLEtBQUtJLFNBQVMsR0FBR0MsVUFBVSxDQUFDLE9BQU9aLEtBQUssQ0FBQ2EsUUFBUSxDQUFDO0FBQ3pELE9BQU8sS0FBS0MsV0FBVyxHQUFHLE9BQU9kLEtBQUssQ0FBQ2UsUUFBUSJ9