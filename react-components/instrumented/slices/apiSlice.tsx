function cov_22fw0tkwwb() {
  var path = "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\slices\\apiSlice.tsx";
  var hash = "d486f2b9a818c29895dce1a73e6882a233aeca36";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\slices\\apiSlice.tsx",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 17
        },
        end: {
          line: 4,
          column: 61
        }
      },
      "1": {
        start: {
          line: 6,
          column: 23
        },
        end: {
          line: 17,
          column: 2
        }
      },
      "2": {
        start: {
          line: 9,
          column: 27
        },
        end: {
          line: 16,
          column: 3
        }
      },
      "3": {
        start: {
          line: 11,
          column: 23
        },
        end: {
          line: 11,
          column: 38
        }
      },
      "4": {
        start: {
          line: 14,
          column: 21
        },
        end: {
          line: 14,
          column: 28
        }
      },
      "5": {
        start: {
          line: 19,
          column: 72
        },
        end: {
          line: 19,
          column: 79
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 13
          },
          end: {
            line: 9,
            column: 14
          }
        },
        loc: {
          start: {
            line: 9,
            column: 27
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 11,
            column: 13
          },
          end: {
            line: 11,
            column: 14
          }
        },
        loc: {
          start: {
            line: 11,
            column: 23
          },
          end: {
            line: 11,
            column: 38
          }
        },
        line: 11
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 14,
            column: 13
          },
          end: {
            line: 14,
            column: 14
          }
        },
        loc: {
          start: {
            line: 14,
            column: 21
          },
          end: {
            line: 14,
            column: 28
          }
        },
        line: 14
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "d486f2b9a818c29895dce1a73e6882a233aeca36"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_22fw0tkwwb = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_22fw0tkwwb();
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CharacterInfo, RickApiResponse } from '../types/types';
const BASE_URL = (cov_22fw0tkwwb().s[0]++, 'https://rickandmortyapi.com/api/character/');
export const rickApi = (cov_22fw0tkwwb().s[1]++, createApi({
  reducerPath: 'rickApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: builder => {
    cov_22fw0tkwwb().f[0]++;
    cov_22fw0tkwwb().s[2]++;
    return {
      getCharacterByName: builder.query<RickApiResponse, string>({
        query: name => {
          cov_22fw0tkwwb().f[1]++;
          cov_22fw0tkwwb().s[3]++;
          return `?name=${name}`;
        }
      }),
      getCharacterById: builder.query<CharacterInfo, number>({
        query: id => {
          cov_22fw0tkwwb().f[2]++;
          cov_22fw0tkwwb().s[4]++;
          return `${id}`;
        }
      })
    };
  }
}));
export const {
  useGetCharacterByNameQuery,
  useGetCharacterByIdQuery
} = (cov_22fw0tkwwb().s[5]++, rickApi);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMjJmdzB0a3d3YiIsImFjdHVhbENvdmVyYWdlIiwiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJDaGFyYWN0ZXJJbmZvIiwiUmlja0FwaVJlc3BvbnNlIiwiQkFTRV9VUkwiLCJzIiwicmlja0FwaSIsInJlZHVjZXJQYXRoIiwiYmFzZVF1ZXJ5IiwiYmFzZVVybCIsImVuZHBvaW50cyIsImJ1aWxkZXIiLCJmIiwiZ2V0Q2hhcmFjdGVyQnlOYW1lIiwicXVlcnkiLCJuYW1lIiwiZ2V0Q2hhcmFjdGVyQnlJZCIsImlkIiwidXNlR2V0Q2hhcmFjdGVyQnlOYW1lUXVlcnkiLCJ1c2VHZXRDaGFyYWN0ZXJCeUlkUXVlcnkiXSwic291cmNlcyI6WyJhcGlTbGljZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3QnO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXJJbmZvLCBSaWNrQXBpUmVzcG9uc2UgfSBmcm9tICcuLi90eXBlcy90eXBlcyc7XHJcblxyXG5jb25zdCBCQVNFX1VSTCA9ICdodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8nO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJpY2tBcGkgPSBjcmVhdGVBcGkoe1xyXG4gIHJlZHVjZXJQYXRoOiAncmlja0FwaScsXHJcbiAgYmFzZVF1ZXJ5OiBmZXRjaEJhc2VRdWVyeSh7IGJhc2VVcmw6IEJBU0VfVVJMIH0pLFxyXG4gIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XHJcbiAgICBnZXRDaGFyYWN0ZXJCeU5hbWU6IGJ1aWxkZXIucXVlcnk8Umlja0FwaVJlc3BvbnNlLCBzdHJpbmc+KHtcclxuICAgICAgcXVlcnk6IChuYW1lKSA9PiBgP25hbWU9JHtuYW1lfWAsXHJcbiAgICB9KSxcclxuICAgIGdldENoYXJhY3RlckJ5SWQ6IGJ1aWxkZXIucXVlcnk8Q2hhcmFjdGVySW5mbywgbnVtYmVyPih7XHJcbiAgICAgIHF1ZXJ5OiAoaWQpID0+IGAke2lkfWAsXHJcbiAgICB9KSxcclxuICB9KSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyB1c2VHZXRDaGFyYWN0ZXJCeU5hbWVRdWVyeSwgdXNlR2V0Q2hhcmFjdGVyQnlJZFF1ZXJ5IH0gPSByaWNrQXBpO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQWZaLFNBQVNFLFNBQVMsRUFBRUMsY0FBYyxRQUFRLDhCQUE4QjtBQUN4RSxTQUFTQyxhQUFhLEVBQUVDLGVBQWUsUUFBUSxnQkFBZ0I7QUFFL0QsTUFBTUMsUUFBUSxJQUFBTixjQUFBLEdBQUFPLENBQUEsT0FBRyw0Q0FBNEM7QUFFN0QsT0FBTyxNQUFNQyxPQUFPLElBQUFSLGNBQUEsR0FBQU8sQ0FBQSxPQUFHTCxTQUFTLENBQUM7RUFDL0JPLFdBQVcsRUFBRSxTQUFTO0VBQ3RCQyxTQUFTLEVBQUVQLGNBQWMsQ0FBQztJQUFFUSxPQUFPLEVBQUVMO0VBQVMsQ0FBQyxDQUFDO0VBQ2hETSxTQUFTLEVBQUdDLE9BQU8sSUFBTTtJQUFBYixjQUFBLEdBQUFjLENBQUE7SUFBQWQsY0FBQSxHQUFBTyxDQUFBO0lBQUE7TUFDdkJRLGtCQUFrQixFQUFFRixPQUFPLENBQUNHLEtBQUssQ0FBQ1gsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3pEVyxLQUFLLEVBQUdDLElBQUksSUFBSztVQUFBakIsY0FBQSxHQUFBYyxDQUFBO1VBQUFkLGNBQUEsR0FBQU8sQ0FBQTtVQUFBLE9BQUMsU0FBUVUsSUFBSyxFQUFDO1FBQUQ7TUFDakMsQ0FBQyxDQUFDO01BQ0ZDLGdCQUFnQixFQUFFTCxPQUFPLENBQUNHLEtBQUssQ0FBQ1osYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3JEWSxLQUFLLEVBQUdHLEVBQUUsSUFBSztVQUFBbkIsY0FBQSxHQUFBYyxDQUFBO1VBQUFkLGNBQUEsR0FBQU8sQ0FBQTtVQUFBLE9BQUMsR0FBRVksRUFBRyxFQUFDO1FBQUQ7TUFDdkIsQ0FBQztJQUNILENBQUM7RUFBRDtBQUNGLENBQUMsQ0FBQztBQUVGLE9BQU8sTUFBTTtFQUFFQywwQkFBMEI7RUFBRUM7QUFBeUIsQ0FBQyxJQUFBckIsY0FBQSxHQUFBTyxDQUFBLE9BQUdDLE9BQU8ifQ==