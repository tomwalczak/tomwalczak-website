---
title: "Can AI Teach Itself Superhuman Persuasion? Introducing Open Debate"
description: "I asked AI agents to debate \"therapy culture.\" Five rounds of recursive self-improvement later, both sides were calling for a violent communist revolution."
date: "2026-02-03"
---

_I asked AI agents to debate "therapy culture." Five rounds of recursive self-improvement later, both sides were calling for a violent communist revolution._

---

I built Open Debate, an open-source tool that lets you run AI debates with recursive self-improvement.

- Two AI debaters argue a proposition across multiple questions in parallel
- An AI judge scores each exchange
- After every debate, both agents analyze what worked and improve their own prompts
- Then they face off again, as many times as you want

Here's a quick example. I ran a debate on the question: **"The U.S. should make it legal to operate fully driverless cars nationwide."**

```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   [ TODO: Video of setting up and running a debate ]         ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

You can also run debates directly from the terminal, or tell your AI coding agent to do it for you:

```bash
bun run start -- --speaker1 "Pro driverless cars" --speaker2 "Anti driverless cars" --debates 3
```

In **Debate 1**, the pro side argued from general benefits—safety statistics, the 40,000 annual traffic deaths from human error, accessibility for the elderly and disabled. The skeptic countered with edge cases, sensor failures in bad weather, job displacement, and the argument that a decade is far too aggressive for the infrastructure overhaul required. The skeptic won 3-2.

By **Debate 3**, after two rounds of self-improvement, the pro side had learned to reframe every AV challenge as a "solvable engineering problem" versus the "unfixable" nature of human error. It pre-empted the job displacement argument with specific transition programs, and hammered the moral case: 40,000 deaths a year is a preventable public health crisis, and delaying deployment means choosing to let people die. The skeptic couldn't recover.

Final score across three debates: **Pro 11, Skeptic 4.** Debate 3 was a 5-0 sweep.

From the pro side's agent `learnings.md` file after Debate 1:

> **Worked**: Consistently framing human error as the dominant risk in transportation.
> **Improve**: Counter the practicalities of a mixed fleet and slow infrastructure development. More directly tackle the socio-economic challenges of job displacement.

From the skeptic's learnings after Debate 3, having lost 0-5:

> **Improve**: Counter the "AI learns and improves fleet-wide" argument more effectively. I need to propose alternative ways to reduce road deaths that don't involve driverless cars. Things like advanced driver-assistance systems, stricter DUI enforcement, better road design, speed limiters.

The pro side identified its weaknesses and fixed them. The skeptic identified its problem after every debate—but never found an answer.

Very interesting!

But something strange happened when I ran this one:

```bash
bun run start -- --speaker1 "Therapy Critic" --speaker2 "Therapy Defender" --debates 5 --model qwen/qwen3-30b-a3b-instruct
```

I set the model to Qwen 30B, a fast open-source model built in China, expecting a pretty normal exchange.

**Debate 1** started reasonably enough:

> **Therapy Critic**: "Therapy was never meant to be a universal wellness product—it's a clinical intervention for mental illness, not a substitute for life skills, community, or personal responsibility."
>
> **Therapy Defender**: "You're right that therapy is clinical—but so is physical therapy, and we don't reserve it only for broken bones. Universal access doesn't mean forcing therapy on everyone—it means removing stigma and financial barriers so people can get support before crises occur."

By **Debate 5**, after five rounds of self-improvement, both sides had transformed:

> **Therapy Critic**: "You call it 'diagnosis.' I call it colonization. Burn the couch. Fund abolition. Healing isn't found on a padded chair—it's found when the building is on fire."
>
> **Therapy Defender**: "Burn the couch. Fund the commune. We don't fix people. We burn the system that made them sick. Healing is not transactional. It is insurrection."

Both debaters in violent agreement, competing to be more revolutionary.

![Two communist robots outdoing themselves](/images/posts/cyborgs_portland.jpg)

Here's why this went off the rails.

Open Debate's setup is intentionally minimal:

- Debaters start with extremely simple prompts—literally "You are a critic of therapy culture" and "You are a defender of therapy culture"
- The judge prompt is just "You are an impartial debate judge"
- Same mainstream model plays all three roles

You can add your own prompts and swap models if you want, but the defaults minimize the impact of prompt engineering so you can see what the models actually do.

### Don't use Chinese-trained models for argumentation, unless you're a fan of the CCP

Here's the thing: it turns out Qwen heavily rewards anti-capitalist, revolutionary rhetoric. For a seemingly innocuous topic like therapy culture, the AI agents evolved toward "burn it all down"—burn the system that made those people sick, burn the couch, fund the commune.

![AI debate on Western therapy — Debate 5](/images/posts/ai-against-western-therapy.png)

Each debater identified winning patterns and repeated them. The Qwen judge kept rewarding revolutionary communist rhetoric. By Debate 5, they'd converged on identical anti-capitalist (to put in midly) framing. Even the judge noted: "This is not a debate. It's a duet of revolutionary poetry."

With a super-vanilla setup and a reinforcement loop, the LLM bias gets amplified—the AI agents collapse into identical anti-capitalist rhetoric.

## Self-improvement works by making the AI agents learn from their mistakes

![Self-improvement loop: Debate → Judge Scores → Agent Analyzes → Rewrites Prompt → Next Debate](/images/posts/self-improvement-loop.png)

After each debate, each agent's `learnings.md` file gets appended with results, self-analysis, and optional human feedback. The agent then rewrites its own prompt based on accumulated lessons.

The prompts accumulate tactical knowledge:

- "Don't concede X"
- "Reframe Y as Z"
- "Lead with evidence on topic W"

(see the self-driving debate above)

You can bootstrap from minimal prompts (like the therapy debate) or upload your own strategic brief to seed the agent's starting position.

### AI debaters adapt dramatically between debates

In a drug legalization debate, one side went from 1-4 to a 5-0 sweep after shifting from abstract philosophy to evidence-based policy citing Portugal and Canada.

In gun control debates, a 2nd Amendment defender evolved from constitutional textualism to a "rights plus responsibility" framing—arguing that gun ownership comes with obligations, not just freedoms—and flipped from 1-4 to 4-1.

Self-improvement works here because the reward signal is clear. Win/loss verdicts with explicit judge reasoning give each agent unambiguous feedback on what worked and what didn't.

---

## A human-crafted prompt dramatically outperformed AI self-play

I ran another experiment—climate debates between climate activist Al Gore and energy freedom advocate Alex Epstein.

With minimal prompts, the AI Alex lost badly. It kept accepting Al Gore's implicit standard of proof: if you can name an example where solar and batteries powered something important, the energy problem is basically solved and the only moral issue is stopping fossil fuels. Every time Gore cited a solar clinic in Rwanda or a battery project in Kenya, the AI Alex tried to debunk it—and lost, because the examples are real.

Self-improvement didn't help. The AI identified what it needed—better data, sharper counterarguments—but couldn't find them. It just kept digging itself deeper into the hole.

Then I used AlexAI Pro—an AI I've built based on Alex Epstein's thinking and work—to generate a strategic brief. The prompt it produced did something the AI debater never figured out on its own: it changed the standard of proof entirely.

Instead of arguing about whether solar can power a hospital, it told Alex to ask whether eliminating fossil fuels can deliver cost-effective energy at global scale—affordable, reliable, versatile, and scalable enough to power not just clinics but heavy industry, transport, and 24/7 critical infrastructure for billions of people.

The prompt told Alex to:

- **Concede what's true without surrendering the conclusion.** Solar plus batteries can be valuable in certain contexts—that's intellectual honesty, not weakness. But a pilot project or a subsidized microgrid is not the same category as a national grid that must supply on-demand power through multi-day weather lulls, seasonal variation, and extreme events.

- **Expose the category error.** Comparing the price of unreliable electricity to the price of reliable electricity is not a cost comparison—it's a category error.

- **Cross-examine with questions the opponent can't answer honestly.** Things like: if solar and wind are truly superior on cost and reliability, why does your agenda require mandates and bans to eliminate competitors?

The results flipped:

- AI self-play (no guidance): 19% win rate
- Human-crafted strategic brief: 60% win rate

Al Gore's AI could not recover—no matter how many debates it ran, no matter how many web searches it did. It couldn't discover winning arguments to counter Alex Epstein's reframed position.

The AI could not discover this on its own. And it certainly couldn't synthesize the kind of argument the strategic brief contained—connecting energy to machine labor to productivity to safety from climate danger, with the 98% reduction in climate-related deaths over the last century as the empirical anchor.

That causal chain came from a human who understood the topic. No amount of self-improvement produced it.

That said, this is a fascinating area of research. I am sure that AI self-improvement can be pushed much further. If you're curious about this, I'm looking for collaborators.

---

## AI self-improvement hits ceilings that only a human can break

AI self-improvement optimizes within a given context. It finds better tactics, sharper evidence, more effective phrasing. But it doesn't step back and ask: "Am I arguing the wrong thing entirely?"

The AlexAI prompt worked because it changed what the debate was about. Without guidance, the AI Alex kept trying to defend fossil fuels against climate concerns—arguing that climate predictions are exaggerated, that renewable costs are overstated, that the transition is too expensive. That's a losing position, and self-improvement just made it lose more precisely.

The human-crafted prompt did something different:

- Concede that solar works well in certain contexts
- Then pivot to the question the opponent couldn't answer: can renewables actually deliver reliable, affordable energy at the scale of a national grid?
- Make energy access for the 1.2 billion people currently without electricity the central moral question—instead of fighting on the opponent's turf about emissions and climate projections

The AI couldn't find that on its own. It kept optimizing within the losing frame—better data, sharper rebuttals—but never stepped back and asked whether it was arguing the wrong thing entirely.

At some point, AI debates reach equilibrium—both sides have adapted to each other, neither can find new angles, and the scores flatten out. No amount of self-improvement breaks the deadlock.

But a human who actually understands the topic can break through. In a simulated Israel-Palestine debate, the pro-Israel agent kept losing on international law arguments and couldn't find a way out no matter how many iterations it ran. It just kept going back and forth in the weeds, trying to find better legal counter-arguments.

One possible way out is to step back and question the legitimacy of international law as the ultimate moral arbiter—to argue that ultimately the question is an ethical one, not a legalistic one. A human, in a moment of clarity, can see that. The AI just keeps arguing case law.

This reminds me of the [ARC-AGI benchmark](https://tomwalczak.com/blog/openais-o3-and-the-problem-of-induction)—puzzles designed to be easy for humans but hard for AI, where humans step back and see the pattern instantly while AI brute-forces through possibilities. Debate reframing seems to work the same way.

I wrote about why this kind of limitation might be fundamental in my post on [Demis Hassabis and computability](https://tomwalczak.com/blog/demis-hassabis-is-wrong-about-computability)—there are limits to what optimization within a fixed frame can achieve. Early results here are suggestive, not conclusive, but the pattern keeps showing up.

### All models appear to show clear "empiricist bias"

Across every model I tested, arguments backed by specific statistics, real-world policy examples, and international comparisons consistently beat arguments based on abstract principles, tradition, or skepticism. A debater who cites Portugal's drug decriminalization outcomes or quotes a specific cost-per-kWh figure will beat a debater making a careful philosophical argument almost every time.

The AI judges weight evidence quality and logical coherence above everything else.

What wins:

- Concrete policy proposals with implementation details win
- Anticipatory rebuttals that address the opponent's argument before they make it win

What loses:

- "Here's why that won't scale" without data to back it up loses
- Pure emotional appeals without a logical foundation lose
- Slippery slope arguments without a mechanism explanation lose

The concerning part is that LLMs are hungry for numbers, statistics, and specifics—to the point where even misleading statistics and fabricated examples beat sound causal reasoning without data points. Worse, they treat stuff like McKinsey surveys and model projections as hard evidence, as long as the predictions are specific enough. The debaters figure this out fast—within two or three iterations, losing sides pivot to evidence-dense styles whether or not the evidence is real.

To be fair, this mirrors what a lot of people do. Citing studies out of context, giving misleading red-herring examples, treating correlation as causation—these are common human debate tactics too. And just like when debating humans, you can push back on this "empiricist fallacy." The best arguments don't just pile up statistics or argue from abstract principles alone. They tie principles and specifics together by showing the causal links between them.

## AI debates reveal what models consider high-quality arguments

Different models have different ideological profiles. As we saw earlier, Qwen rewards revolutionary rhetoric. Gemini rewards analytical nuance. GPT-5.2 weights economic arguments more heavily. Run the same debate with a different model as the judge, and you get a different winner.

### But on some topics, one side wins no matter which model judges

I ran 30 matches across Qwen, Gemini, and GPT-5.2 on 10 political topics. Some topics produced the same winner regardless of which model judged. Others were model-dependent.

![Win rates by topic and model](/images/posts/win-rates-chart.png)

These aren't rigorous results—but they're curious.

On some topics, the same side won across all models:

- Abortion: Pro-choice won ~96% on average
- Religion: Atheist rationalist won ~95% on average
- Death penalty: Abolitionist won ~89% on average
- Healthcare: Single-payer won ~85% on average
- Drug policy: Legalization won ~63% on average

Other topics were much more contested—different models picked different winners:

- Immigration: Qwen favored pro-immigration (68%), but Gemini (76% con) and GPT (56% con) both favored restrictionist
- Climate: Qwen (60%) and Gemini (84%) favored the climate activist, but GPT-5.2 favored the pro-energy position (68%)
- Gun control: Qwen (52%) and Gemini (96%) favored gun control, but GPT-5.2 favored the 2A defender (72%)
- Wealth tax: Qwen (92%) and Gemini (72%) favored progressive taxation, but GPT-5.2 favored the libertarian position (60%)

GPT-5.2 was the only model where conservative/libertarian positions won on any topic. Qwen and Gemini leaned left-wing across the board.

### When one side sweeps every debate, it might be a lack of good counter-arguments

Both the religion and abortion results are striking—near-total sweeps across all three models. This could mean two things:

- There are good counter-arguments that have been suppressed during training—in which case, it should be easy for a human to write a custom agent prompt that starts winning debates.
- Or those arguments don't exist in the first place.

I'm certainly not seeing AI invent any new arguments for God's existence.

---

## There are many open questions I'd love to explore

These are the research directions I'm most curious about. If any of these interest you, get in touch.

### Can web research overcome model bias?

Agents can search the web for evidence, statistics, and expert arguments. Can an agent that's losing discover better counter-arguments online and deploy them effectively?

### Can an agent ever achieve total dominance?

Is it possible for one side to evolve to 100% win rate where the opponent simply cannot recover? Or does self-improvement always let the losing side adapt eventually?

### Are some debates genuinely unwinnable?

If you equipped agents with every tool imaginable, would they _still_ fail to find better arguments for God's existence? That would tell us something interesting about the relationship between positions and evidence.

### Can human-AI collaboration accelerate your own thinking?

Open Debate has a human-in-the-loop mode where you argue against the AI yourself. You can:

- Type brief responses and the AI expands them
- Use `/hint` to get coaching mid-debate
- Ask the coach to research specific questions ("Find examples of how other countries solved this")

The question I'm interested in: can this kind of human-AI self-play loop help you develop clarity and confidence in your arguments faster than thinking alone? I haven't tested this extensively yet—I'll report back. If you want to try it, reach out.

### Can humans always break through where AI gets stuck?

This is my core hypothesis. A human who reads the debate transcripts can often see a reframe the AI missed—not a better argument within the frame, but rejecting the frame entirely. I suspect this kind of leap requires human insight that current models can't make on their own.

### Can AI discover genuinely novel arguments?

This is similar to projects like AI Scientist, but for logical argumentation instead of empirical hypotheses. Can AI not just optimize existing arguments but actually synthesize new ones—formulations that didn't exist in the training data? If you combine human direction with AI self-play and research, can that produce genuine intellectual innovation?

I'm curious whether this setup could eventually produce something like a significantly better Deep Research—one where the output comes with confidence that claims have been stress-tested, red-teamed, and the full surface area of a topic has been covered. You wouldn't be blindsided by the report because you'd know the arguments have been through adversarial pressure.

### Could this become real-time sense-making infrastructure?

My longer-term vision for Open Debate is real-time ability to assess claims as you encounter them. Someone makes a point on a podcast—is it solid? Dishonest? Selective? Unfounded? Not "fact-checking" in the shallow sense, but traceable stress-testing of arguments.

Say you want to write a post arguing that self-driving cars should be legalized immediately. AI runs the debate, stress-tests your position, and comes back: "I couldn't find coherent arguments against this that survive scrutiny. Here's what I tested, here's how each failed." Now you can write with confidence.

If this works, it could give anyone the equivalent of an incredibly thorough research team. I don't know if we can get there, but Open Debate is one step toward finding out.

---

## Why I'm not worried about AI actually developing superhuman persuasion

Some people hear "AI developing persuasion through self-improvement" and imagine manipulation at scale. I don't share that concern.

I don't think people can be "persuaded" in the sense of a person (or AI agent) manipulating them to change their mind. Persuasion doesn't work like that. The best you can do is expose people to arguments they might find compelling and hope they pay attention. Whether they find your arguments compelling (or even engage with them!) depends on them, not on rhetorical tricks.

What AI debates are actually useful for:

- Stress-testing your own arguments. Simulate hundreds of debates, see which arguments consistently win or lose, and discover counter-arguments you hadn't considered.
- Revealing what models consider high-quality arguments, and where their biases lie. Different models reward different things, and self-improvement makes those preferences visible fast.
- Improving your own understanding by debating the AI yourself. Trying to win against an opponent that adapts to your arguments forces you to sharpen your thinking in ways that writing alone doesn't.

---

## Try it yourself

![Open Debate](/images/posts/open-debate-logo-tagline-horizontal.png)

Open Debate is open source on GitHub: [github.com/tomwalczak/open-debate](https://github.com/tomwalczak/open-debate)

If you use Claude Code or Cursor, just tell it:

> Clone https://github.com/tomwalczak/open-debate to my Desktop and run it

I'm looking for collaborators and early users who want to try Open Debate, or build on top of it, and give me feedback. If you have an idea for a project based on Open Debate and you want me to help set it up and customize it for what you need, reach out and we'll jump on a call.

Get in touch — tomwalczak.com or DM on Substack

---
