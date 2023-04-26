function cov_2abgb7kozh() {
  var path = "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\helpers\\getCardsInfo.ts";
  var hash = "0504ce9c6865c132a7668de59c477dcd8baeee86";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\helpers\\getCardsInfo.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 16
        },
        end: {
          line: 4,
          column: 18
        }
      },
      "1": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 13,
          column: 3
        }
      },
      "2": {
        start: {
          line: 5,
          column: 15
        },
        end: {
          line: 5,
          column: 16
        }
      },
      "3": {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 6,
          column: 40
        }
      },
      "4": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 12,
          column: 7
        }
      },
      "5": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "getCardsInfo",
        decl: {
          start: {
            line: 3,
            column: 16
          },
          end: {
            line: 3,
            column: 28
          }
        },
        loc: {
          start: {
            line: 3,
            column: 48
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 3,
            column: 29
          },
          end: {
            line: 3,
            column: 46
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 3,
            column: 45
          },
          end: {
            line: 3,
            column: 46
          }
        }],
        line: 3
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0504ce9c6865c132a7668de59c477dcd8baeee86"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2abgb7kozh = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2abgb7kozh();
import { getRandomCardInfo } from './generateCardData';
export function getCardsInfo(numberOfCards = (cov_2abgb7kozh().b[0][0]++, 8)) {
  cov_2abgb7kozh().f[0]++;
  const cards = (cov_2abgb7kozh().s[0]++, []);
  cov_2abgb7kozh().s[1]++;
  for (let i = (cov_2abgb7kozh().s[2]++, 0); i < numberOfCards; i++) {
    const cardInfo = (cov_2abgb7kozh().s[3]++, getRandomCardInfo());
    cov_2abgb7kozh().s[4]++;
    cards.push({
      id: i,
      author: cardInfo.author,
      title: cardInfo.title,
      description: cardInfo.description
    });
  }
  cov_2abgb7kozh().s[5]++;
  return cards;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmFiZ2I3a296aCIsImFjdHVhbENvdmVyYWdlIiwiZ2V0UmFuZG9tQ2FyZEluZm8iLCJnZXRDYXJkc0luZm8iLCJudW1iZXJPZkNhcmRzIiwiYiIsImYiLCJjYXJkcyIsInMiLCJpIiwiY2FyZEluZm8iLCJwdXNoIiwiaWQiLCJhdXRob3IiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZXMiOlsiZ2V0Q2FyZHNJbmZvLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFJhbmRvbUNhcmRJbmZvIH0gZnJvbSAnLi9nZW5lcmF0ZUNhcmREYXRhJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJkc0luZm8obnVtYmVyT2ZDYXJkcyA9IDgpIHtcclxuICBjb25zdCBjYXJkcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZDYXJkczsgaSsrKSB7XHJcbiAgICBjb25zdCBjYXJkSW5mbyA9IGdldFJhbmRvbUNhcmRJbmZvKCk7XHJcbiAgICBjYXJkcy5wdXNoKHtcclxuICAgICAgaWQ6IGksXHJcbiAgICAgIGF1dGhvcjogY2FyZEluZm8uYXV0aG9yLFxyXG4gICAgICB0aXRsZTogY2FyZEluZm8udGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBjYXJkSW5mby5kZXNjcmlwdGlvbixcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gY2FyZHM7XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxjQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxjQUFBO0FBZlosU0FBU0UsaUJBQWlCLFFBQVEsb0JBQW9CO0FBRXRELE9BQU8sU0FBU0MsWUFBWUEsQ0FBQ0MsYUFBYSxJQUFBSixjQUFBLEdBQUFLLENBQUEsVUFBRyxDQUFDLEdBQUU7RUFBQUwsY0FBQSxHQUFBTSxDQUFBO0VBQzlDLE1BQU1DLEtBQUssSUFBQVAsY0FBQSxHQUFBUSxDQUFBLE9BQUcsRUFBRTtFQUFDUixjQUFBLEdBQUFRLENBQUE7RUFDakIsS0FBSyxJQUFJQyxDQUFDLElBQUFULGNBQUEsR0FBQVEsQ0FBQSxPQUFHLENBQUMsR0FBRUMsQ0FBQyxHQUFHTCxhQUFhLEVBQUVLLENBQUMsRUFBRSxFQUFFO0lBQ3RDLE1BQU1DLFFBQVEsSUFBQVYsY0FBQSxHQUFBUSxDQUFBLE9BQUdOLGlCQUFpQixFQUFFO0lBQUNGLGNBQUEsR0FBQVEsQ0FBQTtJQUNyQ0QsS0FBSyxDQUFDSSxJQUFJLENBQUM7TUFDVEMsRUFBRSxFQUFFSCxDQUFDO01BQ0xJLE1BQU0sRUFBRUgsUUFBUSxDQUFDRyxNQUFNO01BQ3ZCQyxLQUFLLEVBQUVKLFFBQVEsQ0FBQ0ksS0FBSztNQUNyQkMsV0FBVyxFQUFFTCxRQUFRLENBQUNLO0lBQ3hCLENBQUMsQ0FBQztFQUNKO0VBQUNmLGNBQUEsR0FBQVEsQ0FBQTtFQUNELE9BQU9ELEtBQUs7QUFDZCJ9