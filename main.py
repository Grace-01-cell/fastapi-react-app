from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()

# Mount static directory for images/css
app.mount("/static", StaticFiles(directory="static"), name="static")

# Template directory setup
templates = Jinja2Templates(directory="templates")

# Intro page
@app.get("/intro", response_class=HTMLResponse)
async def intro_page(request: Request):
    return templates.TemplateResponse("intro.html", {"request": request})

# Default redirect to intro
@app.get("/", response_class=HTMLResponse)
async def root(request: Request):
    return templates.TemplateResponse("intro.html", {"request": request})

# Details form page (Step 2)
@app.get("/details", response_class=HTMLResponse)
async def details_page(request: Request):
    return templates.TemplateResponse("details.html", {"request": request})

# Sections form page (Step 3)
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
