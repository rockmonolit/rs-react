function cov_1fj1n07g9m() {
  var path = "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\tests\\getCardsInfo.test.ts";
  var hash = "3d3c70dbd5383eadeb77141be8bc7bd2058f7021";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\tests\\getCardsInfo.test.ts",
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
          column: 21
        },
        end: {
          line: 7,
          column: 36
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
            column: 50
          },
          end: {
            line: 6,
            column: 51
          }
        },
        loc: {
          start: {
            line: 6,
            column: 56
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
    hash: "3d3c70dbd5383eadeb77141be8bc7bd2058f7021"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1fj1n07g9m = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1fj1n07g9m();
import * as React from 'react';
import '@testing-library/jest-dom';
import { getCardsInfo } from '../helpers/getCardsInfo';
cov_1fj1n07g9m().s[0]++;
test('should generate specified amount of cards', () => {
  cov_1fj1n07g9m().f[0]++;
  const cardsArray = (cov_1fj1n07g9m().s[1]++, getCardsInfo(5));
  cov_1fj1n07g9m().s[2]++;
  expect(cardsArray.length).toEqual(5);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWZqMW4wN2c5bSIsImFjdHVhbENvdmVyYWdlIiwiUmVhY3QiLCJnZXRDYXJkc0luZm8iLCJzIiwidGVzdCIsImYiLCJjYXJkc0FycmF5IiwiZXhwZWN0IiwibGVuZ3RoIiwidG9FcXVhbCJdLCJzb3VyY2VzIjpbImdldENhcmRzSW5mby50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICdAdGVzdGluZy1saWJyYXJ5L2plc3QtZG9tJztcclxuXHJcbmltcG9ydCB7IGdldENhcmRzSW5mbyB9IGZyb20gJy4uL2hlbHBlcnMvZ2V0Q2FyZHNJbmZvJztcclxuXHJcbnRlc3QoJ3Nob3VsZCBnZW5lcmF0ZSBzcGVjaWZpZWQgYW1vdW50IG9mIGNhcmRzJywgKCkgPT4ge1xyXG4gIGNvbnN0IGNhcmRzQXJyYXkgPSBnZXRDYXJkc0luZm8oNSk7XHJcbiAgZXhwZWN0KGNhcmRzQXJyYXkubGVuZ3RoKS50b0VxdWFsKDUpO1xyXG59KTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixPQUFPLEtBQUtFLEtBQUssTUFBTSxPQUFPO0FBQzlCLE9BQU8sMkJBQTJCO0FBRWxDLFNBQVNDLFlBQVksUUFBUSx5QkFBeUI7QUFBQ0gsY0FBQSxHQUFBSSxDQUFBO0FBRXZEQyxJQUFJLENBQUMsMkNBQTJDLEVBQUUsTUFBTTtFQUFBTCxjQUFBLEdBQUFNLENBQUE7RUFDdEQsTUFBTUMsVUFBVSxJQUFBUCxjQUFBLEdBQUFJLENBQUEsT0FBR0QsWUFBWSxDQUFDLENBQUMsQ0FBQztFQUFDSCxjQUFBLEdBQUFJLENBQUE7RUFDbkNJLE1BQU0sQ0FBQ0QsVUFBVSxDQUFDRSxNQUFNLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUMifQ==