// Free-to-use stock photography (Unsplash License) used as placeholder
// imagery across the site's media/gallery sections.
const u = (id, w = 800, h = 600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const IMG_SPEECH = u("photo-1544531586-fde5298cdd40"); // speaker addressing a crowd
export const IMG_ROAD = u("photo-1580289869586-3baf90956ccc"); // rural road / infrastructure
export const IMG_MEETING = u("photo-1758691737568-a1572060ce5a"); // community / group meeting
export const IMG_FLAGS = u("photo-1701590219284-c3cce0148be1"); // rally / parade with flags

export const GALLERY_IMAGES = [IMG_FLAGS, IMG_MEETING, IMG_ROAD, IMG_SPEECH];
