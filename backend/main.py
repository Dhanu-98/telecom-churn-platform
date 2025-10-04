from fastapi import FastAPI
from backend.routers import predict

app = FastAPI(title="Telecom Churn Prediction API")

app.include_router(predict.router, prefix="/api")
