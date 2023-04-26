function cov_2keqzrqklc() {
  var path = "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\slices\\formCardSlice.tsx";
  var hash = "d88a6c7f6208baeb18af3f97c063dbf477780e2d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\slices\\formCardSlice.tsx",
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
          column: 29
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
          column: 61
        }
      },
      "3": {
        start: {
          line: 23,
          column: 31
        },
        end: {
          line: 23,
          column: 52
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 17,
            column: 17
          },
          end: {
            line: 17,
            column: 18
          }
        },
        loc: {
          start: {
            line: 17,
            column: 66
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
    hash: "d88a6c7f6208baeb18af3f97c063dbf477780e2d"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2keqzrqklc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2keqzrqklc();
import { FormCardProps } from '../types/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export interface FormCardsState {
  formCards: FormCardProps[];
}
const initialState: FormCardsState = (cov_2keqzrqklc().s[0]++, {
  formCards: []
});
export const formCardSlice = (cov_2keqzrqklc().s[1]++, createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormCard: (state, action: PayloadAction<FormCardProps>) => {
      cov_2keqzrqklc().f[0]++;
      cov_2keqzrqklc().s[2]++;
      state.formCards = [...state.formCards, action.payload];
    }
  }
}));
export const {
  addFormCard
} = (cov_2keqzrqklc().s[3]++, formCardSlice.actions);
export default formCardSlice.reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmtlcXpycWtsYyIsImFjdHVhbENvdmVyYWdlIiwiRm9ybUNhcmRQcm9wcyIsImNyZWF0ZVNsaWNlIiwiUGF5bG9hZEFjdGlvbiIsIkZvcm1DYXJkc1N0YXRlIiwiZm9ybUNhcmRzIiwiaW5pdGlhbFN0YXRlIiwicyIsImZvcm1DYXJkU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRGb3JtQ2FyZCIsInN0YXRlIiwiYWN0aW9uIiwiZiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VzIjpbImZvcm1DYXJkU2xpY2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1DYXJkUHJvcHMgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB0eXBlIHsgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb3JtQ2FyZHNTdGF0ZSB7XHJcbiAgZm9ybUNhcmRzOiBGb3JtQ2FyZFByb3BzW107XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogRm9ybUNhcmRzU3RhdGUgPSB7XHJcbiAgZm9ybUNhcmRzOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtQ2FyZFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdmb3JtJyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGFkZEZvcm1DYXJkOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxGb3JtQ2FyZFByb3BzPikgPT4ge1xyXG4gICAgICBzdGF0ZS5mb3JtQ2FyZHMgPSBbLi4uc3RhdGUuZm9ybUNhcmRzLCBhY3Rpb24ucGF5bG9hZF07XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgYWRkRm9ybUNhcmQgfSA9IGZvcm1DYXJkU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgZm9ybUNhcmRTbGljZS5yZWR1Y2VyO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQWZaLFNBQVNFLGFBQWEsUUFBUSxnQkFBZ0I7QUFDOUMsU0FBU0MsV0FBVyxRQUFRLGtCQUFrQjtBQUM5QyxjQUFjQyxhQUFhLFFBQVEsa0JBQWtCO0FBRXJELE9BQU8sVUFBVUMsY0FBYyxDQUFDO0VBQzlCQyxTQUFTLEVBQUVKLGFBQWEsRUFBRTtBQUM1QjtBQUVBLE1BQU1LLFlBQVksRUFBRUYsY0FBYyxJQUFBTCxjQUFBLEdBQUFRLENBQUEsT0FBRztFQUNuQ0YsU0FBUyxFQUFFO0FBQ2IsQ0FBQztBQUVELE9BQU8sTUFBTUcsYUFBYSxJQUFBVCxjQUFBLEdBQUFRLENBQUEsT0FBR0wsV0FBVyxDQUFDO0VBQ3ZDTyxJQUFJLEVBQUUsTUFBTTtFQUNaSCxZQUFZO0VBQ1pJLFFBQVEsRUFBRTtJQUNSQyxXQUFXLEVBQUVBLENBQUNDLEtBQUssRUFBRUMsTUFBTSxFQUFFVixhQUFhLENBQUNGLGFBQWEsQ0FBQyxLQUFLO01BQUFGLGNBQUEsR0FBQWUsQ0FBQTtNQUFBZixjQUFBLEdBQUFRLENBQUE7TUFDNURLLEtBQUssQ0FBQ1AsU0FBUyxHQUFHLENBQUMsR0FBR08sS0FBSyxDQUFDUCxTQUFTLEVBQUVRLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDO0lBQ3hEO0VBQ0Y7QUFDRixDQUFDLENBQUM7QUFFRixPQUFPLE1BQU07RUFBRUo7QUFBWSxDQUFDLElBQUFaLGNBQUEsR0FBQVEsQ0FBQSxPQUFHQyxhQUFhLENBQUNRLE9BQU87QUFDcEQsZUFBZVIsYUFBYSxDQUFDUyxPQUFPIn0=