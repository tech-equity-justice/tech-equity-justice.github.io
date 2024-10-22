import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getSortedMembersData(memberType) {
  const contentDir = `content/${memberType}`;
  const postsDirectory = path.join(process.cwd(), contentDir);
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((filter) => !filter.startsWith("."));

  // Get file names under /posts
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const content = matterResult.content.replace(
      /([^\n])\n([^\n])/g,
      "$1<br><br>$2"
    );

    // Combine the data with the id
    return {
      id,
      content,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort(({ name: a }, { name: b }) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
}
