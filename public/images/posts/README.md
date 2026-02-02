# Post Images To Add

Replace `placeholder.svg` references in blog posts with actual images from Substack.

## Images Needed

### 1. demis-hassabis-is-wrong-about-computability.md
- **Image**: Conceptual AI/creativity illustration
- **Source**: https://tomwalczak.substack.com/p/demis-hassabis-is-wrong-about-computability
- **Save as**: `demis-computability-hero.jpg`

### 2. ai-is-like-waking-up-with-100-million.md
- **Image**: $100 million illustration
- **Source**: https://tomwalczak.substack.com/p/ai-is-like-waking-up-with-100-million
- **Save as**: `100-million-hero.jpg`

### 3. making-policy-costs-personal-with-ai.md
- **Images**: 
  1. Dashboard screenshot → `policy-impact-dashboard.png`
  2. News feed GIF → `policy-impact-news-feed.gif`
  3. Email draft GIF → `policy-impact-email-draft.gif`
- **Source**: https://tomwalczak.substack.com/p/making-policy-costs-personal-with

### 4. openais-o3-and-the-problem-of-induction.md
- **Images**:
  1. ARC puzzle example → `arc-puzzle-example.png`
  2. Swan induction diagram → `swan-induction.png`
- **Source**: https://tomwalczak.substack.com/p/openais-o3-and-the-problem-of-induction

### 5. how-we-built-alexai.md
- **Images** (many screenshots):
  1. AlexAI interface screenshot → `alexai-interface.png`
  2. Architecture diagram → `alexai-architecture.png`
  3. RAG diagram → `alexai-rag-diagram.png`
  4. Prompt examples → `alexai-prompts.png`
  5. Follow-up questions UI → `alexai-followups.png`
- **Source**: https://tomwalczak.substack.com/p/how-we-built-alexai-the-worlds-top

### 6. what-ive-learned-from-building-an-ai-agent-for-a-vc-firm.md
- **Image**: Demo video thumbnail or screenshot
- **Source**: https://tomwalczak.substack.com/p/what-ive-learned-from-a-year-of-building
- **Save as**: `blumberg-ai-demo.png`

## How to Download from Substack

1. Open the Substack post
2. Right-click on images and "Save Image As"
3. Save to this folder with the suggested filename
4. Update the corresponding .md file to reference the new image

## After Adding Images

Update the markdown files to replace:
```markdown
![Description](/images/posts/placeholder.svg)
```

With:
```markdown
![Description](/images/posts/your-new-image.png)
```
