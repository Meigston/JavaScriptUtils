function pathCombine(...args) {
  // Convert the args in a Array
  const paths = Array.from(args);

  // Remove all paths empty or null
  const filteredPaths = paths.filter(p => p && p.trim() !== "");

  // Join the paths using (/) slash by separator
  const combinedPath = filteredPaths.join("/");

  // Retunr complete path
  return combinedPath;
}

/** 
pathCombine("path1", "path2", "path3"); // Return "path1/path2/path3"
pathCombine("path1/", "/path2", "//path3/"); // Return "path1/path2/path3"
pathCombine("", "path2", null, "path3"); // Return "path2/path3"

*/