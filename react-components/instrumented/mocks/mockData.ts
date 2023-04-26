function cov_25qyfolsuf() {
  var path = "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\mocks\\mockData.ts";
  var hash = "2f76b720b53d7d027043a9be9f12a3a9a448b8ef";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\mocks\\mockData.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 26
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "1": {
        start: {
          line: 22,
          column: 35
        },
        end: {
          line: 91,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2f76b720b53d7d027043a9be9f12a3a9a448b8ef"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_25qyfolsuf = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_25qyfolsuf();
export const mockedCard = (cov_25qyfolsuf().s[0]++, {
  id: 1,
  name: 'test name',
  status: 'test status',
  species: 'test species',
  type: 'test type',
  gender: 'test gender',
  origin: {
    name: 'test origin name',
    url: 'test origin url'
  },
  location: {
    name: 'test location name',
    url: 'test location url'
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/232.jpeg',
  episode: ['test episode one', 'test episode two'],
  url: 'test url',
  created: 'test created'
});
export const mockCharactersArray = (cov_25qyfolsuf().s[1]++, {
  info: {
    count: 826,
    pages: 42,
    next: 'https://rickandmortyapi.com/api/character/?page=2',
    prev: null
  },
  results: [{
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1'
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z'
  }, {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'unknown',
      url: ''
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    url: 'https://rickandmortyapi.com/api/character/2',
    created: '2017-11-04T18:50:21.651Z'
  }, {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/6'],
    url: 'https://rickandmortyapi.com/api/character/3',
    created: '2017-11-04T19:09:56.428Z'
  }]
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMjVxeWZvbHN1ZiIsImFjdHVhbENvdmVyYWdlIiwibW9ja2VkQ2FyZCIsInMiLCJpZCIsIm5hbWUiLCJzdGF0dXMiLCJzcGVjaWVzIiwidHlwZSIsImdlbmRlciIsIm9yaWdpbiIsInVybCIsImxvY2F0aW9uIiwiaW1hZ2UiLCJlcGlzb2RlIiwiY3JlYXRlZCIsIm1vY2tDaGFyYWN0ZXJzQXJyYXkiLCJpbmZvIiwiY291bnQiLCJwYWdlcyIsIm5leHQiLCJwcmV2IiwicmVzdWx0cyJdLCJzb3VyY2VzIjpbIm1vY2tEYXRhLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBtb2NrZWRDYXJkID0ge1xyXG4gIGlkOiAxLFxyXG4gIG5hbWU6ICd0ZXN0IG5hbWUnLFxyXG4gIHN0YXR1czogJ3Rlc3Qgc3RhdHVzJyxcclxuICBzcGVjaWVzOiAndGVzdCBzcGVjaWVzJyxcclxuICB0eXBlOiAndGVzdCB0eXBlJyxcclxuICBnZW5kZXI6ICd0ZXN0IGdlbmRlcicsXHJcbiAgb3JpZ2luOiB7XHJcbiAgICBuYW1lOiAndGVzdCBvcmlnaW4gbmFtZScsXHJcbiAgICB1cmw6ICd0ZXN0IG9yaWdpbiB1cmwnLFxyXG4gIH0sXHJcbiAgbG9jYXRpb246IHtcclxuICAgIG5hbWU6ICd0ZXN0IGxvY2F0aW9uIG5hbWUnLFxyXG4gICAgdXJsOiAndGVzdCBsb2NhdGlvbiB1cmwnLFxyXG4gIH0sXHJcbiAgaW1hZ2U6ICdodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9hdmF0YXIvMjMyLmpwZWcnLFxyXG4gIGVwaXNvZGU6IFsndGVzdCBlcGlzb2RlIG9uZScsICd0ZXN0IGVwaXNvZGUgdHdvJ10sXHJcbiAgdXJsOiAndGVzdCB1cmwnLFxyXG4gIGNyZWF0ZWQ6ICd0ZXN0IGNyZWF0ZWQnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vY2tDaGFyYWN0ZXJzQXJyYXkgPSB7XHJcbiAgaW5mbzoge1xyXG4gICAgY291bnQ6IDgyNixcclxuICAgIHBhZ2VzOiA0MixcclxuICAgIG5leHQ6ICdodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8/cGFnZT0yJyxcclxuICAgIHByZXY6IG51bGwsXHJcbiAgfSxcclxuICByZXN1bHRzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBuYW1lOiAnUmljayBTYW5jaGV6JyxcclxuICAgICAgc3RhdHVzOiAnQWxpdmUnLFxyXG4gICAgICBzcGVjaWVzOiAnSHVtYW4nLFxyXG4gICAgICB0eXBlOiAnJyxcclxuICAgICAgZ2VuZGVyOiAnTWFsZScsXHJcbiAgICAgIG9yaWdpbjoge1xyXG4gICAgICAgIG5hbWU6ICdFYXJ0aCAoQy0xMzcpJyxcclxuICAgICAgICB1cmw6ICdodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzEnLFxyXG4gICAgICB9LFxyXG4gICAgICBsb2NhdGlvbjoge1xyXG4gICAgICAgIG5hbWU6ICdDaXRhZGVsIG9mIFJpY2tzJyxcclxuICAgICAgICB1cmw6ICdodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uLzMnLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWFnZTogJ2h0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2F2YXRhci8xLmpwZWcnLFxyXG4gICAgICBlcGlzb2RlOiBbJ2h0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvZXBpc29kZS8xJ10sXHJcbiAgICAgIHVybDogJ2h0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLzEnLFxyXG4gICAgICBjcmVhdGVkOiAnMjAxNy0xMS0wNFQxODo0ODo0Ni4yNTBaJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiAnTW9ydHkgU21pdGgnLFxyXG4gICAgICBzdGF0dXM6ICdBbGl2ZScsXHJcbiAgICAgIHNwZWNpZXM6ICdIdW1hbicsXHJcbiAgICAgIHR5cGU6ICcnLFxyXG4gICAgICBnZW5kZXI6ICdNYWxlJyxcclxuICAgICAgb3JpZ2luOiB7XHJcbiAgICAgICAgbmFtZTogJ3Vua25vd24nLFxyXG4gICAgICAgIHVybDogJycsXHJcbiAgICAgIH0sXHJcbiAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgbmFtZTogJ0NpdGFkZWwgb2YgUmlja3MnLFxyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMycsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvYXZhdGFyLzIuanBlZycsXHJcbiAgICAgIGVwaXNvZGU6IFsnaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzEnXSxcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvMicsXHJcbiAgICAgIGNyZWF0ZWQ6ICcyMDE3LTExLTA0VDE4OjUwOjIxLjY1MVonLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIG5hbWU6ICdTdW1tZXIgU21pdGgnLFxyXG4gICAgICBzdGF0dXM6ICdBbGl2ZScsXHJcbiAgICAgIHNwZWNpZXM6ICdIdW1hbicsXHJcbiAgICAgIHR5cGU6ICcnLFxyXG4gICAgICBnZW5kZXI6ICdGZW1hbGUnLFxyXG4gICAgICBvcmlnaW46IHtcclxuICAgICAgICBuYW1lOiAnRWFydGggKFJlcGxhY2VtZW50IERpbWVuc2lvbiknLFxyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24vMjAnLFxyXG4gICAgICB9LFxyXG4gICAgICBsb2NhdGlvbjoge1xyXG4gICAgICAgIG5hbWU6ICdFYXJ0aCAoUmVwbGFjZW1lbnQgRGltZW5zaW9uKScsXHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9sb2NhdGlvbi8yMCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvYXZhdGFyLzMuanBlZycsXHJcbiAgICAgIGVwaXNvZGU6IFsnaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9lcGlzb2RlLzYnXSxcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvMycsXHJcbiAgICAgIGNyZWF0ZWQ6ICcyMDE3LTExLTA0VDE5OjA5OjU2LjQyOFonLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxjQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxjQUFBO0FBZlosT0FBTyxNQUFNRSxVQUFVLElBQUFGLGNBQUEsR0FBQUcsQ0FBQSxPQUFHO0VBQ3hCQyxFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUUsV0FBVztFQUNqQkMsTUFBTSxFQUFFLGFBQWE7RUFDckJDLE9BQU8sRUFBRSxjQUFjO0VBQ3ZCQyxJQUFJLEVBQUUsV0FBVztFQUNqQkMsTUFBTSxFQUFFLGFBQWE7RUFDckJDLE1BQU0sRUFBRTtJQUNOTCxJQUFJLEVBQUUsa0JBQWtCO0lBQ3hCTSxHQUFHLEVBQUU7RUFDUCxDQUFDO0VBQ0RDLFFBQVEsRUFBRTtJQUNSUCxJQUFJLEVBQUUsb0JBQW9CO0lBQzFCTSxHQUFHLEVBQUU7RUFDUCxDQUFDO0VBQ0RFLEtBQUssRUFBRSwyREFBMkQ7RUFDbEVDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDO0VBQ2pESCxHQUFHLEVBQUUsVUFBVTtFQUNmSSxPQUFPLEVBQUU7QUFDWCxDQUFDO0FBRUQsT0FBTyxNQUFNQyxtQkFBbUIsSUFBQWhCLGNBQUEsR0FBQUcsQ0FBQSxPQUFHO0VBQ2pDYyxJQUFJLEVBQUU7SUFDSkMsS0FBSyxFQUFFLEdBQUc7SUFDVkMsS0FBSyxFQUFFLEVBQUU7SUFDVEMsSUFBSSxFQUFFLG1EQUFtRDtJQUN6REMsSUFBSSxFQUFFO0VBQ1IsQ0FBQztFQUNEQyxPQUFPLEVBQUUsQ0FDUDtJQUNFbEIsRUFBRSxFQUFFLENBQUM7SUFDTEMsSUFBSSxFQUFFLGNBQWM7SUFDcEJDLE1BQU0sRUFBRSxPQUFPO0lBQ2ZDLE9BQU8sRUFBRSxPQUFPO0lBQ2hCQyxJQUFJLEVBQUUsRUFBRTtJQUNSQyxNQUFNLEVBQUUsTUFBTTtJQUNkQyxNQUFNLEVBQUU7TUFDTkwsSUFBSSxFQUFFLGVBQWU7TUFDckJNLEdBQUcsRUFBRTtJQUNQLENBQUM7SUFDREMsUUFBUSxFQUFFO01BQ1JQLElBQUksRUFBRSxrQkFBa0I7TUFDeEJNLEdBQUcsRUFBRTtJQUNQLENBQUM7SUFDREUsS0FBSyxFQUFFLHlEQUF5RDtJQUNoRUMsT0FBTyxFQUFFLENBQUMsMkNBQTJDLENBQUM7SUFDdERILEdBQUcsRUFBRSw2Q0FBNkM7SUFDbERJLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFDRDtJQUNFWCxFQUFFLEVBQUUsQ0FBQztJQUNMQyxJQUFJLEVBQUUsYUFBYTtJQUNuQkMsTUFBTSxFQUFFLE9BQU87SUFDZkMsT0FBTyxFQUFFLE9BQU87SUFDaEJDLElBQUksRUFBRSxFQUFFO0lBQ1JDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLE1BQU0sRUFBRTtNQUNOTCxJQUFJLEVBQUUsU0FBUztNQUNmTSxHQUFHLEVBQUU7SUFDUCxDQUFDO0lBQ0RDLFFBQVEsRUFBRTtNQUNSUCxJQUFJLEVBQUUsa0JBQWtCO01BQ3hCTSxHQUFHLEVBQUU7SUFDUCxDQUFDO0lBQ0RFLEtBQUssRUFBRSx5REFBeUQ7SUFDaEVDLE9BQU8sRUFBRSxDQUFDLDJDQUEyQyxDQUFDO0lBQ3RESCxHQUFHLEVBQUUsNkNBQTZDO0lBQ2xESSxPQUFPLEVBQUU7RUFDWCxDQUFDLEVBQ0Q7SUFDRVgsRUFBRSxFQUFFLENBQUM7SUFDTEMsSUFBSSxFQUFFLGNBQWM7SUFDcEJDLE1BQU0sRUFBRSxPQUFPO0lBQ2ZDLE9BQU8sRUFBRSxPQUFPO0lBQ2hCQyxJQUFJLEVBQUUsRUFBRTtJQUNSQyxNQUFNLEVBQUUsUUFBUTtJQUNoQkMsTUFBTSxFQUFFO01BQ05MLElBQUksRUFBRSwrQkFBK0I7TUFDckNNLEdBQUcsRUFBRTtJQUNQLENBQUM7SUFDREMsUUFBUSxFQUFFO01BQ1JQLElBQUksRUFBRSwrQkFBK0I7TUFDckNNLEdBQUcsRUFBRTtJQUNQLENBQUM7SUFDREUsS0FBSyxFQUFFLHlEQUF5RDtJQUNoRUMsT0FBTyxFQUFFLENBQUMsMkNBQTJDLENBQUM7SUFDdERILEdBQUcsRUFBRSw2Q0FBNkM7SUFDbERJLE9BQU8sRUFBRTtFQUNYLENBQUM7QUFFTCxDQUFDIn0=