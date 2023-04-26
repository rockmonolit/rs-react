function cov_1xhhobsj1j() {
  var path = "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\mocks\\handlers.ts";
  var hash = "fcb06b568e6b31b3550ec1b8037cb69cfe32a109";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\mocks\\handlers.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 24
        },
        end: {
          line: 13,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 43
        }
      },
      "2": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 63
        }
      },
      "3": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 54
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 57
          },
          end: {
            line: 5,
            column: 58
          }
        },
        loc: {
          start: {
            line: 5,
            column: 76
          },
          end: {
            line: 8,
            column: 3
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 58
          },
          end: {
            line: 10,
            column: 59
          }
        },
        loc: {
          start: {
            line: 10,
            column: 77
          },
          end: {
            line: 12,
            column: 3
          }
        },
        line: 10
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
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "fcb06b568e6b31b3550ec1b8037cb69cfe32a109"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1xhhobsj1j = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1xhhobsj1j();
import { rest } from 'msw';
import { mockedCard, mockCharactersArray } from './mockData';
export const handlers = (cov_1xhhobsj1j().s[0]++, [rest.get(`https://rickandmortyapi.com/api/character/`, (req, res, ctx) => {
  cov_1xhhobsj1j().f[0]++;
  cov_1xhhobsj1j().s[1]++;
  req.url.searchParams.get('?name=rick');
  cov_1xhhobsj1j().s[2]++;
  return res(ctx.status(200), ctx.json(mockCharactersArray));
}), rest.get(`https://rickandmortyapi.com/api/character/1`, (req, res, ctx) => {
  cov_1xhhobsj1j().f[1]++;
  cov_1xhhobsj1j().s[3]++;
  return res(ctx.status(200), ctx.json(mockedCard));
})]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMXhoaG9ic2oxaiIsImFjdHVhbENvdmVyYWdlIiwicmVzdCIsIm1vY2tlZENhcmQiLCJtb2NrQ2hhcmFjdGVyc0FycmF5IiwiaGFuZGxlcnMiLCJzIiwiZ2V0IiwicmVxIiwicmVzIiwiY3R4IiwiZiIsInVybCIsInNlYXJjaFBhcmFtcyIsInN0YXR1cyIsImpzb24iXSwic291cmNlcyI6WyJoYW5kbGVycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXN0IH0gZnJvbSAnbXN3JztcclxuaW1wb3J0IHsgbW9ja2VkQ2FyZCwgbW9ja0NoYXJhY3RlcnNBcnJheSB9IGZyb20gJy4vbW9ja0RhdGEnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZXJzID0gW1xyXG4gIHJlc3QuZ2V0KGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9gLCAocmVxLCByZXMsIGN0eCkgPT4ge1xyXG4gICAgcmVxLnVybC5zZWFyY2hQYXJhbXMuZ2V0KCc/bmFtZT1yaWNrJyk7XHJcbiAgICByZXR1cm4gcmVzKGN0eC5zdGF0dXMoMjAwKSwgY3R4Lmpzb24obW9ja0NoYXJhY3RlcnNBcnJheSkpO1xyXG4gIH0pLFxyXG5cclxuICByZXN0LmdldChgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvMWAsIChyZXEsIHJlcywgY3R4KSA9PiB7XHJcbiAgICByZXR1cm4gcmVzKGN0eC5zdGF0dXMoMjAwKSwgY3R4Lmpzb24obW9ja2VkQ2FyZCkpO1xyXG4gIH0pLFxyXG5dO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixTQUFTRSxJQUFJLFFBQVEsS0FBSztBQUMxQixTQUFTQyxVQUFVLEVBQUVDLG1CQUFtQixRQUFRLFlBQVk7QUFFNUQsT0FBTyxNQUFNQyxRQUFRLElBQUFMLGNBQUEsR0FBQU0sQ0FBQSxPQUFHLENBQ3RCSixJQUFJLENBQUNLLEdBQUcsQ0FBRSw0Q0FBMkMsRUFBRSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxLQUFLO0VBQUFWLGNBQUEsR0FBQVcsQ0FBQTtFQUFBWCxjQUFBLEdBQUFNLENBQUE7RUFDeEVFLEdBQUcsQ0FBQ0ksR0FBRyxDQUFDQyxZQUFZLENBQUNOLEdBQUcsQ0FBQyxZQUFZLENBQUM7RUFBQ1AsY0FBQSxHQUFBTSxDQUFBO0VBQ3ZDLE9BQU9HLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUVKLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDWCxtQkFBbUIsQ0FBQyxDQUFDO0FBQzVELENBQUMsQ0FBQyxFQUVGRixJQUFJLENBQUNLLEdBQUcsQ0FBRSw2Q0FBNEMsRUFBRSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxLQUFLO0VBQUFWLGNBQUEsR0FBQVcsQ0FBQTtFQUFBWCxjQUFBLEdBQUFNLENBQUE7RUFDekUsT0FBT0csR0FBRyxDQUFDQyxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRUosR0FBRyxDQUFDSyxJQUFJLENBQUNaLFVBQVUsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQyxDQUNIIn0=