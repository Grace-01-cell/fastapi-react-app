from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Allow requests from frontend (React running on localhost:5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the expected data format
class SectionData(BaseModel):
    country: str
    name: str
    organization: str
    period: str

@app.post("/api/sections")
async def receive_section(data: SectionData):
    # For now, just print and return confirmation
    print("Received:", data)
    return {"message": "Data received successfully", "data": data}
