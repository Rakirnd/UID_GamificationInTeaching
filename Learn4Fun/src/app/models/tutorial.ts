import { Step } from './step';

export class Tutorial {

    title: string;
    description: string;
    likeCount: number;
    dislikeCount: number;
    tags: string[];
    shortDescription:string;
    video: string;
    steps: Step[] = [];
  
    constructor(title: string, description: string, likeCount: number, dislikeCount: number, tags: string[], 
      shortDescription: string, video: string, steps: Step[]) 
    {
      this.title = title;
      this.description = description;
      this.likeCount = likeCount;
      this.dislikeCount = dislikeCount;
      this.tags = tags;
      this.shortDescription = shortDescription;
      this.video = video;
      this.steps = steps;
    }
  
  }
  