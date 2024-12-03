var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  const freq1 = {};
  const freq2 = {};
  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in freq1)) {
      freq1[s[i]] = i;
    }

    if (!(t[i] in freq2)) {
      freq2[t[i]] = i;
    }

    if (freq1[s[i]] !== freq2[t[i]]) return false;
  }
  return true;
};

console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("egg", "add"));
