import os
import httpx
from fastapi import APIRouter, HTTPException, Body
from dotenv import load_dotenv

load_dotenv()

router = APIRouter()
API_KEY = os.getenv("OPENROUTER_API_KEY")
BASE_URL = "https://openrouter.ai/api/v1"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

@router.get("/models")
async def get_models():
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(f"{BASE_URL}/models", headers=headers)
            response.raise_for_status()
            return response.json()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/chat")
async def chat_with_model(payload: dict = Body(...)):
    try:
        print("📩 Payload received:", payload)
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "https://openrouter.ai/api/v1/chat/completions",
                headers=headers,
                json=payload
            )
            print("✅ Raw response from OpenRouter:", response.text)
            response.raise_for_status()
            return response.json()
    except Exception as e:
        print("❌ Error occurred:", str(e))
        raise HTTPException(status_code=500, detail=str(e))

