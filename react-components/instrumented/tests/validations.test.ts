function cov_1h1o9f606h() {
  var path = "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\tests\\validations.test.ts";
  var hash = "41e06e5d6bf70ae53d726a9ffce408b9e8af3fbf";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\tests\\validations.test.ts",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 6,
          column: 27
        }
      },
      "1": {
        start: {
          line: 7,
          column: 17
        },
        end: {
          line: 7,
          column: 29
        }
      },
      "2": {
        start: {
          line: 8,
          column: 22
        },
        end: {
          line: 8,
          column: 45
        }
      },
      "3": {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 13,
          column: 3
        }
      },
      "4": {
        start: {
          line: 11,
          column: 19
        },
        end: {
          line: 11,
          column: 50
        }
      },
      "5": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 32
        }
      },
      "6": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 18,
          column: 3
        }
      },
      "7": {
        start: {
          line: 16,
          column: 15
        },
        end: {
          line: 16,
          column: 37
        }
      },
      "8": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 32
        }
      },
      "9": {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 23,
          column: 3
        }
      },
      "10": {
        start: {
          line: 21,
          column: 15
        },
        end: {
          line: 21,
          column: 41
        }
      },
      "11": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 32
        }
      },
      "12": {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 29,
          column: 3
        }
      },
      "13": {
        start: {
          line: 26,
          column: 15
        },
        end: {
          line: 26,
          column: 41
        }
      },
      "14": {
        start: {
          line: 27,
          column: 18
        },
        end: {
          line: 27,
          column: 46
        }
      },
      "15": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 66
          },
          end: {
            line: 10,
            column: 67
          }
        },
        loc: {
          start: {
            line: 10,
            column: 72
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 15,
            column: 49
          },
          end: {
            line: 15,
            column: 50
          }
        },
        loc: {
          start: {
            line: 15,
            column: 55
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 15
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 20,
            column: 43
          },
          end: {
            line: 20,
            column: 44
          }
        },
        loc: {
          start: {
            line: 20,
            column: 49
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 20
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 25,
            column: 36
          },
          end: {
            line: 25,
            column: 37
          }
        },
        loc: {
          start: {
            line: 25,
            column: 42
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 25
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "41e06e5d6bf70ae53d726a9ffce408b9e8af3fbf"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1h1o9f606h = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1h1o9f606h();
import * as React from 'react';
import '@testing-library/jest-dom';
import { startsWithCapital, isFutureDate, isDateToday, isPictureFormatValid } from '../helpers/validations';
const mockFileName = (cov_1h1o9f606h().s[0]++, 'Test');
const mockDate = (cov_1h1o9f606h().s[1]++, '2099-01-01');
const mockTodayDate = (cov_1h1o9f606h().s[2]++, new Date().toString());
cov_1h1o9f606h().s[3]++;
test('should check whether file name starts with capital letter', () => {
  cov_1h1o9f606h().f[0]++;
  const fileName = (cov_1h1o9f606h().s[4]++, startsWithCapital(mockFileName));
  cov_1h1o9f606h().s[5]++;
  expect(fileName).toBeTruthy();
});
cov_1h1o9f606h().s[6]++;
test('should check whether date is future date', () => {
  cov_1h1o9f606h().f[1]++;
  const date = (cov_1h1o9f606h().s[7]++, isFutureDate(mockDate));
  cov_1h1o9f606h().s[8]++;
  expect(date).not.toBeTruthy();
});
cov_1h1o9f606h().s[9]++;
test('should check whether date is today', () => {
  cov_1h1o9f606h().f[2]++;
  const date = (cov_1h1o9f606h().s[10]++, isDateToday(mockTodayDate));
  cov_1h1o9f606h().s[11]++;
  expect(date).not.toBeTruthy();
});
cov_1h1o9f606h().s[12]++;
test('should validate file format', () => {
  cov_1h1o9f606h().f[3]++;
  const file = (cov_1h1o9f606h().s[13]++, new File([""], 'test.png'));
  const isValid = (cov_1h1o9f606h().s[14]++, isPictureFormatValid([file]));
  cov_1h1o9f606h().s[15]++;
  expect(isValid).toBeTruthy();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWgxbzlmNjA2aCIsImFjdHVhbENvdmVyYWdlIiwiUmVhY3QiLCJzdGFydHNXaXRoQ2FwaXRhbCIsImlzRnV0dXJlRGF0ZSIsImlzRGF0ZVRvZGF5IiwiaXNQaWN0dXJlRm9ybWF0VmFsaWQiLCJtb2NrRmlsZU5hbWUiLCJzIiwibW9ja0RhdGUiLCJtb2NrVG9kYXlEYXRlIiwiRGF0ZSIsInRvU3RyaW5nIiwidGVzdCIsImYiLCJmaWxlTmFtZSIsImV4cGVjdCIsInRvQmVUcnV0aHkiLCJkYXRlIiwibm90IiwiZmlsZSIsIkZpbGUiLCJpc1ZhbGlkIl0sInNvdXJjZXMiOlsidmFsaWRhdGlvbnMudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnQHRlc3RpbmctbGlicmFyeS9qZXN0LWRvbSc7XHJcblxyXG5pbXBvcnQgeyBzdGFydHNXaXRoQ2FwaXRhbCwgaXNGdXR1cmVEYXRlLCBpc0RhdGVUb2RheSwgaXNQaWN0dXJlRm9ybWF0VmFsaWQgfSBmcm9tICcuLi9oZWxwZXJzL3ZhbGlkYXRpb25zJztcclxuXHJcbmNvbnN0IG1vY2tGaWxlTmFtZSA9ICdUZXN0JztcclxuY29uc3QgbW9ja0RhdGUgPSAnMjA5OS0wMS0wMSc7XHJcbmNvbnN0IG1vY2tUb2RheURhdGUgPSAobmV3IERhdGUoKSkudG9TdHJpbmcoKVxyXG5cclxudGVzdCgnc2hvdWxkIGNoZWNrIHdoZXRoZXIgZmlsZSBuYW1lIHN0YXJ0cyB3aXRoIGNhcGl0YWwgbGV0dGVyJywgKCkgPT4ge1xyXG4gIGNvbnN0IGZpbGVOYW1lID0gc3RhcnRzV2l0aENhcGl0YWwobW9ja0ZpbGVOYW1lKTtcclxuICBleHBlY3QoZmlsZU5hbWUpLnRvQmVUcnV0aHkoKTtcclxufSk7XHJcblxyXG50ZXN0KCdzaG91bGQgY2hlY2sgd2hldGhlciBkYXRlIGlzIGZ1dHVyZSBkYXRlJywgKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBpc0Z1dHVyZURhdGUobW9ja0RhdGUpO1xyXG4gIGV4cGVjdChkYXRlKS5ub3QudG9CZVRydXRoeSgpO1xyXG59KTtcclxuXHJcbnRlc3QoJ3Nob3VsZCBjaGVjayB3aGV0aGVyIGRhdGUgaXMgdG9kYXknLCAoKSA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IGlzRGF0ZVRvZGF5KG1vY2tUb2RheURhdGUpO1xyXG4gIGV4cGVjdChkYXRlKS5ub3QudG9CZVRydXRoeSgpO1xyXG59KTtcclxuXHJcbnRlc3QoJ3Nob3VsZCB2YWxpZGF0ZSBmaWxlIGZvcm1hdCcsICgpID0+IHtcclxuICBjb25zdCBmaWxlID0gbmV3IEZpbGUoW1wiXCJdLCAndGVzdC5wbmcnKTtcclxuICBjb25zdCBpc1ZhbGlkID0gaXNQaWN0dXJlRm9ybWF0VmFsaWQoW2ZpbGVdKTtcclxuICBleHBlY3QoaXNWYWxpZCkudG9CZVRydXRoeSgpO1xyXG59KTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQWZaLE9BQU8sS0FBS0UsS0FBSyxNQUFNLE9BQU87QUFDOUIsT0FBTywyQkFBMkI7QUFFbEMsU0FBU0MsaUJBQWlCLEVBQUVDLFlBQVksRUFBRUMsV0FBVyxFQUFFQyxvQkFBb0IsUUFBUSx3QkFBd0I7QUFFM0csTUFBTUMsWUFBWSxJQUFBUCxjQUFBLEdBQUFRLENBQUEsT0FBRyxNQUFNO0FBQzNCLE1BQU1DLFFBQVEsSUFBQVQsY0FBQSxHQUFBUSxDQUFBLE9BQUcsWUFBWTtBQUM3QixNQUFNRSxhQUFhLElBQUFWLGNBQUEsR0FBQVEsQ0FBQSxPQUFJLElBQUlHLElBQUksRUFBRSxDQUFFQyxRQUFRLEVBQUU7QUFBQVosY0FBQSxHQUFBUSxDQUFBO0FBRTdDSyxJQUFJLENBQUMsMkRBQTJELEVBQUUsTUFBTTtFQUFBYixjQUFBLEdBQUFjLENBQUE7RUFDdEUsTUFBTUMsUUFBUSxJQUFBZixjQUFBLEdBQUFRLENBQUEsT0FBR0wsaUJBQWlCLENBQUNJLFlBQVksQ0FBQztFQUFDUCxjQUFBLEdBQUFRLENBQUE7RUFDakRRLE1BQU0sQ0FBQ0QsUUFBUSxDQUFDLENBQUNFLFVBQVUsRUFBRTtBQUMvQixDQUFDLENBQUM7QUFBQ2pCLGNBQUEsR0FBQVEsQ0FBQTtBQUVISyxJQUFJLENBQUMsMENBQTBDLEVBQUUsTUFBTTtFQUFBYixjQUFBLEdBQUFjLENBQUE7RUFDckQsTUFBTUksSUFBSSxJQUFBbEIsY0FBQSxHQUFBUSxDQUFBLE9BQUdKLFlBQVksQ0FBQ0ssUUFBUSxDQUFDO0VBQUNULGNBQUEsR0FBQVEsQ0FBQTtFQUNwQ1EsTUFBTSxDQUFDRSxJQUFJLENBQUMsQ0FBQ0MsR0FBRyxDQUFDRixVQUFVLEVBQUU7QUFDL0IsQ0FBQyxDQUFDO0FBQUNqQixjQUFBLEdBQUFRLENBQUE7QUFFSEssSUFBSSxDQUFDLG9DQUFvQyxFQUFFLE1BQU07RUFBQWIsY0FBQSxHQUFBYyxDQUFBO0VBQy9DLE1BQU1JLElBQUksSUFBQWxCLGNBQUEsR0FBQVEsQ0FBQSxRQUFHSCxXQUFXLENBQUNLLGFBQWEsQ0FBQztFQUFDVixjQUFBLEdBQUFRLENBQUE7RUFDeENRLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLENBQUNDLEdBQUcsQ0FBQ0YsVUFBVSxFQUFFO0FBQy9CLENBQUMsQ0FBQztBQUFDakIsY0FBQSxHQUFBUSxDQUFBO0FBRUhLLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxNQUFNO0VBQUFiLGNBQUEsR0FBQWMsQ0FBQTtFQUN4QyxNQUFNTSxJQUFJLElBQUFwQixjQUFBLEdBQUFRLENBQUEsUUFBRyxJQUFJYSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUM7RUFDdkMsTUFBTUMsT0FBTyxJQUFBdEIsY0FBQSxHQUFBUSxDQUFBLFFBQUdGLG9CQUFvQixDQUFDLENBQUNjLElBQUksQ0FBQyxDQUFDO0VBQUNwQixjQUFBLEdBQUFRLENBQUE7RUFDN0NRLE1BQU0sQ0FBQ00sT0FBTyxDQUFDLENBQUNMLFVBQVUsRUFBRTtBQUM5QixDQUFDLENBQUMifQ==