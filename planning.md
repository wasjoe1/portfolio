# content
“Open to US roles (Chicago / NYC)”
“Enjoys exploring Chicago neighborhoods, architecture, and food”

# prompt to build my website
i am thinking of creating a portfolio website so that i can fill in website url in applications and hopefully catch the attention of recruiters. since the firms i am applying for are mostly quant & big tech, i want it to be relevant to them and hence the tech stack should also be relevant. considering the only every full stack role i will consider is in quant (i usually like backend, data eng, techops etc. roles) hence i was considering something closer to their stack this is my linkedin for more info: https://www.linkedin.com/in/joe-chua/ (i also attached my resume here) i was thinking to have an aboutme section(covering experiences, languages, technologies & frameworks), github link, linkedin, email, resume attached, insta? fun fact?(as my girl friend is in chicago i want to apply for roles in the US, and state things i enjoy in chicago), projects page with tabs that have project description, challenges(using STAR method), github link, pictures/ videos (optional) also i saw this persons portfolio website which include notes on CS topic

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
- come up with __API contracts__ => exact data between FE & BE
- come up with __data model__ => proper OOP of objects in ur app