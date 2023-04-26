function cov_2qvdcydx3e() {
  var path = "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\slices\\searchResultsSlice.tsx";
  var hash = "b5751f110960021cfd4d6a9dd5f0c2e534779a7d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\slices\\searchResultsSlice.tsx",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 37
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 13,
          column: 34
        },
        end: {
          line: 21,
          column: 2
        }
      },
      "2": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 18,
          column: 43
        }
      },
      "3": {
        start: {
          line: 23,
          column: 39
        },
        end: {
          line: 23,
          column: 65
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 17,
            column: 25
          },
          end: {
            line: 17,
            column: 26
          }
        },
        loc: {
          start: {
            line: 17,
            column: 76
          },
          end: {
            line: 19,
            column: 5
          }
        },
        line: 17
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b5751f110960021cfd4d6a9dd5f0c2e534779a7d"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2qvdcydx3e = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2qvdcydx3e();
import { CharacterInfo } from '../types/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export interface FormCardsState {
  searchResults: CharacterInfo[];
}
const initialState: FormCardsState = (cov_2qvdcydx3e().s[0]++, {
  searchResults: []
});
export const searchResultsSlice = (cov_2qvdcydx3e().s[1]++, createSlice({
  name: 'searchResults',
  initialState,
  reducers: {
    updateSearchResults: (state, action: PayloadAction<CharacterInfo[]>) => {
      cov_2qvdcydx3e().f[0]++;
      cov_2qvdcydx3e().s[2]++;
      state.searchResults = action.payload;
    }
  }
}));
export const {
  updateSearchResults
} = (cov_2qvdcydx3e().s[3]++, searchResultsSlice.actions);
export default searchResultsSlice.reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMnF2ZGN5ZHgzZSIsImFjdHVhbENvdmVyYWdlIiwiQ2hhcmFjdGVySW5mbyIsImNyZWF0ZVNsaWNlIiwiUGF5bG9hZEFjdGlvbiIsIkZvcm1DYXJkc1N0YXRlIiwic2VhcmNoUmVzdWx0cyIsImluaXRpYWxTdGF0ZSIsInMiLCJzZWFyY2hSZXN1bHRzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJ1cGRhdGVTZWFyY2hSZXN1bHRzIiwic3RhdGUiLCJhY3Rpb24iLCJmIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZXMiOlsic2VhcmNoUmVzdWx0c1NsaWNlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFyYWN0ZXJJbmZvIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9ybUNhcmRzU3RhdGUge1xyXG4gIHNlYXJjaFJlc3VsdHM6IENoYXJhY3RlckluZm9bXTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBGb3JtQ2FyZHNTdGF0ZSA9IHtcclxuICBzZWFyY2hSZXN1bHRzOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWFyY2hSZXN1bHRzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ3NlYXJjaFJlc3VsdHMnLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgdXBkYXRlU2VhcmNoUmVzdWx0czogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Q2hhcmFjdGVySW5mb1tdPikgPT4ge1xyXG4gICAgICBzdGF0ZS5zZWFyY2hSZXN1bHRzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgdXBkYXRlU2VhcmNoUmVzdWx0cyB9ID0gc2VhcmNoUmVzdWx0c1NsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHNlYXJjaFJlc3VsdHNTbGljZS5yZWR1Y2VyO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQWZaLFNBQVNFLGFBQWEsUUFBUSxnQkFBZ0I7QUFDOUMsU0FBU0MsV0FBVyxRQUFRLGtCQUFrQjtBQUM5QyxjQUFjQyxhQUFhLFFBQVEsa0JBQWtCO0FBRXJELE9BQU8sVUFBVUMsY0FBYyxDQUFDO0VBQzlCQyxhQUFhLEVBQUVKLGFBQWEsRUFBRTtBQUNoQztBQUVBLE1BQU1LLFlBQVksRUFBRUYsY0FBYyxJQUFBTCxjQUFBLEdBQUFRLENBQUEsT0FBRztFQUNuQ0YsYUFBYSxFQUFFO0FBQ2pCLENBQUM7QUFFRCxPQUFPLE1BQU1HLGtCQUFrQixJQUFBVCxjQUFBLEdBQUFRLENBQUEsT0FBR0wsV0FBVyxDQUFDO0VBQzVDTyxJQUFJLEVBQUUsZUFBZTtFQUNyQkgsWUFBWTtFQUNaSSxRQUFRLEVBQUU7SUFDUkMsbUJBQW1CLEVBQUVBLENBQUNDLEtBQUssRUFBRUMsTUFBTSxFQUFFVixhQUFhLENBQUNGLGFBQWEsRUFBRSxDQUFDLEtBQUs7TUFBQUYsY0FBQSxHQUFBZSxDQUFBO01BQUFmLGNBQUEsR0FBQVEsQ0FBQTtNQUN0RUssS0FBSyxDQUFDUCxhQUFhLEdBQUdRLE1BQU0sQ0FBQ0UsT0FBTztJQUN0QztFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsT0FBTyxNQUFNO0VBQUVKO0FBQW9CLENBQUMsSUFBQVosY0FBQSxHQUFBUSxDQUFBLE9BQUdDLGtCQUFrQixDQUFDUSxPQUFPO0FBQ2pFLGVBQWVSLGtCQUFrQixDQUFDUyxPQUFPIn0=