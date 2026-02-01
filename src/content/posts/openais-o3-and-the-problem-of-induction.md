---
title: "OpenAI's o3 and the Problem of Induction: AI Doesn't Learn Like Humans (Yet)"
description: "What If It Could?"
date: "Jan 4, 2025"
---

Can AI learn like humans—forming causal models and leaping beyond its training data to discover genuinely new insights? Despite exciting milestones, I argue that current models, including OpenAI's o3, are still limited by a 'shallow' form of induction. Here's why.

## Does AI Learn the Same Way Humans Do?

Traditionally, "induction" means drawing broad conclusions from specific observations: we hear many spoken sentences and figure out grammar, we watch traffic at various times and notice when roads are busiest, we pay attention to seasonal changes and learn about weather patterns, and so on.

AI researchers often describe AI's learning in similar terms. An AI model looks at thousands or millions of examples (like English sentences or photos of pedestrians) and discerns general rules, such as grammar or how to detect a person in the road.

As Vaden Masrani, an LLM researcher, puts it: "Machine learning is induction". However, if AI truly learned exactly like humans—only much faster—why hasn't it already transformed every knowledge-based job?

One reason, Vaden argues, is that AI's training data is limited and curated by engineers, creating an "artificial universe" that only resembles our real one. Because induction can't guarantee universal truths from finite data, AI remains bound by its training distribution, struggling to produce genuinely novel insights.

## Is Machine Learning Induction?

It's important to spell out what we mean by 'induction,' since the word can mean different things. In formal logic, induction refers to inferring a general rule from specific examples—like seeing many white swans and concluding 'all swans are white.' This method of learning is fundamentally limited and will never arrive at true, universal laws—something that's essential if AI is to move from being a "super intern" to a "machine thinker."

But there's also a more human sense of induction, which involves exploring, forming hypotheses, testing them in various conditions, and refining theories about how the world works. This goes well beyond just observing examples and finding common patterns; it involves developing causal models of the world.

While I mostly agree with Vaden that current machine learning is a form of induction—in the formal, logical sense—I think we risk conflating these two very different meanings, which can obscure just how far AI remains from truly human-like understanding.

## How Humans Use Induction

Like AI, humans also learn from observations but we don't just passively absorb patterns—we actively explore our world and construct causal models that explain what we observe. A child might stack blocks to see how high they can go before toppling, figuring out basic principles of balance and gravity in the process. Likewise, a scientist doesn't simply collect data; he proposes a theory, runs an experiment, and revises that theory based on the results. This constant interplay of observation, hypothesis-testing, and real-world exploration is key to human induction—and it's key to understanding why we can learn so efficiently and flexibly.

One of the most remarkable aspects of human learning is our ability to form entire concepts from just a handful of examples. Show a toddler a single new animal, and she'll quickly categorize it based on prior knowledge ("It has feathers and a beak—it must be a bird!").

By contrast, most AI systems need thousands—even millions—of labeled images to achieve the same feat. Our brains take advantage of deeply interconnected knowledge to shortcut the process. Rather than memorizing raw data, we integrate fresh observations into a web of existing knowledge about how animals move, what features they usually have, and how they fit into the broader ecosystem.

In short, while AI learns patterns, humans actively test and refine theories.

## Why o3 Is Significant

That's why OpenAI's new o3 model scoring 87.5% on the Abstraction and Reasoning Corpus (ARC) is so impressive. The ARC test is set up like a series of puzzles: you get a small number of examples, and you have to generalize the hidden rule to tackle a fresh puzzle. Crucially, the ARC test is designed to be resistant to memorization - the puzzles are unique enough that the AI would not have seen them during training and has to innovate solutions on-the-fly. ARC is designed to be easy for humans, but hard for AI. Most previous models, even powerful ones, only managed around 20%, so nearly 88% is huge.

To make sense of it, I like to compare GPT-4 to someone who thinks "off the cuff." It responds in a single pass without much behind-the-scenes deliberation. The "reasoning models", on the other hand, are more like someone who jots down a few different ideas in a private notebook and then picks the best one. This approach is closer to what we call "System Two" thinking in humans—a more careful, step-by-step way of reasoning.

Even though o3 relies on massive amounts of computation (from $17-20 per task to as much as $2,000 per task) searching through vast numbers of potential solutions, it seems like a big step towards understanding how to build a more general, human-like AI.

## 'Why' Matters for AI

So what would it take to build AI capable of human-like learning but at a super-human speed? In my view, we need a different understanding of induction - how to go from observations ("data") to universally useful, general principles that apply in any situation, not just the ones similar to training data. This would require inventing new architectures that help AI efficiently learn causal explanations during training and apply them during inference.

Philosophers often illustrate induction through the maxim "All swans I've observed are white—therefore all swans must be white." Incidentally, this is in principle how AI learns right now. You can feed it endless images of white swans, and it will eagerly classify them as 'white swan' every time.

The problem is that, without dedicated training data, AI lacks any deeper understanding of animal biology, so the sudden appearance of a black swan causes confusion — and you get what AI engineers call an "edge case".

But real human reasoning goes far deeper: humans seek out the "why" behind observations. Human induction cannot be captured simply as a series of symbolic statements; it relies on layered causal and conceptual frameworks that transcend enumerative pattern-matching.

By contrast, you would gladly bet all your money against encountering a two-headed, scale-covered "swan". That's not simply a missing color or a minor variation; it violates fundamental principles of animal biology, from skeletal structure, nervous system, to environmental constraints.

In contrast, current AI systems lack this layered causal grounding. If an AI's training data only includes white swans, the system is all the more likely to conclude that all swans must be white. Without built-in causal understanding, it has no reason to suspect that color is merely a superficial trait—or that there could be variations not reflected in its training data.

What would it mean if AI had child-like inductive abilities at superhuman speed? Imagine it learning an entire profession in days. From coding to legal research to creative content creation, a single individual could theoretically spin up hundreds of AI 'workers' overnight, scaling a one-person operation into a billion-dollar enterprise. This, I think, is the ultimate promise of AI.

Despite o3's impressive score on the ARC benchmark, its core mechanism involves synthesizing millions of useful mini-programs via passive exposure to human-generated content—an approach that, while powerful, differs from the active causal exploration characteristic of human reasoning.

As a result, without a causal model of the world, AI will continue to struggle with novel, never-before-seen scenarios. For example, analyzing an unexpected geopolitical situation, finding a cheaper replacement for carbon fiber (despite its vast knowledge of material science), or attempting creative writing—without a grasp of why certain comedic or narrative elements resonate—will lead AI to keep producing formulaic, hollow scripts that lack impact or emotional depth.

In my consulting work building AI expert systems—whether they're acting as energy and climate experts, venture capital associates, or sales coaches—I've observed first-hand that success depends more on carefully providing high-quality human expertise and structuring tasks into step-by-step instructions. If AI truly learned by induction, it wouldn't need this level of scaffolding. We'd be able to hand it an open-ended problem, a few general pointers, and it would figure out a clever solution on its own. But right now, we're far from that.

There is also a risk in assuming that AI either already has—or will soon have—human-like inductive abilities. We might delegate critical judgment to systems that lack genuine causal understanding. This assumption has even fueled concerns that continuing current trends could lead to an "intelligence explosion" we can't control.

In reality, today's AI is more of a 'super-intern' than a free-thinking expert, we can better leverage it for what it does best—recognizing complex patterns at scale—and focus our research and engineering efforts on bridging that critical gap toward truly flexible machine intelligence.
