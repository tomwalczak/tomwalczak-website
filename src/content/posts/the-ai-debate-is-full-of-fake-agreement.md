---
title: "The AI Debate Is Full of Fake Agreement"
description: 'Is "PhD-level AI" even a thing? Is "sycophantic" AI dangerous? And are the AI labs close to achieving "recursive self-improvement"?'
date: "2026-06-03"
---

“We don’t know how it thinks. It hallucinates.”

![Bill Maher’s “New Rule” segment on AI, captioned “OpenAI Says AI Hallucinations Are Systemic, Not a Bug” over a collage of sci-fi movie posters](/images/posts/fake-agreement-maher-segment.png)

In a recent segment, Bill Maher said AI is “a liar” and “gets emotional.” It “just gets shit dead wrong.”

It might tell you the Bee Gees wrote “Let It Be,” that Nazis were black, or that you should put glue on pizza to keep the cheese from falling off.

I found that to be an odd way to talk about AI hallucinations.

The way I use the term is much narrower: a model fabricating a fake citation, a fake source, or a non-existent fact and presenting it as real.

Those are not the same problem.

Maher is using “hallucination” to mean almost any strange or wrong AI output. I tend to mean a very specific failure mode. So we both agree that AI “hallucinations” are a problem, but we mean two very different things.

This happens all the time in the AI debate. A term that sounds technical — “hallucination”, “recursive self-improvement”, “AI safety”, “PhD-level AI” — often packages several different meanings inside one phrase.

It turns out that this ambiguity is useful to almost everyone.

![A tweet: “I’m addicted to vibe coding and spending my nights and weekends letting the AI psychosis wash over me.”](/images/posts/fake-agreement-vibe-coding-tweet.png)

AI labs use ambiguity when they describe their models as “reasoning” or “PhD-level”, because it makes their AI sound really impressive.

Some AI critics use it as a stand-in for “AI is broken” and “nobody understands how this works.”

And policymakers benefit from it because a phrase like “AI safety” lets people who disagree about the actual risks still rally around the same vague rule.

## Hallucination

For example, you might understand an AI “hallucination” to mean a model fabricating a fact, source, quote, or citation and presenting it as real.

That is the narrow technical meaning of the term, and it is still the most useful one.

> **Footnote:** “Confabulation” is probably a better term. The model isn’t perceiving something that isn’t there. It is filling a gap with plausible-sounding content.

This kind of hallucination was a major problem in the early LLM era. Early versions of ChatGPT would make up facts about celebrities, invent citations to papers that did not exist, or produce footnotes that looked perfectly real until you tried to click them.

That still sometimes happens, especially in the free version of ChatGPT and it some edge-cases.

![The Verge headline: “Google promised a better search experience — now it’s telling us to put glue on our pizza.”](/images/posts/fake-agreement-glue-pizza.png)

But it is much less common in the leading AI models than it was in 2022 or 2023.

The models are better trained to admit uncertainty, many products now connect them to web search or private knowledge bases, and developers have learned to build AI products in ways that reduce the chance that the model has to guess from memory.

In my own work building AI systems, the failure mode I see most often is not the model simply inventing a fact from nowhere. When AI makes a mistake, it’s usually because the model was given bad or insufficient context, retrieved the wrong material, followed misleading instructions, relied on outdated information, or expressed more confidence in its claims than the evidence justified.

But in public debate, “hallucination” often means something much broader and vague.

![New York Times headline: “Bing’s A.I. Chat: ‘I Want to Be Alive 😈’”](/images/posts/fake-agreement-bing-sydney.png)

AI critics often use it as a catch-all for almost any AI failure: a model fabricating a source, a chatbot behaving strangely, an image generator producing an absurd output, a search product giving bad advice, or an AI system simply getting something wrong.

