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

## prompt to ask chat whether the tech stack first produced by vercel v0 is fine
lets remove the mdx setup since i dont have a notes page anymore. what is radix-ui? is it commonly used? what about next-themes? class-variance-authority, clsx, tailwind-merge, lucide-react? are all of these other libraries or are they extensions of the current library/ framework? i prefer to use stuff that are optimally essentially so that i can apply these to most frontend projects in the future when building dashboard (i.e. if they are relavant,etc.)

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

# Buying Domain Name
refered to this youtube vid: https://www.youtube.com/watch?v=1JJrXWQ-7OE
chose cloudflare as domain name registrar
bounght joe-chua.com


# current todos
- ~~create mock up app using replit~~
- ~~export it using app design using html.to.design extension & import it into figma via the figma plugin~~
- ~~finalise design~~ <= design from replit was half done & not exactly what i wanted
-  use vercel v0 (vercel's ai UI genereator) => takes in figma design & generate React + next.js
  - https://www.eesel.ai/blog/frontend-ai-tools-developers (look at point 3)
  - vercel v0 figma link is a premium feature
- get the front end design out first with hard coded data, & host the website => so i have something working

# future features
- create the backend which replaces the hard coded data
- toggle between dark/ light mode

=> steps to get design to replit follows this: https://html.to.design/blog/from-replit-to-figma/

# to run the pre-made project folder (portfolio-website-build) from vercel v0
1. npm install
2. npm run dev

# issue with old node version
* should not download node globally => dfiferent libs/ frameworks are compatible with different node versions
1. download/ update nvm (node version manage)
  what is NVM? => tool used to manage multople active node versions https://utkukaba.medium.com/node-version-manager-nvm-3ea115842466
2. source ~/.zshrc
3. nvm install 20   => download node (version 20 in this i.e.)
4. create .nvmrc => inside the same project folder that contains package.json; in the future can always just call nvm use without remembering which nvm you were using for the specific ndoe project
5. nvm use  => to switch the node version

* package.json vs package-lock.json
* package.json - stores metadata (scripts to use, minimal version for dependency, etc.)
package-lock.json - stores exact versions for dependencies
=> package.json = what you want
=> package-lock.json = what you actually got
* npm installs dependencies from __package-lock.json__, if it exists, else, resolves versions from __package.json__ & creates a new lock file