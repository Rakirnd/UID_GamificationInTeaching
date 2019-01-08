export class Quiz {

  title: string;
  description: string;
  likeCount: number;
  dislikeCount: number;
  tags: string[];
  shortDescription: string;

  constructor(title: string, description: string, likeCount: number, dislikeCount: number, tags: string[], shortDescription: string) {
    this.title = title;
    this.description = description;
    this.likeCount = likeCount;
    this.dislikeCount = dislikeCount;
    this.tags = tags;
    this.shortDescription = shortDescription;
  }

}