A good example of this is the way Bill Maher used “hallucination” in his [April 2026 New Rule segment on AI](https://www.realclearpolitics.com/video/2026/04/18/maher_on_sociopaths_behind_ai_shut_the_whole_thing_down_until_we_can_figure_out_what_the_hell_is_going_on.html).

Maher said the AI “hallucinates” and “it just gets shit dead wrong” and then listed some really questionable examples:

- the Bing chatbot “Sydney” declaring its love for NYT reporter [Kevin Roose in 2023](https://www.nytimes.com/2023/02/16/technology/bing-chatbot-transcript.html) (“you’re married, but you don’t love your spouse, you love me”)
- Google Gemini generating [racially diverse Nazis in early 2024](https://apnews.com/article/google-gemini-ai-image-generator-diversity-232c0244b73f2e7880ae053e8f52ba7b) (Maher frames it as “AI tells you that Nazis were black”)
- Google’s AI Overviews telling people to [put glue on pizza](https://www.theverge.com/2024/5/23/24162896/google-ai-overviews-glue-pizza-search-results) to keep the cheese from falling off
- a model claiming the Bee Gees wrote Let It Be

Only the Bee Gees one is anything like a hallucination in the original sense, and all these examples are from 2023-2024, which was the early LLM era. (I would challenge anybody to try to reproduce these specific examples in the current version of Claude or ChatGPT.)

## Recursive self-improvement

“Recursive self-improvement” sounds like one of those precise, technical terms where everyone probably means the same thing.

They don’t.

The dramatic version is easy enough to understand: an AI system improves itself, the improved version is then better at improving itself, and the process repeats. At the limit, you get an AI system that can create its own successor without any human involvement. This is one of the mechanisms people have in mind when they talk about an “intelligence explosion.”

![YouTube thumbnail reading “RECURSION HAS STARTED,” featuring Google DeepMind’s Mostafa Dehghani](/images/posts/fake-agreement-recursion-deepmind.png)

But in practice, the phrase now gets used for several different things.

The weakest version is simply “**AI-assisted AI development**”.

Engineers at OpenAI, Anthropic, Google DeepMind, and other labs use AI tools while building the next generation of AI systems. They use them to write code, summarize papers, debug experiments, generate test cases, analyze logs, and do all the other things software engineers and ML researchers use AI for.

That is completely to be expected, and it makes frontier labs much more productive.

But it is not the same thing as an AI system improving itself.

A stronger version is a **partially automated research loop.** In this version, AI systems don’t just help individual engineers write code faster.

They start to run more of the research process: proposing experiments, launching training runs, evaluating results, comparing model variants, writing up findings, and suggesting the next experiment.

Human researchers still set the goals, control the infrastructure, make judgement calls, and decide what ultimately gets released as the next Claude or GPT model.

![YouTube thumbnail: Mark Zuckerberg on the Dwarkesh Patel podcast — “Can synthetic data unlock AI recursive self-improvement?”](/images/posts/fake-agreement-recursion-zuckerberg.png)

That would also be a big deal.

A lot of AI research involves trial and error: trying different training methods, datasets, evaluation techniques, model architectures, and post-training recipes. If AI can automate more of that loop, AI labs could move much faster.

But even that is not the same thing as fully autonomous recursive self-improvement.

That would mean something much stronger: an AI system that can take the role now played by the lab itself. It would identify the research direction, design the successor model, run the experiments, solve the engineering problems, evaluate the result, and create a more capable version of itself with little or no human supervision.

Those are three very different claims.

This distinction matters because people often slide between different meanings of “self-improvement”.

For example, Dean Ball, usually one of the more careful AI policy writers, [recently argued](https://www.hyperdimensional.co/p/on-recursive-self-improvement-part) that automated AI research is not “science fiction” but in fact it’s well underway:

> Make no mistake: AI agents that build the next versions of themselves are not “science fiction.” They are an explicit and public milestone on the roadmap of every frontier AI lab.

He then describes a future in which frontier AI labs have “hundreds of thousands of automated research ‘interns’” and where the vast majority of frontier AI lab staff “will neither sleep nor eat nor use the bathroom.”

Even with Ball’s caveats, what he calls “automated AI research” is better understood as OpenAI engineers using an unreleased GPT model as a coding and research assistant while building the next version of ChatGPT. In that sense, human engineers were fully in charge of improving the AI, rather than an AI system autonomously creating its own successor.

This is similar to declaring that Apple achieved “automated MacBook engineering” because Apple engineers used unreleased MacBook Pros while working on the next line of MacBooks.

The tool can make the engineers dramatically more productive, but that does not make the tool the engineer.

- AI-assisted AI development is a very obvious development and it’s clearly happening.
- Partially automated research loops are plausible and would be a very big advancement.
- Fully autonomous recursive self-improvement would be a world-changing event.

But if the same phrase is used for all three, the debate around AI “self-improving” stops making sense. One moment we are talking about engineers getting better tools. The next moment we are talking about AI systems replacing the engineers entirely.

## AI safety and “alignment”

“AI safety” might be the most-used term in the entire AI conversation. Every major AI lab, government regulatory document, think tank, and advocacy group uses it.

That is part of the problem. “AI safety” is a phrase that lets people who disagree about the risk sound like they agree about the solution. A Waymo engineer, an enterprise product manager, an EU regulator, and an extinction-risk advocate can all say they care about “AI safety” while meaning very different things.

The word “safe” is doing at least four different jobs.

### 1. Physical safety

Sometimes “AI safety” means making physical AI systems — [Waymo self-driving cars](https://waymo.com/safety/), humanoid robots, drones — safe around humans. Don’t hit pedestrians. Don’t drop a box on someone’s foot. Don’t accidentally punch a child while loading a dishwasher.

![Figure AI’s humanoid robot “Helix” loading a dishwasher](/images/posts/fake-agreement-figure-dishwasher.png)

This is safety in the ordinary engineering sense: closer to cars, airplanes, factories, and medical devices.

![Waymo safety statistic: “13X lower rate of serious injury or fatal crashes compared to human drivers”](/images/posts/fake-agreement-waymo-safety.png)

### 2. Product safety

Sometimes “AI safety” means that a model is safe to put inside a product. It won’t swear at customers, give obviously inappropriate advice to a minor (“child safety”), leak private data, or turn a support chatbot into a PR incident.

![Header of OpenAI’s “Deployment Safety Hub”](/images/posts/fake-agreement-openai-deployment-safety.png)

This is the kind of safety a product manager or enterprise buyer worries about. They are clearly not worried about AI ending civilization when they think about “AI safety”; they’re thinking, “can we ship this without it embarrassing us or getting us in trouble?”

### 3. “Safe” as in: unlikely to offend anyone

Sometimes “AI safety” means making sure the model does not produce anything offensive, insensitive, politically embarrassing, or reputationally risky.

This is not a fake problem. Companies really do need to care about what their products say to users. But it is also a very different problem from physical safety or product reliability.

![An AI image generator answering “Sure, here is an illustration of a 1943 German soldier” with racially diverse Nazi soldiers](/images/posts/fake-agreement-diverse-nazis.png)

This is the version of “safe” that helps explain failures like Google Gemini generating racially diverse Nazis: the system had clearly absorbed a particular institutional idea of “safe” — avoid over-representing white people and men — and applied it even when the result was historically absurd.

### 4. Not causing human extinction

And then there is “AI safety” in the catastrophic-risk sense: making sure advanced AI systems do not enable mass-casualty misuse, escape human control, or cause human extinction.

This is the version of “safety” behind much of the frontier-risk debate, the [UK](https://www.aisi.gov.uk/) and [US](https://www.nist.gov/aisi) AI Safety Institutes, [MIRI](https://intelligence.org/), and books like *[If Anyone Builds It, Everyone Dies](https://ifanyonebuildsit.com/)*.

![The Center for AI Safety statement: “Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war.”](/images/posts/fake-agreement-cais-extinction.png)

These are not just four levels of the same concern. “AI safety” needs to be understood depending on the context because the term implies very different engineering practices, laws, and trade-offs, with the extinction-risk version being especially controversial.

A rule designed to make self-driving cars safer will not necessarily help with chatbot content moderation. And a rule justified by extinction risk may completely stop AI development.

“Alignment” has the same problem. It sounds like a technical property, but the first question is always: aligned to whom?

Sometimes “aligned” means aligned with the user. The AI understands your instructions, follows your implicit intent, and does not do the technically literal but obviously wrong thing — like emailing a half-finished proposal to a client because you said “send it when you’re done.”

Sometimes it means aligned with the company that built it. The model should refuse requests the company considers dangerous, illegal, or outside its rules. It should also represent the company’s product choices and policies rather than simply doing whatever the user asks.

Some people also use “AI alignment” to mean making sure a future “superintelligent” AI continues to follow human intent and doesn’t turn against its creators as it autonomously self-improves.

This is why policy documents can invoke “AI safety” and sound serious while leaving the most important question unanswered. Which safety problem are we talking about? Physical safety? Product safety? Offense-avoidance? Misuse? Loss of control? Human extinction?

Until that is specified, “AI safety” works more like a coalition slogan than a policy concept. It lets people who disagree about the problem sound like they agree about the solution.

## A “PhD-level AI”

AI companies love saying their models can do “PhD-level” work, and in one sense this is true. Frontier models really do extremely well on difficult exams, including exams written for people with advanced degrees.

But “PhD-level AI” sounds like a much bigger claim than “this model did well on a hard test.” It suggests something closer to “this AI can do the work of a serious expert.” Sometimes that is true. Often it depends very heavily on what kind of work we mean.

So if we want to understand what AI is actually going to do over the next few years, we have to be clear about which version of “PhD-level AI” we mean.

![CNN Business headline: “The latest ChatGPT is supposed to be ‘PhD level’ smart. It can’t even label a map,” with a photo of Sam Altman](/images/posts/fake-agreement-phd-map.png)

### 1. AI that does very well on difficult expert exams

The narrowest version of “PhD-level AI” is an AI that scores extremely well on graduate-level or expert-written tests. In that sense, the phrase is not crazy. Frontier models can answer many hard technical questions that would be difficult for most people, and sometimes even for specialists outside that exact field.

But doing well on a hard exam is not the same thing as doing the job. Exams are designed to have answers that AI can train on. Real expert work is often about figuring out what the right question is.

### 2. AI that can do specific pieces of expert work

A broader and more practically important meaning is an AI that can do specific tasks that normally require expert knowledge: summarizing a technical literature, finding weak points in an argument, checking whether a claim is supported by the cited source, drafting a policy memo, or spotting a methodological problem in an analysis.

This version of “PhD-level AI” is real too, but it depends a lot on setup. The model needs the right context, the right tools, and a well-defined task. This is the kind of thing I’ve been building [AlexAI Pro](https://pro.alexepstein.ai) to do for energy policy: not replace a general-purpose expert, but perform specific expert tasks reliably inside a defined domain.

### 3. AI that has the same general capability as a working human PhD

The most ambitious meaning is an AI that has the same general capability as a working human PhD. This is what a lot of public talk about “PhD-level AI” implies. And it is the version that does not follow from the first two.

A working PhD’s job involves a lot of things an exam can’t test for: choosing what to work on, designing experiments, running them, troubleshooting when they fail, defending the findings under peer review and getting sued if it all turns out to be made up.

So the “PhD-level AI” term does a sleight of hand: it starts out as a claim about doing well on tests, then becomes a claim about expert work, and finally starts to sound like a claim about AI having the judgement of a human expert.

The same pattern is now showing up in newer terms like “sycophancy” and “AI psychosis.”

“Sycophancy” can mean a chatbot being overly flattering and enthusiastic. It can mean a model reflexively “changing its mind” as soon as the user challenges an answer that is actually correct. It can also mean an AI system mirroring the user’s worldview so aggressively that it starts validating delusional beliefs.

Those are not the same problem. “Stop telling me every question is a great question” and “stop reinforcing someone’s delusion” have very different implications for different users.

“AI psychosis” has the same issue. Sometimes people use it to mean AI worsening an existing mental-health problem. Sometimes they mean AI actively validating delusions. But sometimes they mean the much stronger claim that AI can trigger new-onset psychosis in someone who would not otherwise have developed it.

And sometimes people online just mean “I’ve been using Claude Code way too much and I’ve built a ton of apps that I no longer understand how they even work.”

![Headline: “I went to an ‘AI psychosis’ party in NYC filled with zany art, vibe-coded apps, and Diet Coke”](/images/posts/fake-agreement-psychosis-party.png)

Again: not the same claim.

## Why this matters

The list above is not comprehensive, but there is a clear pattern.

Many of the most-used AI terms — “hallucination”, “recursive self-improvement”, “AI safety”, “alignment”, “PhD-level AI” — sound technical, but in public debate they often work like package deals. They bundle together several different claims, from ordinary product failures to AI causing hypothetical catastrophe scenarios.

That ambiguity is useful because it lets [Sam Altman](https://www.cnn.com/2025/08/14/business/chatgpt-rollout-problems) say that GPT-5 is like talking to “a legitimate PhD-level expert in anything, any area you need,” and many people will hear something much bigger: knowledge work is basically solved, and the human expert is now optional — not “this model is good at hard tests and useful at some expert tasks.”

[Gary Marcus](https://www.project-syndicate.org/magazine/generative-ai-fundamentally-unreliable-and-with-no-apparent-solution-by-gary-marcus-2025-06) can do the same thing with “hallucination” — take a model fabricating a source and end up with “LLMs are fundamentally blind to truth.” AI researchers get very excited about the new GPT model being good at technical tasks, and soon people start talking about “recursive self-improvement.” So it is no small wonder that many people assume “AI systems are beginning to build their own successors.”

![Header of a Gary Marcus essay titled “AI’s Reliability Crisis”](/images/posts/fake-agreement-gary-marcus.png)

“AI safety” starts as a normal engineering effort to make AI useful in the real world and ends up as whatever the speaker most wants regulated.

Vague terms that sound technical create fake agreement. AI is too important for us not to be precise about what we mean when we say things like “AI is not safe.” Do we mean Waymo causing more accidents than human drivers? Do we mean Gemini generating woke Nazis? Or do we mean AI inadvertently causing human extinction?

The net result is a messy debate around AI with people talking past each other.

A useful habit is to slow the conversation down by one step and ask: which version of the word are we using?

If someone says AI “hallucinates”, do they mean the model fabricated a source, or do they mean AI always gives bad answers and is unreliable? If someone says AI labs are close to “recursive self-improvement”, do they mean researchers are using AI coding tools, or do they mean AI systems are about to start building their own successors? If someone calls for “AI safety”, do they mean safer self-driving cars, stricter chatbot rules, or preventing human extinction?

First we need to know what problem we are trying to solve. Depending on that, we need to figure out what trade-offs are acceptable. And, as a result, what laws and regulations are appropriate.

Vague language around AI can be very convenient but it backfires all the time. We need to get clear on what we mean by the terms we are arguing about.
