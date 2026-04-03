from fastapi.testclient import TestClient
from api.main import app

with TestClient(app) as client:
    response = client.patch("/api/v1/ppt/presentation/update", json={
        "id": "12345678-1234-5678-1234-567812345678",
        "random_extra_field": 123,
        "theme": {"colors": {}, "fonts": {}},
        "n_slides": 5,
        "title": "test",
        "content": "test content",
        "language": "English",
        "tone": "professional",
        "verbosity": "standard",
        "slides": [{"id": "12345678-1234-5678-1234-567812345678", "presentation": "12345678-1234-5678-1234-567812345678", "layout_group": "test", "layout": "test", "index": 0, "content": {}}]
    })
    print("STATUS CODE:", response.status_code)
    print("RESPONSE:", response.json())
