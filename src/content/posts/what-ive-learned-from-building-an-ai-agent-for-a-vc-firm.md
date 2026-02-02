---
title: "What I've Learned From a Year of Building an AI Agent for a Top-Tier Early-Stage Venture Capital Firm"
description: "How we built it, pitfalls to avoid, and how AI is making the VC business more founder-friendly."
date: "2025-01-30"
---

> *Over the last 12 months, my team and I built an AI agent for a top-tier early-stage VC that changed how they find investment opportunities. In this post, I'll walk you through exactly how we did it, the pitfalls to avoid, and how you can apply these lessons if you're building AI workflows in your business.*

## How AI lets VCs combat information asymmetry

The VC business model is going through a transformation because of AI. The number of startups is growing globally, startup accelerators are increasing their batch sizes, there are multiple, high-quality data sources (Crunchbase, Harmonic, PitchBook), lots of social media activity and lots of pitch decks to process.

AI can help investors make sense of all that information — fact-check, integrate it carefully and evaluate against the firm's knowledge and investment criteria.

This also ties back to the concept of information asymmetry. VCs want an edge in discovering great startups before they become 'hot,' and AI can monitor deal flow from a variety of sources to surface early-stage companies in real time.

It's critical for investors to kick off those relationships early—otherwise, you risk being in a Monday meeting being asked, "When did we last speak to them?" once the deal is too hot to join.

## The "AI arms race"

Interestingly, there's also a kind of adversarial angle: founders are increasingly using AI to produce polished pitch decks which makes it harder for VCs to judge startups based on deck quality alone — AI makes it easy to bury potential red flags and make the opportunity look more plausible.

On the flip side, AI can help investors parse pitch decks faster and focus on the objective facts: metrics, market size, team strength, etc. The tools are getting better all the time, on both sides.

At the end of the day, the VC business model is about discovering and supporting great teams who build great products in big markets. It's a knowledge-intensive, relationship-driven business.

AI can't replace the human factor of building relationships, but it can handle a lot of the data-intensive aspects of the job and apply existing knowledge more consistently.

## What We Built & What We Learned

I worked with a top early-stage VC firm that was spending too much time sifting through pitch decks.

