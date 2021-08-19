export type ExportImageType = "jpeg" | "png";

export interface Point {
  readonly x: number;
  readonly y: number;
}

export interface CanvasPath {
  readonly paths: Point[];
  readonly strokeWidth: number;
  readonly strokeColor: string;
  readonly strokeOpacity: number;
  readonly drawMode: boolean;
  readonly startTimestamp?: number;
  readonly endTimestamp?: number;
}
