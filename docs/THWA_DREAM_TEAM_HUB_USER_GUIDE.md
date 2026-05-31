# THWA Dream Team Hub — User Guide
# Authority: Jason Thomas Cawley
# Version: 1.0

---

## WHAT IS THE DREAM TEAM HUB?

The Dream Team Hub is your command centre for the entire THWA Cathedral. It gives you:
- Full visibility of all 24 Dream Team agents
- The 10 Cathedral engines and their status
- Activation sequence control
- Audit trail of every action
- Agent testing console
- Canon compliance monitoring

---

## STARTING THE HUB — EVERY TIME

You need **two PowerShell windows** open simultaneously.

### Window 1 — Backend (runs the server)

```powershell
cd "F:\The-Dream-Team"
$env:NODE_ENV="development"; npx tsx watch server/_core/index.ts
```

You should see:
```
╔══════════════════════════════════════════════════╗
║       THWA DREAM TEAM HUB — ONLINE               ║
║  Backend:   http://localhost:4000                ║
║  Frontend:  http://localhost:3002                ║
╚══════════════════════════════════════════════════╝
```

### Window 2 — Frontend (runs the interface)

```powershell
cd "F:\The-Dream-Team"
npx vite --port 3002
```

You should see:
```
VITE v7.x.x  ready in Xms
➜  Local:   http://localhost:3002/
```

### Open in browser

```
http://localhost:3002
```

---

## LOGGING IN

Go to: `http://localhost:3002/login`

```
Email:    jason@thwa.com  (or any email)
Password: thwa2026
```

---

## QUICK START SCRIPT

Save this as `F:\THWA_START_HUB.ps1` and run it to start everything in one go:

```powershell
# THWA Dream Team Hub — Quick Start
# Run: PowerShell -ExecutionPolicy Bypass -File "F:\THWA_START_HUB.ps1"

Write-Host "Starting THWA Dream Team Hub..." -ForegroundColor Green

# Stop OneDrive
taskkill /f /im OneDrive.exe 2>$null

# Start backend in new window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd 'F:\The-Dream-Team'; `$env:NODE_ENV='development'; npx tsx watch server/_core/index.ts"

# Wait for backend to start
Start-Sleep -Seconds 3

# Start frontend in new window  
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd 'F:\The-Dream-Team'; npx vite --port 3002"

# Wait then open browser
Start-Sleep -Seconds 4
Start-Process "http://localhost:3002/login"

