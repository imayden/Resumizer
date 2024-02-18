from fastapi.testclient import TestClient
from app import app  # Adjust the import path as needed
import pytest
client = TestClient(app)
@pytest.mark.asyncio
async def test_find_job():
    sample_payload = {
        "job_title": "Software Engineer",
        "country": "US",
        "location": "",
    }
    response = client.post("/jobs/", json=sample_payload)
    # Assert the response status code and content
    assert response.status_code == 200
    response_data = response.json()
    assert "job_url" in response_data
    assert "site" in response_data
    assert "title" in response_data
    assert "company" in response_data
    assert "location" in response_data
    assert "date_posted" in response_data