![Blumberg AI Demo](/images/posts/placeholder.svg)
*[View demo video on Substack →](https://tomwalczak.substack.com/p/what-ive-learned-from-a-year-of-building)* The decks arrive daily (sometimes dozens at once, after a demo day), they are often buried in forwarded emails or hidden behind DocSend links. The goal was simple: create an AI-driven system that screens incoming opportunities faster and more objectively than a human associate.

To build this, we had to do a lot of software engineering—from translating the investment criteria into AI prompts, handling DocSend links and multi-file email chains, integrating GPT-4/Gemini, scoring deals, and finally syncing up with the CRM.

Pitch decks arrive in various formats (PDF, PowerPoint, or none at all—sometimes it's just a company name and blurb inside email body). The AI needs to parse each format, extract the company name, look it up in external data sources (like Harmonic API, Crunchbase), and then figure out if the opportunity meets the firm's criteria.

### 1. Streamlining Pitch Deck Ingestion

- **Rich Web UI**: Pitch decks are uploaded using a web UI, with the results of the analysis being streamed in real-time.

- **Magic Email:** Alternatively, associates can simply forward any inbound pitch deck to a special address. That's it. The AI handles the rest.

- As soon as the deck or email hits the inbox, the AI pipeline kicks off, retrieving attachments or links to be parsed.

> *We discovered that people preferred a "forward an email" workflow rather than uploading a pitch deck via separate UI. So we built a "magic email address" where they just forward the deck, and the AI analyzes it, updates the CRM, and emails back the results. That turned out to be crucial for user adoption.*

### 2. Secure Parsing, Enrichment and Automatic Deal Sourcing

- **Parsing with GPT-4:** The AI agent opens each attachment or DocSend link, uses GPT-4 to parse the text (including pitch deck slides), and extracts critical details like team composition, sector, and traction.

- **DocSend Links & Authentication:** If multi-step authentication or special DocSend codes are required, we use a browser-based approach so that the agent can navigate the login process autonomously.

> *Sometimes the pitch deck is behind a DocSend link requiring email authentication and a code. We had to give the AI its own email address, equip it with a browser, and teach it to handle multi-step verification. That took a lot of engineering.*

- **External Data Matching:** First, we confirm the company's domain (shout-out to Gemini API with grounded search), pull additional data from Harmonic, cross-check team info, and enrich the analysis with accurate metadata and additional context.

- **Automatic Deal Sourcing**: The AI not only parses the incoming pitch decks but also proactively spots new companies in the target domains using filtered search within Harmonic analyzing newly added startups—so that the firm can start conversations early, reducing the risk of missing a hot deal.

### 3. Scoring & Flagging

- **Custom Criteria Application:** The system checks the firm's must-haves (e.g., technical co-founder, B2B focus, target geographical markets) and red flags (no tech lead, purely consumer-focused etc.).

- **Potential Fit Score:** An overall numeric or yes/no "Potential Fit" score is assigned, accompanied by a concise summary of why the AI leaned "Meet" or "Pass."

- **Multi-Company Splits:** If the inbound email or deck contains details on multiple startups, the AI separates them out, generating individual scores.

> *We learned it's important to build an end-to-end workflow and let real users test it early, even if the prototype is rough. We used evaluation-driven development and regression testing. We had about 200 pitch decks with known outcomes ("yes," "no," or "pass") and used them to quickly measure whether changes we made to the AI's prompts or criteria improved performance. This also helped us clarify what the firm's criteria actually are—like the definition of a "technical founder."*

### 4. Human Review & CRM Integration

- **Lead/Pass Confirmation:** The investment team sees each deal's key info, score, and bullet-point summary in an interactive UI. They can override if needed—finalizing "Lead" or "Pass."

- **Automatic CRM Sync:** Once confirmed, the pipeline seamlessly updates the CRM (Affinity) with standardized data (company domain, team details, flags, final classification), reducing manual data entry and ensuring a single source of truth.

> *We also integrated with the firm's CRM (Affinity). The AI must update the CRM under specific conditions—merging and overriding data in a structured, logical way. It took rigorous testing to get that right. An interesting side effect is that data quality in the CRM goes up because the AI does the data entry no one likes to do. It merges pitch deck data with external databases and puts everything into the CRM in a standardized format, resulting in better, more up-to-date company profiles.*

## Good software engineering is key to AI Agents that work

Often, people imagine a single AI that magically handles everything end to end. In reality, to build a production-ready app you need deal with edge cases, build custom tools (like a browser for the AI or an email workflow), and make sure the AI doesn't fail on real-world obstacles.

Having a powerful large language model is just the start. You need strong software engineering to orchestrate prompts, workflows, databases, and external integrations—like connecting with CRMs, reading pitch decks behind secure links, or scraping data from multiple APIs.

## Better user experience → more feedback for AI

One of the key things to get right is how to efficiently gather human feedback necessary to evaluate and improve the AI. We've made sure all the decisions made by AI were broken into logical steps and easily interpretable. This made it easy for humans to point out potential errors and quickly iterate on a solution. If the AI was a "black box", the errors would only lead to frustration without a clear path to a solution.

## Pitfalls to Watch Out For

We considered and ultimately rejected a few other use cases for the AI Agent to develop—even though some of them looked attractive on the surface, AI is not (yet) the right tool to use.

### AI as a "crystal ball"

One big pitfall is the allure of trying to "predict the future" using AI, for example, predicting a startup's likelihood of success purely from historical data and current technology consensus. That approach inevitably leads to overfitting the AI on the past.

> You can't fully predict the human factor or big step changes in technology. The future will always remain somewhat open-ended.

### Automating Due Diligence

Due diligence is another area AI can support humans but not fully replace them. AI can surface potential red flags, check financial data or contracts, and cross-reference data sources, but you still need human intuition and judgment to know if something "feels off" or if additional checks are needed, and where to look. Over-automating is risky.

### Low-Leverage / Infrequent Use Cases

It's important to pick AI use cases that are truly high leverage—those that contribute to the ideal outcome of increasing returns for your fund and making work more enjoyable. With automation, there can be diminishing returns: sometimes fully automating a process takes a lot of effort, and you have to ask if it's worth it.

Take drafting investment memos as an example: how often do you do it per year, how many hours does it take, and is it frequent enough to justify building, testing, refining, and maintaining an AI workflow? Getting an AI draft to "almost ready to go" can be a big project. Often, you can get 80% of the value with 20% of the effort, but that last 20% to achieve near-complete automation can be massive.

## Other Exciting Use Cases for AI in Venture Capital

**Follow-Ups for "Too Early" Deals:** If a startup isn't ready now, invite them to return once they've reached certain milestones. AI can watch for fundraising announcements, traction signals, or case studies, then automatically nudge you or draft a personalized email when it's time to reconnect.

**Investment Memo Review:** Instead of writing the final memo, use AI to stress-test the draft by identifying logical gaps, identify assumptions, surfacing unmentioned red flags, and using a "gold standard" checklist to suggest thoughtful edits. AI can easily reference historical memos, successes, failures, and data points for an objective second look before sharing it with your team.

**Portfolio Monitoring:** AI can summarize monthly or quarterly updates from your portfolio companies, pulling QuickBooks data or tracking KPIs. It will alert you to anomalies—so if revenue suddenly spikes or drops, you know right away.

**Cross-Portfolio Knowledge Base:** Build a repository of lessons, successes, and playbooks from your portfolio. This helps founders tap into the collective expertise of your firm—everything from past case studies to tested best practices.

**Founder Introduction Engine:** Have AI parse founder updates and requests to identify relevant introductions. It can spot opportunities for connecting portfolio companies to potential customers, strategic partners, or follow-on investors.

**Competitive Ecosystem Tracking:** For all portfolio companies, monitor competitor announcements, new product launches, fundraising rounds, and M&A activity. AI will crawl the web for signals, alert you to significant moves, and keep your portfolio companies in the loop.

**Meeting Prep:** Give each partner an AI phone number for quick queries like, "What's Company X's runway?" The AI can pull info from the CRM and reply right away, or send a short summary by text—perfect for on-the-go meeting prep.

**Follow-On Investment Recommendations:** One very interesting idea that emerged is running Monte Carlo simulations to stress-test follow-on investment decisions. Have AI create and analyze different scenarios for your next marginal dollar so humans can weigh trade-offs and choose the best option.

## Conclusion & Key Takeaways

### 1. AI Will Make Venture Capital More Founder-Friendly

One of the biggest wins from AI in VC is *founder-friendliness*. By using automated, data-driven systems, investors can respond faster to inbound pitches, reduce the bias that sometimes comes with subjective screening, and make sure no promising team slips through the cracks just because they're based outside a major startup hub.

For founders, that means quicker feedback cycles, more consistent evaluations, and a more transparent process overall. Additionally, AI-driven follow-ups—especially for startups deemed "too early" at first—ensure that VCs don't accidentally ghost high-potential founders. Over time, that raises the bar for how VCs engage with entrepreneurs, helping build trust and long-term relationships.

### 2. Solid Software Engineering Unlocks AI's Real Value

It's clear that AI will transform not just how VCs handle deal flow, but almost any knowledge work that can be systematized. But having a cutting-edge language model is only half the story; you need solid engineering to handle real-world friction points like accessing secure DocSend links or integrating with CRMs—AI doesn't automatically map onto the "real world" right away.
