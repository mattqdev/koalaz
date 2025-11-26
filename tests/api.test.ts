import { describe, it, expect } from '@jest/globals';
import { APIGenerator } from '../src/generators/api';

describe('APIGenerator', () => {
  describe('koalaAPI', () => {
    it('should generate valid API response structure', () => {
      const response = APIGenerator.getAPI();
      expect(response).toHaveProperty('status');
      expect(response).toHaveProperty('endpoint');
      expect(response).toHaveProperty('timestamp');
      expect(response).toHaveProperty('data');
      expect(response).toHaveProperty('message');
      expect(response).toHaveProperty('koalaApproved');
      expect(response).toHaveProperty('metadata');
    });

    it('should use custom endpoint', () => {
      const response = APIGenerator.getAPI('/custom/endpoint');
      expect(response.endpoint).toBe('/custom/endpoint');
    });

    it('should have status code in 200 range', () => {
      const response = APIGenerator.getAPI();
      expect(response.status).toBeGreaterThanOrEqual(200);
      expect(response.status).toBeLessThan(300);
    });

    it('should have valid timestamp', () => {
      const response = APIGenerator.getAPI();
      const timestamp = new Date(response.timestamp);
      expect(timestamp instanceof Date).toBe(true);
      expect(isNaN(timestamp.getTime())).toBe(false);
    });

    it('should always be koala approved', () => {
      const response = APIGenerator.getAPI();
      expect(response.koalaApproved).toBe(true);
    });

    it('should include metadata', () => {
      const response = APIGenerator.getAPI();
      expect(response.metadata).toHaveProperty('processingTime');
      expect(response.metadata).toHaveProperty('serverLocation');
      expect(response.metadata).toHaveProperty('koalasInvolved');
      expect(response.metadata.serverLocation).toBe('Eucalyptus Forest, Australia');
    });
  });
});