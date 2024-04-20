interface Sticker {
  title: string;
  content: string;
  color: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  creationDate: Date;
  lastModifiedDate: Date;
  priority: number;
  tags: string[];
  expirationDate?: Date;
  isCompleted?: boolean;
}

// 예시 스티커 객체
export const exampleSticker: Sticker = {
  title: "일정",
  content: "회의 일정 확인",
  color: "#FFA500",
  position: { x: 100, y: 100 },
  size: { width: 200, height: 150 },
  creationDate: new Date(),
  lastModifiedDate: new Date(),
  priority: 2,
  tags: ["회의", "중요"],
  expirationDate: new Date("2024-05-01"),
  isCompleted: false,
};
