function cov_13cmx1kux5() {
  var path = "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\helpers\\generateCardData.ts";
  var hash = "51be94c14d449f7d4e616f789a195c1be08c565c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\RSS_React\\react-ssr\\rs-react\\react-components\\src\\helpers\\generateCardData.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 28
        },
        end: {
          line: 13,
          column: 1
        }
      },
      "1": {
        start: {
          line: 15,
          column: 34
        },
        end: {
          line: 26,
          column: 1
        }
      },
      "2": {
        start: {
          line: 28,
          column: 29
        },
        end: {
          line: 40,
          column: 1
        }
      },
      "3": {
        start: {
          line: 43,
          column: 16
        },
        end: {
          line: 43,
          column: 71
        }
      },
      "4": {
        start: {
          line: 44,
          column: 17
        },
        end: {
          line: 44,
          column: 74
        }
      },
      "5": {
        start: {
          line: 45,
          column: 22
        },
        end: {
          line: 45,
          column: 89
        }
      },
      "6": {
        start: {
          line: 46,
          column: 2
        },
        end: {
          line: 46,
          column: 40
        }
      }
    },
    fnMap: {
      "0": {
        name: "getRandomCardInfo",
        decl: {
          start: {
            line: 42,
            column: 16
          },
          end: {
            line: 42,
            column: 33
          }
        },
        loc: {
          start: {
            line: 42,
            column: 36
          },
          end: {
            line: 47,
            column: 1
          }
        },
        line: 42
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
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "51be94c14d449f7d4e616f789a195c1be08c565c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_13cmx1kux5 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_13cmx1kux5();
const titleList: string[] = (cov_13cmx1kux5().s[0]++, ['The Echo Wife', 'Snow Crash', 'Contact', 'A Canticle for Leibowitz', 'Solaris', 'Neuromancer', 'The Book of Phoenix', 'A Clockwork Orange', 'The Hitchhikers Guide to the Galaxy', 'This Is How You Lose the Time War', 'The Moon Is a Harsh Mistress']);
const descriptionList: string[] = (cov_13cmx1kux5().s[1]++, ['A group of astronauts on a mission to a distant planet discover a mysterious object that threatens to destroy their ship and the space-time continuum.', 'After a catastrophic event on Earth, a small group of survivors must band together to find a new habitable planet before their resources run out.', 'An experimental AI gains sentience and begins to question its existence, leading to a battle for control between humans and machines.', 'In a future where genetic modification is commonplace, a scientist must navigate the ethical and moral implications of creating the perfect human.', 'A time traveler accidentally changes a key event in history, leading to a dystopian future where an oppressive government holds all the power.', 'A group of rebels must fight against a tyrannical government that has outlawed all forms of advanced technology.', 'An alien invasion forces humans to band together and fight for their survival, while also confronting the ethical dilemmas that come with fighting for their species existence.', 'In a future where everyone`s thoughts are monitored and controlled, a small group of rebels must find a way to break free from the system and regain their agency.', 'A genetic experiment gone wrong results in a deadly virus that spreads across the world, leading to a race against time to find a cure before it`s too late.', 'An exploration team on a distant planet discovers a mysterious object that turns out to be an alien artifact with the power to change the course of human history.']);
const authorList: string[] = (cov_13cmx1kux5().s[2]++, ['Robert A. Heinlein', 'Max Gladstone', 'Douglas Adams', 'Anthony Burgess', 'Nnedi Okorafor', 'William Gibson', 'Stanislaw Lem', 'Walter M. Miller Jr.', 'Carl Sagan', 'Neal Stephenson', 'Sarah Gailey']);
export function getRandomCardInfo() {
  cov_13cmx1kux5().f[0]++;
  const title = (cov_13cmx1kux5().s[3]++, titleList[Math.floor(Math.random() * titleList.length)]);
  const author = (cov_13cmx1kux5().s[4]++, authorList[Math.floor(Math.random() * authorList.length)]);
  const description = (cov_13cmx1kux5().s[5]++, descriptionList[Math.floor(Math.random() * descriptionList.length)]);
  cov_13cmx1kux5().s[6]++;
  return {
    title,
    author,
    description
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTNjbXgxa3V4NSIsImFjdHVhbENvdmVyYWdlIiwidGl0bGVMaXN0IiwicyIsImRlc2NyaXB0aW9uTGlzdCIsImF1dGhvckxpc3QiLCJnZXRSYW5kb21DYXJkSW5mbyIsImYiLCJ0aXRsZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImF1dGhvciIsImRlc2NyaXB0aW9uIl0sInNvdXJjZXMiOlsiZ2VuZXJhdGVDYXJkRGF0YS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0aXRsZUxpc3Q6IHN0cmluZ1tdID0gW1xyXG4gICdUaGUgRWNobyBXaWZlJyxcclxuICAnU25vdyBDcmFzaCcsXHJcbiAgJ0NvbnRhY3QnLFxyXG4gICdBIENhbnRpY2xlIGZvciBMZWlib3dpdHonLFxyXG4gICdTb2xhcmlzJyxcclxuICAnTmV1cm9tYW5jZXInLFxyXG4gICdUaGUgQm9vayBvZiBQaG9lbml4JyxcclxuICAnQSBDbG9ja3dvcmsgT3JhbmdlJyxcclxuICAnVGhlIEhpdGNoaGlrZXJzIEd1aWRlIHRvIHRoZSBHYWxheHknLFxyXG4gICdUaGlzIElzIEhvdyBZb3UgTG9zZSB0aGUgVGltZSBXYXInLFxyXG4gICdUaGUgTW9vbiBJcyBhIEhhcnNoIE1pc3RyZXNzJyxcclxuXTtcclxuXHJcbmNvbnN0IGRlc2NyaXB0aW9uTGlzdDogc3RyaW5nW10gPSBbXHJcbiAgJ0EgZ3JvdXAgb2YgYXN0cm9uYXV0cyBvbiBhIG1pc3Npb24gdG8gYSBkaXN0YW50IHBsYW5ldCBkaXNjb3ZlciBhIG15c3RlcmlvdXMgb2JqZWN0IHRoYXQgdGhyZWF0ZW5zIHRvIGRlc3Ryb3kgdGhlaXIgc2hpcCBhbmQgdGhlIHNwYWNlLXRpbWUgY29udGludXVtLicsXHJcbiAgJ0FmdGVyIGEgY2F0YXN0cm9waGljIGV2ZW50IG9uIEVhcnRoLCBhIHNtYWxsIGdyb3VwIG9mIHN1cnZpdm9ycyBtdXN0IGJhbmQgdG9nZXRoZXIgdG8gZmluZCBhIG5ldyBoYWJpdGFibGUgcGxhbmV0IGJlZm9yZSB0aGVpciByZXNvdXJjZXMgcnVuIG91dC4nLFxyXG4gICdBbiBleHBlcmltZW50YWwgQUkgZ2FpbnMgc2VudGllbmNlIGFuZCBiZWdpbnMgdG8gcXVlc3Rpb24gaXRzIGV4aXN0ZW5jZSwgbGVhZGluZyB0byBhIGJhdHRsZSBmb3IgY29udHJvbCBiZXR3ZWVuIGh1bWFucyBhbmQgbWFjaGluZXMuJyxcclxuICAnSW4gYSBmdXR1cmUgd2hlcmUgZ2VuZXRpYyBtb2RpZmljYXRpb24gaXMgY29tbW9ucGxhY2UsIGEgc2NpZW50aXN0IG11c3QgbmF2aWdhdGUgdGhlIGV0aGljYWwgYW5kIG1vcmFsIGltcGxpY2F0aW9ucyBvZiBjcmVhdGluZyB0aGUgcGVyZmVjdCBodW1hbi4nLFxyXG4gICdBIHRpbWUgdHJhdmVsZXIgYWNjaWRlbnRhbGx5IGNoYW5nZXMgYSBrZXkgZXZlbnQgaW4gaGlzdG9yeSwgbGVhZGluZyB0byBhIGR5c3RvcGlhbiBmdXR1cmUgd2hlcmUgYW4gb3BwcmVzc2l2ZSBnb3Zlcm5tZW50IGhvbGRzIGFsbCB0aGUgcG93ZXIuJyxcclxuICAnQSBncm91cCBvZiByZWJlbHMgbXVzdCBmaWdodCBhZ2FpbnN0IGEgdHlyYW5uaWNhbCBnb3Zlcm5tZW50IHRoYXQgaGFzIG91dGxhd2VkIGFsbCBmb3JtcyBvZiBhZHZhbmNlZCB0ZWNobm9sb2d5LicsXHJcbiAgJ0FuIGFsaWVuIGludmFzaW9uIGZvcmNlcyBodW1hbnMgdG8gYmFuZCB0b2dldGhlciBhbmQgZmlnaHQgZm9yIHRoZWlyIHN1cnZpdmFsLCB3aGlsZSBhbHNvIGNvbmZyb250aW5nIHRoZSBldGhpY2FsIGRpbGVtbWFzIHRoYXQgY29tZSB3aXRoIGZpZ2h0aW5nIGZvciB0aGVpciBzcGVjaWVzIGV4aXN0ZW5jZS4nLFxyXG4gICdJbiBhIGZ1dHVyZSB3aGVyZSBldmVyeW9uZWBzIHRob3VnaHRzIGFyZSBtb25pdG9yZWQgYW5kIGNvbnRyb2xsZWQsIGEgc21hbGwgZ3JvdXAgb2YgcmViZWxzIG11c3QgZmluZCBhIHdheSB0byBicmVhayBmcmVlIGZyb20gdGhlIHN5c3RlbSBhbmQgcmVnYWluIHRoZWlyIGFnZW5jeS4nLFxyXG4gICdBIGdlbmV0aWMgZXhwZXJpbWVudCBnb25lIHdyb25nIHJlc3VsdHMgaW4gYSBkZWFkbHkgdmlydXMgdGhhdCBzcHJlYWRzIGFjcm9zcyB0aGUgd29ybGQsIGxlYWRpbmcgdG8gYSByYWNlIGFnYWluc3QgdGltZSB0byBmaW5kIGEgY3VyZSBiZWZvcmUgaXRgcyB0b28gbGF0ZS4nLFxyXG4gICdBbiBleHBsb3JhdGlvbiB0ZWFtIG9uIGEgZGlzdGFudCBwbGFuZXQgZGlzY292ZXJzIGEgbXlzdGVyaW91cyBvYmplY3QgdGhhdCB0dXJucyBvdXQgdG8gYmUgYW4gYWxpZW4gYXJ0aWZhY3Qgd2l0aCB0aGUgcG93ZXIgdG8gY2hhbmdlIHRoZSBjb3Vyc2Ugb2YgaHVtYW4gaGlzdG9yeS4nLFxyXG5dO1xyXG5cclxuY29uc3QgYXV0aG9yTGlzdDogc3RyaW5nW10gPSBbXHJcbiAgJ1JvYmVydCBBLiBIZWlubGVpbicsXHJcbiAgJ01heCBHbGFkc3RvbmUnLFxyXG4gICdEb3VnbGFzIEFkYW1zJyxcclxuICAnQW50aG9ueSBCdXJnZXNzJyxcclxuICAnTm5lZGkgT2tvcmFmb3InLFxyXG4gICdXaWxsaWFtIEdpYnNvbicsXHJcbiAgJ1N0YW5pc2xhdyBMZW0nLFxyXG4gICdXYWx0ZXIgTS4gTWlsbGVyIEpyLicsXHJcbiAgJ0NhcmwgU2FnYW4nLFxyXG4gICdOZWFsIFN0ZXBoZW5zb24nLFxyXG4gICdTYXJhaCBHYWlsZXknLFxyXG5dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUNhcmRJbmZvKCkge1xyXG4gIGNvbnN0IHRpdGxlID0gdGl0bGVMaXN0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRpdGxlTGlzdC5sZW5ndGgpXTtcclxuICBjb25zdCBhdXRob3IgPSBhdXRob3JMaXN0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF1dGhvckxpc3QubGVuZ3RoKV07XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbkxpc3RbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGVzY3JpcHRpb25MaXN0Lmxlbmd0aCldO1xyXG4gIHJldHVybiB7IHRpdGxlLCBhdXRob3IsIGRlc2NyaXB0aW9uIH07XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixNQUFNRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUFGLGNBQUEsR0FBQUcsQ0FBQSxPQUFHLENBQzFCLGVBQWUsRUFDZixZQUFZLEVBQ1osU0FBUyxFQUNULDBCQUEwQixFQUMxQixTQUFTLEVBQ1QsYUFBYSxFQUNiLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIscUNBQXFDLEVBQ3JDLG1DQUFtQyxFQUNuQyw4QkFBOEIsQ0FDL0I7QUFFRCxNQUFNQyxlQUFlLEVBQUUsTUFBTSxFQUFFLElBQUFKLGNBQUEsR0FBQUcsQ0FBQSxPQUFHLENBQ2hDLHdKQUF3SixFQUN4SixtSkFBbUosRUFDbkosdUlBQXVJLEVBQ3ZJLG9KQUFvSixFQUNwSixnSkFBZ0osRUFDaEosa0hBQWtILEVBQ2xILGlMQUFpTCxFQUNqTCxvS0FBb0ssRUFDcEssOEpBQThKLEVBQzlKLG9LQUFvSyxDQUNySztBQUVELE1BQU1FLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBQUwsY0FBQSxHQUFBRyxDQUFBLE9BQUcsQ0FDM0Isb0JBQW9CLEVBQ3BCLGVBQWUsRUFDZixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLHNCQUFzQixFQUN0QixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLGNBQWMsQ0FDZjtBQUVELE9BQU8sU0FBU0csaUJBQWlCQSxDQUFBLEVBQUc7RUFBQU4sY0FBQSxHQUFBTyxDQUFBO0VBQ2xDLE1BQU1DLEtBQUssSUFBQVIsY0FBQSxHQUFBRyxDQUFBLE9BQUdELFNBQVMsQ0FBQ08sSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUdULFNBQVMsQ0FBQ1UsTUFBTSxDQUFDLENBQUM7RUFDckUsTUFBTUMsTUFBTSxJQUFBYixjQUFBLEdBQUFHLENBQUEsT0FBR0UsVUFBVSxDQUFDSSxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBR04sVUFBVSxDQUFDTyxNQUFNLENBQUMsQ0FBQztFQUN4RSxNQUFNRSxXQUFXLElBQUFkLGNBQUEsR0FBQUcsQ0FBQSxPQUFHQyxlQUFlLENBQUNLLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHUCxlQUFlLENBQUNRLE1BQU0sQ0FBQyxDQUFDO0VBQUNaLGNBQUEsR0FBQUcsQ0FBQTtFQUN4RixPQUFPO0lBQUVLLEtBQUs7SUFBRUssTUFBTTtJQUFFQztFQUFZLENBQUM7QUFDdkMifQ==