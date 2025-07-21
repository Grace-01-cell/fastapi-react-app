from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware  # ✅ NEW

app = FastAPI()

# ✅ Allow requests from React dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite's dev server
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static directory for images/css
app.mount("/static", StaticFiles(directory="static"), name="static")

# Template directory setup
templates = Jinja2Templates(directory="templates")

# ✅ Intro page
@app.get("/intro", response_class=HTMLResponse)
async def intro_page(request: Request):
    return templates.TemplateResponse("intro.html", {"request": request})

# ✅ Default route
@app.get("/", response_class=HTMLResponse)
async def root(request: Request):
    return templates.TemplateResponse("intro.html", {"request": request})

# ✅ Optional: Show details form page
@app.get("/details", response_class=HTMLResponse)
async def details_page(request: Request):
    return templates.TemplateResponse("details.html", {"request": request})

# ✅ Form submission from React: renders sections.html
@app.post("/sections", response_class=HTMLResponse)
async def section_page(
    request: Request,
    country: str = Form(...),
    name: str = Form(...),
    organization: str = Form(...),
    period: str = Form(...)
):
    return templates.TemplateResponse("sections.html", {
        "request": request,
        "country": country,
        "name": name,
        "organization": organization,
        "period": period
    })
