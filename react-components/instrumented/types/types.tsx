function cov_2p0zzrguki() {
  var path = "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\types\\types.tsx";
  var hash = "8f0fd2f9f3d8adada4a3083d899527a9b97209ee";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\types\\types.tsx",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8f0fd2f9f3d8adada4a3083d899527a9b97209ee"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2p0zzrguki = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2p0zzrguki();
export interface CharacterInfo {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
export interface RickApiResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null | number;
  };
  results: CharacterInfo[];
}
export interface RickApiError {
  message: string;
}
export interface FormCardProps {
  name: string;
  date: string;
  hasWeapon: boolean;
  preferredSide: string;
  homePlanet: string;
  picture: string;
}
export type Errors = {
  name: string;
  date: string;
  weapon: string;
  side: string;
  planet: string;
  photo: string;
};
export interface NewFormCardProps {
  name: string;
  date: string;
  hasWeapon: boolean;
  preferredSide: string;
  homePlanet: string;
  picture: File[];
}
export type FormState = {
  cards: FormCardProps[];
  errorMessages: Errors;
  isSubmitted: boolean;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMnAwenpyZ3VraSIsImFjdHVhbENvdmVyYWdlIiwiQ2hhcmFjdGVySW5mbyIsImlkIiwibmFtZSIsInN0YXR1cyIsInNwZWNpZXMiLCJ0eXBlIiwiZ2VuZGVyIiwib3JpZ2luIiwidXJsIiwibG9jYXRpb24iLCJpbWFnZSIsImVwaXNvZGUiLCJjcmVhdGVkIiwiUmlja0FwaVJlc3BvbnNlIiwiaW5mbyIsImNvdW50IiwicGFnZXMiLCJuZXh0IiwicHJldiIsInJlc3VsdHMiLCJSaWNrQXBpRXJyb3IiLCJtZXNzYWdlIiwiRm9ybUNhcmRQcm9wcyIsImRhdGUiLCJoYXNXZWFwb24iLCJwcmVmZXJyZWRTaWRlIiwiaG9tZVBsYW5ldCIsInBpY3R1cmUiLCJFcnJvcnMiLCJ3ZWFwb24iLCJzaWRlIiwicGxhbmV0IiwicGhvdG8iLCJOZXdGb3JtQ2FyZFByb3BzIiwiRmlsZSIsIkZvcm1TdGF0ZSIsImNhcmRzIiwiZXJyb3JNZXNzYWdlcyIsImlzU3VibWl0dGVkIl0sInNvdXJjZXMiOlsidHlwZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQ2hhcmFjdGVySW5mbyB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBzdHJpbmc7XHJcbiAgc3BlY2llczogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBnZW5kZXI6IHN0cmluZztcclxuICBvcmlnaW46IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG4gIH07XHJcbiAgbG9jYXRpb246IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG4gIH07XHJcbiAgaW1hZ2U6IHN0cmluZztcclxuICBlcGlzb2RlOiBzdHJpbmdbXTtcclxuICB1cmw6IHN0cmluZztcclxuICBjcmVhdGVkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmlja0FwaVJlc3BvbnNlIHtcclxuICBpbmZvOiB7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgcGFnZXM6IG51bWJlcjtcclxuICAgIG5leHQ6IHN0cmluZztcclxuICAgIHByZXY6IG51bGwgfCBudW1iZXI7XHJcbiAgfTtcclxuICByZXN1bHRzOiBDaGFyYWN0ZXJJbmZvW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmlja0FwaUVycm9yIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9ybUNhcmRQcm9wcyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGRhdGU6IHN0cmluZztcclxuICBoYXNXZWFwb246IGJvb2xlYW47XHJcbiAgcHJlZmVycmVkU2lkZTogc3RyaW5nO1xyXG4gIGhvbWVQbGFuZXQ6IHN0cmluZztcclxuICBwaWN0dXJlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEVycm9ycyA9IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGF0ZTogc3RyaW5nO1xyXG4gIHdlYXBvbjogc3RyaW5nO1xyXG4gIHNpZGU6IHN0cmluZztcclxuICBwbGFuZXQ6IHN0cmluZztcclxuICBwaG90bzogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOZXdGb3JtQ2FyZFByb3BzIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGF0ZTogc3RyaW5nO1xyXG4gIGhhc1dlYXBvbjogYm9vbGVhbjtcclxuICBwcmVmZXJyZWRTaWRlOiBzdHJpbmc7XHJcbiAgaG9tZVBsYW5ldDogc3RyaW5nO1xyXG4gIHBpY3R1cmU6IEZpbGVbXTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRm9ybVN0YXRlID0ge1xyXG4gIGNhcmRzOiBGb3JtQ2FyZFByb3BzW107XHJcbiAgZXJyb3JNZXNzYWdlczogRXJyb3JzO1xyXG4gIGlzU3VibWl0dGVkOiBib29sZWFuO1xyXG59O1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxjQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxjQUFBO0FBZlosT0FBTyxVQUFVRSxhQUFhLENBQUM7RUFDN0JDLEVBQUUsRUFBRSxNQUFNO0VBQ1ZDLElBQUksRUFBRSxNQUFNO0VBQ1pDLE1BQU0sRUFBRSxNQUFNO0VBQ2RDLE9BQU8sRUFBRSxNQUFNO0VBQ2ZDLElBQUksRUFBRSxNQUFNO0VBQ1pDLE1BQU0sRUFBRSxNQUFNO0VBQ2RDLE1BQU0sRUFBRTtJQUNOTCxJQUFJLEVBQUUsTUFBTTtJQUNaTSxHQUFHLEVBQUUsTUFBTTtFQUNiLENBQUM7RUFDREMsUUFBUSxFQUFFO0lBQ1JQLElBQUksRUFBRSxNQUFNO0lBQ1pNLEdBQUcsRUFBRSxNQUFNO0VBQ2IsQ0FBQztFQUNERSxLQUFLLEVBQUUsTUFBTTtFQUNiQyxPQUFPLEVBQUUsTUFBTSxFQUFFO0VBQ2pCSCxHQUFHLEVBQUUsTUFBTTtFQUNYSSxPQUFPLEVBQUUsTUFBTTtBQUNqQjtBQUVBLE9BQU8sVUFBVUMsZUFBZSxDQUFDO0VBQy9CQyxJQUFJLEVBQUU7SUFDSkMsS0FBSyxFQUFFLE1BQU07SUFDYkMsS0FBSyxFQUFFLE1BQU07SUFDYkMsSUFBSSxFQUFFLE1BQU07SUFDWkMsSUFBSSxFQUFFLElBQUksR0FBRyxNQUFNO0VBQ3JCLENBQUM7RUFDREMsT0FBTyxFQUFFbkIsYUFBYSxFQUFFO0FBQzFCO0FBRUEsT0FBTyxVQUFVb0IsWUFBWSxDQUFDO0VBQzVCQyxPQUFPLEVBQUUsTUFBTTtBQUNqQjtBQUVBLE9BQU8sVUFBVUMsYUFBYSxDQUFDO0VBQzdCcEIsSUFBSSxFQUFFLE1BQU07RUFDWnFCLElBQUksRUFBRSxNQUFNO0VBQ1pDLFNBQVMsRUFBRSxPQUFPO0VBQ2xCQyxhQUFhLEVBQUUsTUFBTTtFQUNyQkMsVUFBVSxFQUFFLE1BQU07RUFDbEJDLE9BQU8sRUFBRSxNQUFNO0FBQ2pCO0FBRUEsT0FBTyxLQUFLQyxNQUFNLEdBQUc7RUFDbkIxQixJQUFJLEVBQUUsTUFBTTtFQUNacUIsSUFBSSxFQUFFLE1BQU07RUFDWk0sTUFBTSxFQUFFLE1BQU07RUFDZEMsSUFBSSxFQUFFLE1BQU07RUFDWkMsTUFBTSxFQUFFLE1BQU07RUFDZEMsS0FBSyxFQUFFLE1BQU07QUFDZixDQUFDO0FBRUQsT0FBTyxVQUFVQyxnQkFBZ0IsQ0FBQztFQUNoQy9CLElBQUksRUFBRSxNQUFNO0VBQ1pxQixJQUFJLEVBQUUsTUFBTTtFQUNaQyxTQUFTLEVBQUUsT0FBTztFQUNsQkMsYUFBYSxFQUFFLE1BQU07RUFDckJDLFVBQVUsRUFBRSxNQUFNO0VBQ2xCQyxPQUFPLEVBQUVPLElBQUksRUFBRTtBQUNqQjtBQUVBLE9BQU8sS0FBS0MsU0FBUyxHQUFHO0VBQ3RCQyxLQUFLLEVBQUVkLGFBQWEsRUFBRTtFQUN0QmUsYUFBYSxFQUFFVCxNQUFNO0VBQ3JCVSxXQUFXLEVBQUUsT0FBTztBQUN0QixDQUFDIn0=