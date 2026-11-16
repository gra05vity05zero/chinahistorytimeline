import { stripRuby } from "@/lib/constants";

// Optional English text for the animated border maps (components/*BorderMap.jsx).
// t = { intro, prev, next, play, pause, replay, frames: [{ year, era, desc, names? }], dict? }
// Frames are index-aligned with each map's Japanese FRAMES. Faction names come from frames[i].names
// (index-aligned) or, if absent, from dict keyed by the ruby-stripped Japanese name.
export function localizeFrames(frames, t) {
  if (!t) return frames;
  if (t.frames.length !== frames.length) throw new Error("Border map translation: frame count differs");
  return frames.map((f, i) => {
    const tf = t.frames[i];
    if (tf.names && tf.names.length !== f.factions.length) throw new Error(`Border map translation: faction count differs in frame ${i}`);
    const nameOf = (x, j) => {
      if (tf.names) return tf.names[j];
      const n = t.dict?.[stripRuby(x.name)];
      if (!n) throw new Error(`Border map translation: no English name for ${stripRuby(x.name)}`);
      return n;
    };
    return { ...f, year: tf.year, era: tf.era, desc: tf.desc, factions: f.factions.map((x, j) => ({ ...x, name: nameOf(x, j) })) };
  });
}
