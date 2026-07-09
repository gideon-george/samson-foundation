/**
 * One-off asset pipeline: copies the Foundation's raw field photos into
 * public/images, renaming to kebab-case, resizing to a web-friendly maximum,
 * and trimming the black letterbox bars off the relief-bag screenshots.
 *
 * Usage: npm run prepare-images -- "<path-to-raw-folder>"
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rawDir = process.argv[2];
if (!rawDir) {
  console.error("Pass the folder containing the raw photos as an argument.");
  process.exit(1);
}

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outBrand = path.join(projectRoot, "public", "images", "brand");
const outImpact = path.join(projectRoot, "public", "images", "impact");

/** raw filename -> { out, dir, trim } */
const MAP = [
  // Brand
  { raw: "1759780735153.jpg.jpeg", out: "samson-foundation-logo.png", dir: outBrand, logo: true },

  // Mobility aids & healthcare
  { raw: "FB_IMG_1755598573030.jpg.jpeg", out: "mobility/tricycle-presentation-team.jpg" },
  { raw: "IMG-20260113-WA0021.jpg.jpeg", out: "mobility/tricycle-handover-home.jpg" },
  { raw: "IMG-20260113-WA0024.jpg.jpeg", out: "mobility/tricycle-beneficiary-visit.jpg" },
  { raw: "IMG_20251019_083335.jpg.jpeg", out: "mobility/wheelchair-ready-for-delivery.jpg" },
  { raw: "IMG_20260111_183148.jpg.jpeg", out: "mobility/walker-support-young-man.jpg" },

  // Food & relief distribution
  { raw: "IMG_20230921_123517.jpg.jpeg", out: "relief/community-relief-gathering.jpg" },
  { raw: "IMG_20230921_123602.jpg.jpeg", out: "relief/relief-materials-distribution.jpg" },
  { raw: "IMG_20230921_123606.jpg.jpeg", out: "relief/relief-outreach-supplies.jpg" },
  { raw: "Screenshot_2024-12-26-15-00-08-050_com.miui.videoplayer.jpg.jpeg", out: "relief/food-parcels-prepared.jpg", trim: true },
  { raw: "Screenshot_2024-12-26-15-00-10-214_com.miui.videoplayer.jpg.jpeg", out: "relief/food-parcels-packed.jpg", trim: true },

  // Education & children
  { raw: "IMG_20230921_124017.jpg.jpeg", out: "children/children-gathered-outreach.jpg" },
  { raw: "IMG_20231018_165753.jpg.jpeg", out: "children/village-children-visit.jpg" },
  { raw: "IMG_20231018_165757.jpg.jpeg", out: "children/children-laughing-together.jpg" },
  { raw: "IMG_20231018_165914.jpg.jpeg", out: "children/children-selfie-joy.jpg" },

  // Women & widows / home visits
  { raw: "IMG_20250530_163244.jpg.jpeg", out: "homevisits/family-home-visit-encouragement.jpg" },
  { raw: "IMG_20250530_163536.jpg.jpeg", out: "homevisits/family-home-visit-together.jpg" },

  // Community outreach
  { raw: "IMG_20230921_123507.jpg.jpeg", out: "community/greeting-community-children.jpg" },
  { raw: "IMG_20230921_123541.jpg.jpeg", out: "community/community-visit-gratitude.jpg" },
];

const MAX_DIM = 2000;

await mkdir(outBrand, { recursive: true });

for (const item of MAP) {
  const src = path.join(rawDir, item.raw);
  const dest = item.dir
    ? path.join(item.dir, item.out)
    : path.join(outImpact, item.out);
  await mkdir(path.dirname(dest), { recursive: true });

  let img = sharp(src, { failOn: "none" }).rotate();

  if (item.trim) {
    // Remove the black letterbox bars around video screenshots.
    img = img.trim({ background: "#000000", threshold: 40 });
  }

  if (item.logo) {
    await img.resize(800, 800, { fit: "inside" }).png().toFile(dest);
  } else {
    await img
      .resize(MAX_DIM, MAX_DIM, { fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(dest);
  }
  const meta = await sharp(dest).metadata();
  console.log(`${item.raw} -> ${path.relative(projectRoot, dest)} (${meta.width}x${meta.height})`);
}
console.log("Done.");
