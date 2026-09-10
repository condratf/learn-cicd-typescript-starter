import { describe, expect, test } from "vitest";
import { getAPIKey } from "../../api/auth.js";

describe("auth", () => {
  test("api key is defined", () => {
    const mockHeaders = {
      authorization: "ApiKey my-secret-api-key",
    };
    const apiKey = getAPIKey(mockHeaders);
    expect(apiKey).toBe("my-secret-api-key");
  });

  test("api key is not defined", () => {
    const mockHeaders = {
      authorization: "Bearer my-secret-api-key",
    };
    const apiKey = getAPIKey(mockHeaders);
    expect(apiKey).toBeNull();
  });

  test("api key is missing", () => {
    const mockHeaders = {};
    const apiKey = getAPIKey(mockHeaders);
    expect(apiKey).toBeNull();
  });
});