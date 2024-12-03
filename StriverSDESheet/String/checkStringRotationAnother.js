const stringRotation = (s, goal) => {
  if (s.length !== goal.length) return false;

  return (s + s).includes(goal);
};

console.log(stringRotation("abcde", "bcdea"));
