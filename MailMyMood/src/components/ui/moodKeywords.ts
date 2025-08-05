export const moodKeywords = {
  happy: ["happy", "joyful", "excited", "cheerful", "grateful", "content", "glad", "fun", "smile", "sunny", "yay", "nice", "cool", "great", "good", "awesome", "fine", "bright"],
  sad: ["sad", "down", "depressed", "blue", "crying", "low", "hurt", "bad", "broken", "tears", "meh", "not good", "worried", "upset", "alone", "dark", "pain", "hopeless"],
  angry: ["angry", "mad", "pissed", "annoyed", "irritated", "upset", "ugh", "rude", "mean", "hate", "frustrated", "shouting", "fight", "yelling", "rage", "stop", "no"],
  anxious: ["anxious", "nervous", "scared", "worried", "shaky", "panic", "afraid", "help", "idk", "confused", "stress", "sweaty", "uneasy", "overthinking", "thinking too much"],
  tired: ["tired", "sleepy", "lazy", "done", "drained", "worn", "exhausted", "slow", "zzz", "no energy", "bored", "dead", "ugh", "can’t", "nap", "rest"],
  lonely: ["lonely", "alone", "miss", "empty", "quiet", "ignored", "nobody", "isolate", "unseen", "nvm", "left", "single", "nothing", "who cares", "forgotten"],
  excited: ["excited", "yay", "woohoo", "omg", "can’t wait", "fun", "buzzing", "party", "happy tears", "best day", "thrilled", "awesome", "vibe", "alive", "pumped", "let's go"],
  confused: ["confused", "what", "idk", "unsure", "maybe", "don’t know", "weird", "lost", "mixed", "can’t tell", "strange", "stuck", "thinking", "no idea"],
  relaxed: ["relaxed", "calm", "peaceful", "easy", "chill", "cool", "fine", "okay", "smooth", "zen", "laid back", "comfy", "soft", "silent", "quiet", "breathe"],
  motivated: ["motivated", "ready", "focus", "go", "let's do this", "grind", "work", "yes", "on it", "pumped", "do it", "keep going", "up", "move", "run", "win", "believe", "start"],
  bored: ["bored", "nothing", "meh", "waiting", "blah", "slow", "idle", "no fun", "ugh", "same", "yawn", "blank", "why", "again", "stuck"]
};

export function getMoodCategory(lowerMood: string): string | undefined {
  return Object.entries(moodKeywords).find(([_, words]) =>
    words.some(word => lowerMood.includes(word))
  )?.[0];
}
