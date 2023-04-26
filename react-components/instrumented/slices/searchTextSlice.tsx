function cov_qnmnju7hf() {
  var path = "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\slices\\searchTextSlice.tsx";
  var hash = "b7fe85a0727ce5c6035005b1512b5376c78cd819";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\slices\\searchTextSlice.tsx",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 37
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "1": {
        start: {
          line: 12,
          column: 31
        },
        end: {
          line: 20,
          column: 2
        }
      },
      "2": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 40
        }
      },
      "3": {
        start: {
          line: 22,
          column: 36
        },
        end: {
          line: 22,
          column: 59
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 16,
            column: 22
          },
          end: {
            line: 16,
            column: 23
          }
        },
        loc: {
          start: {
            line: 16,
            column: 64
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 16
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
    hash: "b7fe85a0727ce5c6035005b1512b5376c78cd819"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_qnmnju7hf = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_qnmnju7hf();
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export interface SearchBarState {
  inputValue: string;
}
const initialState: SearchBarState = (cov_qnmnju7hf().s[0]++, {
  inputValue: ''
});
export const searchTextSlice = (cov_qnmnju7hf().s[1]++, createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    updateInputValue: (state, action: PayloadAction<string>) => {
      cov_qnmnju7hf().f[0]++;
      cov_qnmnju7hf().s[2]++;
      state.inputValue = action.payload;
    }
  }
}));
export const {
  updateInputValue
} = (cov_qnmnju7hf().s[3]++, searchTextSlice.actions);
export default searchTextSlice.reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfcW5tbmp1N2hmIiwiYWN0dWFsQ292ZXJhZ2UiLCJjcmVhdGVTbGljZSIsIlBheWxvYWRBY3Rpb24iLCJTZWFyY2hCYXJTdGF0ZSIsImlucHV0VmFsdWUiLCJpbml0aWFsU3RhdGUiLCJzIiwic2VhcmNoVGV4dFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwidXBkYXRlSW5wdXRWYWx1ZSIsInN0YXRlIiwiYWN0aW9uIiwiZiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VzIjpbInNlYXJjaFRleHRTbGljZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaEJhclN0YXRlIHtcclxuICBpbnB1dFZhbHVlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU2VhcmNoQmFyU3RhdGUgPSB7XHJcbiAgaW5wdXRWYWx1ZTogJycsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VhcmNoVGV4dFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdzZWFyY2hUZXh0JyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHVwZGF0ZUlucHV0VmFsdWU6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pID0+IHtcclxuICAgICAgc3RhdGUuaW5wdXRWYWx1ZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IHVwZGF0ZUlucHV0VmFsdWUgfSA9IHNlYXJjaFRleHRTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hUZXh0U2xpY2UucmVkdWNlcjtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGFBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGFBQUE7QUFmWixTQUFTRSxXQUFXLFFBQVEsa0JBQWtCO0FBQzlDLGNBQWNDLGFBQWEsUUFBUSxrQkFBa0I7QUFFckQsT0FBTyxVQUFVQyxjQUFjLENBQUM7RUFDOUJDLFVBQVUsRUFBRSxNQUFNO0FBQ3BCO0FBRUEsTUFBTUMsWUFBWSxFQUFFRixjQUFjLElBQUFKLGFBQUEsR0FBQU8sQ0FBQSxPQUFHO0VBQ25DRixVQUFVLEVBQUU7QUFDZCxDQUFDO0FBRUQsT0FBTyxNQUFNRyxlQUFlLElBQUFSLGFBQUEsR0FBQU8sQ0FBQSxPQUFHTCxXQUFXLENBQUM7RUFDekNPLElBQUksRUFBRSxZQUFZO0VBQ2xCSCxZQUFZO0VBQ1pJLFFBQVEsRUFBRTtJQUNSQyxnQkFBZ0IsRUFBRUEsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEVBQUVWLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSztNQUFBSCxhQUFBLEdBQUFjLENBQUE7TUFBQWQsYUFBQSxHQUFBTyxDQUFBO01BQzFESyxLQUFLLENBQUNQLFVBQVUsR0FBR1EsTUFBTSxDQUFDRSxPQUFPO0lBQ25DO0VBQ0Y7QUFDRixDQUFDLENBQUM7QUFFRixPQUFPLE1BQU07RUFBRUo7QUFBaUIsQ0FBQyxJQUFBWCxhQUFBLEdBQUFPLENBQUEsT0FBR0MsZUFBZSxDQUFDUSxPQUFPO0FBQzNELGVBQWVSLGVBQWUsQ0FBQ1MsT0FBTyJ9