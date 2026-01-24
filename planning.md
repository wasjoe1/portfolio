# content
“Open to US roles (Chicago / NYC)”
“Enjoys exploring Chicago neighborhoods, architecture, and food”

# prompt to build my 

## prompt used to build the initial replit design
i am thinking of creating a portfolio website so that i can fill in website url in applications and hopefully catch the attention of recruiters. since the firms i am applying for are mostly quant & big tech, i want it to be relevant to them and hence the tech stack should also be relevant. considering the only every full stack role i will consider is in quant (i usually like backend, data eng, techops etc. roles) hence i was considering something closer to their stack this is my linkedin for more info: https://www.linkedin.com/in/joe-chua/ (i also attached my resume here) i was thinking to have an aboutme section(covering experiences, languages, technologies & frameworks), github link, linkedin, email, resume attached, insta? fun fact?(as my girl friend is in chicago i want to apply for roles in the US, and state things i enjoy in chicago), projects page with tabs that have project description, challenges(using STAR method), github link, pictures/ videos (optional) also i saw this persons portfolio website which include notes on CS topic

## prompt used to build the frontend app after finalizing the design on figma
i have created a UI for my personal website on figma. the design is finalized for now however the exact buttons/ widgets/ UI
componenet are not set in stone as the wire frame was created from replit. I want you to help me to code out the entire frontend app 
with this design but feel free to use better frontend practices and/ or better markdown trees etc.

I did consult chatgpt to ask what tech stack for the bets learning experience and i want to strictly follow this stack:
- Next.js (App Router)
- TypeScript
- Tailwind CSS (light usage)

additionally, chatgpt suggested this folder structure:
frontend/
  app/
    page.tsx              # landing
    projects/
    notes/
    resume/
  components/
    ProjectCard.tsx
    Metric.tsx
  content/
    projects/
      alpha-ingestion.mdx
      tls-tunnel.mdx
    notes/
      concurrency.mdx
      networking.mdx
  lib/
    api.ts
    types.ts
can you check if this is correct? if it is not, feel free to change it.

lastly, do take note that i do intend to connect this to my FastAPI backend. do let me know additional things i need to take note.
currently this is the folder strcuture i was informed:
backend/
  app/
    main.py
    api/
      projects.py
      analytics.py
    models/
    services/
    db/
  scripts/
  tests/

do let me know if this design is not possible with this stack and if there are any limitations.

figma link: https://www.figma.com/design/V8J7u1ZtZarMgHRQdXSzuZ/portfolio?node-id=0-1&t=GroqSHmU8EsU9ZOa-1

## prompt on vercel v0 as figma link is a premium feature
I have included the prompt i want you to create the app based on in the pasted-text.txt (its the one above) file atttached. just a reminder that the figma link to create is https://www.figma.com/design/V8J7u1ZtZarMgHRQdXSzuZ/portfolio?node-id=0-1&t=GroqSHmU8EsU9ZOa-1 and if you cant access it, you can refer to the images where i pasted the stuff.
a little thing to note is that a person visitng the site should be able to keep scrolling from about me, tech arsenal, experience, projects, and finally education. the nav bar just helps the user to jump to that specific section in the app

# tech stack
Frontend (boring, fast, credible)
- Stack
    - Next.js (App Router)
    - TypeScript
    - Tailwind CSS (light usage)
    - MDX (for notes + projects)
- Why
    Big Tech: React + TS is table stakes
    Quant: they won’t care what you use, but they’ll notice if it’s clean and fast
    MDX lets you mix diagrams, code, math, text → perfect for CS notes
- Other Key libs:
    - next.js
    - react
    - typescript
    - tailwindcss
    - @next/mdx
    - react-markdown (optional)
    - mermaid (for architecture diagrams)

Backend
- Stack
    - Python
    - FastAPI
    - PostgreSQL
    - SQLAlchemy
    - Pydantic
- What it does
    - Serves structured project metadata
    - Serves CS notes (optional)
    - Tracks resume downloads / page hits
    - Acts as an API-backed “internal tool”
- This mirrors:
    - Dashboard backends
    - Data services
    - Internal tooling at quant firms

Infra / deployment
- Frontend: Vercel
- Backend: AWS EC2
- DB: Managed Postgres
- CI: GitHub Actions => since i have used gitlabb actions, should try a different CI/CD tool
- basic observability:
    - Logs: structured JSON logs
    - metrics
- Optional but strong: => can be displayed as small status bar
    - /health endpoint => checks if service is okay (returns 200 OK) i.e. is FastAPI running
    - basic metrics endpoint => expose numbers abount the backend's behaviour over time (# of reqs per time, latency of reqs, # of errors?)

# folder structure
frontend/
  app/
    page.tsx              # landing
    projects/
    notes/
    resume/
  components/
    ProjectCard.tsx
    Metric.tsx
  content/
    projects/
      alpha-ingestion.mdx
      tls-tunnel.mdx
    notes/
      concurrency.mdx
      networking.mdx
  lib/
    api.ts
    types.ts

backend/
  app/
    main.py
    api/
      projects.py
      analytics.py
    models/
    services/
    db/
  scripts/
  tests/

# current todos
- ~~create mock up app using replit~~
- ~~export it using app design using html.to.design extension & import it into figma via the figma plugin~~
- ~~finalise design~~ <= design from replit was half done & not exactly what i wanted
-  use vercel v0 (vercel's ai UI genereator) => takes in figma design & generate React + next.js
  - https://www.eesel.ai/blog/frontend-ai-tools-developers (look at point 3)
  - vercel v0 figma link is a premium feature

=> steps to get design to replit follows this: https://html.to.design/blog/from-replit-to-figma/