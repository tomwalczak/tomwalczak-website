---
title: "How We Built AlexAI: The World's Top AI Energy and Climate Expert"
description: "How AI can help make sense of complex and contentious debates by generating clear explanations"
date: "Dec 12, 2023"
---

Over the past few years, I've been working on AI tools that help us make sense of complex, contentious, and consequential issues. I believe that better tools will help us think about difficult subjects more clearly, leading to better decisions and faster progress in the real world.

While we're not yet at the point when we can build an end-to-end knowledge system using AI, we can focus on what the current AI does best—taking existing high-quality sources and generating clear explanations.

## Making Sense of Climate Change and Energy With AlexAI

The debate around climate change and energy is one of those complex and contentious issues.

Building an AI climate and energy expert requires an in-depth understanding beyond climate science. To get the full picture, we must include energy economics, engineering, the history of energy development, law and policy, and (often overlooked) philosophy and ethics.

Alex Epstein's work is uniquely suited for such an AI expert. Alex is my favorite thinker on climate and energy because of the way he integrates all these relevant fields and frames the debate in a positive, human-centered way.

## AI can make the best knowledge more accessible

Earlier this year, Alex and I decided to build AlexAI: the world's best AI energy and climate expert.

AlexAI makes the complexities of energy and climate sciences more accessible and understandable, using the latest advances in AI.

We're working toward making AlexAI capable of answering questions as Alex would. Over time, AlexAI will have perfect recall from a vast knowledge base of primary data sources and high-quality explanations.

## Building the AlexAI Chatbot

AlexAI required access to all of Alex's work to function at its best, including his book, Fossil Future, blog posts, lectures, Q&A sessions, and congressional testimonies. We refer to this comprehensive collection of Alex's work as AlexAI's Knowledge Base.

There are two ways to create an AI expert chatbot:

1. Training or fine-tuning a custom AI model on the knowledge base.
2. Using a dynamic prompting strategy, technically known as Retrieval Augmented Generation (RAG).

### The problem with a custom AI model

We opted against a custom model for AlexAI. Though conventional wisdom often recommends taking a pre-existing, generally intelligent model and further training it on a specific knowledge base, we found this approach ineffective.

**Parrot-like behavior**: such a model often becomes parrot-like, simply regurgitating the information out-of-context and losing some of its general intelligence.

**Lack of control over output**: controlling the output of a fine-tuned model is also challenging; its generated responses are inherently unpredictable and, when they don't live up to our expectations, cannot be easily corrected without full retraining of the model.

**More severe hallucinations**: fine-tuned models are especially prone to hallucination, generating nonsensical or irrelevant outputs.

### Dynamic prompting

We used dynamic prompting with multiple large language models (LLMs) to program AlexAI. This method involves constructing a prompt with relevant contextual information, which is then fed into an LLM.

At the start of the prompt, which we feed into an LLM, we establish a set of principles and the general worldview that embodies Alex's perspective.

Most importantly, it outlines how he conceptualizes problems and frames the primary issues. The original idea for this approach came from the Constitutional AI paper and has worked well for AlexAI.

## Building the AlexAI Knowledge Base

A limitation of using dynamic prompts is that we cannot include all of Alex's work in a single prompt due to context length restrictions. With current LLM limitations, it's impossible to have several thousand pages worth of context inside one prompt.

Even with unlimited content length, we still need to give the LLM highly relevant context because in order to produce a high-quality response, it may need to recall one sentence from an entire chapter of a book. The longer the prompt, the harder it is for the LLM to answer accurately.

### Retrieving sources through semantic similarity

One critical component of our AI system is the method of retrieving sources. The challenge lies in determining which source aligns with a particular user question in the context of the conversation and should thus be retrieved and incorporated into the prompt.

Adding high-quality context means the chatbot doesn't have to "think" too much. Our method primarily relies on similarity, and we extract snippets instead of entire book chapters or full articles.

This approach works surprisingly well for AlexAI because Alex's writing is rich with relevant concepts, clear arguments, and explanations. Compared with other AI apps, this has given us an "unfair advantage," and it's why we've been able to use a relatively simple, similarity-based knowledge base index.

We have taken extra steps to combat this method's limitations:

- Reducing duplicate content
- Hybrid strategy of combining semantic search with traditional natural language processing (NLP) techniques to increase specificity
- "Framing notes": we designed "framing notes" to enhance AlexAI's knowledge base. These notes outline specific principles concerning particular topics, especially those not explicitly mentioned in Alex's work.

## "Thinking out loud" to answer tricky questions

Before generating a response to the user's question, we run an additional, dedicated prompt to evaluate the user's message to determine the optimal reply based on the conversation history and any relevant sources identified. Essentially, we encourage the model to first "think out loud" before answering.

This "thinking out loud" step helps with several scenarios:

- Complex user questions
- Incorrect user assumptions
- Poorly framed or confusing questions

In these scenarios, AlexAI will prompt the user for clarity to provide a high-quality, relevant answer.

This "mental processing" is similar to how you and I might answer a challenging question; we pause for a few seconds instead of rushing to respond.

## Why you should try out AlexAI

Many people are expecting to disagree with Alex on issues related to climate and energy. If you fall into that category, I encourage you to try AlexAI—see if the chatbot can answer your tough questions!

With AlexAI, you're getting the best version of the pro-development and anti-alarmist perspective on climate change and energy, short of talking to Alex himself.

Testing your knowledge against AlexAI will help refine your understanding and the best arguments on the other side of the debate.
