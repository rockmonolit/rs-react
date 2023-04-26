function cov_2hghec63l4() {
  var path = "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\mocks\\server.ts";
  var hash = "6644835ae21e7d774f655e7b8ad70fc9114c9b0d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\mocks\\server.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 22
        },
        end: {
          line: 4,
          column: 46
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6644835ae21e7d774f655e7b8ad70fc9114c9b0d"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2hghec63l4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2hghec63l4();
import { setupServer } from 'msw/node';
import { handlers } from './handlers';
export const server = (cov_2hghec63l4().s[0]++, setupServer(...handlers));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmhnaGVjNjNsNCIsImFjdHVhbENvdmVyYWdlIiwic2V0dXBTZXJ2ZXIiLCJoYW5kbGVycyIsInNlcnZlciIsInMiXSwic291cmNlcyI6WyJzZXJ2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0dXBTZXJ2ZXIgfSBmcm9tICdtc3cvbm9kZSdcclxuaW1wb3J0IHsgaGFuZGxlcnMgfSBmcm9tICcuL2hhbmRsZXJzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZlciA9IHNldHVwU2VydmVyKC4uLmhhbmRsZXJzKSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxjQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxjQUFBO0FBZlosU0FBU0UsV0FBVyxRQUFRLFVBQVU7QUFDdEMsU0FBU0MsUUFBUSxRQUFRLFlBQVk7QUFFckMsT0FBTyxNQUFNQyxNQUFNLElBQUFKLGNBQUEsR0FBQUssQ0FBQSxPQUFHSCxXQUFXLENBQUMsR0FBR0MsUUFBUSxDQUFDIn0=