Write-Host "Hub starting... opening browser in 4 seconds" -ForegroundColor Cyan
```

---

## THE PAGES — WHAT EACH ONE DOES

### 🏠 Home (`/`)
The Cathedral homepage. Shows all 10 engines, stats, and the network diagram.
**Use it for:** Overview of the system at a glance.

### 📊 Dashboard (`/dashboard`)
All 24 agents in a searchable, filterable table.
**Use it for:** Finding and opening specific agents. Checking agent status.

**Filters available:**
- Search by name or agentId
- Filter by Tier (SUPREME / FOUNDATION / PUBLIC / OPERATIONAL / CUSTOMER / SPECIALIST)
- Filter by Engine (ENGINE_1 through ENGINE_10)
- Filter by Status (active / inactive / archived)

### 🎛️ Master Console (`/master-console`)
Supreme oversight of the entire Cathedral.
**Use it for:** Running the activation sequence, checking canon compliance, viewing the network diagram.

**Key buttons:**
- **Run Full Sequence** — activates all 24 agents in order (Rank 1–24)
- **Reset All** — resets activation sequence to pending

### ⚙️ Engines (`/engines`)
All 10 Cathedral engines with full metadata.
**Use it for:** Checking which agents belong to which engine, viewing engine status.

### ▶️ Activation (`/activation`)
Visual timeline of all 24 agents in activation order.
**Use it for:** Running and monitoring the activation sequence step by step.

**Status colours:**
- Grey = pending
- Gold = active
- Green = completed
- Red = failed

### 👥 Workforce (`/workforce`)
Phase-based view of the Dream Team.
**Use it for:** Understanding how agents are grouped by activation phase.

### 🔗 Dep. Map (`/dependency-map`)
Agent dependency graph — who depends on whom.
**Use it for:** Understanding the Cathedral dependency chain before making changes.

### 📋 Audit Trail (`/audit`)
Immutable log of every action in the Cathedral.
**Use it for:** Reviewing what happened, checking canon compliance, exporting records.

**Canon Compliant column:**
- ✓ Green = canon compliant
- ✗ Red = canon violation (investigate immediately)

**Export:** Click "Export CSV" to download the full audit trail.

### 🧪 Test Console (`/test-console`)
Send test messages to any agent.
**Use it for:** Testing agent responses. Currently returns echo responses (real AI coming in Phase 3).

**How to use:**
1. Select an agent from the dropdown
2. Type a message
3. Press Enter or click Send
4. See the echo response

### ⚙️ Settings (`/settings`)
Canon documents, system info, and export tools.
**Use it for:** Viewing canon documents, exporting data, checking system status.

---

## CREATING A NEW AGENT

1. Go to Dashboard → click **"+ Create Agent"**
2. Fill in the form:
   - **Agent ID** — must be `lowercase_underscore` format (e.g. `my_new_agent`)
   - **Name** — display name
   - **Role** — what this agent does
   - **Engine** — which engine it belongs to
   - **Tier** — SUPREME / FOUNDATION / PUBLIC / OPERATIONAL / CUSTOMER / SPECIALIST
   - **Activation Rank** — where in the sequence it activates
3. Add capabilities, tools, dependencies
4. Click **Create Agent**

**Canon validation:** The Agent ID is validated in real-time. A green ✅ means it's canon compliant. A red ❌ means it violates the naming convention and will be blocked.

---

## RUNNING THE ACTIVATION SEQUENCE

The activation sequence is the ceremonial commissioning of the Dream Team.

1. Go to **Master Console** or **Activation** page
2. Click **"Run Full Sequence"**
3. Watch all 24 agents activate in order (Rank 1 → 24)
4. The audit trail logs every activation

**To reset:** Click "Reset All" — all agents return to pending status.

---

## UPDATING THE HUB

When a new version is pushed to GitHub:

```powershell
# Stop both PowerShell windows (Ctrl+C in each)

# Pull latest code
cd "F:\The-Dream-Team"
git pull

# Restart backend (Window 1)
$env:NODE_ENV="development"; npx tsx watch server/_core/index.ts

# Restart frontend (Window 2)
npx vite --port 3002
```

---

## TROUBLESHOOTING

### "Cannot reach the page" on localhost:3002
The frontend isn't running. Open Window 2 and run:
```powershell
cd "F:\The-Dream-Team"
npx vite --port 3002
```

### "Authentication required" error
You need to log in. Go to `http://localhost:3002/login`

### Agents not showing (empty dashboard)
The database needs to be reset. Stop the backend, then:
```powershell
cd "F:\The-Dream-Team"
del thwa-agent-hub.db
pnpm db:push
$env:NODE_ENV="development"; npx tsx watch server/_core/index.ts
```

### Port 4000 already in use
```powershell
netstat -ano | findstr :4000
# Note the PID number, then:
taskkill /PID [PID_NUMBER] /F
```

### Port 3002 already in use
```powershell
netstat -ano | findstr :3002
taskkill /PID [PID_NUMBER] /F
```

---

## SYSTEM INFORMATION

| Item | Value |
|---|---|
| Backend URL | http://localhost:4000 |
| Frontend URL | http://localhost:3002 |
| Login URL | http://localhost:3002/login |
| tRPC API | http://localhost:4000/api/trpc |
| Health Check | http://localhost:4000/api/health |
| Database | F:\The-Dream-Team\thwa-agent-hub.db |
| Database Type | SQLite (local file) |
| Auth | Local JWT — no cloud |
| Default Password | thwa2026 |

---

## CANON REMINDER

**The Nine Canon Laws:**
1. Single Source of Truth per Engine
2. No Engine performs another Engine's job
3. No pricing logic outside Engine 3
4. No GLB logic outside Engine 1
5. No product logic outside Engine 3
6. No configurator logic outside Engine 2
7. No compliance logic outside Engine 7
8. Website Engine is display-only
9. All engines are deterministic
10. All engines are future-custodian ready

**Naming Convention:** All agentIds must be `lowercase_underscore` only.

**Authority:** Jason Thomas Cawley — Supreme. No machine outranks the Founder.

---

*THWA Dream Team Hub — Cathedral V2*
*Authority: Jason Thomas Cawley*
*Canon: Locked*