export interface JobsModel {
  apiVersion: string;
  documentationUrl: string;
  friendlyNotice: string;
  jobCount: number;
  xRayHash: string;
  clientKey: string;
  lastUpdate: string;
  jobs?: (JobsEntity)[] | null;
}
export interface JobsEntity {
  id: number;
  url: string;
  jobSlug: string;
  jobTitle: string;
  companyName: string;
  companyLogo: string;
  jobIndustry?: (string)[] | null;
  jobType?: (string)[] | null;
  jobGeo: string;
  jobLevel: string;
  jobExcerpt: string;
  jobDescription: string;
  pubDate: string;
  annualSalaryMin?: string | null;
  annualSalaryMax?: string | null;
  salaryCurrency?: string | null;
}
