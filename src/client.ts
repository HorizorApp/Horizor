import { ApiResponse, ErrorResponse, ProjectData, Analyst, AnalysisResponse, AnalysisMessage } from './types';

export class HorizorClient {
  private readonly baseUrl: string;

  constructor(baseUrl: string = 'https://api.horizor.app') {
    this.baseUrl = baseUrl;
  }
 
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...options.headers,
    };

    const response = await fetch(url, { ...options, headers });
    const data = await response.json();

    if (!response.ok) {
      const error = data as ErrorResponse;
      throw new Error(error.message || 'An error occurred');
    }

    return data as T;
  }

  /**
   * Get detailed information about a project
   * @param projectId The project's unique identifier
   */
  async analyzeProject(projectId: string): Promise<ApiResponse<ProjectData>> {
    return this.request<ApiResponse<ProjectData>>(`/v1/project/${projectId}`);
  }

  /**
   * List all available AI analysts
   */
  async listAnalysts(): Promise<ApiResponse<Analyst[]>> {
    return this.request<ApiResponse<Analyst[]>>('/v1/analysts');
  }

  /**
   * Get details about a specific analyst
   * @param id The analyst's ID
   */
  async getAnalyst(id: string): Promise<ApiResponse<Analyst>> {
    return this.request<ApiResponse<Analyst>>(`/v1/analysts/${id}`);
  }

  /**
   * Interact with an AI analyst for project analysis
   * @param analystId The analyst's ID
   * @param messages Array of analysis messages
   */
  async analyzeWithAI(analystId: string, messages: AnalysisMessage[]): Promise<ApiResponse<AnalysisResponse>> {
    return this.request<ApiResponse<AnalysisResponse>>(`/v1/analysts/${analystId}/analyze`, {
      method: 'POST',
      body: JSON.stringify({ messages }),
    });
  }

  /**
   * Analyze Twitter activity for a project
   * @param projectId The project's unique identifier
   */
  async analyzeTwitter(projectId: string): Promise<ApiResponse<{ activityScore: number; engagementScore: number; botPresence: number }>> {
    return this.request<ApiResponse<{ activityScore: number; engagementScore: number; botPresence: number }>>(`/v1/project/${projectId}/twitter`);
  }

  /**
   * Analyze GitHub activity for a project
   * @param projectId The project's unique identifier
   */
  async analyzeGitHub(projectId: string): Promise<ApiResponse<{ activityScore: number; codeQuality: number; licenseType: string }>> {
    return this.request<ApiResponse<{ activityScore: number; codeQuality: number; licenseType: string }>>(`/v1/project/${projectId}/github`);
  }

  /**
   * Analyze Whitepaper for a project
   * @param projectId The project's unique identifier
   */
  async analyzeWhitepaper(projectId: string): Promise<ApiResponse<{ qualityScore: number; clarityScore: number }>> {
    return this.request<ApiResponse<{ qualityScore: number; clarityScore: number }>>(`/v1/project/${projectId}/whitepaper`);
  }

  /**
   * Analyze Tokenomics for a project
   * @param projectId The project's unique identifier
   */
  async analyzeTokenomics(projectId: string): Promise<ApiResponse<{ riskScore: number; liquidityScore: number; distributionScore: number }>> {
    return this.request<ApiResponse<{ riskScore: number; liquidityScore: number; distributionScore: number }>>(`/v1/project/${projectId}/tokenomics`);
  }
}
