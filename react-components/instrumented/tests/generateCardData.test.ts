function cov_1ffsaj1l4e() {
  var path = "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\tests\\generateCardData.test.ts";
  var hash = "3e4c76eb930e3d20807f320b5127de229ee96257";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\tests\\generateCardData.test.ts",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 0
        },
        end: {
          line: 9,
          column: 3
        }
      },
      "1": {
        start: {
          line: 7,
          column: 19
        },
        end: {
          line: 7,
          column: 38
        }
      },
      "2": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 39
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 49
          },
          end: {
            line: 6,
            column: 50
          }
        },
        loc: {
          start: {
            line: 6,
            column: 55
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3e4c76eb930e3d20807f320b5127de229ee96257"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1ffsaj1l4e = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1ffsaj1l4e();
import * as React from 'react';
import '@testing-library/jest-dom';
import { getRandomCardInfo } from '../helpers/generateCardData';
cov_1ffsaj1l4e().s[0]++;
test('card info should contain author property', () => {
  cov_1ffsaj1l4e().f[0]++;
  const cardInfo = (cov_1ffsaj1l4e().s[1]++, getRandomCardInfo());
  cov_1ffsaj1l4e().s[2]++;
  expect(cardInfo.author).toBeTruthy();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWZmc2FqMWw0ZSIsImFjdHVhbENvdmVyYWdlIiwiUmVhY3QiLCJnZXRSYW5kb21DYXJkSW5mbyIsInMiLCJ0ZXN0IiwiZiIsImNhcmRJbmZvIiwiZXhwZWN0IiwiYXV0aG9yIiwidG9CZVRydXRoeSJdLCJzb3VyY2VzIjpbImdlbmVyYXRlQ2FyZERhdGEudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnQHRlc3RpbmctbGlicmFyeS9qZXN0LWRvbSc7XHJcblxyXG5pbXBvcnQgeyBnZXRSYW5kb21DYXJkSW5mbyB9IGZyb20gJy4uL2hlbHBlcnMvZ2VuZXJhdGVDYXJkRGF0YSc7XHJcblxyXG50ZXN0KCdjYXJkIGluZm8gc2hvdWxkIGNvbnRhaW4gYXV0aG9yIHByb3BlcnR5JywgKCkgPT4ge1xyXG4gIGNvbnN0IGNhcmRJbmZvID0gZ2V0UmFuZG9tQ2FyZEluZm8oKTtcclxuICBleHBlY3QoY2FyZEluZm8uYXV0aG9yKS50b0JlVHJ1dGh5KCk7XHJcbn0pO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixPQUFPLEtBQUtFLEtBQUssTUFBTSxPQUFPO0FBQzlCLE9BQU8sMkJBQTJCO0FBRWxDLFNBQVNDLGlCQUFpQixRQUFRLDZCQUE2QjtBQUFDSCxjQUFBLEdBQUFJLENBQUE7QUFFaEVDLElBQUksQ0FBQywwQ0FBMEMsRUFBRSxNQUFNO0VBQUFMLGNBQUEsR0FBQU0sQ0FBQTtFQUNyRCxNQUFNQyxRQUFRLElBQUFQLGNBQUEsR0FBQUksQ0FBQSxPQUFHRCxpQkFBaUIsRUFBRTtFQUFDSCxjQUFBLEdBQUFJLENBQUE7RUFDckNJLE1BQU0sQ0FBQ0QsUUFBUSxDQUFDRSxNQUFNLENBQUMsQ0FBQ0MsVUFBVSxFQUFFO0FBQ3RDLENBQUMsQ0FBQyJ9