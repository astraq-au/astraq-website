export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;

// Re-enable previously public AI content by setting this to true before rebuilding.
export const SHOW_AI_CONTENT = false;

const AI_ASSETS = [
  "about-bg.png",
  "hero-video.mp4",
  "humanoid-robot.png",
  "humanoid-robot2.png",
  "images/human-robot",
  "images/massage-robot",
  "robot1.png",
  "robot2.png",
  "specifications/et-m-specification.docx",
  "specifications/et-m-specification.pdf",
];

export function isAiAsset(relativePath: string) {
  const assetPath = relativePath.toLowerCase();
  return AI_ASSETS.some(
    (asset) => assetPath === asset || assetPath.startsWith(`${asset}/`)
  );
}
