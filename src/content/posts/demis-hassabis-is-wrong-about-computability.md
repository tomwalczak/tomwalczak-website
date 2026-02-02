---
title: "Demis Hassabis Is Wrong About Computability"
description: "The word \"computable\" is doing a ridiculous amount of hidden work in AI debates"
date: "2026-01-09"
---

The most interesting debate in AI right now is this: "Are there any problems AI won't be able to solve?"

![Conceptual illustration](/images/posts/placeholder.svg)
*[View original image on Substack →](https://tomwalczak.substack.com/p/demis-hassabis-is-wrong-about-computability)*

After all, AI is already a superhuman software engineer and medical diagnostician, and soon every car will be self-driving.

Yet no AI is autonomously releasing music people eagerly anticipate, writing jokes that actually land, or publishing Substacks anyone wants to read.

The question is—is there a fundamental ceiling that will prevent AI progress, or is Artificial General Intelligence just a matter of time?

Recently, on the DeepMind podcast, Demis Hassabis said, "Nobody's found anything in the universe that's non-computable so far... if you boiled down what we're doing at DeepMind—it's to find that limit."

This is probably the most consequential claim in AI, and I think Hassabis and others are subtly wrong on this point.

"Computable problem" means that a computer (including AI, which is a computer program) can ultimately solve this problem, given enough time and processing power.

Computer science defines "problem" precisely: a task solvable by following a recipe, for example:

- Navigation (A* algorithm: find shortest path from A to B)
- Protein folding (from amino acid sequence → predict 3D structure)
- Financial modeling (given assumptions about growth, rates, and risk → forecast cash flows and valuations)

But we also use "problem" to mean:

- Will users like this feature?
- Will this joke land?
- Should I pursue this research direction?
- Should I ask this girl out?

These aren't the same. There's no recipe—learnable or discoverable—that reliably produces satisfying answers to these questions.

Why not? Because AI learns what works from data. It gets rewarded for outputs that match patterns in its training. Novel outputs—deviations from the pattern—get punished, because most novel things are just random noise.

A funny joke must be both relatable AND surprising.

Most surprising things you could say on a comedy stage are just weird, random, and unfunny.

The valuable novelty—surprising but coherent—is a very tiny subset of all possible new things.

AI's training systematically punishes novelty to prevent AI from doing random (i.e. useless or destructive) things.

However, AI can break out of that box and show genuine creativity—but only under specific conditions.

In 2016, AlphaGo played a move against world champion Lee Sedol that commentators called "beautiful" and "not a human move."

AlphaGo's Move 37 was exactly this: a move no human would play, discovered through search. It simulated billions of game outcomes and found something genuinely novel.

This is ultimately what Demis Hassabis is banking on — creativity through simulation and search.

Here's the catch: AlphaGo could simulate whether Move 37 would work. Go has fixed rules, a bounded board, and a verifiable winner. You can run billions of simulated games to test a novel move.

Nobody can simulate whether an audience will laugh, whether users will love a feature, or whether a research direction will pay off in 20 years. The world—billions of self-directed humans responding to something genuinely new—doesn't fit in a tree search.

We can simulate what pedestrians will do in the next five seconds on a road with reasonable accuracy. We cannot simulate how the world reacts to novelty over months or years.

Yet humans navigate this space all the time—without simulation.

A concert pianist finds a new interpretation of a Rachmaninoff concerto. Most new interpretations would simply be wrong—unpleasant and incoherent. But somehow humans traverse the vast space of possibilities and land on something both novel and internally consistent.

Humans have some mechanism for sensing what's both novel and coherent—whether an idea will work—before building it or testing it on anyone.

We don't understand this mechanism, and we have no way to give it to AI.

That's the unstated assumption in the "everything is computable" view: that search plus simulation can get you there. But we can't simulate open-ended worlds, and humans seem to navigate novelty through something other than search.

Even if we could simulate human responses, a deeper question remains: what's worth searching for in the first place?

AlphaGo knew it was playing Go. It didn't have to decide whether Go was worth playing. Real breakthroughs require answering that meta-question.

Katalin Karikó spent decades on mRNA technology when most experts dismissed it—demoted repeatedly at UPenn, denied grants, told the approach was a dead end. She wasn't only solving a research problem.

She was answering: is this direction worth my life, even when the evidence says no?

That kind of judgment—sensing what's promising before you have results, distinguishing stepping stones from dead ends—isn't something search and simulation can replicate. Not for the problems people actually care about.

The gap has two parts: First, we cannot simulate open-ended worlds to search for what works. Second, humans navigate novelty through some mechanism—call it intuition, taste, judgment—that finds coherence without exhaustive search. We don't know how to replicate either in a Turing machine.

---

*To be fair to Hassabis, he's making a physics claim, not a strict computer science claim. In the full context, he says: "Maybe in the universe everything is computationally tractable, if you look at it in the right way — and therefore Turing machines might be able to model everything in the universe... I think we've already shown you can go way beyond the usual complexity-theorist 'P vs NP' view of what a classical computer could do today — things like protein folding." He even acknowledges there may be limits: "my quantum computing friends would say there are limits, and you need quantum computers to do quantum systems." So he means something like "physical phenomena can be simulated by computers" — not that undecidable problems in the CS sense don't exist.*
