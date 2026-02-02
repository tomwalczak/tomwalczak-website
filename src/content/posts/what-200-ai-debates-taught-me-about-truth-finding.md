---
title: "What 200+ AI Debates Taught Me About Truth-Finding"
description: "How to find truth in the age of \"podcastistan\""
date: "2025-06-26"
---

Over the past year, I've been building an AI debate system. Not as a novelty or demo, but as a serious attempt to answer a question: can AI help us find truth on complex, contentious topics?

After running hundreds of debates and analyzing the results, here's what I've learned.

## Building the AI judge turns out to be the hardest problem

When you set up an AI debate, you need something to evaluate who's winning. This sounds simple—just ask GPT-4 to judge—but it's where all the complexity hides.

The judge must:
- Weigh evidence quality, not just quantity
- Recognize when an argument actually responds to a challenge vs. when it deflects
- Distinguish between rhetorical moves and substantive points
- Account for the asymmetry between established positions and challengers

Every failure mode I've encountered in AI debates traces back to the judge. If the judge rewards confident-sounding prose, debaters learn to sound confident regardless of substance. If the judge can't recognize non-sequiturs, debaters learn to change the subject when cornered.

## Framing beats evidence

In nearly every debate I've run, the side that successfully established the frame won—even when the other side had stronger evidence.

For example, in a debate about nuclear energy, framing it as "nuclear vs. renewables" produces different winners than framing it as "reliable power vs. intermittent power" or "fear of radiation vs. actual energy deaths."

The frame determines which evidence is relevant. Once you accept a frame, the conclusion often follows automatically.

This isn't a bug—it's how human reasoning works too. The AI debates just make it visible.

## Mode collapse is real

Left to their own devices, AI debaters converge on a narrow band of arguments. They find what works against the judge and repeat variations of it.

This is the opposite of what you want in truth-seeking. You want exploration—surfacing arguments you haven't considered, stress-testing assumptions, finding the strongest version of each position.

The solution isn't obvious. You can force diversity with prompts, but then you get arguments that are different but weaker. The sweet spot—arguments that are both novel and strong—requires careful system design.

## The value isn't in declaring winners

After 200+ debates, I've stopped caring much about who wins. The real value is in the process:

- **Seeing the argument map**: What are all the considerations on each side? Which objections are actually responsive, and which are deflections?
- **Finding the cruxes**: Where do the two sides actually disagree, vs. where they're talking past each other?
- **Stress-testing intuitions**: When my preferred position gets challenged effectively, which of my beliefs are robust and which were just vibes?

The debate format forces both sides to engage with objections rather than cherry-pick evidence. That's the mechanism that produces insight.

## What's next

I'm building this into an open-source system that anyone can use to stress-test their arguments before publishing, explore unfamiliar debates, or just satisfy curiosity about complex topics.

The goal isn't to replace human judgment—it's to augment it. Give people access to the strongest version of every position, and let them decide what to believe.

More on this soon.
