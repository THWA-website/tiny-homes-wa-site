# THWA Dream Team Hub — User Guide
# Authority: Jason Thomas Cawley
# Version: 1.0

---

## STARTING THE HUB — EVERY TIME

You need **two PowerShell windows** open simultaneously.

### Window 1 — Backend
```powershell
cd "F:\The-Dream-Team"
$env:NODE_ENV="development"; npx tsx watch server/_core/index.ts
```

### Window 2 — Frontend
```powershell
cd "F:\The-Dream-Team"
npx vite --port 3002
```

### Open in browser
```
http://localhost:3002/login
```

**Login:** any email + password `thwa2026`

---

## QUICK START SCRIPT

Save as `F:\THWA_START_HUB.ps1`:

```powershell
# Stop OneDrive
taskkill /f /im OneDrive.exe 2>$null

# Start backend
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd 'F:\The-Dream-Team'; `$env:NODE_ENV='development'; npx tsx watch server/_core/index.ts"

Start-Sleep -Seconds 3

# Start frontend
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd 'F:\The-Dream-Team'; npx vite --port 3002"

Start-Sleep -Seconds 4
Start-Process "http://localhost:3002/login"
```

---

## THE PAGES

| Page | URL | Purpose |
|---|---|---|
| Home | `/` | Cathedral overview, engine stats |
| Dashboard | `/dashboard` | All 24 agents, filters, search |
| Master Console | `/master-console` | Supreme oversight, activation, network |
| Engines | `/engines` | All 10 Cathedral engines |
| Activation | `/activation` | Visual timeline Rank 1–24 |
| Workforce | `/workforce` | Phase-based team view |
| Dep. Map | `/dependency-map` | Agent dependency graph |
| Audit Trail | `/audit` | Immutable action log |
| Test Console | `/test-console` | Send test messages to agents |
| Settings | `/settings` | Canon docs, system info, export |

---

## TROUBLESHOOTING

**"Cannot reach the page" on localhost:3002**
→ Frontend not running. Open Window 2 and run `npx vite --port 3002`

**"Authentication required" error**
→ Go to `http://localhost:3002/login`

**Agents not showing (empty dashboard)**
```powershell
cd "F:\The-Dream-Team"
del thwa-agent-hub.db
pnpm db:push
$env:NODE_ENV="development"; npx tsx watch server/_core/index.ts
```

**Port 4000 already in use**
```powershell
netstat -ano | findstr :4000
taskkill /PID [PID] /F
```

---

## SYSTEM INFO

| Item | Value |
|---|---|
| Backend | http://localhost:4000 |
| Frontend | http://localhost:3002 |
| Login | http://localhost:3002/login |
| Database | F:\The-Dream-Team\thwa-agent-hub.db |
| Default Password | thwa2026 |

---

*Authority: Jason Thomas Cawley | Canon: Locked*
